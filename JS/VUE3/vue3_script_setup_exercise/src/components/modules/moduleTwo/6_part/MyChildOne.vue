<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const onClick = () => {
    const newValue = props.modelValue + 1
    emit("update:modelValue", newValue)
}
</script>

<template>
  <div>
      Hello from child 1
      <p>{{modelValue}}</p>
      <button @click="onClick">Click</button>
  </div>
</template>

<style scoped>

</style>
