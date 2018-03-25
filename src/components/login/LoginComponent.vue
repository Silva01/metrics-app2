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

<script lang="ts">

import Router from 'vue-router'
import Http from "../../assets/classes/http";

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
        get: (form: any) => {

            let http = new Http();

            http.post('http://metrics/service', {
              id: 'auth',
              jsonrpc: '2.0',
              auth: 'aaaa',
              method: 'login',
              params: {
                usuario: form.user,
                senha: form.pass
              }
          })
          .then(success => success.json())
          .then(data => {
            sessionStorage.setItem('token', data.result);
            window.location.href = '#/home';
          })
          .catch(e => {
            window.location.href = '#/login';
          });
        }
    }
}
</script>

<style>
    @import './loginComponent.css';
</style>
