<template lang="">
    <div>
        <p>{{ pesan }}</p>
        <button v-on:click="reverseStr">Balik String</button>
    </div>
</template>
<script>
export default {
    name: "ReverseText",
    data() {
        return {
            pesan: "Universitas Terbuka",
        };
    },
    methods: {
        reverseStr() { 
            this.pesan = this.pesan.split('').reverse().join('')
        }
    }
}
</script>
<style lang="">
    
</style>