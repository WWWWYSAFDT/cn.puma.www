  $(function () {
      // 0.准备工作
      // 0.1 声明变量 用来记录点击次数
      let index = 0;
      // 1.点击arrow-right按钮 让轮播图往左走(切换图片)
      // 1.1 给arrow-right按钮添加点击事件
      $('.arrow-right').on('click', function () {
          // 1.1.1 点击一次 记录次数的变量应该+1
          index++;
          // 1.1.2 给轮播图的图片做限制
          if (index > $('.slider li').length - 1) {
              index = 0;
          }
          // 1.1.3 让图片进行切换 
          // $('.slider li').eq(index).fadeIn(500);
          // $('.slider li').eq(index).siblings('li').fadeOut(500)

          $('.slider li').eq(index).fadeIn(500).siblings('li').fadeOut(500)
      })

      // 2.点击arrow-left按钮  让轮播图往右走(切换图片)
      // 2.1 arrow-right 按钮提那就点击事件
      $('.arrow-left').on('click', function () {
          // 2.1.1 点击一次 记录次数的变量应该-1
          index--;
          // 2.1.2 给轮播图的图片做限制
          if (index < 0) {
              index = $('.slider li').length - 1;
          }
          // 2.1.3 让图片进行切换
          $('.slider li').eq(index).fadeIn(500).siblings('li').fadeOut(500)
      })

      // 3.自动走(往左走)
      setInterval(function () {
          $('.arrow-right').click();
      }, 3000)




      
      // 功能1: 当滚动条到一定位置 让返回顶部显示 否则隐藏
      // 给window添加滚动条 滚动事件(scroll)
      $(document).scroll(function () {
          // 获取页面的卷曲的高度
          // 判断页面跑出浏览器顶部的高度 是不是大于600
          if ($(document).scrollTop() >= 600) {
              // 如果大于500 让返回顶部按钮 显示
              $('.cp-back-to-top').show();
          } else {
              // 如果不大于500 让返回按钮  隐藏
              $('.cp-back-to-top').hide();
          }
      })


      // 功能2: 点击a标签 让滚动条回到0的位置
      $('.cp-back-to-top').click(function () {
          $(document).scrollTop(0)
      })

  })

