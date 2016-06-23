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
var tab_id_pass = function (){
    $(document).on('click','.tab_id_pass li a', function(){
        var theNum = $(this).parent().index();
        $('.tab_id_pass li').removeClass('on');
        $(this).parent().addClass('on');
        $('.tabContents section').removeClass('on').eq(theNum).addClass('on');
    })
};

/* 부외 자산 */
var toggleList = function() {
    $(document).on('click','.buoiList dt a', function(){
        $('.buoiList').find('dt').removeClass('on');
        $('.buoiList').find('dd:not(:hidden)').hide();

        $(this).parent().addClass('on');
        $(this).parent().next().show();
    })
};