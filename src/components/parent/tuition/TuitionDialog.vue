<template>
    <v-dialog
        v-model="dialog"
        width="800"
        height="620"
        scrollable
        :scrim="false"
        transition="dialog-bottom-transition"
    >
        <template v-slot:activator="{ props }">
            <v-btn
                v-bind="props"
                prepend-icon="mdi-plus"                            
            >
                Nouveau paiement
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
                <v-toolbar-title>Nouveau paiement</v-toolbar-title>
            </v-toolbar>
            <v-container fluid="">
                <v-row no-gutters>
                    <v-col cols="3">
                        <v-card height="150" width="150" elevation="12">
                            <v-img src="@/assets/payment/visamaster.png" width="200" height="200" ></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card height="150" width="150" elevation="12">
                            <v-img src="@/assets/payment/airtelmoney.png" width="200" height="200" ></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card height="150" width="150" elevation="12">
                            <v-img src="@/assets/payment/mpesa.png" width="200" height="200" ></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card height="150" width="150" elevation="12">
                            <v-img src="@/assets/payment/orangemoney.png" width="200" height="200" ></v-img>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-form>
                            <v-select label="Choisir enfant" :items="['Elias 1', 'Elias 2', 'Elias 3',]" multiple chips></v-select>
                            <v-text-field label="votre nom" append-icon="mdi-person"></v-text-field>
                            <v-text-field label="votre numéro" append-icon="mdi-person"></v-text-field>
                            <v-text-field label="Montant à payer" append-icon="mdi-person" prefix="$ USD"></v-text-field>
                            <v-btn color="primary">Payer</v-btn>
                        </v-form>
                    </v-col>
                </v-row>
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