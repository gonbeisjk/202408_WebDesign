// ドキュメント（HTML）準備が整った段階で実行
$(function () {
  // $('#header-btn').click(() => {}) でも可
  $('#header-btn').on('click', () => {
    $('body').toggleClass('is-openMenu');
  })
})

const xyz = 'あいうえお';

// 即時関数
(function () {
  // Swiper - キービジュアルの設定
  const kv = new Swiper('#kv', {
    effect: "fade",
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // autoplay: {
    //   delay: 3000,
    // },
  })

  // document.querySelector('#kv-btn')
  //   .addEventListener('click', () => {
  //     kv.slideNext()
  //   })

  // Swiper - 商品詳細（サムネイル）の設定
  const thumbs = new Swiper('#thumbs', {
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    // watchSlidesVisibility: true, //廃止
  });

  // Swiper - 商品詳細（メイン）の設定
  const main = new Swiper('#main', {
    thumbs: {
      swiper: thumbs
    },
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

})()


function test(a) { } //関数定義
test('あいうえお') //関数呼び出し