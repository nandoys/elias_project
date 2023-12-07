<template>
    <v-window-item
        :value="2"
    >
        <progress-list />
    </v-window-item>
</template>
<script>
import ProgressList from '@/components/parent/children/ProgressList.vue'
export default {
  components: { ProgressList },
    props: {
        tabIndex: Number
    },
    setup(props) {
        // setup() receives props as the first argument.
        console.log(props.tabIndex)
    }
}
</script>