<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to your Vue.js plugin'
    }
  }
}
</script>

<style>
    h1 {
        color: indigo;
    }
</style>
