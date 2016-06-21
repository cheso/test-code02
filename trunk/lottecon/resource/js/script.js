var label = function(){
    $(document).on('click','.label',function(){
        $(this).prev().trigger('click');
    })
};

var tabArea = function(){
    $(document).on('click','.uList1 li a', function(){
        var theNum = $(this).parent().index();
        $('.uList1 li').removeClass('active');
        $(this).parent().addClass('active');
        $('.oList1 li').removeClass('active').eq(theNum).addClass('active');
    })
};

var btnCount = function(){
    var btnCnt = $('.btnArea:not(:hidden) button').length;

    if( btnCnt === 2 ){
        $('.btnArea button').css('width','49%');

    }if( btnCnt === 3 ){
        $('.btnArea button').css('width','32%');
    }
};


var toggleList = function() {
    $(document).on('click','.buoiList dt a', function(){
        $('.buoiList').find('dt').removeClass('on');
        $('.buoiList').find('dd:not(:hidden)').hide();

        $(this).parent().addClass('on');
        $(this).parent().next().show();
    })
};