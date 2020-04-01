import React, { useState } from 'react';

export default () => {
  const [deviceType, setDeviceType] = useState(null);

  React.useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    switch (true) {
      case vw <= 375:
        setDeviceType('phone-xs');
        break;
      case vw <= 600:
        setDeviceType('phone');
        break;
      case vw <= 900:
        setDeviceType('tab-port');
        break;
      case vw <= 1100:
        setDeviceType('tab-xl');
        break;
      case vw <= 1200:
        setDeviceType('tab-land');
        break;
      case vw <= 1370:
        setDeviceType('small-desktop');
        break;
      case vw >= 1800:
        setDeviceType('big-desktop');
        break;
      default:
        setDeviceType(null);
        break;
    }
  }, []);

  return deviceType;
};
