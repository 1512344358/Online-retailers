    //用户名正则判断
    $('#user').focus(function () {
        $('#sred1').text('请输入手机号或者邮箱');
        $('#sred1').css('color', '#CCCCCC');

    })

    $('#user').blur(function () {
        var str = $('#user')[0].value;

        //手机号或者邮箱
        var reg = /^0?(13|14|15|17|18|19)[0-9]{9}$/;
        var reg1 = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
        if (reg.test(str) || reg1.test(str)) {
            //alert('输入格式正确');
            $('#pn1').css('display', 'block');
            $('#realnum').css('display', 'block');
            $('#randnum').css('background', 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() *
                255) + ',' + Math.floor(Math.random() * 255) + ')', '0.3');
            var randoms = Math.floor(Math.random() * 888888 + 111111);
            $('#randem').click(function () {


                randoms = Math.floor(Math.random() * 888888 + 111111);
                $('#randnum').text(randoms);
                $('#randnum').css('background', 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(
                    Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')', '0.3');
            })
            $('#randnum').text(randoms);
        } else {
            $('#sred1').text('请输入正确的手机号或者邮箱');
            $('#sred1').css('color', 'red');

        }
    })

    //验证验证码
    $('#realinput').blur(function () {
        var str = $('#realinput')[0].value;
        var str1 = $('#randnum').text();
        if (str != str1) {
            $('#wrongem').css('display', 'block');
        }
    })

    $('#realinput').focus(function () {
        $('#wrongem').css('display', 'none');

    })
    //验证密码
    $('#upassword').blur(function () {
        var str = $('#upassword')[0].value;
        //请输入6-到12位只能字母数字下划线
        var reg = /^[\w]{6,12}$/;
        if (!reg.test(str)) {
            $('#wrongspan').css('display', 'block');
        }
    })

    $('#upassword').focus(function () {
        $('#wrongspan').css('display', 'none');
    });
    //验证码框得焦
    //确认密码
    $('#subpass').blur(function () {

        var str = $('#upassword')[0].value;

        var str1 = $('#subpass')[0].value;
        if (str != str1) {
            $('#wrongspan2').css('display', 'block');
        }
    })
    $('#subpass').focus(function () {
        $('#wrongspan2').css('display', 'none');
    });

    //存入到cookie中
    $('#register_username').click(function () {
        var result = $('#user')[0].value == '' || $('#upassword')[0].value == '' || $('#subpass').value == '' || $('#realinput')[0].value == '';

        if (result == true) {

            alert('你输入的必填不能为空');
        }

        if (searchCookie($('#user')[0].value) != null) {
            alert('你输入的用户名' + $('#user')[0].value + '已经存在');

        } else {

            $('.body_all').css('display', 'block');
            var userstr = '欢迎' + $('#user')[0].value + '注册成功'
            $('#regsucc').text(userstr);
            createCookie($('#user')[0].value, $('#upassword')[0].value, 7);
        }
    })