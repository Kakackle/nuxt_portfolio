<script setup>
const route = useRoute()
const counter = ref(0)
</script>

<template>
    <p>Came from route: {{ route.params.id }}</p>
    <button @click="counter++">Counter: {{ counter }}</button>
</template>

<style scoped>
</style>