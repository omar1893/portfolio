<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>Omar Lopez</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left>work</v-icon>
          Portafolio
        </v-btn>
        <v-btn flat>
          <v-icon left>assessment</v-icon>
          Habilidades
        </v-btn>
        <v-btn flat>
          <v-icon left>school</v-icon>
          Educación
        </v-btn>
        <v-btn flat>
          <v-icon left>book</v-icon>
          Articulos
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>

    <v-btn fixed dark fab bottom right color="pink">
        <v-icon>email</v-icon>
    </v-btn>
    </main>



  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
