<script setup>
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/catalog" class="nav-link">Каталог</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">
              Корзина
              <span class="badge badge-info">{{ cartStore.qty }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
