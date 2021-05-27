<template>
  <div class="profile">
    <h1>{{title}}</h1>
    <div class="text">
      {{message}}
    </div>
  </div>
</template>


<script>
  export default {

    data() {
      return {
        title: 'Профиль',
        message: 'Текст какого-то сообщения'
      }
    }

  }
</script>