import headers from '@/components/dashboard/header/header.vue'
import footers from '@/components/dashboard/footer/footer.vue'
import adv from '@/components/adv/adv.vue'
import card from '@/components/card/card.vue'

export default {
    components: {
        headers,
        footers,
        adv,
        card
    },
    methods: {
        goUpload(feature) {
            this.$router.push({ path: '/upload', query: { feature } })
        }
    }
}