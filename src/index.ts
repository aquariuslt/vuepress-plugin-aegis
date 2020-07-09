import { path } from '@vuepress/shared-utils';

export interface AegisPluginOptions {
  aegisId: string | number;
}

const aegisPlugin = (options: AegisPluginOptions) => ({
  name: 'aegis',
  define() {
    return {
      AEGIS_ID: options.aegisId,
    };
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js'),
});

export default aegisPlugin;
module.exports = aegisPlugin;
