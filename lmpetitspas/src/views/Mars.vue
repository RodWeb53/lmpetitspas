<template>
  <div class="container-fluid page">
    <div class="row">
      <div class="col-12 mb-4">
        <h2 class="text-center mt-5">Evènement de mars 2021</h2>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- 1° card  -->
        <div class="col-xs-11 col-lg-8">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>06 et 07 Mars 2021</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4 text-justify">
              <p>Course annuel organisée par l’association LM Petits Pas.<br>
              Cette année la course sera virtuelle en raison des conditions sanitaires. <br>
              N’hésiter surtout pas à vous inscrire suivant le lien suivant : <a href="https://www.helloasso.com/associations/lm-petits-pas/evenements/trail-virtuelle-lm-petits-pas-2021?fbclid=IwAR3L7Wp6vnosYBMkEHy2l63nrKlmAxMMArcL0mcs2un7MHy29Q8aeUedako" target="_blank">Inscription</a></p>
              <img class="actuimage" src="../assets/course-min.jpg" alt="Affiche de la course virtuel du 5 mars 2021">
            </div>
          </div>
        </div>
        <!-- Fin 1° card -->
        <!-- 2° card La méthode Essentis -->
        <div class="col-xs-11 col-lg-8">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>20 Mars 2021</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4 text-justify">
              <p>Information donnée à titre d'exemple</p>
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
  name: 'Mars',

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

@media (max-width: 767px){
h3 {
  font-size: 4.5vw;
}
h2 {
  font-size: 5.5vw;
}

.actuimage {
  width: 100%;
}
}
</style>