<template>
    <v-row class="d-flex">
        <v-col cols="6">
            <span class="text-h3">Section Mecanique</span>
            <section>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nihil maiores quis neque quae magnam adipisci expedita,
                nulla distinctio voluptatum omnis, numquam laudantium fuga blanditiis dolor laborum quos eligendi ratione?

                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nihil maiores quis neque quae magnam adipisci expedita,
                nulla distinctio voluptatum omnis, numquam laudantium fuga blanditiis dolor laborum quos eligendi ratione?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nihil maiores quis neque quae magnam adipisci expedita,
                nulla distinctio voluptatum omnis, numquam laudantium fuga blanditiis dolor laborum quos eligendi ratione?
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