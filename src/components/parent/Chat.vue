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
                            <v-card-text class="text-h3 text-center">Chat</v-card-text>
                            <span class="text-center d-flex flex-column">Vos discussions avec l'école</span>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
            <div class="d-flex justify-center">
                <v-card
                    width="1000"
                    height="550"
                >
                    <v-row>

                        <v-col cols="4">
                            <v-list-item
                                v-for="i in 10"
                                :key="i"
                                :title="'professeur '+i"
                                subtitle="Classe de 4ème Mécanique"
                                link
                            >
                                <template v-slot:prepend>
                                    <v-avatar
                                        color="grey-lighten-1"
                                        size="50"
                                        image="@/assets/marcus.jpg"
                                    ></v-avatar>
                                </template>

                            </v-list-item>
                        </v-col>
                        <v-divider vertical=""></v-divider>

                        <v-col cols="8" align-self="end">
                            <v-row>
                                <v-col>
                                    <v-card
                                        width="250"
                                        color="blue-grey-lighten-5"
                                    >
                                        <v-card-text>Bonjour Monsieur Dieudonnée</v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                            
                            <v-row style="margin-left: 380px; margin-bottom: 5px;">
                                <v-col align-self="end">
                                    <v-card
                                        width="250"
                                        color="blue-grey-lighten-5"
                                    >
                                        <v-card-text>Bonjour l'école</v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>

                            <v-text-field
                                v-model="editMessage"
                                placeholder="Ecrire message"
                            >
                            <template v-slot:append-inner>
                                <v-icon
                                    icon="mdi-send"
                                    v-ripple
                                    @click="sendMessage"
                                />
                            </template>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card>
                
            </div>
        </v-col>
    </v-row>
</template>

<script>


export default {
  components: {  },
    data: () => ({
        editMessage: '',
        messages: []
    }),
    methods: {
        goTo(pathName) {
            this.$router.push({'name': pathName})
        },
        sendMessage(){
            this.messages.push(this.editMessage)
            this.editMessage = ''
        }
    }
}
</script>