<template>
  <div class="container-fluid page">
    <div class="row">
      <div class="col-12 mb-4">
        <h2 class="text-center mt-5">Les thérapies</h2>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- 1° card La Myoténofasciotomie -->
        <div class="col-10">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>La Myoténofasciotomie</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4">
              <p class="titre">Le traitement que le docteur Igor NAZAROV a pratiqué pendant 10 ans en Russie, peut-être défini comme une myoténofasciotomie sélective et fermée.</p>
              <p>Il permet de traiter les problèmes musculaires des patients souffrant de paralysie cérébrale tout comme des patients présentant des difformités des pieds (pieds bots ou équins, etc), des difformités des mains, du cou (torticolis congénital), et d'autres difformités.</p>
              <router-link :to="`/Myotenofasciotomie`">
                <button class="btn  mb-3 float-right">Voir la suite...</button>
              </router-link>         
            </div>
          </div>
        </div>
        <!-- Fin 1° card -->
        <!-- 2° card La méthode Essentis -->
        <div class="col-10">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>La méthode Essentis</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4">
              <p class="titre">La méthode Essentis® : un programme intensif et pluridisciplinaire de neuro-réhabilitation.</p>
              <p>La méthode ne suit pas un protocole, mais s'adapte à l'individualité de chaque enfant.</p>
              <p><stong>Un « intensif » dure de 1 à 4 semaines, à raison de 4 heures par jour, 5 jours par semaine.</stong></p>
              <router-link :to="`/Essentis`">
                <button class="btn  mb-3 float-right">Voir la suite...</button>
              </router-link>         
            </div>
          </div>
        </div>
        <!-- Fin 2° card -->
        <!-- 3° card Le Biofeedback -->
        <div class="col-10">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>Le Biofeedback</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4">
              <p class="titre">Le Biofeedback,une thérapie élaborée par le Professeur Bernard BRUCKER, pratiquée à Miami aux Etats-Unis.</p>
              <p>Il s’agit d’une technique de rééducation par laquelle les patients sont formés à améliorer leur état de santé au moyen de signaux émis par leur propre organisme.</p>
              <p>Ces signaux sont détectés, amplifiés et convertis en signaux audio et vidéo qui sont employés pour renforcer le contrôle volontaire.</p>
              <router-link :to="`/Biofeedback`">
                <button class="btn  mb-3 float-right">Voir la suite...</button>
              </router-link>         
            </div>
          </div>
        </div>
        <!-- Fin 3° card -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LesTherapies',

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

.titre {
  font-weight: bold;
}
@media (max-width: 768px){
h3 {
  font-size: 4.5vw;
}
}
</style>