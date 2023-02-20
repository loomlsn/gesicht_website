import Head from 'next/head';
import { useRouter } from 'next/router';
import { MainLayout } from '../modules/layout/MainLayout';
import ComingSoon from '../modules/templates/ComingSoonPage';
import StartPage from '../modules/templates/StartPage';

export default function Home() {
  const { locale, locales, asPath } = useRouter();

  function getThemeColor() {
    return "#FF5757";
  }

  // a function to only call the wrapped functions every x milliseconds so the scroll event doesn't make our function run all the time
  function throttle(func, timeFrame) {
    var lastTime = 0;
    return function (...args) {
      var now = new Date().getTime();
      if (now - lastTime >= timeFrame) {
        func(...args);
        lastTime = now;
      }
    };
  }

  // get the theme color on load so we can revert to this
  const ogColor = document.querySelector('meta[name="theme-color"]')?.getAttribute('content');

  // handle scroll event
  const handleScroll = throttle(() => {
    // find all tags that have `data-scroll as a property`
    const targets = document.querySelectorAll('[data-scroll-theme]')
    // are any targets at the top of the window?
    const isTop = Array.from(targets).map((target) => {
      const rect = target.getBoundingClientRect();
      if (rect.y > 1) {
        return null;
      }
      return { target, rect }
    }).filter(Boolean).sort((a, b) => b.rect.y - a.rect.y)[0]
    // if we found an element at the top of the document then
    if (isTop) {

      // set theme color meta tag to the background color of div
      const color = window.getComputedStyle(isTop.target).getPropertyValue('background-color')
      if (color) {
        // find the theme color meta tag and set the attribute to it
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
      }
    } else if (ogColor) {
      // set theme color meta tag to original
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', ogColor);
    }
    // run every 100ms
  }, 100)


  if (typeof window !== 'undefined') {
    document.addEventListener('scroll', handleScroll, { passive: true })
  }

  return (
    <>
      <Head>
        <title>Gesicht</title>
        <meta name="description" content="Cosmetic clinic in Copenhagen" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* <ComingSoon prop={"Some text"} /> */}
      <MainLayout>
        <StartPage prop={"Some text"} />
      </MainLayout>

    </>
  )
}