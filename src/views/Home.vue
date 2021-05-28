<template>
  <div class="home">
    <div class="images-list">
      <masonry
        :cols="2"
        :gutter="10"
      >

        <home-image-list-item 
          v-for="item in imagesList" 
          :key="item.id"
          :item="item"
        />

      </masonry>

    </div>
  </div>
</template>

<script>
  import HomeImageListItem from '../components/HomeImageListItem'

  export default {

    data() {
      return {
        title: 'Главная страница',
        message: 'Текст какого-то сообщения',
        visible: false
      }
    },

    components: {
      HomeImageListItem
    },

    computed: {
      imagesList() {
        return this.$store.getters['images'];
      }
    },

    mounted() {
      this.$store.dispatch('getImages')
    },

    methods: {

    }

  }

</script>

<style lang="scss">

  @import '~@/assets/styles/vars.scss';

  .images-list {
    padding-bottom: 70px;
  }

</style>