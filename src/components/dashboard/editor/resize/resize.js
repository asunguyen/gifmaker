import imageService from '@/service/image.js'

export default {
    data() {
        return {
            percentage: '',
            width: '',
            height: '',
            type: '',
            aspect_ratio: '0'
        }
    },
    watch: {
        percentage: function (new_percentage) {
            let img_info = JSON.parse(sessionStorage.getItem('img_info'))

            this.width = img_info.width * new_percentage / 100
            this.height = img_info.height * new_percentage / 100
        }
    },
    methods: {
        init() {
            let img_info = JSON.parse(sessionStorage.getItem('img_info'))
            this.percentage = 100
            this.width = img_info.width
            this.height = img_info.height
            this.type = img_info.type
        },
        doResize() {
            let image = imageService.resize(
                sessionStorage.getItem('img_src'),
                this.type,
                this.width,
                this.height
            )
            // console.log(image)
            imageService.download(image, this.type)
        }
    },
    mounted() {
        this.init()
    }
}