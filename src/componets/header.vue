<script>
    export default{
        
    }
</script>

<template>
    <header class='top-header'>
        <router-link class='nav-item' active-class='nav-active' to='/mytest'>mytest</router-link>
        <router-link class='nav-item' active-class='nav-active' to='/app'>app</router-link>
        <router-link class='nav-item' active-class='nav-active' to='/muse'>muse</router-link>
    </header>
</template>
<style lang="scss">
    @import url('./global.scss');
    @import url('../../node_modules/muse-ui/dist/muse-ui.css');
    header{
        $linkColor:#c2f #1ab;
        text-align: center;
        a{
            color:nth($linkColor,1);
            font-size:18px;
            &:hover{
                color:nth($linkColor,2);
            }
        }
    }
</style>