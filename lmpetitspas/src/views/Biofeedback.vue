<template>
  <div class="container-fluid page">
    <div class="row">
      <div class="col-12 mb-4">
        <h2 class="text-center mt-5">Le Biofeedback</h2>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- 1° card La Myoténofasciotomie -->
        <div class="col-xs-11 col-lg-8">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>La thérapie Biofeedback</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4 text-justify">
              <p class="titre">Le Biofeedback,une thérapie élaborée par le Professeur Bernard BRUCKER, pratiquée à Miami aux Etats-Unis.</p>
              <img class="bioimage1" src="../assets/image1biofeedback.jpg" alt="photo de la clinique de MIAMI">
              <p>Il s’agit d’une technique de rééducation par laquelle les patients sont formés àaméliorer leur état de santé au moyen de signaux émis par leur propre organisme.<br>
              Ces signaux sont détectés, amplifiés et convertis en signaux audio et vidéo qui sont employés pour renforcer le contrôle volontaire.<br>
              C’est une forme de rééducation pratiquée à l’aide d’un système très sophistiqué qui permet d’évaluer tous les mouvements du patient et d’établir des connexions entre le cerveau et les muscles. Des électrodes de surface sont placées sur certains groupes de muscles dont on désire récupérer les mouvements. Ces électrodes vont mesurer le degré de coordination des neurones sollicités lors de la tentative du travail des muscles.<br>
              Tout effort produit par le cerveau en vue d’envoyer un message au muscle apparaît sur un écran. Ces informations sont utilisées pour apprendre au patient à utiliser les cellules saines (non endommagées).<br>
              <img class="bioimage2" src="../assets/image2biofeedback.jpg" alt="image du cerveau">
              La méthode Brucker est conçue pour favoriser et conditionner l’activité comportementale et musculaire qui à son tour tient compte de la rééducation des muscles et les modèles pour les activités quotidiennes et la qualité de vie.</p>
            </div>
          </div>
        </div>
        <!-- Fin 1° card -->
        <!-- 1° card La Myoténofasciotomie -->
        <div class="col-xs-11 col-lg-8">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>Déroulement d’une séance de Biofeedback</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4 text-justify">
              <p class="pb-2">Durant une séance de biofeedback, le sujet reçoit des informations en temps réel sur son état et ses réactions psychophysiologiques, il en prend conscience et apprend à les interpréter. Puis, par des exercices il va pouvoir modifier ses réactions psychophysiologiques jusqu’à atteindre l’objectif fixé au départ.</p>
              <div class="row mb-4">
                <div class="col-xs-10 col-lg-6">
                  <ul>
                    <li>En 1, un ou des capteurs <i>(électrode, sonde… )</i> sont chargés de récupérer des signaux sur votre corps.</li>
                    <li>En 2, les signaux sont traités <i>(encodés)</i> par l’appareil de biofeedback.</li>
                    <li>En 3, les signaux sont analysés par un ordinateur afin d’obtenir de multiples informations ainsi que des représentations plus complexes <i>(animations multimédias par exemple).</i></li>
                    <li>En 4, vous recevez ces différentes informations visuelles et/ou auditives et en prenez conscience.</li>
                    <li>En 5, à l’aide d’exercices mentaux et/oumusculaires et/ou respiratoires <i>(indiqués par le praticien),</i> vous agissez sur votre corps.</li>
                  </ul>
                </div>
                <div class="col-xs-10 col-lg-5 ml-5">
                  <p class="text-center"><img class="sceancebio" src="../assets/sceanephto1.jpg" alt="Schémas d'une scéance biofeedback"></p>
                </div>
              </div>              
              <div class="row">
                <div class="col-xs-10 col-lg-6">
                  <ul>
                    <li>En 1, le capteur récupère à nouveau les réponses de votre corps aux différents exercices…</li>
                    <li>En 2, ces signaux sont convertis et amplifiés…</li>
                    <li>En 3, ils sont envoyés vers l’ordinateur et analysés…</li>
                    <li>En 4, vous recevez ces nouvelles informations en provenance de votre corps et prenezconscience des modifications obtenues.</li>
                    <li>En 5, à l’aide des exercices vous pouvez agir à nouveau…</li>
                  </ul>
                </div>
                <div class="col-xs-10 col-lg-5 ml-5">
                  <p class="text-center"><img class="sceancebio" src="../assets/sceanephto2.jpg" alt="Schémas d'une scéance biofeedback"></p>
                </div>
              </div>               





              <!-- Boutons de navigation -->
              <router-link :to="`/LesTherapies`">
                <button class="btn btn-secondary mt-5 mb-3 float-left">Retour aux thérapies</button>
              </router-link>
              <router-link :to="`/Essentis`">
                <button class="btn btn-secondary mt-5 mb-3 mr-5 float-right">La thérapie Essentis</button>
              </router-link>  
              <router-link :to="`/Myotenofasciotomie`">
                <button class="btn btn-secondary mt-5 mb-3 mr-5 float-right">La thérapie Myotenofasciotomie</button>
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
  name: 'Biofeedback',

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
.bioimage1 {
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
.bioimage2 {
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
.bioimage1 {
  width: 70%;
}
.sceancebio {
  width: 100%;
}
}
</style>