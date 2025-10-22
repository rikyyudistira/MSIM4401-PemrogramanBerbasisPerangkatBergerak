<template>
  <RenderDek/>
  <hr/>
  <ReverseText/>
  <hr/>
  <Condition/>
  <hr/>
  <Looping/>
  <hr/>
  <KomDasar1/>
</template>

<script>
import RenderDek from './components/RenderDek.vue'
import ReverseText from './components/ReverseText.vue'
import Condition from './components/Condition.vue'
import Looping from './components/Looping.vue'
import KomDasar1 from './components/KomDasar1.vue'

export default {
  name: 'App',
  components: {
    RenderDek,
    ReverseText,
    Condition,
    Looping,
    KomDasar1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
