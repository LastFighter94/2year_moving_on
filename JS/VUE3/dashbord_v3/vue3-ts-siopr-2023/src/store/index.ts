// import { createStore } from "vuex";
// // @ts-ignore () - webstorm - TS2307: Cannot find module or its corresponding type declarations.
// import {layoutModule} from "@/layout/Store/layoutStore";
//
// export default createStore({
//     modules: {
//         layoutModule
//     }
// })

import { createStore } from 'vuex';

// My custom modules
import layoutModule from "../layout/Store/module.ts";
import {layoutModuleInterface} from "../layout/Store/state";


export interface StateInterface {
    // Define your own store structure, using submodules if needed
    // example: ExampleStateInterface;
    // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
    layoutModule: layoutModuleInterface
}

export default createStore<StateInterface>({
    modules: {
        layoutModule
    }
})