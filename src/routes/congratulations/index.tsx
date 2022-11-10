import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <div class='flex justify-center items-center flex-col mt-8'>
            <img class='mb-5' src='/free-shipping.png' width='500px' height='500px' />
            <h1 class='k-h1 text-k-accent'>Merci !</h1>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Natukao - Bravo pour votre achat',
};