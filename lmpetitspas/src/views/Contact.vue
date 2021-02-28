<template>
  <div class="container-fluid page">
    <div class="row">
      <div class="col-12 mb-4">
        <h2 class="text-center mt-5">Contact</h2>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- 1° card  -->
        <div class="col-xs-11 col-lg-8">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>Vous souhaitez nous contacter</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-2 text-justify">
              <p>Pour tous renseignements vous pouvez nous joindre par mail : <a href="mailto:lmpetitspas@gmail.com">lmpetitspas@gmail.com</a></p>
            </div>
            <div class="card-body pt-2 pl-4 pr-4 pb-4 text-justify">
              <p>Tous les événements sont à voir ou revoir sur facebook :<br>
              <a href="https://www.facebook.com/LMPetitsPas" target="_blank">https://www.facebook.com/LMPetitsPas</a></p>
            </div>
            <div class="card-body pt-2 pl-4 pr-4 pb-4 text-justify">
              <p class="gras">Les dons sont possibles à l'adresse suivante :</p>
              <ul class="adresse">
                <li>LM Petits Pas</li>
                <li>Le Petit Rossignol</li>
                <li>53200 GENNES LONGUEFUYE</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Fin 1° card -->
        <!-- 2° card La méthode Essentis -->
        <div class="col-xs-11 col-lg-8">
          <div class="card mb-3">
            <div class="card-header text-center">
              <h3>Nos partenaires</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4 text-justify">
              <div class="row">
                <div class="col-xs-10 col-lg-4 contour">
                  <img src="../assets/partenaires/capvital.jpg" alt="Logo partenaire Capvital">
                </div>
                <div class="col-xs-10 col-lg-4 contour">
                  <img src="../assets/partenaires/cruard.jpg" alt="Logo partenaire cruard Chateau Gontier">
                </div>
                <div class="col-xs-10 col-lg-4 contour">
                  <img src="../assets/partenaires/scuderia.jpg" alt="Logo partenaire SCUDERIA 4 A.B.">
                </div>
              </div>
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
  name: 'Contact',

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
.gras {
  font-weight: bold;
}
.adresse li {
  list-style: none;
}
@media (max-width: 767px){
h3 {
  font-size: 4.5vw;
}
h2 {
  font-size: 5.5vw;
}

}
</style>