$(function(){
    setInterval(function() {
        if($(".index")) {
            $(".index").parent().css("background-color", "transparent")
            $(".index").parent().css("padding", "0")
        }
        if($(".post")) {
            $(".post").parent().css("-webkit-box-shadow", "5px 5px 10px #ababab")
            $(".post").parent().css("-moz-box-shadow", "5px 5px 10px #ababab")
            $(".post").parent().css("border-radius", "10px")
        }
    }, 100)
})