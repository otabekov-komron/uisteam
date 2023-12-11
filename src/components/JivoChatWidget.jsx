import React, { useEffect } from 'react';

const JivoChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.jivo.ru/widget/d0llRGf8BX';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div>JivoChat Widget Loading...</div>;
};

export default JivoChatWidget;
