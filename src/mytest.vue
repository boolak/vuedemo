<template>
    <div>
        <header-nav></header-nav>
        <h1 :style='{fontSize:"22px"}'>name:{{name | capitalize}}</h1>
        <h3>age:{{age+2}}</h3>

        <p>my favorite is:</p>
        <ol>
            <li v-for='fav in favs'>
                {{fav}}
            </li>
        </ol>
        
        <section v-on:mouseover='over'> 
            <input ref='input' v-focus v-model='msg'></input>{{msg}}
        </section>

        <list v-bind:citys='cities'/>

        <button @click='toggleBtn' class='static' v-bind:class='classObj'>click me</button>
        <span v-if='show'>apple</span><span v-else>banner</span>

        <div>
            <p>
                Ask a yes/no question:<input v-model="questions">
            </p>
            <p>{{ answer }}<img v-bind:src='img'/></p>
        </div>
    </div>

</template>

<script>
    import Vue from 'vue';
    import headerNav from './componets/header.vue';
    Vue.component('list', {
        props:['citys'],
        template: "<ol>\
                    <li v-bind:id='city.id' v-on:click='showCityId(city.id)' v-for='city in citys'>\
                        The city name is: <em>{{city.name}}</em>\
                    </li>\
                </ol>",
        methods:{
            showCityId:function(id){
                alert('click the city id:'+id);
            }
        }
    });
    Vue.directive('focus',{
        inserted:function(el){
            el.focus();
        }
    });
    export default{
        data(){
            return {
                name:'yoto',
                age:22,
                favs:['sing','run','swimming'],
                msg:'hello',
                cities:[
                    {name:'四川',id:1},
                    {name:'海南',id:2},
                    {name:'北京',id:3},
                    {name:'香港',id:4},
                    {name:'广州',id:5},
                    {name:'上海',id:6},
                ],
                show:true,
                img:'',
                questions:'',
                answer:'I cannot give you an answer until you ask a question!'
            }
        },
        watch:{
            questions:function(newQue){
                this.answer = 'waiting for you to stop typing';
                this.getAnswer()
            }
        },
        methods:{
            over:function(){
                this.age = this.age+1;
                console.log('input value is:'+this.$refs.input.value);
            },
            toggleBtn:function(){
                this.show = !this.show;
            },
            getAnswer:_.debounce(
                function(){
                    var _this = this
                    if (this.questions.indexOf('?') === -1) {
                        _this.answer = 'Questions usually contain a question mark. ;-)'
                        return
                    }
                    _this.answer = 'Thinking...'
                    axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        _this.answer = _.capitalize(response.data.answer);
                        _this.img = response.data.image;
                    })
                    .catch(function (error) {
                        _this.answer = 'Error! Could not reach the API. ' + error
                    })
                },
                // 这是我们为用户停止输入等待的毫秒数
                500
            )
        },
        filters:{
            capitalize:function(val){
                if(!val) return '';
                return val+'^-^';
            }
        },
        computed:{
            classObj:function(){
                return {
                    'success default':this.show,
                    'fail default':!this.show
                }
            }
        },
        components:{
            headerNav,
        }
    }
</script>

<style>
    h1{
        color:red;
    }
    h3{
        color:blue;
    }
    span{
        color:gray;
    }
    ol li{
        cursor: pointer;
    }
    button{cursor: pointer;}
    .success{
        color:green;
    }
    .fail{
        color: red;
    }
</style>