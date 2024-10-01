



<template>
  <div class="max-w-md mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-center">Inicio de Sesión</h2>
    <form @submit.prevent="loginUser">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input v-model="email" type="email" id="email" class="mt-1 p-2 w-full border rounded-md" required>
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
        <input v-model="password" type="password" id="password" class="mt-1 p-2 w-full border rounded-md" required>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Iniciar Sesión
      </button>
    </form>

    <p class="text-center text-sm mt-4">
      ¿No tienes una cuenta?
      <router-link to="/RegistroPagina" class="text-blue-500 hover:underline">Regístrate aquí</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 

// Campos reactivos para el formulario de inicio de sesión
const email = ref('');
const password = ref('');

// Instancia de router para redirección
const router = useRouter(); 

// Función de inicio de sesión
const loginUser = () => {
  // Simulación de inicio de sesión 
  console.log('Iniciar Sesión con:', email.value, password.value);

  // Redirige a la página CorreoPagina
  router.push('/CorreoPagina');
};

</script>











