function warning(msg) {
    $('.signUpTitle').css('border-left', '10px solid rgb(233, 6, 41)');
    $('.loginNotice').css('display', 'block');
    $('.noticeText').html(msg)
}

function success(msg) {
    $('.loginNotice').removeClass('waring');
    $('.loginNotice').addClass('success');
    $('.signUpTitle').css('border-left', '10px solid rgb(33, 137, 29)');
    $('.loginNotice').css('display', 'block');
    $('.notice-i').html('');
    $('.noticeText').html(msg);

}

// 跳转到注册页面
function skipRegister() {
    window.location.href = "register.html"
}
// 登录事件
function enter() {
    // 获取用户输入的账号
    let tel = document.getElementById("tel").value;
    // 获取用户输入的密码
    let pwd = document.getElementById("pwd").value;
    // 判断本地是否有数据 如果没有数据直接提示未注册
    if (localStorage.length == 0) {
        warning("该账号还未注册");
    } else {
        let teldata = [] // 创建一个数组   用于存储本地所有已存储的邮箱
        let pwddata = [] // 创建一个数组   用于存储本地所有已存储的密码
        let iddata = [] // 创建一个数组   用于存储本地所有已存储的id
        let namedata = [] // 创建一个数组   用于存储本地所有已存储的name
        // 循环判断本地是否有次邮箱号
        for (let i = 0; i < localStorage.length; i++) {
            // 获取所有的key钥匙
            let key = localStorage.key(i)
            console.log(key);
            // 通过key拿到对应的数据进行判断
            let keydata = localStorage.getItem(key); // 拿到对应数据  只不过这时候是字符串
            let keyinfo = JSON.parse(keydata) // 将字符串转化为对象的形式
            console.log(keyinfo);
            // 向数组中添加数据   我们通过下标i的方式添加   这样邮箱号我密码是对应的   不能通过push添加！！！  不然邮箱号和密码是乱的
            teldata[i] = keyinfo.tel
            pwddata[i] = keyinfo.pwd
            iddata[i] = keyinfo.id
            namedata[i] = keyinfo.name
        }
        // 判断此邮箱号是否注册
        if ((teldata.indexOf(tel) < 0) && (namedata.indexOf(tel) < 0)) {  // indexof方法用户查看一个数组中是否有某个值，如果没有它会返回-1，有的话他会返回对应的下标
            warning("此账号未注册");

        } else {
            let telIndex = teldata.indexOf(tel) // 返回对应邮箱号的下标   我们通过下标去判断密码
            let nameIndex = namedata.indexOf(tel)
            if (pwddata[telIndex] != pwd && pwddata[nameIndex] != pwd) {
                $('.signUpTitle').css('border-left', '10px solid rgb(233, 6, 41)')
                warning("密码错误");
            } else {
                console.log(iddata[telIndex == -1 ? nameIndex : telIndex]);
                $('.signUpTitle').css('border-left', '10px solid rgb(33, 137, 29)')

                // 定时器
                console.log(localStorage.valueOf());
                setTimeout(function () {
                    window.location.href = "index.html?" + iddata[iddata.indexOf(telIndex == -1 ? nameIndex : telIndex)]
                }, 2000);
                success("登录成功,2s后将跳转到首页")
            }
        }
    }
}


