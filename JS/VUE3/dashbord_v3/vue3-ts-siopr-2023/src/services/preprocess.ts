// todo *** Backend function - preprocess - сама функция
export const preprocess = () =>{
    function compare(a, b) {
        if (a.sort < b.sort) return -1;
        if (a.sort > b.sort) return 1;
        return 0;
    }
    function sortFields (array) {
        array.sort(compare);
        array.forEach(arrItem => {if (arrItem.groups) sortFields(arrItem.groups)})
        return array;
    }
    const textToBool = (val)=>{
        let bool = false;
        if (typeof val !== "boolean" && typeof val !== 'number') {
            if(val === "Да") bool = true
            if(val === "Нет") bool = false
            if(val === "1") bool = true
            if(val === "0") bool = false
        }

        if (typeof val === 'number') bool = val !== 0
        if (typeof val ==="boolean") bool = val
        return bool;
    }

    function preBools (item){
        if (item.groups === undefined && item._ssylka === undefined) item._ssylka = null
        if (item.checked)item.checked = textToBool(item.checked)
        if (item.editable) item.editable = textToBool(item.editable)
        if (item.required) item.required = textToBool(item.required)
        if (item.visible) item.visible = textToBool(item.visible)
        if (item.required) item.required = textToBool(item.required)

        if (typeof(+item.type) === 'number' && !isNaN(+item.type)) item.type = textToBool(item.type);
        // в JS тип NaN также является "number" поэтому еще одна проверка

        if (item.groups) item.groups.forEach(itemGroup => preBools(itemGroup))

        return item;
    }

    const main = (array) => {
        if (!array) return
        array = sortFields(array);
        array.forEach(arrayItem => preBools(arrayItem))
        return array;
    }

    return {
        main,
        textToBool
    };

}
