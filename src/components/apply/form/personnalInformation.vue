<template>
    <v-sheet width="800" class="mx-8">
        <v-row class="mb-3 text-subtitle-2">Indentité</v-row>
        <v-row>
            <v-text-field
                v-model="firstName"
                :rules="rules"
                label="Nom de famille"
                class="mr-5"
            ></v-text-field>

            <v-text-field
                v-model="lastName"
                :rules="rules"
                label="Prénom"
            ></v-text-field>
        </v-row>
        <v-row>
            <v-text-field
                v-model="placeOfBirth"
                :rules="rules"
                label="Lieu de naissance"
                class="mr-5"
            ></v-text-field>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-text-field
                        v-model="selectedDate"
                        :rules="rules"
                        label="Date de naissance"
                        readonly
                        v-bind="props"
                    ></v-text-field>
                </template>
                <v-locale-provider locale="fr">
                    <v-date-picker 
                        elevation="24"
                        :model-value="selectedDate"
                    >
                    </v-date-picker>
                </v-locale-provider>
            </v-menu>
        </v-row>
        <v-row>
            <v-radio-group inline label="Genre">
                <v-radio label="Masculin" value="M"></v-radio>
                <v-radio label="Féminin" value="F"></v-radio>
            </v-radio-group>
        </v-row>
        <v-row class="mb-3 text-subtitle-2">Adresse</v-row>
        <v-row>
            <v-text-field
                v-model="avenue"
                :rules="rules"
                label="Avenue"
                class="mr-5"
            ></v-text-field>
            <v-text-field
                v-model="province"
                :rules="rules"
                label="Province"
            ></v-text-field>
        </v-row>

        <v-row class="mb-3 text-subtitle-2">Contact</v-row>
        <v-row>
            <v-text-field
                v-model="telephone"
                :rules="rules"
                label="Téléphone"
                class="mr-5"
            ></v-text-field>
            <v-text-field
                v-model="email"
                :rules="rules"
                label="Email"
            ></v-text-field>
        </v-row>
    </v-sheet>
</template>

<script>
import { useDate } from 'vuetify'

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            placeOfBirth: '',
            avenue: '',
            province: '',
            telephone: '',
            email: '',
            selectedDate: useDate().format({date: new Date('March 1, 2021'), formatString: 'dmY'}),
            rules: [],
        }
    }
}
</script>