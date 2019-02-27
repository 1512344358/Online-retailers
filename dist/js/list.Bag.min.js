    //列表页的json获取
    window.onload = function () {
        var arr = [];
        var arr2 = [];
        $.get('../json/bagPouch.json?t=' + new Date().getTime(), function (str) {

            for (var kinds in str) {
                arr.push(kinds);
                var ds = str[kinds].split(',');
                arr2.push(ds);
            }

            var index = 0;
            $('.list_content dt').each(function () {
                index++;
                $(this).text('' + arr[index] + ':');
            });
            var index2 = 0;
            $('.list_content dd').each(function () {
                index2++;
                for (var i = 0, len = arr2[index2].length; i < len; i++) {
                    $(this).append('<a href="javascript:;" title=' + arr2[index2][i] + '>' + arr2[
                        index2][i] + '</a>');
                }

            })

            for (var j = 0, lens = arr2[0].length; j < lens; j++) {
                $('#list_shop').append('<a href="listBag.html">' + arr2[0][j] + '</a>');
            }

            $('#list_shop a').hover(function () {

                $(this).css('color', 'black').css('textDecoration', 'underline');
            }, function () {
                $(this).css('color', 'black').css('color', '#666').css('textDecoration', '');
            });
            //动态创建后的a中js交互
            $('#list_content a').hover(function () {
                $(this).css('color', 'red');

            }, function () {
                $(this).css('color', '#666');
            })
            //选择添加
            //解决异步问题
            $('#list_content dd a').click(function () {
                var that = $(this);
                new Promise(function (resolve, reject) {
                    var shop_dd = that.text();
                    var shop_dt = that.parent().parent().prev().text();
                    //console.log(shop_dd);
                    that.parent().parent().parent().remove();
                    var ems = $('#select_a').append('<a href="javascript:;">' + shop_dt +
                        shop_dd + '<em>x</em></a>');
                    $('.select_kind').css('display', 'block');
                    resolve(ems);

                }).then($('#select_a a em').click(function () {
                    $(this).parent().remove();

                }))
            })

            //多选问题
            $('.moresel').click(function () {
                var dda_text = "";
                var ddt_text = "";
                $('#list_content dd a').off('click');
                $('#list_content dd a').on('click', function () {
                    $(this).css('lineHeight', '24px');
                    $(this).css('marginTop', '10px');
                    $(this).css('border', '1px solid #666');
                    var str = $(this).text();
                    dda_text += str + '、';
                    ddt_text = $(this).parent().parent().prev().text();
                    return false;

                })
                var that = $(this);
                new Promise(function (resolve, reject) {
                    that.parent().prev().css('height', '200px');
                    //$(this).parent().prev().css('overflow','scroll');
                    var btn = that.parent().prev().append(
                        '<div id="btn"><button class="btn_ok">确定</button><button class="btn_down">取消</button></div>'
                    );
                    that.parent().css('display', 'none');


                    resolve(btn);
                }).then(
                    new Promise(function (resolve, reject) {
                        $('.btn_down').click(function () {
                            $(this).parent().parent().css('height', '45px');
                            $(this).parent().parent().children().css('border',
                                'none');
                            $(this).parent().parent().next().css('display', 'block');
                            $(this).parent().remove();

                        })


                        $('.btn_ok').click(function () {
                            $('#select_a').append('<a href="javascript:;">' +
                                ddt_text + dda_text + '<em>x</em></a>');
                            $('.select_kind').css('display', 'block');
                            $('.btn_ok').parent().parent().parent().parent().remove();
                            $('#select_a a em').click(function () {
                                $(this).parent().remove();

                            })
                            $('#list_content dd a').on('click', function () {
                                //多选和单选问题
                                var that = $(this);
                                new Promise(function (resolve, reject) {
                                    var shop_dd = that.text();
                                    var shop_dt = that.parent().parent()
                                        .prev().text();
                                    //console.log(shop_dd);
                                    that.parent().parent().parent()
                                        .remove();
                                    var ems = $('#select_a').append(
                                        '<a href="javascript:;">' +
                                        shop_dt + shop_dd +
                                        '<em>x</em></a>');
                                    $('.select_kind').css('display',
                                        'block');
                                    resolve(ems);

                                }).then($('#select_a a em').click(
                                    function () {
                                        $(this).parent().remove();

                                    }))
                                return false;
                            })
                        })
                    }).then()
                );
            });


            //点击更多按钮把隐藏的部分显示出来
            var i = 0;
            $('.mores').click(function () {
                if (i == 0) {
                    $(this).parent().parent().css('height', '200px');
                    $(this).children('i').html('&#xe609;');
                    i = 1
                } else {
                    $(this).parent().parent().css('height', '45px');
                    $(this).children('i').html('&#xe509;');
                    i = 0;
                }
            })
        })
        //js列表栏功能动画
        $('#tit_all').hover(function () {
            $('#tit_all').css('color', 'red');
        }, function () {
            $('#tit_all').css('color', '#666');
        })
        $('.list_i2').hover(function () {
            $('.list_i2 a').css('color', 'red');
            $('.list_i2').css('background', '#fff');
            $('.list_i2 i').html('&#xe504;');
            $('#list_shop').css('display', 'block');
            $('#list_shop a').css('color', '#666');
        }, function () {
            $('.list_i2 a').css('color', '#666');
            $('.list_i2').css('background', '');
            $('.list_i2 i').html('&#xe509;');
            $('#list_shop').css('display', 'none');
            $('#list_shop a').css('color', '');

        })

        //列表页中的图片部分js操作
        //吸顶
        $(window).scroll(function () {
            var scrolls = $(window).scrollTop();
            if (scrolls >= 1600) {

                $('#shop_select').css('position', 'fixed').css('top', '0').css('left', '50px')
            } else {
                $('#shop_select').css('position', 'static');
            }
        })
    }
    $.ajax({
        type: "get",
        url: "../json/list.json",
        async: true,
        success: function (msg) {
            var str = '';
            for (var i in msg) {
                str +=
                    `<li class="mall_li" id="mall_li1">
                                <img src="../image/${msg[i].src}"/>
                                <p class="li_local"><span>欧洲</span><span>自营</span><span>直降</span></p>
                                <p class="shop_info"><a href="" class="a_text">${msg[i].introduce}</a></p>
                                <p class="price_p">${msg[i].Price}</p>
                                <p class="shop_car"><span class="shop_add"><a href="">加入购物车</a></span><span>仅剩2件</span><span><a href=""><i class="iconfont">&#xe66c;</i>收藏</a></span></p>
                            </li>`
            }
            $(".shop_list").html(str)
        }
    })

    //鼠标滑过图片图片出现边框

    $('.mall_li').hover(function () {
        $(this).css('border', '2px solid #666');
        $(this).children('.shop_car').css('display', 'block');
    }, function () {
        $(this).css('border', 'none');
        $(this).children('.shop_car').css('display', 'none');
    })

    //鼠标点击第一个li跳转到详情页
    $('#mall_li1').click(function () {

        var imgSrc = $('#mall_li1 img')[0].src;
        var imgInfo = $('#mall_li1 .shop_info a').text();
        var imgPrice = $('#mall_li1 .price_p').text();

        window.location = '../html/detailsShop.html?imgSrc=' + imgSrc + '&imgInfo=' + imgInfo + '&imgPrice=' + imgPrice + '';

    })
    $('.server ul li a').hover(function () {
        $(this).css('text-decoration', 'underline');
    }, function () {
        $(this).css('text-decoration', 'none');
    });


    $('.weibo a').hover(function () {
        $('.weibo_er').css('display', 'block');
        $('.weibo a').css('text-decoration', 'underline');
    }, function () {
        $('.weibo_er').css('display', 'none');
        $('.weibo a').css('text-decoration', 'none');
    })
    $('.weixing a').hover(function () {
        $('.weixing_er').css('display', 'block');
        $('.weixing a').css('text-decoration', 'underline');
    }, function () {
        $('.weixing_er').css('display', 'none');
        $('.weixing a').css('text-decoration', 'none');
    });

    $('.APP .lione').hover(function () {
        $('.APP_er1').css('display', 'block');
        $('.APP .lione a').css('text-decoration', 'underline');
    }, function () {
        $('.APP_er1').css('display', 'none');
        $('.APP .lione a').css('text-decoration', 'none');
    })

    $('.APP .litwo').hover(function () {
        $('.APP_er2').css('display', 'block');
        $('.APP .litwo a').css('text-decoration', 'underline');
    }, function () {
        $('.APP_er2').css('display', 'none');
        $('.APP .litwo a').css('text-decoration', 'none');
    })

    $('.APP .lithree').hover(function () {
        $('.APP_er3').css('display', 'block');
        $('.APP .lithree a').css('text-decoration', 'underline');
    }, function () {
        $('.APP_er3').css('display', 'none');
        $('.APP .lithree a').css('text-decoration', 'none');
    })


    $('.footer_text span a').hover(function () {
        $(this).css('text-decoration', 'underline');
    }, function () {
        $(this).css('text-decoration', 'none');
    })