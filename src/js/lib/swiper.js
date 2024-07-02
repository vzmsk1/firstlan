import Swiper from 'swiper';
import 'swiper/css';
import { remToPx } from '../utils/utils';
import { Navigation, Pagination, EffectFade, Controller, Autoplay } from 'swiper/modules';

const mm = window.matchMedia('(max-width: 768px)');

const swiperDefaults = {
    speed: 1500,
    loop: true
};

function initSliders() {
    // if (document.querySelector('.')) {
    //     new Swiper('.', {
    //         modules: [],
    //         ...swiperDefaults,
    //         navigation: {
    //             nextEl: '.',
    //             prevEl: '.'
    //         },
    //         pagination: {
    //             el: '.',
    //             type: 'custom',
    //             renderCustom: function (swiper, current, total) {
    //                 const cur = current < 10 ? '0' + current : current;
    //
    //                 return cur;
    //             }
    //         },
    //         on: {
    //         }
    //     });
    // }
}

window.addEventListener('load', initSliders);

window.addEventListener('resize', function () {
    const ww = window.innerWidth;

    setTimeout(() => {
        if (ww === window.innerWidth) {
            initSliders();
        }
    }, 500);
});
