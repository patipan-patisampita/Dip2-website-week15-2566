<template>
    <div class="container mt-4">
        <div class="row">

            <div class="col-md-5 mb-1 mx-auto">
                <div class="card shadow">
                    <div class="card-header p-0">
                        <img src="https://static.wanderon.in/wp-content/uploads/2023/11/top-min.jpg" class="card-img-top" alt="wonders">
                    </div>
                </div>
            </div>

            <div class="col-md-6 mx-auto">
                <div class="card shadow">
                    <div class="card-header bg-primary">
                        <span class="text-white fs-5">
                            ลงทะเบียนสิ่งมหัศจรรย์ของโลก
                        </span>
                    </div>
                    <div class="card-body text-success">
                        <form @submit="add - wonder">
                            <div class="mb-1">
                                <label for="">ชื่อสิ่งมหัศจรรย์ของโลก</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="mb-1">
                                <label for="">ตำแหน่ง ที่อยู่ สิ่งมหัศจรรย์ของโลก</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="mb-1">
                                <label for="">ลิงค์ภาพสิ่งมหัศจรรย์ของโลก</label>
                                <input type="text" class="form-control" />
                            </div>

                            <div class="mb-1">

                                <button class="btn btn-primary text-white shadow">
                                    ลงทะเบียนสิ่งมหัศจรรย์ของโลก
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');

.container {
    font-family: 'Sarabun', sans-serif;

}

.form-label {
    color: green;
}
</style>