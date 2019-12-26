import { service } from "../login/login.service.js";
import LoadingCom from "../../components/loading/loading.vue";
export default {
    components: {
        LoadingCom
    },
    data: function () {
        return {
            fullname: "",
            email: "",
            username: "",
            password: "",
            repassword: ""
        }
    },
    methods: {
        register: function () {
            $(".loading").show();
            var thisVue = this;
            if (this.checkValue(this.username) && this.checkValue(this.password)
                && this.checkValue(this.repassword) && this.password === this.repassword) {
                if (this.password.length > 8) {
                    service.register({ username: this.username, password: this.password }, function (data) {
                        if (data.status_code === 200 || data.status_code === 201) {
                            thisVue.$router.push({ "name": "login" });
                        } else {
                            thisVue.$swal("User name đã tồn tại, Vui lòng thử lại với tên khác khác!");
                        }
                        $(".loading").hide();
                    });
                } else {
                    thisVue.$swal("Mật khẩu phải dài 8 ký tự trở lên");
                    $(".loading").hide();
                }
            } else {
                thisVue.$swal("Vui lòng không được để trống và xác nhận mật khẩu phải giống nhau");
                $(".loading").hide();
            }
        },
        checkValue: function (val) {
            if (val && val.length > 0) {
                return true;
            }
            return false;
        },
        routerLogin: function () {
            this.$router.push({ "name": "login" });
        }
    }
}