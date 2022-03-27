$(document).ready(function () {
  //trigger & close
  var $trigger = $('.trigger');
  var $navigation = $('.navigation');
  var $close = $('.close');

  // dots-menu
  var $dotsopen = $('.dotsopen');
  var $dotsmenu = $('.dots-menu');
  var $closedots = $('.closedots');

  // dots-gsap
  var $dot1 = $('.dot1');
  var $dot2 = $('.dot2');
  var $dot3 = $('.dot3');
  var $dot4 = $('.dot4');
  var $dot5 = $('.dot5');
  
  //slick-fade
  var $visual = $('.visual');

  //스크롤 시 헤더 변경
  var $header = $('.header');

  //메뉴 클릭 시 해당 위치로 이동
  var $menu = $('.navigation li');
  var $section = $('.container > section');

  // campaign
  var $campaign = $('.campaigns');

  //supports
  var $support = $(".supports");

  // ----------------------------------------

  //trigger & close
  $trigger.on('click', function (e) {
    e.preventDefault();
    if ($navigation.hasClass('active')) {
      $navigation.removeClass('active');
      $close.removeClass('active');
    } else {
      $navigation.addClass('active');
      $close.addClass('active');
      $close.on('click', function () {
        $navigation.removeClass('active');
      });
    }
  }); //trigger & close

  //dots-menu
  $dotsopen.on('click', function (e) {
    e.preventDefault();
    if ($dotsmenu.hasClass('active')) {
      $dotsmenu.removeClass('active');
    } else {
      $dotsmenu.addClass('active');
      TweenMax.staggerFrom([$dot1, $dot2, $dot3, $dot4, $dot5],0.5,{
        opacity : 0,
        ease : Power0.easeNone,
         x : 50
      },0.3);
      $closedots.on('click', function () {
        $dotsmenu.removeClass('active');
      });
    }
  }); //dots-menu

  //slick-fade
  $visual.each(function () {
    var $container = $(this);
    var $slideGroup = $container.find('.visual-group');

    $slideGroup.slick({
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 7000,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      puaseOnHover: false,
      puaseOnFoucs: false,
    })
  }); //slick-fade

  // 스크롤 시 헤더 변경
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 20) {
      if (!$header.hasClass('active')) {
        $header.addClass('active');
      }
    } else {
      if ($header.hasClass('active')) {
        $header.removeClass('active');
      }
    }
  }); // 스크롤 시 헤더 변경
  if ($(window).scrollTop() != 0) {
    $header.addClass('active');
  }

  // 메뉴 클릭 시 해당 위치로 이동
  $menu.on('click', function(e){
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    var idx = $(this).index();
    var sectionTop = ($section.eq(idx).offset().top)-80;
    $('html, body').animate({scrollTop : sectionTop}, 500);
    $navigation.removeClass('active');

  }); // 메뉴 클릭 시 해당 위치로 이동

  //모든 버튼은 클릭 안 되도록
  $('.btn1, .btn2, .btn3, .btn4, .close, .closedots').on('click',function(){
    return false;
  }); //모든 버튼은 클릭 안 되도록


  // 스크롤 매직
  // 컨트롤러 생성
  var controller = new ScrollMagic.Controller();

  var infoopacity = new TimelineMax();
  infoopacity
  .from('.info-txt', 2, {
    autoAlpha : 0,
    ease : Power0.easeNone
  }, 1)
  .from('.info-img', 1, {
    autoAlpha : 0,
    ease : Power0.easeNone
  }, 2);

  var infoScene = new ScrollMagic.Scene({
    triggerElement : '.support-box',
    triggerHook : 1,
    duration: '100%'
  })
  .setTween(infoopacity)
  .addTo(controller);


  //campaigns
  $campaign.each(function () {
    var $container = $(this);
    var $slideGroup = $container.find('.campaign-group');

    $slideGroup.slick({
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      speed: 3000,
      puaseOnHover: false,
      puaseOnFoucs: false,
      fade: true
    })
  }); //campaigns

  //supports
  $support.each(function () {
    var $container = $(this);
    var $slideGroup = $container.find('.support-group');

    $slideGroup.slick({
      arrows: true,
      infinite: true,
      autoplay: false,
      speed: 1000,
      fade: true
    })
  }); //supports
  
}); //$(document)