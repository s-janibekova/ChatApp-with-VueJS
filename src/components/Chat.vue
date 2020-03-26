<template>
  <div class="chat container">
    <h2 class="center chatText">Наш чат</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="name">{{ message.name }} : </span>
            <span class="msg">{{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  props: ['name'],
  components: {
    NewMessage
  },
  data(){
    return{
      messages: []
    }
  },
  created() {
    let ref = db.collection('messages').orderBy('timestamp')
    ref.onSnapshot(snapshot => {
     
        snapshot.docChanges.forEach(change => {
           if(change.type == 'added'){
             let doc = change.doc
             this.messages.push({
               id: doc.id,
               name: doc.data().name,
               content: doc.data().content,
               timestamp:  moment(doc.data().timestamp).format('lll')
             })
           }
           console.log(this.messages)
      })
      

    })
  }
}
</script>

<style>
body {
    background: #fcf8e8;
}

.chat h2{
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span{
  font-size: 1.4em;
}
.chat .time{
  display: block;
  font-size: 0.8em;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}

.messages::-webkit-scrollbar-thumb{
  background: gray;
}

.chatText {
  color: #0c7b93;
  font-family: 'Slabo 27px', serif;
}

.name {
  color: #18b0b0;
  font-family: 'Amiri', serif;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 0;
  padding-bottom: -20px;
}

span {
  padding-top: -20px;
}

.msg {
  color: #116979;
  font-size: 1rem;
  font-family: 'Crimson Text', serif;
}

</style>  

