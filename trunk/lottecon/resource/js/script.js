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