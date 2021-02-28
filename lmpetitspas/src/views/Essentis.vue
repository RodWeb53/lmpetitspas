<template>
  <div class="container-fluid page">
    <div class="row">
      <div class="col-12 mb-4">
        <h2 class="text-center mt-5">La méthode Essentis</h2>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- 1° card La méthode Essentis -->
        <div class="col-xs-11 col-lg-8">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>La thérapie Essentis</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4 text-justify">
              <p class="titre">La méthode Essentis® : un programme intensif et pluridisciplinaire de neuro-réhabilitation.</p><br>
              <p>La méthode ne suit pas un protocole, mais s'adapte à l'individualité de chaque enfant.<br>
              <strong>Un « intensif » dure de 1 à 4 semaines, à raison de 4 heures par jour, 5 jours par semaine.</strong></p><br>
              <p class="titre">AU COURS DE L'INTENSIF, NOUS ALLONS :</p>
              <ul>
                <li>Évaluer l'enfant et mettre en évidence ses capacités dans les domaines physique et cognitif.</li>
                <li>Tester les différentes pistes permettant une progression.</li>
                <li>Sélectionner les thérapies et ateliers adaptées à l'enfant.</li>
                <li>Conseiller les parents sur l'orientation et le suivi à la maison.Après chaque intensif, les parents reçoivent un compte-rendu écrit et une vidéo des différents ateliers, pour pouvoir continuer à la maison le travail entrepris.</li>
              </ul><br>
              <p class="gras">Les résultats sont optimisés si l'enfant assiste à plusieurs intensifs par an et travaille régulièrement à la maison.</p>
            </div>
          </div>
        </div>
        <!-- Fin 1° card -->
        <!-- 2° card Objectif du programme Essentis -->
        <div class="col-xs-11 col-lg-8">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>Objectifs du programme Essentis</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4 text-justify">
              <ul>
                <li>Développer au maximum la motricité fonctionnelle. Stimulation répétée des articulations périphériques lors d'activités fonctionnelles pour rétro-alimenter le système nerveux central d'informations sensitives correctes.</li>
                <li>Améliorer la confiance en soi et la gestion de la peur <i>(peur de tomber, peur de l'échec...).</i></li>
                <li>Favoriser l'autonomie de l'enfant.</li>
                <li>Améliorer le confort de vie de l'enfant : prise en charge des troubles fonctionnels, tels que dysphagie <i>(difficultés à avaler),</i> constipation, salivation excessive, difficultés respiratoires, etc</li>
                <li>Donner à l'enfant la possibilité de développer au maximum ses capacités : améliorer les fonctions touchées par la Paralysie Cérébrale et développer les potentiels épargnés.</li>
              </ul>
              <img class="progEssentis" src="../assets/essentisprog-min.jpg" alt="Photo d'exercice du programme Essentis">
            </div>
          </div>
        </div>
        <!-- Fin 2° card -->
        <!-- 3° card Objectif du programme Essentis -->
        <div class="col-xs-11 col-lg-8">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>Déroulement des séances Essentis</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4 text-justify">
              <img class="equipeEssentis" src="../assets/essentisEquipe-min.jpg" alt="Photo de l'équipe du programme Essentis">
              <p>Durant les séances, le patient passe par divers ateliers dans lesquels sa posture, son handicap et ses symptômes sont évalués par les différents membres de notre équipe <i>(ostéopathes, acupuncteurs, kinésithérapeutes)</i> afin de mettre en place un programme personnalisé adapté à ses besoins.<br>
              Les différents thérapeutes travaillent en coordination au sein du centre, ce qui permet une grande réactivité face aux nécessites quotidiennes du patient.<br>
              L'approche du patient est holistique, c'est à dire qu'il est considéré dans sa globalité. Tous les facteurs sont pris en compte pour établir un diagnostic et une stratégie de traitement <i>(facteurs physique, psychique, émotionnel et social, symptômes actuels et antécédents médicaux).</i><br>
              A la différence d'un traitement de rééducation traditionnel, une grande importance est donnée à la préparation des tissus afin d'optimiser les exercices effectués par la suite.<br>
              En parallèle au traitement physique, le patient passera par de nombreux ateliers de rééducation ayant pour but de développer au maximum la motricité fonctionnelle.<br>
              <strong>Le centre dispose de matériel varié permettant de s'adapter aux besoins du patient</strong> et à ses progrès: <i>Spider, Thérasuit, travail au sol, barres parallèles, travail au mur, déambulateur, béquilles orthopédiques...</i></p><br>
              <p class="titre">Tous ces outils utilisés au moment approprié permettront d'optimiser la progression du patient.</p><br>
             
              <!-- Boutons de navigation -->
              <router-link :to="`/LesTherapies`">
                <button class="btn btn-secondary mt-5 mb-3 float-left">Retour aux thérapies</button>
              </router-link>
              <router-link :to="`/Myotenofasciotomie`">
                <button class="btn btn-secondary mt-5 mb-3 mr-5 float-right">La thérapie Myotenofasciotomie</button>
              </router-link>  
              <router-link :to="`/Biofeedback`">
                <button class="btn btn-secondary mt-5 mb-3 mr-5 float-right">La thérapie Biofeedback</button>
              </router-link>  
         
            </div>
          </div>
        </div>
        <!-- Fin 2° card -->


      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Essentis',

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
.equipeEssentis {
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}

.gras {
  font-weight: bold;
}
.titre {
  font-weight: bold;
}
@media (max-width: 767px){
h3 {
  font-size: 4.5vw;
}
h2 {
  font-size: 5.5vw;
}
.progEssentis {
  width: 70%;
}
.equipeEssentis {
  width: 70%;
}
}
</style>