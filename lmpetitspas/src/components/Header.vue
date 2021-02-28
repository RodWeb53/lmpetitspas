<template>
  <div>
    <div class="container-fluid headpage">
      <div class="row text-center pt-2 pb-2">
        <div class="col-4 col-lg-3 mt-auto mb-auto">
          <img class="dimimage1" src="../assets/logorond.png" alt="Logo de l'association LM petits pas">
        </div>
        <div class=" col-7 col-lg-5 mt-auto mb-auto">
          <img class="dimimage" src="../assets/photobandeau.jpg" alt="Photo de Marius et Luca">
        </div>
        <div class="col-12 col-lg-4 mt-auto mb-auto text-center">
          <h2>Aidons les à retrouver leur autonomie</h2>
        </div>
      </div>

    </div>
    <nav id="barnav1" class="navbar navbar-icon-top navbar-expand-lg navbar-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="container-fluid">
          <ul class="navbar-nav menu nav nav-pills nav-fill ">
            <li class="nav-item" @click="home()">
              <a class="nav-link" href="#">L'association</a>
            </li>
            <li class="nav-item" @click="lesEnfants()">
              <a class="nav-link" href="#">Les enfants</a>
            </li>
            <li class="nav-item" @click="lesTherapies()">
              <a class="nav-link" href="#">Les thérapies</a>
            </li>
            <li class="nav-item" @click="actualites()">
              <a class="nav-link" href="#">Actualités</a>
            </li>
            <li class="nav-item" @click="evenements()" >
              <a class="nav-link" href="#">Evènements</a>
            </li>
            <li class="nav-item" @click="contact()">
              <a class="nav-link" href="#">Contact / Partenaires</a>
            </li>
          </ul>    
        </div>
      </div>
    </nav> 
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    home () {
      this.$router.push('/')
    },
    lesEnfants () {
      this.$router.push('/LesEnfants')
    },
    lesTherapies () {
      this.$router.push('/LesTherapies')
    },
    actualites () {
      this.$router.push('/Actualites')
    },
    evenements () {
      this.$router.push('/Evenements')
    },
    contact () {
      this.$router.push('/Contact')
    },
  }
}
</script>

<style scoped>

.navbar,.headpage {
  background: #2B4D85;
  color: #fff;
}


.header-list {
  text-decoration: none;
  color: white !important;
  text-align: end;

}
.menu {
  width: 100%;
}

@media (min-width: 769px) and (max-width: 1230px){
.dimimage1 {
    width: 50%;
  }
.dimimage {
    width: 100%;
  }
h2 {
  font-size: 3.5vw;
}
}
@media (min-width: 400px) and (max-width: 768px){
.dimimage1 {
    width: 50%;
  }
.dimimage {
    width: 100%;
  }
h2 {
  font-size: 4vw;
}
}
@media (max-width: 399px){
.dimimage1 {
    width: 60%;
  }
.dimimage {
    width: 100%;
  }
h2 {
  font-size: 6vw;
}
}

</style>