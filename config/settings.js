import Constants from 'expo-constants';

const settings = {
  dev: {
    baseUrl: 'https://sojipay-backend.integrated-heron.koyeb',
    apiKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbGlrQGdtYWlsLmNvbSIsIm5hbWUiOiJNYWxpayIsImlhdCI6MTY5ODQ5OTk0MCwiZXhwIjoxLjJlKzM5fQ.RoGeBYXboWAWFMUrR6Q2_NLEjuaQ2dGoLMHfbDtr-Kk',
  },
  staging: {
    baseUrl: 'https://sojipay-backend.integrated-heron.koyeb',
    apiKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbGlrQGdtYWlsLmNvbSIsIm5hbWUiOiJNYWxpayIsImlhdCI6MTY5ODQ5OTk0MCwiZXhwIjoxLjJlKzM5fQ.RoGeBYXboWAWFMUrR6Q2_NLEjuaQ2dGoLMHfbDtr-Kk',
  },
  prod: {
    baseUrl: 'https://sojipay-backend.integrated-heron.koyeb',
    apiKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbGlrQGdtYWlsLmNvbSIsIm5hbWUiOiJNYWxpayIsImlhdCI6MTY5ODQ5OTk0MCwiZXhwIjoxLjJlKzM5fQ.RoGeBYXboWAWFMUrR6Q2_NLEjuaQ2dGoLMHfbDtr-Kk',
  },
};

const getCurrentSettings = () => {
  if (__DEV__) {
    return settings.dev;
  }

  if (Constants.manifest?.releaseChannel === 'staging') {
    return settings.staging;
  }

  return settings.prod;
};

export default getCurrentSettings();
