const drop = document.querySelector('#drop');
      menuMini = document.querySelector('.menu-mini'),
      jsDown = document.querySelector('.js-down');

window.addEventListener('scroll',function() {
    const html = document.documentElement,
          scroll = html.scrollTop;


    if (scroll > 100){
        drop.dataset.rule = 'active';

    }else if (scroll < 80){
        drop.dataset.rule = '';
    }

});


drop.addEventListener('click', appStyles);
menuMini.addEventListener('click', appStyles);

function appStyles() {
    const drop = document.querySelectorAll('#drop span'),
          nav = document.querySelector('.nav'),
          body = document.body;

    let hidden = body.getAttribute('class') === 'hidden' ? '' : 'hidden',
        open = nav.dataset.rule  ? '' : 'open',
        position = nav.style.position == 'fixed' ? 'relative' : 'fixed';

    for(let i=0;i<drop.length;i++){
        drop[i].getAttribute('class') === 'open' ? drop[i].setAttribute('class', '') : drop[i].setAttribute('class', 'open');
    }

    body.setAttribute('class', hidden);
    nav.dataset.rule = open
    nav.style.position = position;
}


jsDown.addEventListener('click', function() {
    let header = document.querySelector('.header'),
        html = document.documentElement,
        start = html.scrollTop,
        end = header.offsetHeight;

    console.log(scroll)

    var interval = setInterval(function() {
        html.scrollTop = start += 3;
        if(start >= end) {
            clearInterval(interval);
        }
    }, 1);


});
