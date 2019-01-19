'use strict';
const AWS = require('aws-sdk')
const csv = require('csvtojson/v2')
const S3 = new AWS.S3()

const example = async (event) => {
  const [{ s3 }] = event.Records
  const bucketName = s3.bucket.name;
  const bucketKey = decodeURIComponent(s3.object.key)

  const { Body } = await S3.getObject({
    Key: bucketKey,
    Bucket: bucketName
  }).promise()
  
  const data = await csv().fromString(Body.toString())
  console.log(data)

  return {
    statusCode: 200
  };
};

module.exports = {
  example
}
