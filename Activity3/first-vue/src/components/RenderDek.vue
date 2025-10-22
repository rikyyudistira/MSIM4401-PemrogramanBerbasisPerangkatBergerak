<template lang="">
    <div>
        Halo {{ name }}, detik berjalan: {{ counter }}
    </div>
</template>
<script>
export default {
    name: "RenderDek",
    data() {
        return {
            name: "Vue",
            counter: 0
        };
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 1000)
    }
}
</script>
<style lang="">
    
</style>