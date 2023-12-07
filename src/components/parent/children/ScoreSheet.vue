<template>
    <v-window-item
        :value="1"
    >
        <score-list />
    </v-window-item>
</template>
<script>
import ScoreList from '@/components/parent/children/ScoreList.vue'

export default {
  components: { ScoreList },
    props: {
        tabIndex: Number
    }
}
</script>