import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css?inline';
import { Link } from '@builder.io/qwik-city';

interface State {
  quantity: number;
}

export default component$(() => {
  const state = useStore<State>({ quantity: 1 });
  useStylesScoped$(styles);

  return (
    <div class='container flex justify-between'>
      <div id='main-content' class='col-7'>
        <picture id="illustration">
          <source srcSet='/close-up-appetizing-chocolate.jpg' media="(min-width: 1440px)"></source>
          <source srcSet='/close-up-appetizing-chocolate-1.jpg' media="(min-width: 300px)"></source>
          <img src='/close-up-appetizing-chocolate.jpg' alt='Une barre de chocolat noir, des noisettes et une pâte à tartiner posés sur une texture granuleuse rappelant le cacao.' />
        </picture>
        <div class='text-content'>
          <h1 class='mt-8 mb-5 k-h1 text-k-accent'>Découvrez Kakao, la plus éco-responsable des pâtes à tartiner.</h1>
          <p class='mb-5 k-p'>Natukao est née de la volonté de préserver notre planète. Il était tout naturel d’élaborer le produit le moins émetteur de CO2 du marché. Découvrez Kakao, la plus éco-responsable des pâtes à tartiner.</p>
          <p class='mb-5 k-p'>Nous suivons scrupuleusement notre charte environnementale. Tous nos produits sont issus d’une agriculture biologique, garantie sans huile de palme. Nous privilégions les circuits courts. Nous ne faisons appel qu’à des fournisseurs utilisant des énergies renouvelables. Nous avons réduit au strict minimum nos emballages et nos livraisons sont garanties Zéro Carbon.</p>
          <p class='mb-5 k-p'>Quand vous consommez Kakao, vous avez l’assurance de préserver la nature tout en alliant le plaisir.</p>
          <p class='mb-5 k-p'>Consommez Kakao, c’est consommer Responsable.</p>
        </div>
      </div>
      <aside class='col-5'>
        <div class='bg-k-background-400 shadow-md rounded p-4 my-8'>
          <h2 class='k-h3 mb-6'>Commandez votre pâte à tartiner</h2>
          <p class='price'>3.90 €</p>
          <p class='k-p'>Livraison sous 4 jours ouvrés</p>
          <p class='k-c text-k-accent mb-3'>Transport responsable</p>
          <div class='flex justify-between items-end'>
            <div id='quantity-ctn' class='flex flex-col'>
              <label>
                Quantité
                <input type='number' placeholder='Quantité' value='1' min='1' onChange$={e => state.quantity = Number(e.target.value)} />
              </label>
            </div>
            <Link class='btn text' href={`/checkout/signup?quantity=${state.quantity}`}>Acheter</Link>
          </div>
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

export const head: DocumentHead = {
  title: 'Natukao - Kakao, la pâte à tartiner',
};
