import {makeAutoObservable} from "mobx";
import { makePersistable } from 'mobx-persist-store';

class Header {
    height = '100px'
    marginBottom = '16px'

    constructor() {
        makeAutoObservable(this) // параметром принимает контекст текущего класса
        makePersistable(this, { name: 'Header height and margin bottom', properties: ['height', 'marginBottom'], storage: window.localStorage });
    }

    setHeight(headerHeight: string){
        this.height = headerHeight
    }

    setMarginBottom(marginBottom: string){
        this.marginBottom = marginBottom
    }
}
const header = new Header()

export {header};
