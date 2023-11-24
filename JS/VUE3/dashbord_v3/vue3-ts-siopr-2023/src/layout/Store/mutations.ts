import { MutationTree } from 'vuex';
import { layoutModuleInterface } from './state';
import {breadCrumb, menuItem, menuShow} from "./types";

function breadCrumbMaker(payload){
    return {title: payload.title, form_id: payload.form_id, rel_form_id: payload.rel_form_id, type: payload.type, variant: payload.variant}
}

const mutation: MutationTree<layoutModuleInterface> = {
    // ------------------- menu logic

    setMenuShow(state, boolean: menuShow) {
        if (boolean !== 'toggle') state.isMenuShow = boolean
        else state.isMenuShow = !state.isMenuShow
    },
    setMenu(state, menu){
        state.menu = menu
    },
    // вызывается при нажатии на item в меню
    setActiveItem(state, payload: menuItem) {
        state.activeLinkItem = {
            title: payload.title,
            type: payload.type,
            variant: payload.variant,
            form_id: payload.form_id,
            rel_form_id: payload.rel_form_id,
            active: true
        }
    },

    // ------------------- menu logic - END

    // ------------------- breadCrumbs logic

    // todo *** Backend function - setInitialBreadCrumbs - сама функция
    setInitialBreadCrumbs(state, {routeId, title}){
        if (routeId && title) {
            function getBread(menu) {
                let prev: breadCrumb[] | undefined = [];

                for(let i in menu){
                    let element = menu[i];
                    if (element.groups) {
                        prev = getBread(element.groups);
                        if (prev !== undefined) {
                            prev.push(breadCrumbMaker(element));
                            return prev;
                        }
                    } else {
                        if (element.title === title && +element.form_id === +routeId && prev) {
                            prev.push(breadCrumbMaker(element));
                            return prev;
                        }
                    }
                }
            }

            state.breadCrumbs = (getBread(state.menu[0]).reverse())
        }
    },

    // ------------------- breadCrumbs logic - END

    setPageName(state, payload){
        state.pageName = payload
    }
}


export default mutation;