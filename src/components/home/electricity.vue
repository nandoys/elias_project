<template>
    <v-row class="d-flex">
        <v-col cols="6">
            <v-img 
                :width="500"
                aspect-ratio="16/9"
                src="@/assets/electricity.jpeg">
            </v-img>
        </v-col>
        <v-col cols="6">
            <span class="text-h3">Section d'électricité</span>
            <section>
                C'est quoi industrie électrique ?Ensemble des activités liées à la conception, 
                la fabrication et l'entretien de produits et composants électriques et électroniques.
            </section>
        </v-col>

    </v-row>
</template>

<script>

    export default {
        data () {
            return {
                slides: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                ],
            }
        },
    }

</script>