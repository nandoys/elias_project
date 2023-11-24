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
                >
                    <template v-slot:prepend>
                     
                        <v-icon icon="mdi-pencil"></v-icon>
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
                icon: 'mdi-pencil',
                value: 1,
            },
            {
                title: 'Frais scolaire',
                icon: 'mdi-pencil',
                value: 2,
            },
            {
                title: 'Discussions',
                icon: 'mdi-pencil',
                value: 3,
            }
        ]
    })
}
</script>