define(function (require,exports,module) {

    // 注册组件，传入一个扩展的构造器
    Vue.component('myCom', Vue.extend({
        template: '<h1>我的自定义组件</h1>'+
        '    <p>'+
        '           {{$parent.$data.myComData}}' +
        '           <button v-on:click="myComBtnClick">我是自定义组件按钮</button>' +
        '    </p>'
        ,replace:true
        ,data:function(){
            return {
                myComData:"sdfsadf"
            };
        }
        ,methods:{
            myComBtnClick:function () {
                this.$parent.$data.myComData = "改变了父组件的数据！";
            }
        }
    }));


});
