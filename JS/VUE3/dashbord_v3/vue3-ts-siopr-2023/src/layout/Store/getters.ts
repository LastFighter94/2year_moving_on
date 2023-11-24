import { GetterTree } from 'vuex';
import {StateInterface} from "@/store";
import { layoutModuleInterface } from './state';


const getters: GetterTree<layoutModuleInterface, StateInterface> = {
    isMenuShow(state){
        return state.isMenuShow
    },
    menu(state){
        return state.menu
    }
}


export default getters;