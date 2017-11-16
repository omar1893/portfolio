<template>
  <v-layout row align-center class="pt-4">
    <v-flex xs12 sm10 class="basic-list">
      <v-card class="text-xs-center card-width portfolio-card">
  
        <v-layout>
          <v-flex xs8 md6 class="basic-list">
            <v-form>
              <v-text-field label="Search for technology" v-model="search">
              </v-text-field>
            </v-form>
          </v-flex>
        </v-layout>
  
        <v-tabs fixed icons centered v-model="tab">
          <v-tabs-bar class="transparent">
            <v-tabs-slider></v-tabs-slider>
            <v-tabs-item href="#all">
              <v-icon>mdi-check-all</v-icon>
              All
            </v-tabs-item>
            <v-tabs-item href="#angular">
              <v-icon>mdi-angular</v-icon>
              Angular
            </v-tabs-item>
            <v-tabs-item href="#vue">
              <img src="../../src/assets/vuejs.png" alt="">
              Vue
            </v-tabs-item>
            <v-tabs-item href="#react">
              <v-icon>mdi-react</v-icon>
              React
            </v-tabs-item>
            <v-tabs-item href="#other">
              <v-icon>devices_other</v-icon>
              Others
            </v-tabs-item>
          </v-tabs-bar>
          <v-tabs-items>
            <v-tabs-content v-for="i in tabs" :key="i" :id="i">
              <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="post in filtered" :key="post.title" class="pa-3">
                  <card-portfolio v-bind:port="post"></card-portfolio>
                </v-flex>
              </v-layout>
            </v-tabs-content>
          </v-tabs-items>
        </v-tabs>
  
  
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import axios from 'axios'
  import cardPortfolio from './card-portfolio'
  export default {
    components: {
      cardPortfolio
    },
    data() {
      return {
        search: '',
        posts: [],
        tab: '',
        tabs: ['all', 'angular', 'vue', 'react', 'other']
        // all: [],
        // angular:[],
        // vue:[],
        // react:[]
        // other:[]
      }
    },
    methods: {
      getPortfolio() {
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
    },
    watch: {
      tab: function() {
        console.log(this.tab)
        this.tab == 'all' ? this.search = '' : this.search = this.tab
        // this.search = this.tab
      }
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
  
  .fab-size .btn__content:hover {
    transform: rotate(720deg);
    transition: .7s ease-in-out;
  }
  
  .fab-size {
    height: 35px!important;
    width: 35px!important
  }
  
  .app-title {
    font-size: 18px!important
  }
  
  .tabs__item--active {
    color: inherit!important;
  }
</style>