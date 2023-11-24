<template>
    <v-container fluid="">
        <v-row>
            <v-col cols="6">
                <maps />
            </v-col>
            <v-col cols="6">
                <contact-form />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import ContactForm from '@/components/contact/contactForm.vue'
    import Maps from '@/components/contact/map.vue'
</script>