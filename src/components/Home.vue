<template>
    <v-layout row>
    <v-flex xs12 sm6 align-center offset-sm3>
      <v-card class="py-3 text-xs-center">
        <v-avatar size="200px" class="align">
          <img src="https://imageserver-bisnow1.netdna-ssl.com/T6qaNvKgcjF-AVyYYbfTA85qlY4=/710x484/publisher/56d949076944e_RE_Good.jpeg" alt="John">
        </v-avatar>
            <h3 class="d-block primary-title mb-0">Omar José López Gallardo</h3>
            <p class="title">Frontend Developer and Javascript Enthusiast</p>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.primary-title{
  font-size: 36px
}

</style>
