<template>
    <v-stepper :items="steps" prev-text="Précédent" next-text="Suivant">
        <template v-slot:item.1>
            <v-card title="Vos informations personnelles" flat>
                <personnal-information />
            </v-card>
        </template>

        <template v-slot:item.2>
            <v-card title="Informations des tuteurs" flat>...</v-card>
        </template>

        <template v-slot:item.3>
            <v-card title="Quel curcus voulez-vous entreprendre ?" flat>...</v-card>
        </template>
    </v-stepper>
</template>

<script>
import PersonnalForm from '@/components/apply/form/personnalInformation.vue'
import personnalInformation from '@/components/apply/form/personnalInformation.vue'
export default {
  components: { personnalInformation },
    data () {
        return {
            steps: ["Identité", "Tuteur", "Scolarité"]
        }
    }
}
</script>