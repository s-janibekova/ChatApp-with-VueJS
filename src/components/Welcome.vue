<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="text welcomeText">Привет !</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Введите ваше имя:</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn">Войти</button>
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data(){
    return{
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
        this.$router.push({ name: 'Chat', params: { name: this.name }})
      } else {
        this.feedback = "You must enter a name to join"
      }
    }
  }
}
</script>

<style>
.welcome{
  max-width: 400px;
  margin-top: 100px;
  background: #ffd5ab;
  font-family: 'Slabo 27px', serif;
}
.welcome h2{
  font-size: 3em;
}
.welcome button{
  margin: 30px auto;
}

.welcomeText {
  color: #235952;
}

.btn {
  background: #0f4c81
}

.btn:hover {
  background: #8ac6d1
}
</style>
