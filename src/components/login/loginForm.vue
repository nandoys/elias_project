<template>
    <v-card
        height="500"
        width="400"
        class="mx-auto"
        elevation="8"
    >
        <v-row class="mt-12">
            <v-col class="mx-5  my-12">
                <v-text-field
                    label="votre email"
                    v-model="email"
                >
                </v-text-field>
                <v-text-field
                    label="mot de passe"
                    v-model="password"
                    type="password"
                >
                </v-text-field>
                <div class="d-flex justify-center">
                    <v-btn @click="goTo('Dashboard')">Se connecter</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-card>
    
</template>

<script>
export default {
    data: () => ({
        email: '',
        password: ''
    }),

    methods: {
        goTo(pathName) {
            this.$router.push({'name': pathName})
        }
    }
}
</script>