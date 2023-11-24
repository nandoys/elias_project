<template>
    <v-row>
        <v-col>
            <div class="d-flex justify-center mt-12">
                <v-card-text class="text-center">Fonctionnalités supplémentaires</v-card-text>
            </div>

            <div class="d-flex justify-center">
                <v-list
                    nav
                    width="600"
                    :items="items"
                    @click:select="goTo"
                >
                    <template v-slot:prepend="{item}">
                        <v-icon :icon="item.icon"></v-icon>
                    </template>
                </v-list>
            </div>
            
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                title: 'Vos inscriptions',
                icon: 'mdi-book-edit',
                value: 'Subscriber',
            },
            {
                title: 'Frais scolaire',
                icon: 'mdi-currency-usd',
                value: 'Tuition',
            },
            {
                title: 'Discussions',
                icon: 'mdi-chat',
                value: 'Chat',
            },
            {
                title: 'Se déconnecter',
                icon: 'mdi-exit-to-app',
                value: 'Login',
            }
        ]
    }),
    methods: {
        goTo(arg) {
            this.$router.push({'name': arg.id})
        }
    }
}
</script>