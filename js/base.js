function notices() {
    document.getElementById('light').style.display = 'flex';
    document.getElementById('fade').style.display = 'block';
}

function base(){
    // 控制按钮的显示和消失
    console.log('in')
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.toTop').fadeIn(500);
        }
        else { $('.toTop').fadeOut(500); }
    })
    // 点击按钮，使得页面返回顶部
    $(".toTop").click(function () {
        scrollTo(0, 0);
    });

    $(".navStack").click(function () {
        if (!$(".navIcon").hasClass("current")) {
            $(".navIcon").addClass("current");
            $(".navMenu").css("visibility", "visible");
        } else {
            $(".navIcon").removeClass("current");
            $(".navMenu").css("visibility", "hidden");
        }
    });

}