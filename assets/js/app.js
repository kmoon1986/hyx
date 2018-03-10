define(["jquery","swiper"],function($){

	var myScript = {};


	var headerFunction = function(header,event,fixedClass,secClass,appearClass,hideHeight,menu,downLnk,downLst,downClass){
		var $nav = $(header),// 获取导航节点
			navTop = $nav.offset().top,// 获取导航节点距离顶部位置
			navH = $nav.outerHeight(),// 获取导航的高度(包括border)
			winTopDefult = 0,// 设置初始位置
			winWidth = $(window).width(),// 判断浏览器宽度(可用于自适应是否启用此效果)
			$menu = $(menu);//获取菜单节点

		// 判断滚动条
		$(window).bind(event,function(){
			var winTop_2 = $(window).scrollTop();// 滚动条距离顶部距离
			//开始浮动，不过不显示
			if(winTop_2>navTop && winWidth>940){
				$nav.addClass(fixedClass);
				if(winTop_2>winTopDefult){
					$nav.addClass(secClass);
					if(winTop_2>hideHeight){
						$nav.removeClass(secClass);
					}
				}
			}else{
				$nav.removeClass(fixedClass);
			}
			//判断鼠标向上滚动，显示出来
			if(winTop_2>winTopDefult && winWidth>940){
				$nav.removeClass(appearClass);
				$menu.find(downLnk).find(downLst).slideUp('fast');
				$menu.find(downLnk).removeClass(downClass);
			}else if(winTop_2<winTopDefult){
				$nav.addClass(appearClass);
				$nav.removeClass(secClass);

			}
			winTopDefult = $(window).scrollTop();// 滚动后距离赋值
		})

		//下拉菜单绑定事件
		$menu.find(downLnk).hover(function(){
			$(this).find(downLst).slideDown('fast');
			$(this).addClass(downClass);
		},function(){
			$(this).find(downLst).slideUp('fast');
			$(this).removeClass(downClass);
		})

	}
	//调用范例 app.headerFunction('#_header','scroll','head_fixed','head_sec','head_appear','500','#_menu','li.down','downLst','hov');

	var banner = function(obj,opt){
		var $obj = $(obj);
		(function($){
		    $.fn.extend({
		        s:function(){
		            var defaults = {
		            	autoplay:3000,
		            	speed:300,
		            	effect:"slide",
		            	pagination:null,
		            	loop:true,
		            	prevButton:'.swiper-button-prev',
						nextButton:'.swiper-button-next'
		            };
		            options = $.extend({},defaults, opt);
					var mySwiper = new Swiper($(this),options);
		        }
		    });
		})(window.jQuery);
		$obj.s(opt);
	};

	var weixin = function(lnk,weixinWindow,showClass){
		var $lnk = $(lnk),
			$weixinWindow = $(weixinWindow);
		$lnk.bind('click',function(){
			var $img = $(this).attr('data-weixinImg');
			$weixinWindow.find('img').attr('src',$img);
			$weixinWindow.addClass(showClass).bind('click',function(){
				$(this).removeClass(showClass);
			});
		})
	}

	//调用范例
    // app.banner('#_banner',{
    //     prevButton:'#_prev',
    //     nextButton:'#_next'
    // });

	myScript.headerFunction = headerFunction;
	myScript.banner = banner;
	myScript.weixin = weixin;

	return myScript;
});

