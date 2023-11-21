<template>
    <v-sheet width="800" class="mx-8">
        <v-row>
            <v-select
                label="Section"
                :items="cursus"
                v-model="selectedCursus"
            >
            </v-select>
        </v-row>
        <v-row>
            <v-radio-group inline label="Classe" v-if="selectedCursus == 'Secondaire'">
                <v-radio label="7ème" value="7"></v-radio>
                <v-radio label="8ème" value="8"></v-radio>
            </v-radio-group>
            <v-radio-group inline label="Classe" v-else-if="selectedCursus != 'Secondaire' && selectedCursus != ''">
                <v-radio label="1ère" value="1"></v-radio>
                <v-radio label="2ème" value="2"></v-radio>
                <v-radio label="3ème" value="3"></v-radio>
                <v-radio label="4ème" value="4"></v-radio>
            </v-radio-group>
        </v-row>

        <v-row class="mb-3 text-subtitle-2">Précédente école (cas échéant)</v-row>
        <v-row>
            <v-text-field
                v-model="school"
                :rules="rules"
                label="Nom de l'école"
            ></v-text-field>
        </v-row>
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

export default {
    data() {
        return {
            cursus: [
                'Secondaire', 'Elecctricité', 'Mécanique - Machine, outils', 'Mécanique automobile', 'Electronique Industrielle',
                'Electronique commutation'
            ],
            selectedCursus: '',
            school: '',
            avenue: '',
            province: '',
            telephone: '',
            email: '',
            rules: [],
        }
    }
}
</script>