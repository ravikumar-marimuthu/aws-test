'use strict';
const moment = require("moment")
module.exports.logger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'serverless CI/CD',
        version:"1.0.0",
        timestamp: moment
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
