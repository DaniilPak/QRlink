import React, { useEffect } from 'react';

const App = () => {

  const appStoreLink = 'https://itunes.apple.com/app/your-ios-app-link';
  const googlePlayLink = 'https://play.google.com/store/apps/details?id=your.android.app.package';

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);

    if (isIOS) {
      window.location.href = appStoreLink; // Replace with your iOS app link
    } else if (isAndroid) {
      window.location.href = googlePlayLink; // Replace with your Android app package name
    }
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
      <p>If you are not redirected, please click the appropriate link below:</p>
      <p>
        <a href={appStoreLink}>iOS App Store</a>
      </p>
      <p>
        <a href={googlePlayLink}>Google Play Store</a>
      </p>
    </div>
  );
};

export default App;
