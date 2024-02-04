import {ref} from "vue";

export const getSliderInfo = (itemWidth, mediaQuery) => {
    let isDesktop, isTablet, isMobile
    let currentItemWidth

    if (window.innerWidth > mediaQuery.tablet) {
        isDesktop = ref(true)
        isTablet = ref(false)
        isMobile = ref(false)

        currentItemWidth = itemWidth.desktop
    }

    if (window.innerWidth <= mediaQuery.tablet && window.innerWidth > mediaQuery.mobile) {
        isDesktop = ref(false)
        isTablet = ref(true)
        isMobile = ref(false)

        currentItemWidth = itemWidth.tablet
    }

    if (window.innerWidth <= mediaQuery.mobile) {
        isDesktop = ref(false)
        isTablet = ref(false)
        isMobile = ref(true)

        currentItemWidth = itemWidth.mobile
    }

    return {
        isDesktop: isDesktop,
        isTablet: isTablet,
        isMobile: isMobile,
        currentItemWidth: currentItemWidth
    }
}
