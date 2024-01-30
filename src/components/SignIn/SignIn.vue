<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const router = useRoute()

const userForm = reactive({
    email: "",
    password: "",
});

function SignUpPage() {
    router.push({ name: "signup" })
}

</script>

<template>
    <div class="container mt-4 mb-5">
        <div class="row">
            <div class="col-md-5 mx-auto">
                <div class="card shadow">
                    <div class="card-header bg-primary">
                        <h5 class="text-white">เข้าสู่ระบบการจัดการออนไลน์</h5>
                    </div>
                    <div class="card-body text-success">
                        <form @click.prevent>
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
                                <p type="submit" class="btn btn-primary shadow d-block">เข้าสู่ระบบ</p>
                                 <p @click="SignUpPage" class="text-body text-center d-block">
                                        Dont' have an Account?
                                        <router-link :to="{ name: 'signup' }" class="text-decoration-none font-weight-bold">
                                            Sing Up
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

<style lang="scss" scoped></style>