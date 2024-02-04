import { defineStore } from 'pinia'
import {computed} from "vue";

export const useLanguagesStore = defineStore('languagesStore', {
    state: () => {
        return {
            currentLanguage: 'RU',
            arrLanguages: ['RU', 'EN'],
            wordsTranslated: {
                'Функции': {
                    'EN': 'Functions'
                },
                'Купить': {
                    'EN': 'Buy'
                },
                'Тарифы': {
                    'EN': 'Sale-options'
                },
                'Отзывы': {
                    'EN': 'Reviews'
                },
                'Лицензии': {
                    'EN': 'License'
                },
                'История': {
                    'EN': 'History'
                },
                'Выйти': {
                    'EN': 'Exit'
                },
            }
        }
    },
    actions: {
        setCurrentLanguage(value) {
            this.currentLanguage = value
        },
    },
    // getters: {
    //     currentLanguage: (state) => state.currentLanguage,
    // },
})

// пример использования в NavBarPersonalCabinetAndIndex
export const translateLogic = () => {
    const languagesStore = useLanguagesStore()

    const currentLanguage = computed(() => languagesStore.currentLanguage)

    const translated = (word) => {
        if (languagesStore.wordsTranslated[word] === undefined) return word

        if (currentLanguage.value === 'RU') return word

        return languagesStore.wordsTranslated[word][currentLanguage.value]
    }

    return {
        languagesStore, currentLanguage, translated
    }
}
