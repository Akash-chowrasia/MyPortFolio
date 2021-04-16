import localConfig from './local-config';
import productionConfig from './config';

const config =
  global.NODE_ENV === 'development' ? localConfig : productionConfig;

export default config;
