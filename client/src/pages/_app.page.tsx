import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { gaPageview } from 'src/utils/gtag';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const SafeHydrate = dynamic(() => import('../components/SafeHydrate'), { ssr: false });
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) gaPageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
      {/* <AuthLoader /> */}
      <Script src="https://aframe.io/releases/1.0.4/aframe.min.js" strategy="beforeInteractive" />
      <Script
        src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"
        strategy="afterInteractive"
      />
    </>
  );
}

export default MyApp;
