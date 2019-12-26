import { COMMON } from "../comon/common.js";
export default {
  urlApi: COMMON.APIURL,
  authorization: localStorage.getItem("Authorization"),

  async get(url, data) {
    const response = await fetch(this.urlApi + url, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      },
      method: "GET",
      params: data
    });
    const result = await response.json();
    return result;
  },
  async getUrl(url, data) {
    const response = await fetch(url, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      },
      method: "GET",
      params: data
    });
    const result = await response.json();
    return result;
  },
  async post(url, data) {
    const response = await fetch(this.urlApi + url, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      },
      method: "POST",
      body: data
    });
    const result = await response.json();
    return result;
  },
  async postUrl(url, data) {
    const response = await fetch(url, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      },
      method: "POST",
      body: data
    });
    const result = await response.json();
    return result;
  },
  async put(url, data) {
    const response = await fetch(this.urlApi + url, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      },
      method: "PUT",
      body: data
    });
    const result = await response.json();
    return result;
  },
  async delete(url, data) {
    const response = await fetch(this.urlApi + url, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      },
      method: "DELETE",
      body: data
    });
    const result = await response.json();
    return result;
  },
  async uploadImage(url, data) {
    const response = await fetch(this.urlApi + url + "?page=" + data.page, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      },
      method: "POST",
      body: data.file
    });
    const result = await response.json();
    return result;
  }
};
