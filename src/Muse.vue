<template>
    <div class="muse-page">
        <headerNav></headerNav>
        <mu-appbar title="Title">
          <mu-icon-button icon="title" slot="left"/>
          <mu-flat-button label="expand_more" slot="left"/>
          <mu-flat-button href="333" label="expand_more" slot="left"/>
          <mu-icon-button icon="expand_more" slot="right"/>
        </mu-appbar>

        <mu-list>
          <mu-list-item title="图片" disabled>
            <mu-avatar slot="left" src="http://www.muse-ui.org/images/uicon.jpg"/>
          </mu-list-item>
          <mu-list-item title="图片,自定义大小" disabled>
            <mu-avatar  slot="left" src="http://www.muse-ui.org/images/uicon.jpg" :size="30" />
          </mu-list-item>
          <mu-list-item title="图标" disabled>
            <mu-avatar slot="left" icon="folder" iconSize='12'/>
          </mu-list-item>
          <mu-list-item title="图标, 自定义大小、颜色" disabled>
            <mu-avatar slot="left" icon="文" color="orange500" backgroundColor="pink800" :size="40" :iconSize="20"/>
          </mu-list-item>
          <mu-list-item title="文字" disabled>
            <mu-avatar slot="left" color="deepOrange300" backgroundColor="purple500">MB</mu-avatar>
          </mu-list-item>
        </mu-list>
    </div>
</template>
<script>
    import headerNav from './componets/header.vue';
    export default{
        components:{
            headerNav
        }
    }
</script>
<style lang="scss">
    
</style>