// 定义组件

define(function (require,exports,module) {
    var sTpl = require("templates/Foo.html");
    require("js/lib/layer/layer.js");
    layer.config({
        path: './static/js/lib/layer/' //layer.js所在的目录，可以是绝对目录，也可以是相对目录
    });

    require("js/components/myCom.js");
    
    var VueComponent = Vue.extend({
        template: sTpl
        ,data:function(){
            return {
                msg:"Foo页面!!!!!!!!!!"
                ,params1:""
                ,params2:""
            }
        }
        ,compiled:function () {
        }
        ,ready:function () {
            //console.log(this.$route.params);//路由参数
            // this.params1 = this.$route.params.params1;
            // this.params2 = this.$route.params.params2;
            //this.$set("params2",this.$route.params.params2);
            //this.$set("params1","sfasdf");
            //console.log("params1",this.$get("params2"));
            // console.log("this.$data",JSON.stringify(this.$data));
        }
        /**
         * 监控路由改变
         * */
        ,route: {
            data: function (transition) {
                return {
                    params1:transition.to.params.params1
                    ,params2:transition.to.params.params2
                }
            }
        }
        /**
         * 监控数据改变
         * */
        ,watch:{
            'params2': function (val, oldVal) {
                console.log("thisdata:",JSON.stringify(this.$data));
            }
        }
        ,methods:{
            click1:function(){
                this.msg = "zhang";
                layer.msg("我是Foo页面");
            }
        }
    });

    module.exports = VueComponent;
});

