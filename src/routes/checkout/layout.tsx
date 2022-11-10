import { component$, Slot } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
    const loc = useLocation();

    return (
        <div class='container flex justify-between'>
            <div id='main-content' class='col-7'>
                <Slot></Slot>
            </div>
            <aside class='col-5'>
                <div class='bg-k-background-400 shadow-md rounded p-4 my-8'>
                    <h2 class='k-h3 mb-6'>Commandez votre pâte à tartiner</h2>
                    <p class='price'>3.90 €</p>
                    <p class='k-p'>Livraison sous 4 jours ouvrés</p>
                    <p class='k-c text-k-accent mb-4'>Transport responsable</p>
                    <p class='k-p'>Quantité</p>
                    <p class='k-p'>{`${loc.query.quantity} Kakao - ${(Number(loc.query.quantity) * 3.9).toFixed(2)} euros`}</p>
                </div>
                <picture id="illustration2">
                    <source srcSet='/chocolate-elements-hand-drawn-vector-illustration-collection@2x.png' media="(min-width: 1440px)"></source>
                    <source srcSet='/chocolate-elements-hand-drawn-vector-illustration-collection.png' media="(min-width: 300px)"></source>
                    <img src='/chocolate-elements-hand-drawn-vector-illustration-collection.png' alt='Des fèves de Cacao, de la poudre de Cacao et des barres de chocolat dans un style dessin fait-main' />
                </picture>
            </aside>
        </div>
    );
});