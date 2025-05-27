<script setup>
import { computed, ref } from 'vue';
import { useCartStore } from '../stores/cart';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const cartStore = useCartStore();

const qty = ref(1);

const inCartQty = computed(() => cartStore.getCartProduct(props.item.id)?.qty ?? 0);
</script>

<template>
  <tr>
    <td>{{ item.article }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.price }}</td>
    <td>
      <input v-model="qty" :min="1" :max="item.available" type="number" />
      {{ inCartQty }} в корзине
    </td>
    <td>
      <button class="btn btn-primary" @click="cartStore.add(item, qty)">
        В корзину
      </button>
    </td>
  </tr>
</template>
