
$(document).ready(function(){
    $('.page_nav ul li').on('click',function(){
        console.log('adasdasdasdas')
        $(this).addClass('active');
        $(this).siblings('li').removeClass('active')
    })
    // $(document).on('click','.product_fav',function(){
    //     $(this).toggleClass('active');
    // })
})