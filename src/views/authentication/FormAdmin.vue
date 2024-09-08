<template>
  <Layout>
    <div class="mt-5 w-full">
      <img class="mx-auto w-40" src="/assets/images/logo.png" alt="Logo" />
      <h1 class="text-2xl text-center font-bold py-1">Masuk Sekarang</h1>
      <p class="text-center text-gray-500 text-sm mb-8">
        Masuk untuk melanjutkan!
      </p>
      <form role="form">
        <div class="grid gap-y-4">
          <div>
            <label for="email" class="text-sm mb-2 dark:text-white hidden">Email</label>
            <div class="relative">
              <input type="email" id="email" name="email" class="form-control border-1" placeholder="Masukkan email anda" v-model="email" :class="{ 'form-control-failed': emailError && metaEmail.touched }" @blur="metaEmail.touched = true">
              <div v-if="emailError && metaEmail.touched" class="pt-2 text-xs text-red-500">{{ emailError }}</div>
            </div>
          </div>
          <div>
            <label for="password" class="text-sm dark:text-white hidden">Nomor</label>
            <input type="password" id="password" name="password" class="form-control border-1"
              placeholder="Masukkan password anda" v-model="password"
              :class="{ 'form-control-failed': passwordError && metaPassword.touched }" @blur="metaPassword.touched = true">
            <div v-if="passwordError && metaPassword.touched" class="pt-2 text-xs text-red-500">{{ passwordError }}</div>
          </div>
          <button type="button"
            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-primary focus:outline-none focus:divide-opacity-95 disabled:opacity-50"
            :disabled="!meta.valid" @click="tryLogin">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            Masuk
          </button>
          <div class="text-center text-gray-400">
            <p class="text-xs">
              Belum punya akun?
              <RouterLink to="/register" class="text-black font-semibold">Buat Akun</RouterLink>
            </p>
          </div>
        </div>
      </form>
      <!-- End Form -->
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import Layout from "./Layout.vue";
import * as yup from 'yup';
import useNotify from "../../composables/notify";
import router from '../../router';

const { notifySuccess, notifyError } = useNotify();

const schema = yup.object().shape({
  email: yup.string()
    .required('Email tidak boleh kosong')
    .email('Format email tidak valid, harap masukkan email yang benar'),
  password: yup.string()
    .required('Password harus diisi!')
    .min(6, 'Password harus memiliki setidaknya 6 karakter')
    .max(20, 'Password tidak boleh lebih dari 20 karakter'),
});
const { meta } = useForm({
  validationSchema: schema,
  validateOnMount: true,
  initialValues: {
    email: '',
    password: '',
  },
});

const { value: email, meta: metaEmail,  errorMessage: emailError } = useField<string>('email');
const { value: password, meta: metaPassword , errorMessage: passwordError } = useField<string>('password');

const tryLogin = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        password_confirmation: password.value,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
    sessionStorage.setItem('token', data.data.access_token);
    router.push('/admin/dashboard');
    notifySuccess(data.message);
  } catch (error: any) {
    notifyError(error.message);
  }
}

</script>
