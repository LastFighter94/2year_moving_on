let styleDebug: string = "color: white; background-color: blue; border-radius: 5px; padding: 0.5rem"
let styleDebugError: string = "color: white; background-color: red; border-radius: 5px; padding: 0.5rem"
export const logTs = (dataToLog: any) => {
    if (typeof(dataToLog) === 'object') dataToLog = JSON.stringify(dataToLog)
    return console.log("%c" + dataToLog, styleDebug)
}

export const logTsError = (...args: any[]) => {
    // схема для вывода нескольких примитивов - logTsError(1, 2, 3) - только если вместо примитива будет
    // Object - то все ложится - мы заменяем объект строчкой 'error obj!' - в данном случае
    let resString: string = ''
    args.forEach((arg, index) => {
        if (typeof(arg) === 'object'){
            arg = 'error obj!'
        }

        if (index !== args.length - 1) resString += arg + ', '
        else resString += arg
    })

    return console.log("%c" + resString, styleDebugError)
}
