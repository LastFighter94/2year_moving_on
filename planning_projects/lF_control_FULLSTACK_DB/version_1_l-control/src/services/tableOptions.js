// эти опции будут во всех таблицах
const defaultOptions = [
    {
        type: 'no-type',
        // type: 'filters',
        title: 'Отфильтровать',
        method: 'filter',
        info: 'some-info-1-2',
        id: 1,
    }
]

export const tableOptions = {
    // в зависимости от form_id таблицы в базе - у нас есть ряд кнопочек, которые имеют определенный функционал
    1: [
        {
            // no-type - значит будем вместо иконки выводить title
            // - иконки можно потом сделать - пока все текстов будем выводить
            type: 'no-type',
            // type: 'create',
            title: 'Добавить',
            method: 'createRow',
            info: 'some-info-1-1',
            id: 2,
        },
        ...defaultOptions
    ],
    2: [
        // у view sql таблицы - нет пункта добавить
        ...defaultOptions
    ]
}
