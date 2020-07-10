const aegisPlugin  = require('../index');

describe('vuepress-plugin-aegis', () => {
  it('# should define plugin info', () => {

    const AEGIS_DEMO_PROJECT_ID = 528;

    const pluginInstance = aegisPlugin({
      aegisId: AEGIS_DEMO_PROJECT_ID
    });


    expect(pluginInstance).toHaveProperty('name');
    expect(pluginInstance.name).toEqual('aegis');
  });
});
