<template>
  
  <div class="hello">
    <router-view/>
    hello -- {{msg}} 
    <button @click="handleClick"></button>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // emits: ['enlarge-text'],
  methods:{
    handleClick() {
      console.log(this.msg);
    },
  }

}
</script>
