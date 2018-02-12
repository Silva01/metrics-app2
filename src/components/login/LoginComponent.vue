<template>
    <div class="wrapper fadeInDown">
        <div id="formContent">
            <!-- Tabs Titles -->
            <h2 class="active"> Login </h2>

            <!-- Icon -->
            <div class="fadeIn first">
            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
            </div>

            <!-- Login Form -->
            <form>
            <input 
                type="text" 
                id="login" 
                class="fadeIn second" 
                name="login" 
                placeholder="Usuário"
                v-model="form.user">

            <input 
                type="password" 
                id="password" 
                class="fadeIn third" 
                name="login" 
                placeholder="Senha"
                v-model="form.pass">

            <input type="button" class="fadeIn fourth" value="Log In" v-on:click="get(form)">
            </form>

            <!-- Remind Passowrd -->
            <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
            </div>

        </div>
    </div>
</template>

<script>

import Router from 'vue-router'

export default {
    name:'login-component',
    data() {
        return {
            form: {
                use: '',
                pass: ''
            }
        }
    },
    methods:{
        get: (form) => {

            let router = new Router()
            
            if (form.user != "" && form.pass != "") {
                sessionStorage.setItem('token', '123456');
                router.push('/home')
                router.go('/home')
            } else {
                router.go('/')
            }
        }
    }
}
</script>

<style>
    @import './loginComponent.css';
</style>
