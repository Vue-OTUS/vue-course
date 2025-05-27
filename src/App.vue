<script setup>
import { RouterView } from 'vue-router';
import Navigation from '@/components/Navigation.vue';
import { useCartRoot } from './composables/useCart';

useCartRoot();
</script>

<template>
  <Navigation></Navigation>

  <RouterView />
</template>
