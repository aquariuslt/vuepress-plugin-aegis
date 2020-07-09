const injectAegisScript = () => {
  let scriptElement = document.createElement('script');
  scriptElement.id = `aegis-script`;
  scriptElement.src = `https://cdn-go.cn/aegis/aegis-sdk/latest/aegis.min.js?_bid=3977`;

  const tempScriptElement = document.getElementsByTagName(`script`)[0];
  tempScriptElement.parentElement.insertBefore(scriptElement, tempScriptElement);
};

const injectPluginHooks = ({ router }) => {
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && window['AEGIS_ID']) {
    injectAegisScript();


    router.afterEach(() => {
      const aegis = window['Aegis']({
        id: window['AEGIS_ID'],
        reportApiSpeed: true,
        reportAssetSpeed: true
      });
    });
  }

};


export default injectPluginHooks;
