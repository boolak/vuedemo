<template>
    <div id="vue-box">
        <header-nav></header-nav>
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
    </div>
</template>

<script>
    import headerNav from './componets/header.vue';
    export default {
        name: 'vue-box',
        data () {
            return {
                msg: 'Welcome to Your Vue App'
            }
        },
        components:{
            headerNav,
        }
    }
</script>

<style lang="scss">
    #vue-box {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #vue-box h1, #vue-box h2 {
        font-weight: normal;
    }
    #vue-box img{
        height:200px;
    }
    #vue-box ul {
        list-style-type: none;
        padding: 0;
    }

    #vue-box li {
        display: inline-block;
        margin: 0 10px;
        a {
            color: #42b983;
        }
    }
</style>
