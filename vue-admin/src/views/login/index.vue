<!-- 页面 -->
<template>
    <div id="login">
        <div class="login-main">
            <ul class="header">
                <!-- <li :class="item.isSelect?'current':''" v-for="(item,index) in menuTab" :key="index">{{item.text}}</li> -->
                <li :class="{current:item.isSelect}" v-for="(item,index) in menuTab" :key="index" @click="changeMenu(item)">{{item.text}}</li>
            </ul>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-body">
                <el-form-item prop="username">
                    <label>邮箱</label>
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <label>密码</label>
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <label>验证码</label>
                    <el-row :gutter="15">
                        <el-col :span="14"><el-input v-model.number="ruleForm.age"></el-input></el-col>
                        <el-col :span="9" ><el-button type="success">获取验证码</el-button></el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" class="w100pc mt-20">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name:'login',
    data () {
        var checkAge = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
            if (!Number.isInteger(value)) {
                callback(new Error('请输入数字值'));
            } else {
                if (value < 18) {
                callback(new Error('必须年满18岁'));
                } else {
                callback();
                }
            }
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
            if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        return {
            menuTab:[
                {text:'登录',isSelect: true},
                {text:'注册',isSelect: false},
            ],
            ruleForm: {
                username: '',
                password: '',
                age: ''
                },
            rules: {
                username: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                age: [
                    { validator: checkAge, trigger: 'blur' }
                ]
            }
            
        }
    },
    methods:{
        changeMenu(item){
            this.menuTab.forEach(res =>{
                if(res.isSelect){
                    res.isSelect = false;
                }
            });
            item.isSelect = true;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
#login{
    height: 100vh;
    background: #36485D;
}
.login-main{
    width: 300px;
    margin: auto;
}
.header{
    display: flex;
    justify-content: space-around ;
    padding-top: 20%;
}

.header > li{
    height: 40px;
    width: 30%;
    line-height: 40px;
    text-align: center;
    color: white;
}
.current{
    background: rgba(0,0,0,0.2);
}
.login-body{
    margin-top: 20px;
    label{
        color: #ffffff;
        display: block;
        margin-bottom: -8px;
        margin-top: 10px;
    }
}
</style>
