import gifToVideo from "./gif-tovideo/gif-tovideo.vue";
import videoToGif from "./video-togif/video-togif.vue";
import makerGif from "./maker-gif/maker-gif.vue";
import ColorPicker from "../../components/color-picker/color-picker.vue";
export default {
    components: {
        gifToVideo,
        videoToGif,
        makerGif,
        ColorPicker
    },
    data: function() {
        return {
            tab: "makergif",
            fileUpload: {},
            urlFile: "",
            fillter: "",
            numberOfFrame: 1,
            frameDuration: 1,
            fontWeight: 400,
            fontSize: 8,
            fontFamily: "",
            fontColor: ""
        }
    },
    methods: {
        handleFileUpload: function() {
            // var thisVue = this;
            // this.fileUpload = this.$refs.file.files[0];
            // var formData = new FormData();
            // formData.append("file", this.fileUpload);
            // imageService.uploadImage(
            //   { file: formData, page: thisVue.$route.params.id },
            //   function(res) {
            //     thisVue.listImage.unshift(res.data);
            //   }
            // );
        },
        updateColor: function(val) {
            console.log("color: ", val);
        }
    },
    mounted: function() {

    }
}