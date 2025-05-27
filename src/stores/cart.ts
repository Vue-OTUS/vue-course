import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const items = ref<{ id: string; qty: number }[]>([])

    const qty = computed(() => items.value.reduce((total, product) => total + product.qty, 0))

    function add(product, qty) {
        const existingIdx = items.value.findIndex((p) => p.id === product.id);

        if (existingIdx > -1) {
            items.value[existingIdx].qty += qty;
        } else {
            items.value.push({ ...product, qty });
        }
    }

    function getCartProduct(id: string) {
        return items.value.find((product) => product.id === id);
    }

    function $reset() {
        items.value = []
    }

    return { items, qty, add, getCartProduct, $reset }
})
