<template>
  <div class="container-fluid page">
    <div class="row">
      <div class="col-12 mb-3">
        <h2 class="text-center mt-3">L'association</h2>
      </div>
    </div>
    <div class="container-fluid mt-4 mb-4">
      <div class="row justify-content-center">
        <!-- 1° card Qui est l'association LM Petits Pas ? -->
        <div class="col-10">
          <div class="card">
            <div class="card-header text-center">
              <h3>Qui est l'association LM Petits Pas ?</h3>
            </div>
            <div class="card-body pt-4 pl-4 pr-4 pb-4">
              <p>LM représente <strong>2 adorables enfants Luca et Marius âgés de 9 ans,</strong> avant leur accident respectif Marius et Luca suivaient une scolarité tout à fait classique dans la même école, mais le cours de la vie en a décidé autrement. Tous les deux sont maintenant Infirmes Moteur Cérébraux, c'est-à-dire qu'une partie de leur cerveau a été endommagé.</p>
              <p>Depuis leurs accidents, ils se sont énormément battus pour en être là où ils en sont aujourd'hui. Différentes thérapies peuvent les aider à progresser, mais elles sont situées à l'étranger et représentent un coût financier très important.</p>
              <p class="miseEnAvant">L'objectif de cette association est de récolter des fonds, pour leur permettre d'avoir l'opportunité de continuer à progresser.</p>
              <p><i>Ex : il suffit de 700 personnes qui donnent 10 € pour qu'une première étape puisse être franchie...</i></p>
            </div>
          </div>
        </div>
        <!-- 2° card Le bureau -->
        <div class="col-10 mt-5">
          <div class="card">
            <div class="card-header text-center">
              <h3>Le bureau</h3>
            </div>
            <div class="card-body pt-4 ">
              <div class="row">
                <div class="col-xs-11 col-lg-5 bureau">
                  <ul>
                    <li>Présidente</li>
                    <ul>
                      <li>MELINA LANGEVIN</li>
                      <li>Mail: lmpetitspas@gmail.com</li>
                    </ul>
                    <li>Vice-présidente</li>
                    <ul>
                      <li>WENDY MINZIERE</li>
                      <li>SONIA JOURNAULT</li>
                    </ul>
                  </ul>
                </div>
                <div class="col-xs-11 col-lg-5 bureau">
                  <ul>
                    <li>Trésorier et Vice-trésorier</li>
                    <ul>
                      <li>HARRY LANGEVIN</li>
                      <li>STEPHANIE VALTEAU</li>
                    </ul>
                    <li>Secrétaire et vice-secrétaire</li>
                    <ul>
                      <li>DELPHINE MICHEL</li>
                      <li>SERGE JOURNAULT</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin 2° card -->
        <!-- 3° card Aidons les à retrouver leur autonomie -->
        <div class="col-10 mt-5">
          <div class="card">
            <div class="card-header text-center">
              <h3>Aidons les à retrouver leur autonomie</h3>
            </div>
            <div class="card-body pt-4 ">
              <div class="row">
                <div class="col-xs-10 col-lg-6">
                  <h4>Pour faire un don</h4>
                  <ul class="adresse">
                    <li>LM Petits Pas</li>
                    <li>Le petit Rossignol</li>
                    <li>53200 Gennes Longuefuye</li>
                  </ul>
                </div>
                <div class="col-xs-10 col-lg-5 ml-5">
                  <p class="text-center"><img src="../assets/logorond.png" alt="Logo LM petit pas"></p>
                </div>
              </div>
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
  name: 'Home',

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
.miseEnAvant {
  font-size: 2.5vh;
  font-weight: bold;
}
.adresse li {
  list-style: none;
}
@media (max-width: 768px){
.adresse li {
  font-size: 3.5vw;
}
h3, h4 {
  font-size: 4.5vw;
}
.bureau ul li {
  font-size: 3vw;
}
}
</style>