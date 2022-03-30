<template>
  <h1>Facts about Cats))</h1>
  <img src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" />
  <br />
  <button class="submit" type="submit" v-on:click="fetchFacts">Get Facts </button>

  <div v-if="loading === true">
    <h3>Getting a Cute Fact...</h3>
  </div>
  <div v-else>
    <h3>{{ title }}</h3>
    <p>{{ fact }}</p>
  </div>
</template>

<script>
export default {
  name: "CatFact",
  data() {
    return {
      loading: false,
      fact: "",
      title: "",
    };
  },

  methods: {
    async fetchFacts() {
      this.loading = true;
      const resp = await fetch("https://catfact.ninja/fact");
      const data = await resp.json();

      if (data) {
        this.loading = false;
        this.title = data.length > 0 ? "Here are some interesting facts.." : "Whoops!";
        this.fact = data.length > 0 ? data.fact : "Could not find anything!";
      }
    },
  },
};
</script>

<style>
img {
  height: 15%;
  width: 30%;
}
button{
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit{
  text-align: center;
}
div {
  margin-top: 5%;
}
</style>