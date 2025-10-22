<template>
  <div id="list-mk-app">
    <p>Universitas Terbuka</p>
    <ol>
      <DaftarMK
        v-for="mkDitawarkan in daftarMK"
        :mk="mkDitawarkan"
        :key="mkDitawarkan.id"
      />
    </ol>
  </div>
</template>

<script>
import DaftarMK from '@/components/DaftarMK.vue'

export default {
  name: 'KomDasar1',
  components: {
    DaftarMK
  },
  data() {
    return {
      daftarMK: [
        { id: 0, text: 'Algoritma Pemrograman' },
        { id: 1, text: 'Pemrograman Perangkat Bergerak' },
        { id: 2, text: 'Sistem Terdistribusi' }
      ]
    }
  }
}
</script>

<style scoped>
/* opsional */
</style>
