<template>
    <div>
        <p>Universitas Terbuka</p>
        <ol>
            <li v-for="mk in daftarMK" v-bind:key="mk.text">
                {{ mk.text }}
            </li>
        </ol> 
    </div>
</template>
<script>
export default {
    name: "LoopingMk",
    data() {
        return {
            daftarMK: [
                { text: 'Algoritma Pemrograman' },
                { text: 'Pemrograman Perangkat Bergerak' },
                { text: 'Sistem Terdistribusi' }
            ]
        };
    }
}
</script>
<style lang="">
    
</style>