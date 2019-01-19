'use strict';
const example = async (event) => {
  console.log('EVENT**', JSON.stringify(event))
  const {id, nome, data_nasc } = JSON.parse(event.Records[0].body)
  console.log(
  `
  Id: ${id},
  Nome: ${nome},
  Data Nascimento: ${data_nasc}
  `)
  return {
    statusCode: 200
  };
};

module.exports = {
  example
}