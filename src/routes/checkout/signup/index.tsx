import { component$, useClientEffect$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
    const loc = useLocation();

    useClientEffect$(() => {
        const Cleave = window.Cleave;

        new Cleave('#birthdate', {
            date: true,
        });
        new Cleave('#phone', {
            phone: true,
            phoneRegionCode: 'fr'
        });
    });

    return (
        <div class='text-content'>
            <h1 class='k-h1 text-k-accent mt-8 mb-3'>Inscription<br></br>
                Nous avons besoin de vous connaître !</h1>
            <p class='k-p mb-5'>Nous avons besoin de quelques informations pour pouvoir vous envoyer directement à votre domicile votre commande, n’hésitez pas à bien vérifier les informations fournies.</p>
            <form action='/checkout/shipping'>
                <input type="hidden" name="quantity" value={loc.query.quantity} />
                <div class='flex mb-4'>
                    <label class='flex-1 mr-4'>
                        Prénom
                        <input autoFocus autoComplete='given-name' placeholder='James' required />
                    </label>
                    <label class='flex-1'>
                        Nom
                        <input autoComplete='family-name' placeholder='Doo' required />
                    </label>
                </div>
                <label class='mb-4'>
                    E-mail
                    <input type='email' autoComplete='email' placeholder='jamesdoo@gmail.com' required />
                </label>
                <label class='mb-4'>
                    Téléphone
                    <input id='phone' type='phone' autoComplete='tel' placeholder='+33' required />
                </label>
                <label class='mb-6'>
                    Date de naissance
                    <input id='birthdate' autoComplete='bday' placeholder='DD/MM/YYYY' required />
                </label>
                <button class='flex btn error ml-auto' type='submit'>Suivant</button>
            </form>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Natukao - Paiement',
};