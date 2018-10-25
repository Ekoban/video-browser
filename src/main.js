import Vue from 'vue';
import App from './App';

new Vue ({
    el:'#app', // slight difference with Vue-CLI boilerplate (.$mount)
    render: h => h(App)
})

