$("#hamburger-menu").on("click", function changeImage(){
    if ($("#hamburger-menu").attr("src") == "./images/icon-hamburger.svg") {
        $("#hamburger-menu").attr("src", "./images/icon-close.svg");
        $("#container-menu").css("display", "block");
        $("#menu").css("display", "block");
        $("body").addClass("block-scroll");
    }else{
        $("#hamburger-menu").attr("src", "./images/icon-hamburger.svg");
        $("#container-menu").css("display", "none");
        $("#menu").css("display", "none");
        $("body").removeClass("block-scroll");
    }
});

