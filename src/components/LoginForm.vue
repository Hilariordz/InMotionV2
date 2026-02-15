<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-black text-blue-600 tracking-tighter mb-2">InMotion</h1>
        <p class="text-slate-600">Inicia sesión en tu cuenta</p>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-8">
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-sm font-semibold text-slate-700 mb-2">Email</label>
            <input 
              v-model="form.email"
              type="email" 
              required
              class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu@email.com"
            />
          </div>

          <div class="mb-6">
            <label class="block text-sm font-semibold text-slate-700 mb-2">Contraseña</label>
            <input 
              v-model="form.password"
              type="password" 
              required
              class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            class="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
          >
            Iniciar sesión
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-slate-600">
            ¿No tienes cuenta? 
            <router-link to="/register" class="text-blue-600 font-semibold hover:underline">
              Regístrate
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({
  email: '',
  password: ''
})

const handleLogin = () => {
  console.log('Login:', form)
  alert(`Bienvenido! Email: ${form.email}`)
  router.push('/')
}
</script>
