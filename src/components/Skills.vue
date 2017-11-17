<template>
    <v-layout row align-center class="pt-4">
        <v-flex xs12 sm10 class="basic-list">
            <v-card class="text-xs-center card-width portfolio-card">
                <v-layout row wrap>
                    <div style="width: 100%">
                        <h5 class="mt-3 mb-0">Frameworks / Libraries</h5>
                    </div>
                    <div class="basic-list my-4" v-if="skills.length == 0">
                        <v-progress-circular indeterminate v-bind:size="70" v-bind:width="7" color="teal"></v-progress-circular>
                    </div>
                    <v-flex xs6 sm5 md3 lg2 class="pa-3" v-if="skill.type == 'f-l'" v-for="skill in skills" :key="skill.tech">
                        <card-skills v-bind:skill="skill" v-bind:color="'teal'"></card-skills>
                    </v-flex>
                    <div style="width: 100%">
                        <h5 class="mt-3 mb-0">Languages</h5>
                    </div>
                    <div class="basic-list my-4" v-if="skills.length == 0">
                        <v-progress-circular indeterminate v-bind:size="70" v-bind:width="7" color="info"></v-progress-circular>
                    </div>
                    <v-flex xs6 sm5 md3 lg2 class="pa-3" v-if="skill.type == 'l'" v-for="skill in skills" :key="skill.tech">
                        <card-skills v-bind:skill="skill" v-bind:color="'info'"></card-skills>
                    </v-flex>
                    <div style="width: 100%">
                        <h5 class="mt-3 mb-0">Pre/Post Processors</h5>
                    </div>
                    <div class="basic-list my-4" v-if="skills.length == 0">
                        <v-progress-circular indeterminate v-bind:size="70" v-bind:width="7" color="blue"></v-progress-circular>
                    </div>
                    <v-flex xs6 sm5 md3 lg2 class="pa-3" v-if="skill.type == 'p'" v-for="skill in skills" :key="skill.tech">
                        <card-skills v-bind:skill="skill" v-bind:color="'blue'"></card-skills>
                    </v-flex>
                    <div style="width: 100%">
                        <h5 class="mt-3 mb-0">Others</h5>
                    </div>
                    <div class="basic-list my-4" v-if="skills.length == 0">
                        <v-progress-circular indeterminate v-bind:size="70" v-bind:width="7" color="pink"></v-progress-circular>
                    </div>
                    <v-flex xs6 sm5 md3 lg2 class="pa-3" v-if="skill.type == 'o'" v-for="skill in skills" :key="skill.tech">
                        <card-skills v-bind:skill="skill" v-bind:color="'pink'"></card-skills>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import axios from 'axios'
    import cardSkills from './card-skills'
    export default {
        components: {
            cardSkills
        },
        data() {
            return {
                skills: [],
            }
        },
        created() {
            axios.get(`https://portfolio-37f8f.firebaseio.com/skills.json`)
                .then(response => {
                    for (let i in response.data) {
                        this.skills.push(response.data[i]);
                    }
                    console.log(this.skills)
                })
        }
    }
</script>

<style>
    
</style>