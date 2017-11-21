<template>
  <v-app>
    <v-toolbar dark class="primary">
      <v-toolbar-title>
        Omar Lopez
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat router to="/portfolio">
          <v-icon left>work</v-icon>
          Portafolio
        </v-btn>
        <v-btn flat router to="/skills">
          <v-icon left>assessment</v-icon>
          Habilidades
        </v-btn>
        <v-btn flat router to="/education">
          <v-icon left>school</v-icon>
          Educación
        </v-btn>
        <v-btn flat router to="/articles">
          <v-icon left>book</v-icon>
          Articulos
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  
    <main class="primary">
  
      <transition>
        <router-view class="card-profile">
        </router-view>
      </transition>

  
      <v-btn fixed dark fab bottom right color="pink">
        <v-icon>email</v-icon>
      </v-btn>
    </main>
  
  
  
  </v-app>
</template>

<script>
  export default {
    data() {
      return {};
    }
  };
</script>

<style>
  .align {
    margin: auto;
    display: block
  }
  
  .basic-list {
    margin: auto;
  }
  
  .waves {
    position: absolute;
    /*      left: 0;
            right: 0;
            height: 200px;
            bottom: 0;*/
    bottom: -100px;
    height: 527px;
    width: 100%;
    overflow: hidden;
  }
  
  .move-enter-active,
  .move-leave-active {
    transform: translateX(0);
    transition: all 1s linear;
  }
  
  .move-enter,
  .move-leave-to {
    transform: translateX(100%);
    transition: all 1s linear;
  }
  
  .wave {
    position: absolute;
    left: -180px;
    bottom: 0;
    /*width: 200px;*/
    /*height: 200px;*/
    /*width: 100%;*/
    /*border-radius: 50%;*/
    /*background:rgba(0,0,0, .3);*/
    width: 2402px;
    height: 427px;
    background: url('./assets/waves.png') center bottom no-repeat;
    animation: 5s wave ease-in-out infinite alternate;
  }
  
  .wave.a {
    background-position: 0 -854px;
  }
  
  .wave.b {
    background-position: 0 -427px;
    animation-delay: .6s;
  }
  
  .wave.c {
    background-position: 0 0;
    animation-delay: 1.2s;
  }
  
  @keyframes wave {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-80px, 30px);
    }
    100% {
      transform: translate(160px, -60px);
    }
  }
</style>
