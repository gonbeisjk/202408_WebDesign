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
  // Swiperの設定
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

})()


function test(a) { } //関数定義
test('あいうえお') //関数呼び出し