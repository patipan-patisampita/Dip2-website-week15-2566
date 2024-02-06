<template>
    <div>
        <h1>Wondes of the world</h1>
    </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted } from 'vue';

onMounted(() => {
    axios.get(`http://localhost:3000/wonders`)
        .then((response) => {
        console.log(response.data)
    })
})

</script>

<style lang="scss" scoped>

</style>