import React, { useEffect } from "react";
import Layout from '../../components/Layout';
import config from "../../assets/config";

const FormComingSoon = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//cdn.jsdelivr.net/gh/davidjbradshaw/iframe-resizer@4.2.10/js/iframeResizer.min.js";
    script.async = true;
    script.onload = () => {
      if (window.iFrameResize) {
        window.iFrameResize({}, '.webform-share-iframe');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout title="Form Coming Soon">
      <div className={`dc-page ${config.container}`}>
        
        <iframe
          src="//nchlod.ddev.site/webform/nchlod1/share/iframe-resizer/4.2.10"
          title="Heritage Graph | DKAN"
          className="webform-share-iframe"
          frameBorder="0"
          allow="geolocation; microphone; camera"
          allowTransparency="true"
          allowFullScreen
          style={{ width: '1px', minWidth: '100%' }}
        ></iframe>
      </div>
    </Layout>
  );
};

export default FormComingSoon;
