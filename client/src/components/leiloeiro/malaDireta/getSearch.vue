<template>
    <div>
        {{result}}
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            result: state => state.itemApp.resultLances
        })
    },
}
</script>
