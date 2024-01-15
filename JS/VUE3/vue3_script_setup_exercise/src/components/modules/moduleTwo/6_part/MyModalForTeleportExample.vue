<script setup>
import {ref} from "vue";

const open = ref(false)
</script>

<template>
  <button @click="open = true">Open</button>
  <Teleport to="body">
    <div class="overlay-teleport" v-if="open">
      <div class="modal-teleport">
          <p>This is the modal</p>
          <button @click="open = false">Close</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.overlay-teleport {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

.modal-teleport {
    /*position: absolute;*/
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
}
</style>
