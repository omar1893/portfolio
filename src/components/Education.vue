<template>
      <v-layout row align-center class="pt-4">
        <v-flex xs12 sm10 class="basic-list">
            <v-card class="text-xs-center card-width portfolio-card py-4">
                <v-container grid-list-md text-xs-center>
                  <h4>Careers:</h4>
                    <v-layout row wrap>
                        <v-flex xs12 v-for="course in courses" v-if="course.type == 'Career'" :key="course.title">
                            <v-card target="_blank">
                                <v-card-text class="px-4 text-xs-left">
                                    <h5 class="mb-0">{{course.title}}</h5>
                                    <p class="mb-1"><strong>Institution: </strong> {{course.institution}}</p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                  <h4 class="my-4">Courses:</h4>
                    <v-layout row wrap>
                        <v-flex xs12 md6 v-for="course in courses" v-if="course.type == 'Course'" :key="course.title">
                            <v-card target="_blank">
                                <v-card-text class="px-4 text-xs-left">
                                    <h5 class="mb-0">{{course.title}}</h5>
                                    <p class="mb-1"><strong>Institution: </strong> {{course.institution}}</p>
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
import axios from "axios";
export default {
  data() {
    return {
      courses: []
    };
  },
  created() {
    axios
      .get(`https://portfolio-37f8f.firebaseio.com/education.json`)
      .then(response => {
        for (let i in response.data) {
          this.courses.push(response.data[i]);
        }
        console.log(this.courses);
      });
  }
};
</script>

<style>

</style>
