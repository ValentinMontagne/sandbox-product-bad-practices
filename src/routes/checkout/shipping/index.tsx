import { component$, useClientEffect$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {

    useClientEffect$(() => {
        const Cleave = window.Cleave;

        new Cleave('#cc', {
            creditCard: true,
        });
        new Cleave('#cc-exp', {
            date: true,
            datePattern: ['m', 'y']
        });
    });

    return (
        <div class='text-content'>
            <h1 class='k-h1 text-k-accent mt-8 mb-3'>Livraison et paiement<br></br>
                Nous préparons votre commande !</h1>
            <p class='k-p mb-5'>Nous avons besoin de quelques informations pour pouvoir vous envoyer directement à votre domicile votre commande, n’hésitez pas à bien vérifier les informations fournies.</p>
            <form action='/congratulations'>
                <label class='mb-4'>
                    Numéro de carte de crédit
                    <input id="cc" autoFocus autoComplete='cc-number' placeholder='51XX XXXX XXXX XXXX' required />
                </label>
                <div class='flex mb-6'>
                    <label class='flex-1 mr-4'>
                        Date d’expiration
                        <input id='cc-exp' autoComplete='cc-exp' placeholder='MM/YY' required />
                    </label>
                    <label class='flex-1'>
                        Code secret
                        <input id='cc-csc' inputMode='numeric' autoComplete='cc-csc' placeholder='3XX' required maxLength={4} />
                    </label>
                </div>
                <h3 class='k-h3 mb-5'>Livraison</h3>
                <div class='flex mb-4'>
                    <label class='flex-1 mr-4'>
                        Prénom
                        <input autoComplete='given-name' placeholder='James' required />
                    </label>
                    <label class='flex-1'>
                        Nom
                        <input autoComplete='family-name' placeholder='Doo' required />
                    </label>
                </div>
                <label class='mb-4'>
                    Code Postal
                    <input autoComplete='postal-code' placeholder='59XXX' required />
                </label>
                <label class='mb-4'>
                    Adresse de livraison
                    <input autoComplete='street-address' placeholder='23 rue Jean Lebas' required />
                </label>
                <div class='flex mb-4'>
                    <label class='flex-1 mr-4'>
                        Region
                        <input placeholder='Region' required />
                    </label>
                    <label class='flex-1'>
                        Ville
                        <input placeholder='Ville' required />
                    </label>
                </div>
                <div class='movable-ctn'>
                    <button class='flex btn error ml-auto move' type='submit'>Payer</button>
                </div>
            </form>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Natukao - Livraison et Paiement',
};