<script setup>
import { useCart } from '@/composables/useCart';
import { computed, ref } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const { add, getCartProduct } = useCart();

const qty = ref(1);

const inCartQty = computed(() => getCartProduct(props.item.id)?.qty ?? 0);
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
    <td>{{ sum }}</td>
    <td>
      <button class="btn btn-primary" @click="add(item, qty)">
        В корзину
      </button>
    </td>
  </tr>
</template>
