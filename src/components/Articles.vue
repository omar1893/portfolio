<template>
    <v-layout row align-center class="pt-4">
        <v-flex xs12 sm10 class="basic-list">
            <v-card class="text-xs-center card-width portfolio-card py-4">
                <v-container grid-list-md text-xs-center>
                    <v-layout row wrap>
                        <v-flex xs12 v-for="art in articles" :key="art.title">
                            <v-card :href="art.href" target="_blank">
                                <v-card-text class="px-4 text-xs-left">
                                    <h5 class="mb-0">{{art.title}}</h5>
                                    <p class="mb-1"><strong>Site: </strong> {{art.site}}</p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                articles: []
            }
        },
        created() {
            axios.get(`https://portfolio-37f8f.firebaseio.com/articles.json`)
                .then(response => {
                    for (let i in response.data) {
                        this.articles.push(response.data[i]);
                    }
                    console.log(this.skills)
                })
        }
    }
</script>

<style lang="">
    
</style>