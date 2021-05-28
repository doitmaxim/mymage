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
        return this.$store.getters['images'];
      }

    },

    mounted() {

      this.$store.dispatch('getImages')

      // this.$nextTick(function() {

      //   this.resizeAllGridItems()

      // })


      // window.onload = this.resizeAllGridItems()
      // window.addEventListener('resize', this.resizeAllGridItems())

    },
    methods: {

      // resizeGridItem: function(item) {
      //   let grid = document.getElementsByClassName('images-list')
      //   let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'))
      //   let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))
      //   let rowSpan = Math.ceil( (item.querySelector('.post').getBoundingClientRect().height+rowGap) / (rowHeight + rowGap) )
      //   item.style.gridRowEnd = "span "+rowSpan
      // },
      // resizeAllGridItems: function() {
      //   let allItems = document.getElementsByClassName('post')
      //   for( let i = 0; i < allItems.length; i++) {
      //     this.resizeGridItem(allItems[i])
      //   }
      // },
      // resizeInstance: function(instance) {
      //   let item = instance.elements[0]
      //   resizeGridItem(item)
      // }

    }

  }

</script>

<style lang="scss">

  @import '~@/assets/styles/vars.scss';


  // .images-list {

  //   display: grid;
  //   gap: 10px;
  //   grid-template-columns: repeat(2, 1fr);
  //   grid-auto-rows: 20px;

  // }

  .images-list {
    column-count: 2;
    column-gap: 10px;
    padding: 5px;
    padding-bottom: 70px;
  }



  @supports (grid-template-rows: masonry) {
    
    .images-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: masonry;
      gap: 10px;
      padding: 5px;
      padding-bottom: 70px;
    }

  }

</style>