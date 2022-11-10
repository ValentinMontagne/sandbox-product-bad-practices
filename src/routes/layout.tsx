import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const {pathname} = useLocation();
  const navEnabled = pathname === '/';

  return (
    <>
      <main class="font-poppins bg-k-background min-h-screen">
        <Header navEnabled={navEnabled} />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
      </footer>
    </>
  );
});
