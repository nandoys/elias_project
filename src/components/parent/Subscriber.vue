<template>
    <v-row>
        <v-col>
            <div class="d-flex justify-center">
                <v-card
                    color="blue"
                    height="150"
                    width="1000"
                >
                    <v-row>
                        <v-col>
                            <v-card-text class="text-h3 text-center">Vos Inscriptions</v-card-text>
                            <span class="text-center d-flex flex-column">la liste des enfants que vous avez inscrit</span>
                            <v-row>
                                <v-btn
                                prepend-icon="mdi-plus"                            
                                >
                                    Nouveau enfant
                                </v-btn>
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
import ChildrenList from './subscriber/ChildrenList.vue';
export default {
  components: { ChildrenList },
    date: () => ({

    })
}
</script>