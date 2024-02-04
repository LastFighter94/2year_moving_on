<template>
    <div class="modal-window-wrapper">
        <div class="modal-window-main-div">
            <div class="side-window-wrapper"></div>

            <div class="window-content">
                <div class="window-content-title">
                    <h1>{{ tableTitle }}</h1>

<!--                    {{activeTabData}}-->

                    <section v-if="currentRow?.create === undefined">
                        <button class="project-btn" @click="$emit('updateRow', currentRow)">сохранить</button>
                        <button v-if="isView === false" class="project-btn clh-ml-1" @click="$emit('deleteRow', currentRow)">удалить</button>
                    </section>

                    <section v-else>
                        <button class="project-btn" @click="$emit('postRow', currentRow)">добавить инфо</button>
                    </section>
                </div>

                <div class="window-content-data">
                    <div class="tabs">
                        <span
                            v-for="tab in structureDocument?.tabs"
                            :class="tab.tabName === activeTabName ? 'active-tab' : ''"
                            :key="tab.tabName"
                            @click="setActiveTab(tab)"
                        >
                            {{tab.tabName}}
                        </span>
                    </div>

                    <div class="tab-groups">
                        <TabGroups
                            v-model="activeTabData"
                            :currentRow="currentRow"
                            :tableName="tableName"
                            :isView="isView"
                        />
                    </div>
                </div>
            </div>

            <div class="side-window-wrapper">
                <span class="clh-h-fit-content" @click="$emit('closeDocument')">X</span>
            </div>
        </div>
    </div>
</template>

<script>
import {API} from "@/services/API";
import TabGroups from "@/components/TabGroups.vue";
import tableData from "./TableData.vue";

export default {
    name: 'DocumentWindow',
    components: {
          TabGroups
    },
    data(){
        return {
            structureDocument: null,
            activeTabName: 'Основное'
        }
    },
    props: {
        currentRow: Object,
        tableTitle: String,
        tableName: String,
        isView: Boolean
    },
    watch: {
        '$route.params.id': {
            handler: async function() {
                await this.init()
            },
            deep: true,
            immediate: true
        },

        // внизу код чтобы активный таб сбрасывался при переходе в разные строчки
        currentRow: {
            handler: function(){
                this.activeTabName = 'Основное'
            }
        }
    },
    methods: {
        async init(){
            await this.getDocumentStructure(this.$route.params.id)
        },
        async getDocumentStructure(formId){
            let defaultTextJson = await API({requestParams: formId}, 'get-document-structure', 'allModules', 'GET')
            // console.log(defaultTextJson)

            this.structureDocument = JSON.parse(defaultTextJson)
        },
        setActiveTab(tab){
            this.activeTabName = tab.tabName
        },
    },
    computed: {
        activeTabData(){
            return this.structureDocument?.tabs.find(t => t.tabName === this.activeTabName)
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-window-wrapper {
    background: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-window-main-div {
        margin: 20px;
        width: 100%;
        display: flex;
        flex-direction: row;
        max-height: 90%;

        .window-content {
            background-color: #b5e0cb;
            display: flex;
            flex-direction: column;
            width: 100%;
            overflow: auto;

            .window-content-title {
                display: flex;
                justify-content: space-between;
                padding: 10px;
            }

            .window-content-data {
                display: flex;
                flex-direction: row;
                padding: 10px;

                .tabs {
                    background: white;
                    min-width: 250px;
                    max-width: 250px;
                    word-break: break-all;
                    margin-right: 10px;
                }

                .tabs, .fields {
                    width: 250px;
                    min-height: 600px;
                    border-radius: 10px;

                    span:first-child {
                        margin-top: 15px;
                    }

                    span {
                        display: block;
                        margin-left: 15px;
                        padding: 5px;
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                    }

                    > span.active-tab {
                        background-color: #b5e0cb;
                        border-right: 2px solid #42b983;
                    }
                }

                .tab-groups {
                    width: 100%;
                    margin-left: 0;
                    overflow: auto;
                }
            }
        }

        .side-window-wrapper {
            display: flex;
            justify-content: center;
            min-width: 60px;
            color: white;
        }
    }
}
</style>
