<template>
  <h1>Universities in USA</h1>
  <img src="https://sciencebusiness.net/sites/default/files/styles/article/public/2020-07/universities-call-for-higher-budget.png?itok=3kv4rkjM" />
  <br />
  <button class="submit" type="submit" v-on:click="GetData">Get Data </button>

    <div v-if="loading === true">
    <h3>Getting some universities...</h3>
  </div>
  <div v-else>
    <h3>{{ title }}</h3>
    <p>{{ tempUniver }}</p>
    
    <div v-for="name in univer" :key="name" class="pill">
      <span @click="deleteSkill(name)">{{ name }}</span>
    </div>
  </div>
  

</template>

<script>
export default {
  name: "UniversityApi",
  data() {
    return {
      loading: false,
      country: "",
      title: "",
      univer: [],
      tempUniver: "",
      name: '',
    };
  },

  methods: {
    async GetData() {
      this.loading = true;
      const resp = await fetch("http://universities.hipolabs.com/search?country=United+States");
      const data = await resp.json();
      
      if (data) {
        let temp = []
        this.loading = false;
        this.title = data.length > 0 ? "Here are some universities.." : "Whoops!";
        temp = data.slice(0, 10).map(({name}) => ({ name }));
        for (var i = 0; i < temp.length; ++i) {
          this.univer.push(temp[i].name)
          }
      }
    },
    deleteSkill(name){
      this.univer = this.univer.filter((item) => {
        return name !== item
      })
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