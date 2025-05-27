<script setup>
import { useQuery } from '@tanstack/vue-query';
import CatalogRow from '@/components/CatalogRow.vue';

const { isPending, isError, data } = useQuery({
  queryKey: ['catalog'],
  queryFn: fetchCatalog,
});

async function fetchCatalog() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  
  return [
    {
      id: 1,
      article: 'ART001',
      name: 'Смартфон Samsung Galaxy A54',
      price: 25990,
      quantity: 1,
      available: 15
    },
    {
      id: 2,
      article: 'ART002', 
      name: 'Наушники Apple AirPods Pro',
      price: 19990,
      quantity: 1,
      available: 8
    },
    {
      id: 3,
      article: 'ART003',
      name: 'Ноутбук Lenovo ThinkPad E15',
      price: 65990,
      quantity: 1,
      available: 5
    },
    {
      id: 4,
      article: 'ART004',
      name: 'Планшет iPad Air 5',
      price: 54990,
      quantity: 1,
      available: 12
    },
    {
      id: 5,
      article: 'ART005',
      name: 'Умные часы Apple Watch Series 9',
      price: 35990,
      quantity: 1,
      available: 20
    },
    {
      id: 6,
      article: 'ART006',
      name: 'Клавиатура Logitech MX Keys',
      price: 8990,
      quantity: 1,
      available: 25
    }
  ];
}
</script>

<template>
  <div class="catalog">
    <h1>Catalog</h1>
    
    <div v-if="isPending" class="loading">
      Загрузка каталога...
    </div>
    
    <div v-else-if="isError" class="error">
      Ошибка при загрузке каталога
    </div>
    
    <table v-else class="table">
      <thead>
        <tr>
          <th>Артикул</th>
          <th>Название</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Сумма</th>
          <th>В корзину</th>
        </tr>
      </thead>
      <tbody>
        <CatalogRow 
          v-for="item in data" 
          :key="item.id"
          :item="item"
        />
      </tbody>
    </table>
  </div>
</template>
