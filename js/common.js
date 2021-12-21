$(function(){
    
    hashChange();
    //监听URL地址变化
    let oldHref = location.href;
    setInterval(function() {
        let newHref = location.href;
        if (oldHref !== newHref) {
            let _oldHref = oldHref;
            oldHref = newHref;
            hashChange.call(window, {
                'type': 'hashchange',
                'newURL': newHref,
                'oldURL': _oldHref
            });
        }
    }, 100);
})

let hashChange = () => {
    if($(".index")) {
        $(".index").parent().css("background-color", "transparent")
        $(".index").parent().css("padding", "0")
    }
    if($(".post")) {
        $(".post").parent().css("-webkit-box-shadow", "5px 5px 10px #ababab")
        $(".post").parent().css("-moz-box-shadow", "5px 5px 10px #ababab")
        $(".post").parent().css("border-radius", "10px")
    }
    $.each($(".post-body p br"),function(index, item){
        $(item).after($("<span class='indent'></span>"));
    })
}
