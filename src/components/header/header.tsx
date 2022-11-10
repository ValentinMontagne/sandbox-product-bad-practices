import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export interface HeaderProps {
  navEnabled: boolean;
}

export default component$((props: HeaderProps) => {
  const { navEnabled } = props;
  useStylesScoped$(styles);

  return (
    <header class="bg-k-secondary text-k-surface-light drop-shadow sticky top-0 z-50">
      <nav class="container">
        <ul class="flex items-center">
          <li id="logo" class="font-dancing-script mr-auto">
            <a href='/'>Natukao</a>
          </li>
          {navEnabled && <>
            <li class='mr-4'>
              <a class='block py-2 px-4' href="#">L'entreprise</a>
            </li>
            <li class='mr-4 selected'>
              <a class="block py-2 px-4" href="#">Le produit</a>
            </li>
            <li class='mr-4'>
              <a class='block py-2 px-4' href="#">Notre équipe</a>
            </li>
            <li>
              <a class='block py-2 px-4' href="#">Nous contacter</a>
            </li>
          </>}
        </ul>
      </nav>
    </header>
  );
});
