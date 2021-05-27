<template>
  <div class="search">
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
        title: 'Поиск',
        message: 'Текст какого-то сообщения'
      }
    }

  }
</script>