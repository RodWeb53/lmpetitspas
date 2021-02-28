<template>
  <div class="container-fluid page">
    <div class="row">
      <div class="col-12 mb-4">
        <h2 class="text-center mt-5">La Myoténofasciotomie</h2>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- 1° card La Myoténofasciotomie -->
        <div class="col-xs-11 col-lg-8">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>La thérapie Myoténofasciotomie</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4 text-justify">
              <p class="titre">Le traitement que le docteur Igor NAZAROV a pratiqué pendant 10 ans en Russie, peut-être défini comme une myoténofasciotomie sélective et fermée.</p>
              <img class="imgMyotena" src="../assets/myotenafascio.jpg" alt="Schéma de la thérapie Myoténofasciotomie"><p>Il permet de traiter les problèmes musculaires des patients souffrant de paralysie cérébrale tout comme des patients présentant des difformités des pieds (pieds bots ou équins, etc), des difformités des mains, du cou (torticolis congénital), et d'autres difformités.<br>
              Les contractures qui peuvent se former dans presque tous les segments moteurs du corps humain sont le principal problème de ces pathologies.<br>
              Il y a des contractures des tissus mous (contractures musculaires) et des articulations (contractures articulaires). Les contractures des tissus mous sont dues à des cellules détruites par le processus dégénératif de dystrophie, elles ne peuvent plus exercer leur fonction. Par exemple, s'il s'agit de cellules musculaires : elles ne peuvent plus se contracter et se décontracter.<br>
              En perdant leur fonction et l'élasticité, ces cellules pathologiques empêchent l'appareil moteur defonctionner correctement : <strong>elles limitent les mouvements,</strong> bloquent partiellement la croissance normaledu corps, provoquent la formation de difformités et de luxation des extrémités et exacerbent le processusdégénératif de dystrophie en exerçant une pression sur les vaisseaux sanguins.<br>
              Le traitement consiste à réaliser des opérations sous-cutanées (fermées), qui sont pratiquées avec un scalpel fin, en sectionnant seulement les fibres pathologiques qui limitent les mouvements. Lorsque la fibre pathologique est coupée, elle ne peut plus empêcher l'étirement et la fonction correcte des autresfibres. De cette manière, il est possible d'éliminer toutes les fibres pathologiques qui existent dans toutela zone des tissus mous, en sauvant un maximum de fibres saines et sans devoir faire appel à l'immobilisation postopératoire.<br></p>
              <p><strong>L'opération de myoténofasciotomie n'est absolument pas invasive</strong> car il n'est pas nécessaire d'ouvrir ; voilà pourquoi elle ne présente aucun risque pour la santé du patient. L'opération est réalisée sous anesthésie générale, ce qui permet de différencier beaucoup mieux les fibres pathologiques des fibressaines car l'activité musculaire disparaît totalement, mais les structures lésées ne peuvent pas se détendreet elles restent contractées. Grâce à cette opération peu invasive, jusqu'à 24 fibres contractées peuvent être éliminées en une seule fois.</p>
              <img class="imgNazarov" src="../assets/nazarov.jpg" alt="Photo du professeur Igor NAZAROV">
              <p>S’il y a beaucoup plus de contractures des opérations peuvent être réalisées en 2 ou 3 phases, avec un intervalle minimum de 6 mois entre elles.<br>
              <strong>L'expérience du Professeur Igor NAZAROV</strong> lui permet d'affirmer qu'il vaut mieux commencer à opérer les patients à l'âge de 3 ans, lorsqu'il n'y a pas encore de luxation, de difformités ou de contractures des articulations et des os. Il faut donner à l'enfant la possibilité de commencer à marcher lorsque les muscles ne sont pas atrophiés. Avec le temps qui passe, si le patient n'est pas soumis à un traitement ou à une réhabilitation, les contractures peuvent être encore plus rigides et plus nombreuses, et l'atrophie musculaire augmente. Si le patient est plus âgé, il aura besoin de plus d'intervention pour éliminer les contractures musculaires.<br>
              Il faut tenir compte du fait que les patients souffrant de ces pathologies peuvent avoir besoin de plusieurs phases d'opérations, étant donné que de nouvelles contractures musculaires peuvent se former lors de la croissance des patients et lorsque les mouvements des extrémités augmentent.</p><br><br>
              <div>
                <h4 class="text-left">LES EFFETS DESIRES DE CE TRAITEMENT SONT LES SUIVANTS :</h4>
                <ol>
                  <li><strong>Résultats généraux:</strong> augmentation et amélioration des mouvements, élimination de la rigidité locale, amélioration de l'irrigation, récupération de la vitalité et diminution du processus de dégénération de dystrophie des tissus mous, élimination ou diminution des symptômes de douleur.</li>
                  <li><strong>Résultats fonctionnels:</strong> amélioration des fonctions des mains, des bras, des jambes et des autres structures de l'appareil moteur. Amélioration de l'équilibre du corps, de la station assise, de la verticalité et de la marche. L'augmentation de la masse musculaire et de la consolidation des muscles. La libération de la croissance des os et des autres structures des tissus mous. Amélioration de la mastication, de la parole, de la déglutition. Diminution de la spasticité.</li>
                </ol>
              </div>
              <!-- Boutons de navigation -->
              <router-link :to="`/LesTherapies`">
                <button class="btn btn-secondary mt-5 mb-3 float-left">Retour aux thérapies</button>
              </router-link>
              <router-link :to="`/Essentis`">
                <button class="btn btn-secondary mt-5 mb-3 mr-5 float-right">La thérapie Essentis</button>
              </router-link>  
              <router-link :to="`/Biofeedback`">
                <button class="btn btn-secondary mt-5 mb-3 mr-5 float-right">La thérapie Biofeedback</button>
              </router-link>  
         
            </div>
          </div>
        </div>
        <!-- Fin 1° card -->


      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Myotenofasciotomie',

}
  

</script>

<style scoped>
.card-header {
  background: #ABFD2C;
  color: #0C0C0D;
}
.page, .card-body {
  background: #eaf1df;
}
.imgMyotena {
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
.imgNazarov {
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}

.titre {
  font-weight: bold;
}
@media (max-width: 767px){
h3, h4 {
  font-size: 4.5vw;
}
h2 {
  font-size: 5.5vw;
}
.imgMyotena {
  width: 70%;
}
.imgNazarov {
  width: 60%;
}
}
</style>