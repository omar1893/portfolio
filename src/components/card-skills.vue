<template>
    <div >
        <v-card >
            <v-card-title primary-title>
                <div class="basic-list">
                    <h3 class="headline mb-0">{{skill.tech}}</h3>
                </div>
            </v-card-title>
            <v-progress-circular v-bind:size="100" v-bind:width="15" v-bind:rotate="-90" v-bind:value="skill.score" v-bind:color="color">
                {{ skill.score }}%
            </v-progress-circular>
        </v-card>
    </div>
</template>

<script>
    export default {
        props: ['skill', 'color']
    }
</script>

<style>
    
</style>