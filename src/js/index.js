    //中文下拉
    $('.lang').hover(function () {
        $('.lang').css('color', '#ffb81c');
    }, function () {
        $('.lang').css('color', '');
        $('.language').css('display', 'none');
    })
    $('.lang').click(function () {
        $('.language').css('display', 'block');
    })

    $('.language span').each(function () {
        $(this).hover(function () {
            $(this).css('background', 'lightgray');
        }, function () {
            $(this).css('background', '#fff');
        });
    });

    $('.Rmb').hover(function () {
        $('.Rmb').css('color', '#ffb81c');
    }, function () {
        $('.Rmb').css('color', '');
    })
    $('.user a').each(function () {
        $(this).hover(function () {
            $(this).css('color', '#ffb81c');
        }, function () {
            $(this).css('color', '#000');
        });
    })

    //搜索框
    $('.s1').click(function () {

        $('#search_span').css('display', 'none');
        $('#search_box').css('display', 'block');
        $('#search_box').animate({
            'width': '200px'
        }, 1000);
    });
    $('.rspan').click(function () {
        $('#search_span').css('display', 'none');
        $('#search_box').css('display', 'block');
        $('#search_box').animate({
            'width': '200px'
        }, 1000);
    });

    $('#search_btn').blur(function () {
        console.log('hahah');
        $('#search_box').animate({
            'width': '0'
        }, 1000, function () {
            $('#search_box').css('display', 'none');
            $('#search_span').show();
        });

    });

    //头部 鼠标移入效果
    $('.sec img').hover(function () {
        //$('.sec img').css('background','black')
        $('.sec img').animate({
            "opacity": "0.8"
        }, 500);
    }, function () {
        $('.sec img').animate({
            "opacity": "1"
        }, 500);
    })
    $('.inter_img2 img').hover(function () {
        $('.inter_img2 img').animate({
            "opacity": "0.8"
        }, 500);
    }, function () {
        $('.inter_img2 img').animate({
            "opacity": "1"
        }, 500);
    })

    //轮播图 请求服务器数据
    $.ajax({
        type: "get",
        url: "../json/index.json",
        async: true,
        success: function (msg) {
            //console.log(msg.id)
            var str = "";
            for (var i in msg) {
                str +=
                    `
                        <div class="carousel_star">
                        <div class="hide">	
                        <img src="../image/${msg[i].src}">
                        <h4><i>${msg[i].name}</i></h4>
                        <p>${msg[i].introduce}</p>
                        <p class="bot_p"></p>
                        <p>${msg[i].Price}</p>
                    </div>
                </div>	 `
            }
            $(".carousel_img").html(str)
        }
    })

    //轮播部分
    $('.carousel_bott .carous_i2').click(function () {
        var leave = $('.carousel_img')[0].offsetLeft;
        var move = -1210 + leave;
        if (move < -3630) {
            $('.carousel_img')[0].style.marginLeft = '0';
            $('.carousel_img').animate({
                'marginLeft': -1210
            });
        } else {
            $('.carousel_img').animate({
                'marginLeft': move
            });
        }
    })
    //左点击
    $('.carousel_bott .carous_i').click(function(){
		
		var leave = $('.carousel_img')[0].offsetLeft;
		var move2 =  1210+leave; 
		if(move2>0){
			$('.carousel_img')[0].style.marginLeft='-3630px';
			$('.carousel_img').animate({'marginLeft':-2420});
		}else{
			$('.carousel_img').animate({'marginLeft':move2});
		}
	
	
})

    //遮盖
    $('.wardrobe_img1').hover(function () {
        $('.wardrobe_mask').css('display', 'block');
    }, function () {
        $('.wardrobe_mask').css('display', 'none')
    })

    $('.kuke .kuke_img1').mouseenter(function () {
        $('.kuke .kuke_mask1').css('display', 'block');
    })

    $('.kuke .kuke_img1').mouseleave(function () {
        $('.kuke .kuke_mask1').css('display', 'none');
    })

    $('.kuke_img2').hover(function () {
        $('.kuke_mask2').css('display', 'block');
    }, function () {
        $('.kuke_mask2').css('display', 'none');
    })

    $('.kuke_img3').hover(function () {
        $('.kuke_mask3').css('display', 'block');
    }, function () {
        $('.kuke_mask3').css('display', 'none');
    })

    $('.Global_img1').hover(function () {
        $('.img_mask1').css('display', 'block');
    }, function () {
        $('.img_mask1').css('display', 'none');
    });

    $('.Global_img2').hover(function () {
        $('.img_mask2').css('display', 'block');
    }, function () {
        $('.img_mask2').css('display', 'none');
    });

    $('.Global_img3').hover(function () {
        $('.img_mask3').css('display', 'block');
    }, function () {
        $('.img_mask3').css('display', 'none');
    });

    // 尾部动画
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

    // //二级菜单
    // $.ajax({
    //     type: 'get',
    //     url: '../json/data.json',
    //     cache: true,
    //     success: function (msg) {
    //         fn(msg, '.b1')
    //     }
    // });

    // function fn(msg, obj) {
    //     var str = "";
    //     for (var i in msg) {
    //         for (var j = 0; j < msg[i].name.length; j++) {
    //             var pro = msg.navtable1.name[j]
    //         }
    //     }
    //     console.log(msg.navtable1.name)
    //     for (var z = 0; z < msg.navtable1.name.length; z++) {
    //         str += `<li> ${msg.navtable1.name[z]}  <li>`;

    //     }

    //     $(".b1").html(str)
    // }
