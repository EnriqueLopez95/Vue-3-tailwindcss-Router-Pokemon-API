<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-4">¿Quién es ese Pokémon?</h1>

    <!-- Aquí mostraremos la imagen del Pokémon -->
    <div class="pokemon-image">
      <img
        :src="pokemonImage"
        alt="Pokémon"
        :class="{ 'pokemon-silhouette': !showResult, 'pokemon-reveal': showResult }"
        class="w-64 h-64 object-contain"
      />
    </div>

    <!-- Input para que el usuario adivine el nombre -->
    <div class="mt-4">
      <input
        v-model="userGuess"
        type="text"
        placeholder="Adivina el Pokémon"
        class="border px-4 py-2"
        :class="{ 'border-red-500': emptyGuess }"
      />
      <button @click="checkAnswer" class="ml-2 bg-blue-500 text-white px-4 py-2">
        Adivinar
      </button>
    </div>

    <!-- Mensaje de error si el campo está vacío -->
    <div v-if="emptyGuess" class="text-red-500 mt-2">
      Por favor, ingrese el nombre de un Pokémon.
    </div>

    <!-- Resultado de la adivinanza -->
    <div v-if="showResult" class="mt-4">
      <p v-if="correct" class="text-green-500">¡Correcto! Es {{ pokemon.name }}.</p>
      <p v-else class="text-red-500">Incorrecto. Es {{ pokemon.name }}.</p>
    </div>

    <!-- Botón para obtener un nuevo Pokémon -->
    <div class="mt-4">
      <button @click="getRandomPokemon" class="bg-yellow-500 text-white px-4 py-2">
        Nuevo Pokémon
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

// Variables reactivas
const pokemon = ref(null);
const userGuess = ref('');
const showResult = ref(false);
const correct = ref(false);
const emptyGuess = ref(false);

// Función para obtener un Pokémon aleatorio
const getRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 151) + 1; // Pokémon de la 1ra generación
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    pokemon.value = data;
    userGuess.value = '';
    showResult.value = false;
    correct.value = false;
    emptyGuess.value = false;
  } catch (error) {
    console.error('Error al obtener el Pokémon:', error);
  }
};

// Función para verificar si la respuesta es correcta
const checkAnswer = () => {
  if (!userGuess.value.trim()) {
    emptyGuess.value = true;
    return;
  }
  emptyGuess.value = false;
  correct.value = userGuess.value.toLowerCase() === pokemon.value.name.toLowerCase();
  showResult.value = true;
};

// Obtener un Pokémon cuando se monta el componente
onMounted(getRandomPokemon);

// Computed Property para la imagen del Pokémon
const pokemonImage = computed(() =>
  pokemon.value
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.value.id}.png`
    : ''
);
</script>

<style scoped>
.pokemon-silhouette {
  filter: brightness(0); /* Hace que la imagen sea una silueta */
}
.pokemon-reveal {
  filter: none; /* Muestra la imagen en color completo */
}
.border-red-500 {
  border-color: #f56565; /* Color rojo para el borde del campo de entrada */
}
</style>
