<template>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
    >
        <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            :src="slide.src"
            cover
        >
        </v-carousel-item>
    </v-carousel>
</template>

<script>

    export default {
        data () {
            return {
                slides: [
                {
                    src: 'src/assets/bg-1.jpg',
                },
                {
                    src: 'src/assets/bg-2.jpg',
                },
                ],
            }
        },
    }

</script>