<template>
    <li
        v-if="item.groups"
        :class="item.active ? 'menu-item active' : 'menu-item'"
        @click="open_folder"
    >
        <div>
            <object
              v-if="item.pict && item.pict !== 'NULL'"
              type="image/svg+xml"
              :data="item.pict"
            ></object>
        </div>

        <div>
            <span>{{item.title}}</span>
            <img src="../../assets/arrow-small.png" alt="arrow" v-if="!item.active"/>
        </div>
    </li>
</template>

<script>
export default {
    name: "FolderItem",
    props: {
        item: {
            Type: [Array, Object],
            required: true
        },
    },
    methods: {
        open_folder: function (){
            this.$emit('open_folder', this.item);
        }
    },
}
</script>

<style lang="scss" scoped>
.menu-item{
    color: #333333;
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    padding: 5px 10px 5px 10px;
    border-bottom: 1px solid #DFE4EE;

    div:first-child {
      display: flex;
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }

    div:nth-child(2){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

  span {
    max-width: 195px;
  }
}

.menu-item.active {
    background: linear-gradient(0deg, #EDF4FD, #EDF4FD), #FFFFFF;
    position: relative;
}

.menu-item.active:after {
    content: "";
    width: 4px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 4px 0 0 4px;
    background-color: #1A78E2;;
}

.menu-item:hover {
        background: linear-gradient(0deg, #EDF4FD, #EDF4FD), #FFFFFF;
}
</style>