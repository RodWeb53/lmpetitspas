<template>
  <div class="container-fluid page">
    <div class="row">
      <div class="col-12 mb-4">
        <h2 class="text-center mt-5">Actualités</h2>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- 1° card La méthode Essentis -->
        <div class="col-xs-11 col-lg-8">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>Course virtuel </h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4 text-justify">
              <img class="actuimage" src="../assets/course-min.jpg" alt="Affiche de la course virtuel du 5 mars 2021">
            </div>
          </div>
        </div>
        <!-- Fin 1° card -->
        <!-- 2° card La méthode Essentis -->
        <div class="col-xs-11 col-lg-8">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>Les ducs d'Angers</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4 text-justify">
              <img class="actuimage" src="../assets/duc1-min.jpg" alt="Photo de Marius avec les mascottes des ducs d'angers">
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
  name: 'Actualités',

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