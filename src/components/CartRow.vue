<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <tr>
    <td>{ item.id }</td>
    <td>{ item.title }</td>
    <td>{ item.price }</td>
    <td>
      <input type="number" />
    </td>
    <td>{ sum }</td>
    <td>
      <button class="btn btn-danger">
        Удалить
      </button>
    </td>
  </tr>
</template>
