define(function (require,exports,module) {
    var Tools = {
        setData:function (opts) {
            opts.callback(opts.a + opts.b);
        }
    };

    module.exports = Tools;
});