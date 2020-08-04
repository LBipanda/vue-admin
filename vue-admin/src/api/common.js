import service from '@/utils/request'

export default {
    /**
     * 获取七牛云token
     */
    UploadImgToken(data){
        return service.request({
            method: 'post',
            url: '/uploadImgToken/',
            data: data
        })
    },


}