const dotenv = require("dotenv");
dotenv.config();

const env_status = process.env.REACT_APP_VARIABLES_ENV;
if (!env_status) {
  console.log(`⚠️  Couldn't find .env file  ⚠️: ${env_status}`);
} else {
  console.log(`⚠️  The .env file is  ⚠️: ${env_status}`);
}

const config = {
  JWT_SECRET: process.env.REACT_APP_JWT_SECRET,
  API_REST: process.env.REACT_APP_API_REST,
  API_SERVICES_NATIONS: process.env.REACT_APP_NATION,
  NODE_ENV: process.env.NODE_ENV,
};

// capture the environment variables the application needs
const { JWT_SECRET, NODE_ENV, API_REST, API_SERVICES_NATIONS } = config;

module.exports = {
  NODE_ENV: NODE_ENV,
  API_REST: API_REST,
  API_SERVICES_NATIONS: API_SERVICES_NATIONS,
};
