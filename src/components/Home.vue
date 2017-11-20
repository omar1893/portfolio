<template>
  <v-layout row align-center>
    <v-flex xs12 sm7 class="basic-list">
  
      <v-card class="text-xs-center card-profile card-width">
  
        <v-layout row align-center>
          <v-flex xs12 sm5 class="px-4">
            <v-avatar size="220px" class="align">
              <img src="https://imageserver-bisnow1.netdna-ssl.com/T6qaNvKgcjF-AVyYYbfTA85qlY4=/710x484/publisher/56d949076944e_RE_Good.jpeg" alt="John">
            </v-avatar>
          </v-flex>
  
          <v-flex xs12 sm7 class="px-4 py-5">
            <h3 class="d-block primary-title mb-0">Omar López</h3>
            <hr>
            <p class="title">Frontend Developer and Javascript Enthusiast</p>
  
            <v-layout class="basic-list" row wrap v-for="(value, key,i) in basic" :key="i">
              <v-flex xs4 class="text-xs-left">
                <p class="key">{{key}}: </p>
              </v-flex>
              <v-flex xs8 class="text-xs-left">
                <p>{{value}}</p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
  
        <v-card-actions class="info py-3">
          <v-flex>
            <v-btn icon class="white--text" href="https://www.linkedin.com/in/omarjlopez/" target="_blank">
              <v-icon large>mdi-linkedin-box</v-icon>
            </v-btn>
            <v-btn icon class="white--text" href="https://github.com/omar1893" target="_blank">
              <v-icon large>mdi-github-circle</v-icon>
            </v-btn>
            <v-btn icon class="white--text" href="https://www.linkedin.com/in/omarjlopez/" target="_blank">
              <v-icon large>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon class="white--text" href="https://www.linkedin.com/in/omarjlopez/" target="_blank">
              <v-icon large>mdi-gmail</v-icon>
            </v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>
  

    </v-flex>
      <div class="waves">
        <div class="wave circulo a"></div>
        <div class="wave circulo b"></div>
        <div class="wave circulo c"></div>
      </div>
  </v-layout>
</template>


<script>
  export default {
    name: "home",
    data() {
      return {
        basic: {
          Age: 24,
          Location: "Puerto Ordaz, Venezuela",
          Email: "omarjlg1893@gmail.com",
          Phone: "(+58)414-8658550"
        }
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .primary-title {
    font-size: 36px;
  }
  
  .key {
    font-weight: bold
  }
  
  .headline {
    font-size: 20px!important
  }
  
  .card-profile {
    z-index: 1;
  }
</style>