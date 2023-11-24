import { Module } from 'vuex';
import {StateInterface} from "@/store";

import state, { layoutModuleInterface } from './state';
import mutations from './mutations';
import actions from "@/layout/Store/actions.ts";
import getters from "@/layout/Store/getters.ts";


const layoutModule: Module<layoutModuleInterface, StateInterface> = {
    namespaced: true,
    mutations,
    getters,
    actions,
    state
}


export default layoutModule;