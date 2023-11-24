<template>
    <v-dialog
        v-model="dialog"
        fullscreen
        scrollable
        :scrim="false"
        transition="dialog-bottom-transition"
    >
        <template v-slot:activator="{ props }">
            <v-btn
                v-bind="props"
                prepend-icon="mdi-plus"                            
            >
                Nouveau enfant
            </v-btn>
        </template>
        <v-card>
            <v-toolbar
                dark
                color="primary"
            >
                <v-btn
                    icon
                    dark
                    @click="dialog = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Inscription</v-toolbar-title>
            </v-toolbar>
            <v-container fluid="">
                <steppers />
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>

import Steppers from '@/components/apply/steppers.vue'
export default {
  components: { Steppers },
    data: () => ({
        dialog: false,
    })
}
</script>