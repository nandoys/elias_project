<template>
    <v-parallax
      :height="parallaxHeight"
      :src="src"
    >
        <v-row justify="center" align="center" align-content="center">
            <v-column class="text-h1 text-white">
                <div v-text="bannerText"></div>
            </v-column>
        </v-row>
    </v-parallax>
  </template>

<script>
    export default {
        data() {
            return {
                src: 'src/assets/banner-bg.jpeg',
                bannerText: 'Inscription',
                parallaxHeight: 200
            }
        }
    }
</script>