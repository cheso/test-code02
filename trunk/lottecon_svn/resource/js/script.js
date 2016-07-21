/* gnb */
var gnb = function(){
    $(document).on('click','.h_menu',function(e){
        $('.fadeWrap').fadeIn(100);
        $('.fullMenu, .fullMenu h1').animate({"left":"0"},200)
        e.preventDefault;
        e.stopPropagation();
    }).on('click','.btnX, .fadeWrap',function(e){
        $('.fadeWrap').fadeOut(100);
        $('.fullMenu, .fullMenu h1').animate({"left":"-80%"},200);
        e.preventDefault;
        e.stopPropagation();
    });

    $(document).on('click','.aLink2',function(){
        $(this).not('.none').toggleClass('on');
        $(this).not('.none').next().slideToggle(200);
    })
};

/* radio, checkbox  span 라벨 */
var label = function(){
    $(document).on('click','.label',function(){
        $(this).prev().trigger('click');
    })
};

/* 버튼갯수 크기 조정 */
var btnCount = function(){
    var btnCnt = $('.btnArea:not(:hidden) button').length;
    if( btnCnt === 2 ){
        $('.btnArea button').css('width','49%');
    }if( btnCnt === 3 ){
        $('.btnArea button').css('width','32%');
    }
};

/* 잠재위험, 아차사고, 긴급재해 Tab */
var tabArea = function(){
    $(document).on('click','.uList1 li a', function(){
        var theNum = $(this).parent().index();
        $('.uList1 li').removeClass('active');
        $(this).parent().addClass('active');
        $('.oList1 li').removeClass('active').eq(theNum).addClass('active');
    })
};

/* 아이디, 비밀번호 찾기 */
var tab_change = function (){
    $(document).on('click','.tab_change li a', function(){
        var theNum = $(this).parent().index();
        $('.tab_change li').removeClass('on');
        $(this).parent().addClass('on');
        $('.tabContents > section').removeClass('on').eq(theNum).addClass('on');
    })
};

/* 부외 자산 */
var toggleList = function() {
    $(document).on('click','.buoiList dt a', function(e){
        $(this).parent().toggleClass('on');
        $(this).parent().next().toggle();

        e.preventDefault();
        e.stopPropagation();
    })
};

/* 현장개요 */
var toggleList2 = function() {
    $(document).on('click','.sumList dt a', function(e){
        $(this).toggleClass('on');
        $(this).parent().next().toggle();

        e.preventDefault();
        e.stopPropagation();
    })
};

/* 그래프 숨기기 */
var graphOn = function(){
    setInterval(function(){
        $('.oList1 li:nth-child(3)').hide(); }, 500
    );
};


/* push 대상자 토글 */
var aTog = function(){
    $(document).on('click','.aTog',function(e){
        $(this).parent().next().toggle();
        $(this).toggleClass('off');

        e.preventDefault();
        e.stopPropagation();
    });

};

/* 파일첨부 */
var filebox = function(){
    $(document).on("click",".fileBox .ph input",function(){
        var idx = $(".fileBox .ph input").index(this);
        $(".file input").eq(idx).click();
    }).on("change",".file input",function(){
        var idx = $(".file input").index(this);
        if(!$(this).val()) {
            $(".fileBox .ph em").eq(idx).show();
        }else{
            $(".fileBox .ph em").eq(idx).hide();
        }
        $(".fileBox .ph input").eq(idx).val($(this).val());
    })

};

/* 채팅 */
var chatBox = function(){
    var sHt = window.innerHeight - 280;
    $('.room').height(sHt);

    var objDiv = document.getElementById('room');
    objDiv.scrollTop = objDiv.scrollHeight;

    $(document).on('click','.cBtn1',function(){
        $('.menu1').toggle();
        $('.menu2').hide();
        var objBody1 = document.body;
        objBody1.scrollTop = objBody1.scrollHeight;

    }).on('click','.cBtn2',function(){
        $('.menu2').toggle();
        $('.menu1').hide();
        var objBody2 = document.body;
        objBody2.scrollTop = objBody2.scrollHeight;
    });
};

/* 공지대상 선택*/
var togBtn = function(){
    $(document).on('click','.togBtn',function(e){
        $(this).next().toggle();
        $(this).toggleClass('off');

        e.preventDefault();
        e.stopPropagation();
    });

};

/* show & hide button after each 3s  */
setInterval(function(){
    if(jQuery(".photoArea .cnt").hasClass("btn1s")==true){
        jQuery(".photoArea .cnt").removeClass("btn1s");
        jQuery(".photoArea .cnt").addClass("btn2s");
    }else{
        jQuery(".photoArea .cnt").removeClass("btn2s");
        jQuery(".photoArea .cnt").addClass("btn1s");
    }
},3000);

$(function(){
   gnb();
   var img1w = jQuery(".img1").width(); 
   var img1h = jQuery(".img1").height(); 
   var imgws = jQuery(".img1 img").width();
   var imghs = jQuery(".img1 img").height();
   if(imgws > imghs){
		var imghs2 = imghs/2;
		var rst = img1h/2 - imghs2;
		jQuery(".img1 img").css({"margin-top":rst+"px"});
   }
   
	jQuery(".emoticon .smSlider div").each(function(){
		var dswlist = jQuery(this).find("img").width();
		jQuery(this).css({"width":dswlist+"px"});
	});
	/*test*/
	jQuery(".h_back").on("click", function(){
		history.back();
	})
});
