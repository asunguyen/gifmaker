import heading from '@/components/comon/heading/heading.vue'
import _ from 'lodash'

export default {
    components: {
        heading
    },
    data() {
        return {
            file_name: 'Click to choose file...',
            image_preview_src: '',
            link_src: '',
            is_img_url_not_valid: false
        }
    },
    watch: {
        link_src: _.debounce(function (new_link) {
            this.handleInputLink(new_link)
        }, 500)
    },
    methods: {
        handleInputFile(event) {
            const file = event.target.files[0]
            this.file_name = file.name
            this.is_img_url_not_valid = false
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                this.image_preview_src = reader.result
                sessionStorage.setItem('img_src', reader.result)
            }
        },
        handleInputLink(new_link) {
            let image = new Image()
            image.crossOrigin = 'anonymous'
            image.src = new_link
            image.onload = () => {
                if (image.width === 0) {
                    this.image_preview_src = ''
                    this.is_img_url_not_valid = true
                    return
                }
                
                let canvas = document.createElement('canvas')
                let context = canvas.getContext('2d')
                canvas.width = image.width
                canvas.height = image.height
                context.drawImage(image, 0, 0)
                let base64 = canvas.toDataURL('image/png')

                this.is_img_url_not_valid = false
                this.image_preview_src = base64
                sessionStorage.setItem('img_src', base64)
            }
            image.onerror = image.onabort = () => {
                this.image_preview_src = ''
                this.is_img_url_not_valid = true
            };
        },
        doUpload() {
            if (!this.image_preview_src) {
                this.$swal({
                    type: 'error',
                    title: 'Image is invalid'
                })
                return
            }

            this.$router.push({
                path: `editor/${this.$route.query.path}`,
                query: { feature: this.$route.query.feature }
            })
        }
    }
}