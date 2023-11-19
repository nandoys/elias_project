<template>
    <v-sheet width="300" class="mx-auto">
        <v-form @submit.prevent>
        <v-text-field
            v-model="firstName"
            :rules="rules"
            label="Prénom"
        ></v-text-field>
        <v-text-field
            v-model="lastName"
            :rules="rules"
            label="Nom"
        ></v-text-field>
        </v-form>
    </v-sheet>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            rules: []
        }
    }
}
</script>