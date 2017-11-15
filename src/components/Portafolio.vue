<template>
  <v-layout row align-center class="pt-4">
    <v-flex xs12 sm9 class="basic-list">
      <v-card class="text-xs-center card-width portfolio-card">
  
        <v-layout>
          <v-flex xs8 md6 class="basic-list">
            <v-form>
              <v-text-field label="Search for technology" v-model="search">
              </v-text-field>
            </v-form>
          </v-flex>
        </v-layout>
  
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="post in filtered" :key="post.title" class="pa-3">
            <v-card>
              <v-container class="fab-container">
                <v-card-media src="https://imageserver-bisnow1.netdna-ssl.com/T6qaNvKgcjF-AVyYYbfTA85qlY4=/710x484/publisher/56d949076944e_RE_Good.jpeg" height="200px">
                </v-card-media>
                <v-btn absolute dark fab small bottom right color="pink" class="fab-size">
                  <v-icon>play_arrow</v-icon>
                </v-btn>
              </v-container>
              <v-card-title class="pa-2" primary-title>
                <div class="text-xs-center basic-list">
                  <h3 class="app-title mb-0">{{post.title}}</h3>
                  <span><v-icon class="mr-2" left>build</v-icon>{{post.tech}}</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
  
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        search: '',
        posts: []
      }
    },
    methods: {
      getPortfolio() {
        console.log("Component Created")
        axios.get(`https://portfolio-37f8f.firebaseio.com/portfolio.json`)
          .then(response => {
            for (let i in response.data) {
              this.posts.push(response.data[i]);
            }
            console.log(this.posts)
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    computed: {
      filtered: function() {
        return this.posts.filter((post) => {
          return post.tech.toLowerCase().match(this.search.toLowerCase())
        })
      }
    },
    created() {
      this.getPortfolio()
    }
  }
</script>
  
<style>
  .portfolio-card {
    background-color: #f7f6f6!important;
  }
  
  .fab-container {
    position: relative;
    padding: 0;
  }
  
  .fab-size {
    height: 35px!important;
    width: 35px!important
  }
  
  .app-title {
    font-size: 18px!important
  }
</style>