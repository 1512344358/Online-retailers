$('.user_pass').click(function () {
    $('#pass_login').css('display', 'block');
})
$('.user_erws').click(function () {
    $('#pass_login').css('display', 'none');
})
$('#user_login').focus(function () {
    $('#user_login')[0].value = '';
})
//验证码背景
$('#randnum').css('background', 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) +
    ',' + Math.floor(Math.random() * 255) + ')', '0.3');

var randoms = Math.floor(Math.random() * 888888 + 111111);

$('#randem').click(function () {
    randoms = Math.floor(Math.random() * 888888 + 111111);
    $('#randnum').text(randoms);
    $('#randnum').css('background', 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() *
        255) + ',' + Math.floor(Math.random() * 255) + ')', '0.3');
})
$('#randnum').text(randoms);

//验证码得焦
$('#realnum').focus(function () {
    $('#alerts').css('display', 'none');
    $('#realnum')[0].value = '';
})
//用户名登录框得焦
$('#user_login').focus(function () {
    $('#alerts').css('display', 'none');
    $('#realnum')[0].value = '';
})
//密码框得焦
$('#user_password').focus(function () {
    $('#alerts').css('display', 'none');
    $('#realnum')[0].value = '';
})

//登录判断
$('#btn_user').click(function () {
    var user = $('#user_login')[0].value;
    var psw = $('#user_password')[0].value;
    if (searchCookie(user) != null) {
        if (searchCookie(user) == psw) {
            if ($('#realnum')[0].value == $('#randnum').text()) {
                alert('用户' + $('#user_login')[0].value + '登录成功');
                createCookie('user', user, 7);
                location.href = '../../dist/html/index.html';
            } else {
                $('#alerts').css('display', 'block');
                $('#alertsp').text('验证码错误');
            }
        } else {
            $('#alerts').css('display', 'block');
            $('#alertsp').text('密码错误');
        }
    } else {
        $('#alerts').css('display', 'block');
        $('#alertsp').text('该用户不存在');
    }
})
