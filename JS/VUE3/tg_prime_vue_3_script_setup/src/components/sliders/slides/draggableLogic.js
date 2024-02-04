import {onBeforeUnmount} from "vue";

export const dragLogic = (sliderDiv, isDesktop, disableDrag, currentItemWidth, disableWhenDesktop) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    const slider = document.querySelector(sliderDiv);

    let prevLeft = 0

    const end = () => {
        if ((isDesktop.value && disableWhenDesktop) || disableDrag) return

        isDown = false;
        slider.classList.remove('active');

        let res

        if (slider.scrollLeft === 0) return

        // первый drag
        if (slider.scrollLeft < currentItemWidth && slider.scrollLeft > prevLeft) res =  currentItemWidth

        // если drag вне левой границы
        if (slider.scrollLeft < currentItemWidth && slider.scrollLeft < prevLeft) res =  0

        // если drag в границах и в правую сторону
        if (slider.scrollLeft > currentItemWidth && slider.scrollLeft > prevLeft) res =  slider.scrollLeft + (currentItemWidth - (slider.scrollLeft % currentItemWidth))

        // если drag в границах и в левую сторону
        if (slider.scrollLeft > currentItemWidth && slider.scrollLeft < prevLeft) res =  slider.scrollLeft - (currentItemWidth - (prevLeft - slider.scrollLeft))

        slider.scrollTo({left: res, behavior: "smooth"});

        prevLeft = res
    }

    const start = (e) => {
        if ((isDesktop.value && disableWhenDesktop) || disableDrag) return

        isDown = true;
        slider.classList.add('active');
        startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }

    const move = (e) => {
        if ((isDesktop.value && disableWhenDesktop) || disableDrag) return

        if(!isDown) return;

        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
        const dist = (x - startX);
        slider.scrollLeft = scrollLeft - dist;
    }

    (() => {
        slider.addEventListener('mousedown', start);
        slider.addEventListener('touchstart', start);

        slider.addEventListener('mousemove', move);
        slider.addEventListener('touchmove', move);

        slider.addEventListener('mouseleave', end);
        slider.addEventListener('mouseup', end);
        slider.addEventListener('touchend', end);
    })();

    // при resize не всегда четко работает - бывают сбои (если прям открываем devTools и начинам делать resize)
    // пользователь вряд ли будет использовать dev-tools и resize - но если такое подразумевается - код ниже в студию
    // помимо кода ниже надо также refs применить

    // window.addEventListener('resize', () => {
    //     let innerWidth = window.innerWidth
    //
    //     isDesktop.value = innerWidth > mediaQuery.tablet;
    //     isTablet.value = (innerWidth <= mediaQuery.tablet && innerWidth > mediaQuery.mobile);
    //     isMobile.value = innerWidth >= mediaQuery.mobile;
    //
    //     if (isDesktop.value) currentItemWidth = itemWidth.desktop
    //     if (isTablet.value) currentItemWidth = itemWidth.tablet
    //     if (isMobile.value) currentItemWidth = itemWidth.mobile
    // })

    // onBeforeUnmount hook - remove all eventListeners! OPTIMIZATION - если будет использование
    // warnings сыпятся на эту схемку к сожалению - если выносить в композицию
}
