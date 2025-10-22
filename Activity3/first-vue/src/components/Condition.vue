<template>
    <div>
        <p v-if="terlihat">Universitas Terbuka</p>
        <button @click="onOff">{{ aksi }}</button>
    </div>
</template>
<script>
export default {
    name: "ConditionShow",
    data() {
        return {
            terlihat: true,
            aksi: "Sembunyikan"
        };
    },
    methods: {
        onOff() {
            if (this.aksi === 'Sembunyikan') {
                this.aksi = 'Tampilkan';
                this.terlihat = false;
            } else {
                this.aksi = 'Sembunyikan';
                this.terlihat = true;
            }
        }
    }
}
</script>
<style lang="">
    
</style>