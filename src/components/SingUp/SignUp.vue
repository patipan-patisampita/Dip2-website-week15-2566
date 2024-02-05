<script setup>
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs, minLength } from '@vuelidate/validators'

const router = useRouter()

const userForm = reactive({
    fname: "",
    lname: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    address: "",
});

const rules = computed(() => {
    return {
        fname: { required },
        lname: { required },
        email: { required, email },
        password: { required, minLength: minLength(4) },
        password_confirmation: { required, sameAs: sameAs(userForm.password) },
        phone: { required },
        address: { required },
    }
})

const v$ = useVuelidate(rules, userForm)

function SignInPage() {
    router.push({ name: "signin" })
}

const submitForm = async () => {
    const result = await v$.value.$validate()
    if (result) {
        alert("Success, form submited!")
    } else {
        alert("error, form submited!")
    }

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
                            <span class="text-danger" v-for="error in v$.fname.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>

                            <div class="mb-2">
                                <label for="" class="form-label">นามสกุล</label>
                                <input type="text" class="form-control" v-model="userForm.lname"
                                    placeholder="นามสกุลผู้สมัคร" required>
                            </div>
                            <span class="text-danger" v-for="error in v$.lname.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>

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
                                <label for="" class="form-label">ยืนยันรหัสผ่าน</label>
                                <input type="password" class="form-control" v-model="userForm.password_confirmation"
                                    placeholder="ยืนยันรหัสผ่านผู้สมัคร" required>
                            </div>
                            <span class="text-danger" v-for="error in v$.password_confirmation.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>

                            <div class="mb-2">
                                <label for="" class="form-label">โทรศัพท์</label>
                                <input type="text" class="form-control" v-model="userForm.phone" placeholder="เบอร์โทรศัพท์"
                                    required>
                            </div>
                            <span class="text-danger" v-for="error in v$.phone.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>

                            <div class="mb-2">
                                <label for="" class="form-label">ที่อยู่:</label>
                                <textarea v-model="userForm.address" cols="51" rows="2"></textarea>
                            </div>

                            <span class="text-danger" v-for="error in v$.address.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>

                            <div class="mb-2">
                                <p type="submit" @click="submitForm" class="btn btn-primary shadow d-block">สมัครสมาชิก</p>
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
