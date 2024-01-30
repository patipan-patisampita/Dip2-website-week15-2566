<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const router = useRoute()

const userForm = reactive({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
});

function SignInPage() {
    router.push({ name: "signin" })
}

</script>

<template>
    <div class="container mt-4">
        <div class="row">

            <div class="col-md-5 mb-1">
                <div class="card shadow">
                    <div class="card-header p-0">
                        <img src="https://cdn.pixabay.com/photo/2016/08/03/13/33/stone-henge-1566686_640.jpg"
                            class="card-img-top" alt="sign">
                    </div>
                    <div class="card-body">
                        <p class="card-text text-end">สิ่งมหัศรรย์ของโลก 2024.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-7">
                <div class="card shadow">
                    <div class="card-header bg-primary text-white">
                        <h5>ระบบลงทะเบียนผู้ใช้งาน</h5>
                    </div>
                    <div class="card-body">
                        <form @click.prevent>
                            <div class="mb-2">
                                <label for="" class="form-label">ชื่อ</label>
                                <input type="text" class="form-control" required v-model="userForm.fname"
                                    placeholder="ชื่อผู้สมัคร">
                            </div>
                            <div class="mb-2">
                                <label for="" class="form-label">นามสกุล</label>
                                <input type="text" class="form-control" v-model="userForm.lname"
                                    placeholder="นามสกุลผู้สมัคร" required>
                            </div>
                            <div class="mb-2">
                                <label for="" class="form-label">อีเมลล์</label>
                                <input type="email" class="form-control" v-model="userForm.email"
                                    placeholder="อีเมลล์ผู้สมัคร" required>
                            </div>
                            <div class="mb-2">
                                <label for="" class="form-label">รหัสผ่าน</label>
                                <input type="password" class="form-control" v-model="userForm.password"
                                    placeholder="รหัสผ่านผู้สมัคร" required>
                            </div>
                            <div class="mb-2">
                                <label for="" class="form-label">โทรศัพท์</label>
                                <input type="text" class="form-control" v-model="userForm.phone" placeholder="เบอร์โทรศัพท์"
                                    required>
                            </div>
                            <div class="mb-2">
                                <label for="" class="form-label">ที่อยู่:</label>
                                <textarea v-model="userForm.address" cols="51" rows="2"></textarea>
                            </div>
                            <div class="mb-2">
                                <p type="submit" class="btn btn-primary shadow d-block">สมัครสมาชิก</p>
                                <p @click="SignInPage" class="text-body text-center d-block">
                                    Already have an Account?
                                    <router-link :to="{ name: 'signin' }" class="text-decoration-none font-weight-bold">
                                        Sing In
                                    </router-link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');

.container {
    font-family: 'Sarabun', sans-serif;

}

.form-label {
    color: green;
}
</style>
