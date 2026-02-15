<template>
  <div class="min-h-screen bg-slate-50">
    <nav class="bg-white shadow-sm border-b border-slate-200 px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-black text-blue-600 tracking-tighter">
        InMotion
      </h1>

      <div class="flex gap-4">
        <router-link 
          to="/login"
          class="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition"
        >
          Iniciar sesión
        </router-link>
        <router-link 
          to="/register"
          class="px-5 py-2 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-md shadow-blue-100 transition"
        >
          Registrarse
        </router-link>
      </div>
    </nav>

    <main class="flex flex-col items-center justify-center mt-20">
      <div class="text-center p-10">
        <h2 class="text-4xl font-bold text-slate-800 mb-4">Bienvenido a InMotion</h2>
        <p class="text-slate-600 text-lg">Tu plataforma de gestión en movimiento</p>
      </div>
    </main>
  </div>
</template>
