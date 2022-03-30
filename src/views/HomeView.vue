<template>
  <div class="home">
    Home
    <p>My name is {{ name }} and my age is {{ age }} </p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  setup(){
    console.log('setup');

    let name = "mario"
    let age = 30

    

    return { name, age}
  }
}
</script>
