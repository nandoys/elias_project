<template>
    <v-row>
        <v-col cols="12">
            <v-row>
                <v-col cols="4">
                    <div class="d-flex justify-center">
                        <v-img src="@/assets/location.png" height="60" width="60" />
                    </div>
                    <div class="text-h6 text-center">Adresse</div>
                    <v-card-text class="text-center">+24381-----</v-card-text>
                </v-col>
                <v-col cols="4">
                    <div class="d-flex justify-center">
                        <v-img src="@/assets/telephone.png" height="60" width="60" />
                    </div>
                    <div class="text-h6 text-center">Téléphone</div>
                    <v-card-text class="text-center">+24381-----</v-card-text>
                </v-col>
                <v-col cols="4">
                    <div class="d-flex justify-center">
                        <v-img src="@/assets/email.png" height="60" width="60" />
                    </div>
                    <div class="text-h6 text-center">Email</div>
                    <v-card-text class="text-center">itigombe@gmail.com</v-card-text>
                </v-col>
            </v-row>
            <v-text-field
                label="Votre nom"
                v-model="name"
            >
            </v-text-field>
            <v-text-field
                label="Sujet de votre préoccupation"
                v-model="subject"
            >
            </v-text-field>
            <v-textarea
                label="Votre message"
                v-model="message"
            >
            </v-textarea>
            <v-snackbar
                :timeout="2000"
            >
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props" @click="resetForm()">Envoyer</v-btn>
                </template>

                Votre message a été envoyé. Nous vous recontacterons ultérieurement. Merci!
            </v-snackbar>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        name: '',
        subject: '',
        message: ''
    }),
    methods: {
        resetForm() {
            this.name = ''
            this.subject = ''
            this.message = ''
        }
    }
}
</script>