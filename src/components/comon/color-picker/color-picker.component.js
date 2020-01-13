import { Chrome, Compact, Swatches } from "vue-color";

export default {
  components: {
    Chrome,
    Compact,
    Swatches
  },
  props: ["name", "colors"],
  data() {
    return {
      showPicker: false,
      myColors: this.colors || "rgba(0,0,0,0)"
    };
  },
  watch: {
    colors: function(val) {
      if (val && val.rgba) {
        this.myColors =
          "rgba(" +
          val.rgba.r +
          "," +
          val.rgba.g +
          "," +
          val.rgba.b +
          "," +
          val.rgba.a +
          ")";
      } else {
        this.myColors = val || "rgba(0,0,0,0)";
      }
    },
    myColors: function(val) {
      if (val && val.rgba) {
        this.myColors =
          "rgba(" +
          val.rgba.r +
          "," +
          val.rgba.g +
          "," +
          val.rgba.b +
          "," +
          val.rgba.a +
          ")";
      } else {
        this.myColors = val || "rgba(0,0,0,0)";
      }
      this.$emit("colorPicker", this.myColors);
    }
  },
  methods: {
    active(ev) {
      ev.stopPropagation();
      this.showPicker = !this.showPicker;
    },
    selectcolor: function(ev) {
      ev.stopPropagation();
    }
  },
  mounted() {
    this.myColors = this.colors || "rgba(0,0,0,0)";
    var thisVue = this;
    $(window).click(function() {
      thisVue.showPicker = false;
    });
    setTimeout(function() {
      $(".color-picker").unbind("mouseup").mouseup(function(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        console.log("up");
      })
    },200);
  }
};
