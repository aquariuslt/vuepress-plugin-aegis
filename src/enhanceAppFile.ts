/* global AEGIS_ID, aegis */

const injectAegisScript = () => {
  let scriptElement = document.createElement('script');
  scriptElement.id = `aegis-script`;
  scriptElement.src = `https://cdn-go.cn/aegis/aegis-sdk/latest/aegis.min.js?_bid=3977`;
  document.body.appendChild(scriptElement);
  scriptElement.onload = (script) => {
    window['aegis'] = new window['Aegis']({
      // @ts-ignore
      id: AEGIS_ID,
      reportApiSpeed: true,
      reportAssetSpeed: true
    });
  };

};

const injectPluginHooks = ({ router }) => {
  // @ts-ignore
  if (typeof window !== 'undefined' && AEGIS_ID) {
    injectAegisScript();
    router.afterEach(() => {
      if (window['aegis']) {
        // @ts-ignore
        window['aegis'].reportPv(AEGIS_ID);
      }
    });
  }

};


export default injectPluginHooks;
module.exports = injectPluginHooks;
