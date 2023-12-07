<template>
    <v-row class="d-flex">
        <v-col cols="6">
            <span class="text-h3">Section Mecanique</span>
            <section>
                La mécanique industrielle est un art qui consiste en la construction et l’entretien des machines, 
                qui sont dédiées à une industrie ou une entreprise liée à l’ingénierie, qui ont comme but de transformer 
                les matières premières en produits élaborés, de forme massive.
                
                Cette discipline, complexe et passionnante, est maitrisée depuis plus de 20 ans par les spécialistes des Entreprises HARtech. 
                Voici tout ce que vous devez savoir sur cette pratique, présenté par notre service de mécanique industrielle.
            </section>
        </v-col>
    
        <v-col cols="6">
            <v-img
                :width="500"
                aspect-ratio="16/9"
                src="@/assets/motor.jpg"
            ></v-img>
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