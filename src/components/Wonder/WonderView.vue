<template>
    <div class="container mt-4">
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
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

<style lang="scss" scoped></style>