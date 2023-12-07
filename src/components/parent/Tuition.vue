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
                            <v-card-text class="text-h3 text-center">Vos frais</v-card-text>
                            <span class="text-center d-flex flex-column">la situation de frais scolaire des enfants que vous avez inscrit</span>
                            <v-row>
                                <subscriber-dialog />
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
            <div class="d-flex justify-center">
                <children-list />
            </div>
        </v-col>
    </v-row>
</template>

<script>
import ChildrenList from './tuition/ChildrenList.vue';
import SubscriberDialog from './tuition/TuitionDialog.vue';

export default {
  components: { ChildrenList, SubscriberDialog },
    data: () => ({

    }),
    methods: {
        goTo(pathName) {
            this.$router.push({'name': pathName})
        }
    }
}
</script>