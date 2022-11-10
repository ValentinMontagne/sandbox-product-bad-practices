import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import Cleave from 'cleave.js';

import globalStyles from './global.css?inline';

declare global {
  interface Window { Cleave: typeof Cleave; }
}

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        <RouterHead />
        <script src='/cleave.min.js'></script>
        <script src='/cleave-phone.fr.js'></script>
      </head>
      <body lang="fr">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
