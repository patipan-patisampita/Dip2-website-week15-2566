<template>
    <div class="container mt-4">
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col-md-3" v-for="item in allWonders" :key="item.id">
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
import { onMounted,ref } from 'vue';

const allWonders = ref([]);

onMounted(() => {
    axios.get(`http://localhost:3000/wonders`)
        .then((response) => {
            // console.log(response.data)
            allWonders.value = response.data
        })
})

</script>

<style lang="scss" scoped></style>