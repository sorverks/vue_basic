<template>
  <form @submit.prevent="handleSubmit">
    <label>Numele</label>
    <input type="text" required >

    <label>Prenumele</label>
    <input type="text">

    <label>Nr telefon</label>
    <input type="tel" placeholder="+373 0000000" pattern="/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im" required>

    <label>Email</label>
    <input type="email" required v-model="email">

<!--
    <label>Password</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error">{{passwordError}}</div>
-->

<!--    <label>Aveti masina?</label>
    <select v-model="role">
      <option value="yes" >Yes</option>
      <option value="no">No</option>
    </select>-->

    <label>Aveti masina?</label><br>
    <label>False:</label>
    <input type="radio" v-model="answer" v-bind:value="true" @click="carConfirm">
    <label>True:</label>
    <input type="radio" v-model="answer" v-bind:value="false" @click="carConfirm"><br>

    <div v-if="car" class="carTrue">
      <label>Introduceti modelul:</label>
      <input type="text" >
    </div>
    <div>
      <textarea v-model='message' @keyup='charCount()' ></textarea>
      <span class="textarea" :style="{ color: 'activeColor'}">Limit of 100 characters / {{ characterRemain }} characters</span>
    </div>
<!--    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{skill}}</span>
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required>
      <label>Accept terms and conditions!</label>
    </div>-->
    <div class="submit">
      <button>Submit</button>
    </div>
<!--    <div>
      <input type="checkbox" value="sorin" v-model="names">
      <label>Sorin</label>
    </div>
    <div>
      <input type="checkbox" value="aurel" v-model="names">
      <label>Aurel</label>
    </div>
    <div>
      <input type="checkbox" value="alex" v-model="names">
      <label>Alex</label>
    </div>-->

  </form>

<!--  <p>Email: {{email}}</p>
  <p>Passwor: {{password}}</p>
  <p>Role: {{role}}</p>
  <p>Terms accepted: {{terms}}</p>-->
<!--  <p>Names cheked: {{names}}</p>-->
</template>

<script>
import { ref } from 'vue'

const activeColor = ref('red')

export default {
  data() {
    return {
      email: '',
      password: '',
      role: '',
      terms: false,
      /*names: [],*/
      tempSkill: '',
      skills: [],
      passwordError: '',
      telError: '',
      tel: '',
      car: false,
      answer: true,
      message: '',
      totalCharacter: 0,
      characterRemain: 0,
    }
  },
  methods:{
    carConfirm(){
      this.car = this.role === 'yes' || this.answer === true;
    },
    addSkill(e){
      if(e.key === ',' && this.tempSkill){
        if(!this.skills.includes(this.tempSkill)){
          this.skills.push(this.tempSkill)
        }
        this.tempSkill = ''
      }
    },
    deleteSkill(skill){
      this.skills = this.skills.filter((item) => {
        return skill !== item
      })
    },
    handleSubmit(){
      //validate password
      this.passwordError = this.password.length > 5 ?
          '': 'Parola trebuie sa fie mai mare decat 6 caractere'
    },
    charCount(){
      this.totalCharacter = 100;
      this.characterRemain = this.totalCharacter - this.message.length;
      if(this.characterRemain == 99)
        activeColor;
     }
  }
}
</script>

<style>

form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input, select, textarea{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"],[type="radio"]{
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill{
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
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
.error{
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>