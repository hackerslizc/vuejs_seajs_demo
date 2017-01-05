define(function (require,exports,module) {

    // 注册组件，传入一个扩展的构造器
    Vue.component('menu', Vue.extend({
        template: '<h1>Hello App!</h1>'+
        '    <p>'+
        '        <!-- 使用指令 v-link 进行导航。 -->'+
        '        <template v-for="item in aMenu">' +
        '           <a href="#/{{item.link}}">{{item.title}}</a> | ' +
        '         </template>'+
        '    </p>'
        ,data:function(){
            return {
                aMenu:[{link:"foo/a/b",title:"导航一"},{link:"foo/a/c",title:"导航一-1"},{link:"bar",title:"导航二"}]
            };
        }
    }));

});
