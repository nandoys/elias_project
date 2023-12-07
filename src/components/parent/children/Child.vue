<template>
    <v-row>
        <v-col>
            <div class="d-flex justify-center">
                <v-card
                    color="blue"
                    height="200"
                    width="1000"
                >
                    <v-row>
                        <v-col>
                            <v-btn icon="mdi-arrow-left" variant="text" @click="goTo('Dashboard')"></v-btn>
                            <v-card-text class="text-h3 text-center">Elias 1</v-card-text>
                            <span class="text-center d-flex flex-column">Classe de 4ème Mécanique</span>
            
                        </v-col>
                    </v-row>
                </v-card>
            </div>
            <div class="d-flex justify-center mt-n12">
                <v-avatar  image="@/assets/marcus.jpg" size="100"></v-avatar>
            </div>
            <div>
                <v-tabs
                    v-model="tab"
                    color="primary"
                    align-tabs="center"
                >
                    <v-tab :value="1">Bulletin</v-tab>
                    <v-tab :value="2">Evolution</v-tab>
                </v-tabs>
                <div class="d-flex justify-center">
                    <v-window v-model="tab">
                        <score-sheet :tabIndex="1" />
                        <child-progress :tabIndex="2" />
                    </v-window>
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import ChildProgress from '@/components/parent/children/Progress.vue'
import ScoreSheet from '@/components/parent/children/ScoreSheet.vue'
export default {
    components: { ChildProgress, ScoreSheet },
    data: () =>({
        tab: null
    }),
    methods: {
        goTo(pathName) {
            this.$router.push({'name': pathName})
        }
    }
}
</script>