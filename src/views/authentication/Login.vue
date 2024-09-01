<template>
  <Layout>
    <div class="mt-5">
      <img class="mx-auto w-40" src="/assets/images/logo.png" alt="Logo" />
      <h1 class="text-2xl text-center font-bold py-1">Masuk Sekarang</h1>
      <p class="text-center text-gray-500 text-sm mb-8">
        Masuk dan tingkatkan Bisnismu!
      </p>
      <form role="form">
        <div class="grid gap-y-4">
          <div>
            <label for="email" class="text-sm mb-2 dark:text-white hidden"
              >Nomor</label
            >
            <div class="relative">
              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                required
                aria-describedby="email-error"
                placeholder="Nomor WhatsApp"
              />
            </div>
          </div>
          <div>
            <label for="email" class="text-sm mb-2 dark:text-white hidden"
              >Nomor</label
            >
            <div class="flex">
              <input
                type="email"
                id="email"
                name="email"
                class="form-control rounded-e-none"
                required
                aria-describedby="email-error"
                placeholder="Kode Verifikasi"
              />
              <button type="button" class="px-8 border border-s-0 rounded-e-lg">
                Kirim
              </button>
            </div>
          </div>

          <button
            type="submit"
            class="w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-primary focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Masuk
          </button>
          <div class="text-center text-gray-400">
            <p class="text-xs">
              Belum punya akun?
              <RouterLink href="/register" class="text-black font-semibold"
                >Buat Akun</RouterLink
              >
            </p>
          </div>
        </div>
      </form>
      <!-- End Form -->
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "./Layout.vue";
</script>
