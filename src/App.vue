<template>
  <div class="flex flex-col h-screen">
    <!-- Header (sin cambios) -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white sm:h-16 md:px-6 lg:px-8">
      <div class="flex items-center">
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
          <span class="text-lg font-bold">Mi App</span>
        </a>
      </div>
      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
        <RouterLink to="/" class="hover:text-yellow-300 transition duration-300">Inicio de Sesión</RouterLink>
        <RouterLink :to="{ name: 'RegistroPagina' }" class="hover:text-yellow-300 transition duration-300">Registrarse</RouterLink>
        <RouterLink :to="{ name: 'CorreoPagina' }" class="hover:text-yellow-300 transition duration-300">Enviar Correo</RouterLink>
        <RouterLink :to="{ name: 'AdivinaPokemon' }" class="hover:text-yellow-300 transition duration-300">Adivina Pokémon</RouterLink>
      </nav>
    </header>

    <main class="flex-1 flex items-center justify-center py-6">
      <RouterView />
    </main>

    <!-- Footer con nuevo degradado -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-gray-800 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-center">
        © {{ new Date().getFullYear() }} Todos los derechos reservados.
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>
