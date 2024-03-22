function warning(msg) {
    $('.regTitle').css('border-left', '10px solid rgb(233, 6, 41)');
    $('.loginNotice').css('display', 'block');
    $('.noticeText').html(msg)
}

function success(msg) {
    $('.regTitle').css('border-left', '10px solid rgb(33, 137, 29)');
    $('.loginNotice').css('display', 'block');
    $('.loginNotice').removeClass('waring');
    $('.loginNotice').addClass('success');
    $('.notice-i').html('');
    $('.noticeText').html(msg);

}

function skipindex() {
    window.location.href = "login.html"
}
// 注册按钮事件
function affirm() {
    // 获取昵称
    let name = document.getElementById("name").value;
    // 获取邮箱号
    let tel = document.getElementById("tel").value;
    // 获取密码
    let pwd = document.getElementById("password").value;
    // 获取确认密码
    let affpas = document.getElementById("affirmPassword").value;
    // 邮箱正则表达式
    let myreg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (localStorage.length == 0) { // 判断本地是否有数据  没有的话判断邮箱号和密码
        if (pwd != affpas) {
            warning("第二次输入的密码不相同")
        } else if (!myreg.test(tel)) {
            warning("邮箱格式不对")
        } else if (($('.agreeBox').prop('checked')) == false) {
            warning('未同意用户协议');
        } else {
            // 动态向本地添加数据
            let dataLength = localStorage.length // 获取现在已有数据的长度  这个长度用于拼接到本地存储的每个key值中  达到一个动态存储的效果  每条本地存储数据需要一个钥匙   也就是获取这条数据的名称  就是key
            // 创建一个对象用于存储用户输入的数据
            let data = {}
            data.name = name; // 向对象添加昵称
            data.tel = tel // 向对象添加邮箱号
            data.pwd = pwd // 添加密码
            data.id = dataLength // 添加用户唯一凭证ID
            let info = JSON.stringify(data) // 将对象转化为字符串   因为本地存储只能存储字符串
            // 向本地存储数据   第一个参数就是key钥匙  第二个是我们要存储的数据
            localStorage.setItem("key" + dataLength, info);
            // 获取本地存储所有数据 查看是否存到本地
            console.log(localStorage.valueOf());
            // 当存储成功时  启动定时器   两秒钟后跳转到登录页面
            setTimeout(function () {
                window.location.href = "login.html"
            }, 2000)
            success("存储成功,2s后将跳转到登录页")
        }
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            // 获取所有的key钥匙
            let key = localStorage.key(i)
            // 通过key拿到对应的数据进行判断+
            let keydata = localStorage.getItem(key); // 拿到对应数据  只不过这时候是字符串
            let keyinfo = JSON.parse(keydata) // 将字符串转化为对象的形式
            console.log(keyinfo);
            // 判断用户输入的信息是否存在
            if (keyinfo.name == name) { // 判断本地存储的数据中是否有相同的昵称
                warning("昵称已存在")
                break;
            } else if (keyinfo.tel == tel) { // 判断本地存储的数据中是否有相同的邮箱号
                warning("邮箱号已注册")
                break;
            }else if(pwd.length<6){// 判断密码长度是否过短
                warning("密码长度过短");
                break;
            }else if (pwd != affpas) { // 判断两次输入的密码是否相同
                warning("第二次输入的密码不相同")
                break;
            } else if (!myreg.test(tel)) { // 判断邮箱号的格式
                warning("邮箱格式不对")
                break;
            } else if (!$('.agreeBox').is(":checked")) {
                warning('未同意用户协议');
                console.log('fo');
            } else {
                // 动态向本地添加数据
                let dataLength = localStorage.length // 获取现在已有数据的长度  这个长度用于拼接到本地存储的每个key值中  达到一个动态存储的效果  每条本地存储数据需要一个钥匙   也就是获取这条数据的名称  就是key
                // 创建一个对象用于存储用户输入的数据
                let data = {}
                data.name = name; // 向对象添加昵称
                data.tel = tel // 向对象添加邮箱号
                data.pwd = pwd // 添加密码
                data.id = dataLength // 添加用户唯一凭证ID
                let info = JSON.stringify(data) // 将对象转化为字符串   因为本地存储只能存储字符串
                // 向本地存储数据   第一个参数就是key钥匙  第二个是我们要存储的数据
                localStorage.setItem("key" + dataLength, info);
                // 获取本地存储所有数据 查看是否存到本地
                console.log(localStorage.valueOf());
                // 当存储成功时  启动定时器   两秒钟后跳转到登录页面
                setTimeout(function () {
                    window.location.href = "index.html"
                }, 2000)
                success("存储成功,2s后将跳转到登录页")
                break;
            }
        }
    }
};