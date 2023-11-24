import {menuItem, menuShow} from "./types";

export interface layoutModuleInterface {
    activeLinkItem: menuItem,
    breadCrumbs: string[],
    isMenuShow: menuShow,
    pageName: string,
    menu: Object[]
}

function state(): layoutModuleInterface {
    return {
        activeLinkItem: {
            title: '',
            type: '',
            variant: '',
            form_id: 0,
            rel_form_id: 0,
            active: true,
        },
        isMenuShow: false,
        breadCrumbs: [],
        pageName: '',
        menu: []
    }
}

export default state;