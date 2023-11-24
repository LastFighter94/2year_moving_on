import { ActionTree } from 'vuex';
import {StateInterface} from "@/store";
import { layoutModuleInterface } from './state';
import {API, defaultRequestParams} from "@/services/API.ts";
import {preprocess} from "@/services/preprocess.ts";

const actions: ActionTree<layoutModuleInterface, StateInterface> = {
    // ------------------- menu logic
    async setMenuData( {commit} ){
        let menu: Object[] = []
        let menuData = await API({...defaultRequestParams, action: "GetMenu"});

        // todo *** Backend function - preprocess - вызов
        menu.push(preprocess().main(menuData))

        // todo *** Backend function - addMenuKeys - вызов
        addMenuKeys(menu[0], 0);

        // todo *** Backend function - addMenuKeys - сама функция
        function addMenuKeys(menu, index){
            menu.forEach(menuItem => {
                if (menuItem.groups){
                    menuItem['active'] = false
                    menuItem['index'] = index
                    // todo *** Backend function - addMenuKeys - вызов
                    addMenuKeys(menuItem.groups, index+1);
                }
            })
        }

        commit('setMenu', menu)
    },
    open_folder( { commit, state }, folder){
        state.menu[folder.index].forEach(menuItem => {
            if (menuItem.groups) menuItem.active = false // убираем класс active со всех "папок" и под-папок
            if (menuItem.groups) menuItem.groups.forEach(menuItem => menuItem.active = false)
        })
        for(let i = folder.index+1 ; i < state.menu.length; i++){
            state.menu.splice(i); // логика при открытии папки на уровень ниже
        }
        folder.active = true; // добавляем класс
        state.menu[folder.index+1] = folder.groups; // заполняем div контейнер

        commit('setMenu', state.menu)
    },
    open_item( { commit, state }, item){
        let clickedContainerMenuIndex: number = 0

        // находим индекс созданного "контейнера" в массиве меню - по которому кликнули
        state.menu.find(menuContainer => {
            if (menuContainer.find(itemContainer => itemContainer === item)) clickedContainerMenuIndex = state.menu.indexOf(menuContainer)
        })

        // вычисляем сколько контейнеров меню нужно снести для правильного отображения
        let eraseContainerTimesNumber = state.menu.length - 1 - clickedContainerMenuIndex

        if (clickedContainerMenuIndex === state.menu.length) {
            // был нажат элемент в текущей папке
        } else {
            // сносим контейнеры
            for(let i = 0; i < eraseContainerTimesNumber; i++){state.menu.pop()}
            // убираем "активный класс" у папок
            state.menu[state.menu.length - 1].forEach(item => item.active = false)
        }

        commit('setMenu', state.menu)
    },

    // todo *** Backend function - updateActiveItems - сама функция
    updateActiveItems( { commit, state} , routeTitle){
        // бежим по каждому элементу меню и ищем совпадению с элементом breadCrumb
        // если совпадение есть добавляем к меню "группы" и идем дальше по такой же схеме
        for(let i in state.breadCrumbs){
            let bread = state.breadCrumbs[i];
            let baseMenu = state.menu[i]

            for(let subMenu in baseMenu){
                let menuItem = baseMenu[subMenu]

                if(menuItem && menuItem.groups && menuItem.title === bread.title && menuItem.form_id === bread.form_id &&
                    menuItem.rel_form_id === bread.rel_form_id && menuItem.type === bread.type){

                    menuItem.active = true;
                    state.menu.push(menuItem.groups);

                    // не забываем сделать активным текущий элемент (не папку)
                    let activeItem = menuItem.groups.find(menuItem => menuItem.title === routeTitle)

                    if (activeItem) commit('setActiveItem', activeItem)
                }
            }
        }
    }

    // ------------------- menu logic - END
}


export default actions;