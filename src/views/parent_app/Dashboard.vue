<template>
    <v-row>
        <v-col>
            <profile-banner />
            <children-slider />
            <more-feature />
        </v-col>
    </v-row>
</template>

<script setup>
import ProfileBanner from '@/components/parent/ProfileBanner.vue'
import ChildrenSlider from '@/components/parent/ChildrenSlider.vue'
import MoreFeature from '@/components/parent/MoreFeature.vue'
</script>
