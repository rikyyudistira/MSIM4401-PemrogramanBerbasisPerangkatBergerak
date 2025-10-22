<template>
  <li>{{ mk.text }}</li>
</template>

<script>
export default {
  name: 'DaftarMK',
  props: {
    mk: {
      type: Object,
      required: true
    }
  }
}
</script>
