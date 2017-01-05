// 定义组件

define(function (require,exports,module) {
    var sTpl = require("templates/Bar.html");
    require("js/lib/layer/layer.js");
    layer.config({ 
        path: './static/js/lib/layer/' //layer.js所在的目录，可以是绝对目录，也可以是相对目录
    });

    require("js/components/myCom.js");
    var tools = require("js/lib/tools.js");

    var VueComponent = Vue.extend({
        template: sTpl
        ,attached:function () {
            var t = this;
            /*setTimeout(function () {
                t.msg = "延迟改变的msg";
            },2000);*/

            $("#btn1").click(function () {
                t.msg = "dom操作的改变";
            });


            setTimeout(function () {
                tools.setData({
                    a:3,
                    b:2,
                    callback:function (result) {
                        $.ajax({
                            url:"index.html"
                            ,success:function () {
                                t.msg = "ajax请求后的改变"+result;
                            }
                        });
                    }
                });
            },2000);

        }
        ,methods:{
            click1:function(){
                this.msg = "zhang";
                layer.msg("我是Bar页面");
            }
        }
        ,data:function(){
            return {
                msg:"Bar页面"
                ,myComData:"自定义组件的数据"
            }
        }
    });

    module.exports = VueComponent;
});

