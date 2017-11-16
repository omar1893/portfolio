<template>
    <div>
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
                    <h3 class="app-title mb-0">{{port.title}}</h3>
                    <span><v-icon class="mr-2" left>build</v-icon>{{port.tech}}</span>
                </div>
            </v-card-title>
        </v-card>
    </div>
</template>

<script>
export default {
    props:['port']
}
</script>