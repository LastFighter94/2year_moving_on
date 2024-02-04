<template>
    <div>
        <p v-if="hasError">Something went wrong</p>

        <slot v-else></slot>
    </div>
</template>

<script>
export default {
    name: 'ErrorBoundary',
    data(){
        return {
            hasError: false
        }
    },
    errorCaptured(err, vm, info) {
        this.hasError = true
    }
}
</script>

<style lang="scss" scoped>

</style>
