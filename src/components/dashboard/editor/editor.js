import heading from '@/components/comon/heading/heading.vue'
import { COMMON } from '@/comon/common.js'

export default {
    components: {
        heading
    },
    data() {
        return {
            feature: COMMON.feature,
            img_url: '',
            img_info: {
                width: 0,
                height: 0,
                type: ''
            }
        }
    },
    methods: {
        goFeature(title, path) {
            this.$router.push({
                path: path,
                query: { feature: title }
            })
        },
        getImageInfo() {
            let img_url = sessionStorage.getItem('img_src')
            if (!img_url) {
                this.$swal({
                    type: 'error',
                    title: 'Image is invalid'
                })
            }
            this.img_url = img_url

            var img = new Image()
            img.src = img_url
            img.onload = () => {
                this.img_info.width = img.width
                this.img_info.height = img.height
                this.img_info.type = img_url.split(';')[0].split('/')[1]
                sessionStorage.setItem('img_info', JSON.stringify(this.img_info))
            }
        }
    },
    mounted() {
        this.getImageInfo()
    }
}