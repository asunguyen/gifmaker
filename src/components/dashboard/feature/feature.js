import adv from '@/components/comon/adv/adv.vue'
import heading from '@/components/comon/heading/heading.vue'
import card from '@/components/comon/card/card.vue'
import { COMMON } from '@/comon/common.js'

export default {
    components: {
        adv,
        card,
        heading
    },
    data() {
        return {
            feature: COMMON.feature
        }
    },
    methods: {
        goUpload(title, path) {
            this.$router.push({ path: 'upload', query: {feature: title, path: path} })
        }
    }
}