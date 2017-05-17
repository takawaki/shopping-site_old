$(function(){
   
   //モーダルウィンドウの設定
   $("#menu_btn").click(function(){
       
       //モーダルコンテンツの位置を常に真ん中に位置するように設定
       var b_width = $(window).width(); //ウィンドウ画面の幅を取得
       var c_width = $("#modal_content").outerWidth(); //コンテンツの幅を取得
       var p_width = $(".close").outerWidth(); //コンテンツの幅を取得
       var position = ((b_width - c_width) / 2);　//水平中央にに位置するための余白を求める
       var position2 = ((b_width - p_width) / 2); //水平中央にに位置するための余白を求める
       
        if($("#modal-overlay")[0]) return false ;	//新しくモーダルウィンドウを起動しない
        $("body").append("<div id='modal_overlay'>");
        $("#modal_overlay").fadeIn();
        
        //[#modal-content]のCSSに[left]の値を設定
        $("#modal_content").css({"left":position}).show();
        //.closeの位置を設定
        $(".close").css({"left":position2});
        
        $("#modal_overlay").click(function(){
            $("#modal_overlay,#modal_content").fadeOut();
        })//click
        
   })//click
   
   //カルーセル設定
   $(".owl-carousel").owlCarousel(
   {
       autoplay:true,
       dots:true,
       responsive:{
          0:{
             items:1,
             autoPlay:true,
             loop:true
          }
       }
   });//owlcarousel
   
   
   //商品画像のホバーアニメーション
   $(".contents_detail > div").hover(function(){
       $(".item_img" ,this).animate({opacity:.5},300)
       },function(){
       $(".item_img" ,this).animate({opacity:1},300)
       })//hover
  
  
   //product.htmlの商品詳細画像の切り替えアニメーション
   $(".thumb_list li img").click(function(){
       var switch_img = $(this).attr("src");
       
       //もし、すでにクリックした画像が#main_viewに表示されていなかったら切り替えアニメーションを実行
        if($(this).attr("src") !== $("#main_view").attr("src")){
            
            //画像切り替えアニメーションを定義
               var switcher = function(){
                   $("#main_view").attr({src:switch_img});
                   $("#main_view").animate({opacity:"1"},500);
               }
               
        //クリックしたら一度フェードアウトしてから画像を切り替えて、再びフェードイン(switcher関数を実行)
          $("#main_view").stop().animate({opacity:"0"},500,'linear',switcher);
          
        }//if
   })//click
  
  
   //サブコンテンツのリストスライドアニメーション
   $(".list_show_title").next("ul").hide();
   $(".list_show_title").click(function(){
      if($(this).hasClass('list_show_title')){
         $(this).removeClass('list_show_title').addClass('down');
      }else if($(this).hasClass('down')){
         $(this).removeClass('down').addClass('list_show_title');
      }
       
       $(this).next().stop().slideToggle();
    
   });//click
  
  
   //トップに戻るアニメーション
   $("#page_top_btn img").click(function(){
      $("body,html").animate({scrollTop:0},500);
      return false;
   })//click
   
})//all
