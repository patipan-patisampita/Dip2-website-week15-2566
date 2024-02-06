<script setup>
import axios from 'axios';
import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const router = useRouter()

const state = reactive({
    redirectTo: { name: 'home' }
})

const userForm = reactive({
    email: "",
    password: "",
});

//ERROR user
const errorUser = reactive({
    userNotfound: ""
})

//Validate
const rules = computed(() => {
    return {
        email: { required, email },
        password: { required },
    }
})
const v$ = useVuelidate(rules, userForm)

const submitForm = async () => {
    const result = await v$.value.$validate()
    if (result) {

        const result = await axios.get(`https://json-server-vue3-d109.onrender.com/users?email=${userForm.email}&password=${userForm.password}`)
        // console.log(result)
        if (result.status == 200 && result.data.length > 0) {
            localStorage.setItem("user-info", JSON.stringify(result.data[0]))
            alert("Success, form submited!")
            // console.log("Logged In")
            errorUser.userNotfound = "พบผู้ใช้งาน"
            router.push(state.redirectTo)
        } else {
            // console.log("No User Found")
            alert("Error, form submited!")
            errorUser.userNotfound = "ไม่พบผู้ใช้งาน"
        }
    } else {
        alert("Error, form submited!")
    }
}

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
                            <span class="text-danger" v-for="error in v$.email.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>

                            <div class="mb-2">
                                <label for="" class="form-label">รหัสผ่าน</label>
                                <input type="password" class="form-control" v-model="userForm.password"
                                    placeholder="รหัสผ่านผู้สมัคร" required>
                            </div>

                            <span class="text-danger" v-for="error in v$.password.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>
                            <div class="mb-2">
                                <p type="submit" @click="submitForm" class="btn btn-primary shadow d-block">เข้าสู่ระบบ</p>
                                <p @click="SignUpPage" class="text-body text-center d-block">
                                    Dont' have an Account?
                                    <router-link :to="{ name: 'signup' }" class="text-decoration-none font-weight-bold">
                                        Sing Up
                                    </router-link>
                                </p>
                            </div>
                            <div class="text-center text-danger">
                                {{ errorUser.userNotfound }}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>