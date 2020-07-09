import { path } from '@vuepress/shared-utils';

export interface AegisPluginOptions {
  aegisId: string | number;
}

const aegisPlugin = (options: AegisPluginOptions, context) => ({
  name: 'aegis',
  define() {
    return {
      AEGIS_ID: options.aegisId,
    };
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile'),
});

export default aegisPlugin;
