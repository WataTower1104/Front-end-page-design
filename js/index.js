var id = window.location.search.slice(1);
console.log(id);
var key = localStorage.key(id); // 获取对应的key钥匙
console.log(key);
var data = localStorage.getItem(key); // 再通过key获取对应的数据
console.log(data); // 这是是字符串
var info = JSON.parse(data) // 将字符串转换为对象
console.log(info); // 对象
console.log(id)
var now = new Date();
var hour = now.getHours();
var changePoint = [5, 9, 11, 13, 18];
var greedState = ['早上好!', '上午好。', '中午好!', '下午好。', '晚上好。', '你好!'];

function isLogin() {
    if (localStorage.length !== 0) {
        $('.signOrReg').css('display', 'none');
        $('.userBar').css('display', 'block');
        $('.userName').html("<a href=\"javascript:void(0)\">" + info.name + "</a>")
    }
}

function changeTime() {
    for (var i = 0; i < 4; i++) {
        if (hour > changePoint[i] && hour < changePoint[(i % 4) + 1]) {
            $('#sayHello').html(greedState[i]);
        } else {
            $('#sayHello').html(greedState[4]);
        }
    }
}

function isclear() {
    // localStorage.clear()
    // console.log(localStorage.valueOf());
    $('.signOrReg').css('display', 'block');
    $('.userBar').css('display', 'none');
};

function changeGreet() {
    $('#sayHello').html(greedState[Math.floor(Math.random() * 6)]);
}

function examine() {
    console.log(localStorage.valueOf());
}

var marginVal = 0;
var i = 0;
var timer;

function change() {
    var position = $('.s1').css('margin-left');
    marginStr = "-" + marginVal + "%";
    var n = marginVal / 20;
    $(".bar").eq(n).addClass('light');
    $(".bar").eq((n + 1) % 5).removeClass('light');
    $(".bar").eq((n - 1) % 5).removeClass('light');
    $('.s1').css('margin-left', marginStr);
}

function showChange() {
    timer = setInterval(function () {
        marginVal += 20;
        if (marginVal == 100)
        marginVal = 0;
        change();
        
    }, 2000);
}

function prew() {
    clearInterval(timer);
    if (marginVal == 0) {
        marginVal = 100;
    }
    marginVal -= 20;
    change();
    showChange();
}

function next() {
    clearInterval(timer);
    if (marginVal == 80) {
        marginVal = -20;
    }
    marginVal += 20;
    change();
    showChange();
}

function index(){
    isLogin();
    showChange();
    $('.bar').hover(function () {
        i = $(this).index();
        marginVal = 20 * i;
        change();
        clearInterval(timer);
    }, function () {
        if (marginVal == 100)
            marginVal = 0;
        showChange();
    });

}