<template>
    <v-stepper v-model="currentStep" :items="steps" prev-text="Précédent" next-text="Suivant" alt-labels>
        <template v-slot:item.1>
            <v-card title="Vos informations personnelles" flat>
                <personnal-information />
            </v-card>
        </template>

        <template v-slot:item.2>
            <v-card title="Informations du tuteur" flat>
                <tutor-information />
            </v-card>
        </template>

        <template v-slot:item.3>
            <v-card title="Quel curcus voulez-vous entreprendre ?" flat>
                <cursus-information />
            </v-card>
        </template>
        <template v-slot:actions="{prev, next}">
            <v-row class="ml-5 mr-5">
                <v-sheet height="60">
                    <v-btn variant="text" @click="prev">Précédent</v-btn>
                </v-sheet>
                <v-spacer></v-spacer>
                <v-sheet height="60">
                    <v-btn variant="text" @click="next" v-if="currentStep < 3">Suivant</v-btn>
                    <v-snackbar
                        :timeout="2000"
                        v-else
                    >
                    <template v-slot:activator="{ props }">
                        <v-btn
                            variant="text"
                            color="success"
                            v-bind="props" 
                            @click="goTo('Home', true)"
                        >Terminer</v-btn>
                    </template>
                    </v-snackbar>
                </v-sheet>
            </v-row>
        </template>
    </v-stepper>
</template>

<script>
import PersonnalForm from '@/components/apply/form/personnalInformation.vue'
import personnalInformation from '@/components/apply/form/personnalInformation.vue'
import TutorInformation from '@/components/apply/form/tutorInformation.vue'
import CursusInformation from '@/components/apply/form/cursusInformation.vue'
export default {
    components: { personnalInformation, TutorInformation, CursusInformation },
    data () {
        return {
            steps: ["Identité", "Tuteur", "Scolarité"],
            currentStep: 1
        }
    },
    methods: {
      goTo(pathName, shouldNotify) {
        this.$router.push({'name': pathName, query: { notify: shouldNotify}})
      }
    }
}
</script>