import cookie from "js-cookie";

export default {
    getToken(){
        return cookie.get('admin-token')
    }
}