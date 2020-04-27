$(function(){
  // 1.给ul中的每个li添加点击事件
  $('.goodsscroll>li').click(function () {
    // 1.1 获取到某个li中img的src
    let imgSrc = $(this).find('img').attr('src');
    // console.log(imgSrc)
    // 1.2把 获取到的src给body的backgroundImage
    $('.productDetail-largeimg>img').css('backgroundImage', `url(${imgSrc})`);
  })
})