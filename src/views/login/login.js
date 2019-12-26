import {service} from "./login.service.js";
import LoadingCom from "../../components/loading/loading.vue";
export default {
    components: {
        LoadingCom
    },
    data: function() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        login: function() {
            var thisVue = this;
            $(".loading").show();
            if (this.username && this.username.length > 0 && this.password && this.password.length > 0) {
                service.login({username: this.username, password: this.password}, function(data) {
                    if (data.status_code === 200 || data.status_code === 201) {
                        localStorage.setItem("Authorization", data.data.token);
                        localStorage.setItem("user", JSON.stringify(data.data.user));
                        thisVue.$router.push({"name": "dashboard"})
                    } else {
                        thisVue.$swal("Vui lòng kiểm tra lại username và password");
                    }
                    $(".loading").hide();
                });
            } else {
                $(".loading").hide();
                thisVue.$swal("User name và Password không được để trống!");
            }
        },
        routerRegister: function() {
            this.$router.push({"name": "register"});
        }
    }
}