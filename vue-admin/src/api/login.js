import service from '@/utils/request'

export default {
/**
 * 获取验证码
 */
GetSms(data){
    return service.request({
        method: 'post',
        url: '/getSms/',
        data: data
    })
}
}