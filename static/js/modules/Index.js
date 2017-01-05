// 定义组件

define(function (require,exports,module) {
    var sTpl = require("templates/Index.html");

    var VueComponent = Vue.extend({
        template: sTpl
    });

    module.exports = VueComponent;
});

