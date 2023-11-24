# СИОПР 2023 - vue 3 + vuetify + ts

Устанавливать зависимости именно в этой последовательности, либо просто скопировать node-modules и дальше работать с существующей сборкой

- npm init vite@latest appName -- --template vue-ts
- npm i
- vue add vuetify - choose vite
- npm install -D @types/node (для @ в пути)
- npm i -D sass (препроцессор scss, sass)
- npm i axios js-cookie js-md5 vue-router vuex
- npm i @vueuse/components (для директивы on click outside)

Полезное инфо:

- https://www.youtube.com/watch?v=To5XzHlTS_E - vuetify на vue 3
- https://dev.to/tilly/aliasing-in-vite-w-typescript-1lfo - alias на пути
- https://www.youtube.com/watch?v=iyROgjOt-DQ - vuex + ts - грамотно

// tsconfig
- "noImplicitAny": false, if "true" - throws a lot of errors because there is no type structure for data in Back-end - so no in Front-end too

Было бы хорошо внедрить на будущее:
- Style Guide + linter
- GitLab 