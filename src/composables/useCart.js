import { provide, inject, ref, computed, readonly } from 'vue';

const cartSymbol = Symbol('cart');

export function useCartRoot() {
    const items = ref([]);

    const qty = computed(() => items.value.reduce((total, product) => total + product.qty, 0));

    function add(product, qty) {
        const existingIdx = items.value.findIndex((p) => p.id === product.id);

        if (existingIdx > -1) {
            items.value[existingIdx].qty += qty;
        } else {
            items.value.push({ ...product, qty });
        }
    }

    function remove(toRemove) {
        items.value = items.value.filter((p) => p.id !== toRemove.id);
    }

    function getCartProduct(id) {
        return items.value.find((product) => product.id === id);
    }

    provide(cartSymbol, {
        items: readonly(items),
        qty,
        add,
        remove,
        getCartProduct,
    });
}

export function useCart() {
    return inject(cartSymbol);
}
