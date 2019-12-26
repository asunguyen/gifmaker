import resfult from "../../service/resfult.js";
export const service = {
    login: async function(data, next) {
        let res = await resfult.post("auth/login", data);
        next(res);
    },
    register: async function(data, next) {
        let res = await resfult.post("auth/register", data);
        next(res);
    },
};