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
        $('.tabContents section').removeClass('on').eq(theNum).addClass('on');
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