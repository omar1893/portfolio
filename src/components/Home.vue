<template>
    <v-layout row>
    <v-flex xs12 sm6 align-center offset-sm3>
      <v-card class="py-3 text-xs-center">
        <v-avatar size="150px" class="align">
          <img src="https://imageserver-bisnow1.netdna-ssl.com/T6qaNvKgcjF-AVyYYbfTA85qlY4=/710x484/publisher/56d949076944e_RE_Good.jpeg" alt="John">
        </v-avatar>
            <h3 class="d-block primary-title mb-0">Omar José López Gallardo</h3>
            <p class="title">Frontend Developer and Javascript Enthusiast</p>
            <v-layout class="basic-list" row wrap v-for="(value, key) in basic">
                <v-flex xs4 class="text-xs-left">
                  <p class="key">{{key}}:</p>
                </v-flex>
                <v-flex xs8 class="text-xs-left">
                  <p>{{value}}</p>
                </v-flex>
              </v-layout>  
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-flex>
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
<style scoped>
.primary-title {
  font-size: 36px;
}
.key{
  font-weight: bold
}
.basic-list{
  width: 45%;
  margin: auto
}
</style>
