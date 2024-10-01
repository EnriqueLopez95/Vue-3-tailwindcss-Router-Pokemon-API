<template>
    <div class="max-w-md mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-6 text-center">Registro</h2>
  
      <!-- Mensajes de alerta -->
      <div v-if="errors.length" class="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
  
      <form @submit.prevent="registerUser">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
          <input v-model="name" type="text" id="name" class="mt-1 p-2 w-full border rounded-md">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="email" type="email" id="email" class="mt-1 p-2 w-full border rounded-md">
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
          <input v-model="password" type="password" id="password" class="mt-1 p-2 w-full border rounded-md">
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Registrarse
        </button>
      </form>
  
      <p class="text-center text-sm mt-4">
        ¿Ya tienes una cuenta?
        <router-link to="/" class="text-blue-500 hover:underline">Inicia sesión aquí</router-link>
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'; 
  
  // Campos reactivos
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const errors = ref([]); // Arreglo para manejar errores
  
  // Instancia de router
  const router = useRouter(); 
  
  // Función para validar y simular el registro
  const registerUser = () => {
    errors.value = []; // Reiniciar errores
  
    // Validar campos
    if (!name.value) errors.value.push('El nombre es requerido.');
    if (!email.value) errors.value.push('El correo electrónico es requerido.');
    if (!password.value) errors.value.push('La contraseña es requerida.');
  
    // Si no hay errores, simular registro y redirigir
    if (errors.value.length === 0) {
      console.log('Registrarse con:', name.value, email.value, password.value);
      router.push('/'); // Redirige a la página de inicio de sesión
    }
  };
  </script>

