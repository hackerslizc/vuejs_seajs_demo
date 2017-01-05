define(function (require,exports,module) {
    require("js/components/menu.js"); //导航

    // var Foo = require("modules/Foo.js");
    // var Bar = require("modules/Bar.js");


    // 路由器需要一个根组件。
    var App = Vue.extend({});

    // 创建一个路由器实例
    var router = new VueRouter();

    // 定义路由规则
    router.map({
        '/': {
            component: function (resolve) {
                require.async(['js/modules/Index.js'],resolve);
            }
        },
        '/foo/:params1/:params2': {
            name:"foo"
            ,component: function (resolve) {
                require.async(['js/modules/Foo.js'],resolve);
            }
        },
        '/bar': {
            component:function (resolve) {
                require.async(['js/modules/Bar.js'],resolve);
            }
        }
    });

    // 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
    router.start(App, 'html');

    router.afterEach(function (transition) {
        console.log('成功浏览到: ' + transition.to.path)
    })

});