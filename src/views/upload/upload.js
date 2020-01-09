export default {
    data() {
        return {
            feature: ''
        }
    },
    watch: {
        '$store.state.feature': function (new_feature) {
            this.feature = new_feature
        }
    },
    methods: {
        updateFeature() {
            this.$store.dispatch('updateFeature', '123123123')
        }
    }
}