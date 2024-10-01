<template>
  <div class="flex max-w-6xl mx-auto my-10 space-x-8">
    <!-- Formulario -->
    <div class="w-1/2 bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-6">Enviar un mensaje</h2>
      <form @submit.prevent="sendMessage">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea
            v-model="message"
            id="message"
            class="mt-1 p-2 w-full border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          :disabled="loading"
        >
          <span v-if="loading">Enviando...</span>
          <span v-else>Enviar</span>
        </button>
      </form>
      <p v-if="successMessage" class="mt-4 text-green-500">{{ successMessage }}</p>
      <p v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</p>
    </div>

    <!-- Mapa -->
    <div class="w-1/2 bg-gray-300 p-4 rounded-lg shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.713414820122!2d-89.1967221254366!3d13.675182386708691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63311954327075%3A0x28682274f5650dd1!2sUniversidad%20Luterana%20Salvadore%C3%B1a!5e0!3m2!1ses-419!2ssv!4v1726971399222!5m2!1ses-419!2ssv"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const email = ref('');
const message = ref('');
const successMessage = ref('');
const errorMessage = ref('');
const loading = ref(false);

const sendMessage = async () => {
  try {
    loading.value = true;
    const response = await axios.post('http://localhost:3000/send-email', {
      email: email.value,
      message: message.value
    });
    successMessage.value = response.data.message || '¡Correo enviado con éxito!';
    errorMessage.value = '';
  } catch (error) {
    errorMessage.value = 'Error al enviar el correo. Inténtalo de nuevo.';
    successMessage.value = '';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Agrega estilos adicionales si es necesario */
</style>
