<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'

import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="bg-jet w-full h-screen">
      <!-- <nav>
        <RouterLink class="hover:opacity-60 text-whitesmoke" to="/">Home</RouterLink>
        <RouterLink class="hover:opacity-60 text-whitesmoke" to="/about">About</RouterLink>
      </nav> -->

      <NavBar />

      <RouterView />
    </div>

</template>

