<template>
  <div class="home">
    <div class="images-list">

      <home-image-list-item 
        v-for="item in imagesList" 
        :key="item.id"
        :item="item"
      />

    </div>
  </div>
</template>


<script>
  import HomeImageListItem from '../components/HomeImageListItem'
  export default {

    data() {
      return {
        title: 'Главная страница',
        message: 'Текст какого-то сообщения'
      }
    },
    components: {
      HomeImageListItem
    },
    computed: {
      imagesList() {
        return this.images = this.$store.state.images
      }

    },

    mounted() {
      this.$store.dispatch('getImages')
    }

  }

</script>

<style lang="scss">

  @import '~@/assets/styles/vars.scss';

  .images-list {
    column-count: 2;
    column-gap: 10px;
    padding: 5px;
    padding-bottom: 70px;
  }
</style>