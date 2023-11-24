<template>
    <Transition>
        <!--    можно добавить searchBar при наличии определенного свойства    -->
        <ul
                class="results-container"
                :style="{top: position.top, left: position?.left, width: position.width}"
                v-if="values.length"
        >
            <li
                    v-for="(item, index) in values"
                    :key="index"
                    @click="doSomething(item)"
            >
                <span v-if="logicScope === 'HeaderSearchBar'">{{ item.title }}</span>
            </li>
        </ul>
    </Transition>
</template>

<script lang="ts" >export default {name: 'CustomSelect'}</script>

<script lang="ts" setup>
import {toRefs} from "vue";
import {useRouter} from "vue-router";
import {IPosition} from "@/layout/Store/types.ts";

const router = useRouter()

const props = defineProps<{ position: IPosition, values: any, logicScope: string }>();
let { position, values } = toRefs(props);
let logicScope = props.logicScope

const emit = defineEmits(['closeSelect'])

const doSomething = (item) => {
    if (logicScope === 'HeaderSearchBar'){
        router.push({
            name: item.type,
            params: {id: item.form_id},
            query: {rel_id: item.rel_form_id, variant: item.variant, title: item.title}
        })
    }

    emit('closeSelect')
}
</script>

<style lang="scss" scoped>
.results-container {
  transition: .3s;
  max-height: 298px;
  max-width: 332px;
  overflow: auto;
  background-color: #ffffff;
  position: absolute;
  color: black;
  padding: 18px;
  border: 1px solid #dfe4ee;
  border-radius: 4px;

  li {
    border-radius: 4px;
    border-bottom: 0;
    margin-bottom: 8px;
    padding: 7px 12px;
    cursor: pointer;
    transition: .3s;
    list-style: none;
    font-size: 13px;
    color: #767784;
    line-height: 18px;
  }

  li:hover {
    background: #daebff;
  }

  li:last-child {
    margin-bottom: 0;
  }
}

// transition
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>