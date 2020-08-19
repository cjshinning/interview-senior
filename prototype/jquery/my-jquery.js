(function(window){

    var jQuery = function(selector){
        return new jQuery.fn.init(selector);
    }

    jQuery.fn = {
        css: function(key, value){
            alert('css');
        },
        html: function(value){
            return 'html';
        }
    }

    var init = jQuery.fn.init = function(selector){
        var dom = Array.prototype.slice(document.querySelectorAll(selector));

        var i,len = dom ? dom.length : 0;
        for(i = 0;i < len; i++){
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || '';
    }

    init.prototype = jQuery.fn;

    window.$ = jQuery;

})(window)