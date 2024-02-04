<template>
  <div class="table-options-div">
      {{ this.tableTitle }}

      <div>
        <button v-for="option in tableOptions" class="project-btn clh-ml-2">
            <span @click="$emit(option.method)">{{option.title}}</span>
        </button>
      </div>
  </div>
</template>

<script>
import {tableOptions} from "@/services/tableOptions";

export default {
    name: 'TableOptions',
    data(){
        return {
            tableOptions: [],
        }
    },
    props: {
        tableTitle: String
    },
    watch: {
        '$route.params.id': {
            handler: function() {
                this.init()
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        async init(){
            this.tableOptions = tableOptions[this.$route.params.id]
        },
    }
}
</script>

<style scoped lang="scss">
.table-options-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
