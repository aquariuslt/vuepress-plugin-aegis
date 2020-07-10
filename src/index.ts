import { resolve } from 'path';

export interface AegisPluginOptions {
  aegisId: string | number;
}

const aegisPlugin = (options: AegisPluginOptions) => ({
  name: 'aegis',
  define() {
    return {
      AEGIS_ID: options.aegisId
    };
  },

  enhanceAppFiles: resolve(__dirname, 'enhanceAppFile.js')
});


module.exports = aegisPlugin;

