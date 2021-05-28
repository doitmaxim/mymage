<template>
    <div class="post"> 
        <img
        class="image"
        :src="item.largeImageURL"
        >
        <div class="image-caption">
        <a href="#" class="user">
            @{{item.user}}
        </a>
        <div 
            class="menu-btn"
            @click="openMenu()"
        >
            <span class="menu-dot"></span>
            <span class="menu-dot"></span>
            <span class="menu-dot"></span>
        </div>
        </div>
        <div 
            class="menu"
            :class="{ 'menu-active' : showMenu }"
        >
            <a class="menu-link" href="#">Save</a>
            <a class="menu-link" href="#">Download image</a>
            <a class="menu-link" href="#">Report</a>
        </div>
    </div>
</template> 

<script>

    export default {
        data() {
            return {
                showMenu: false
            }
        },
        props: {
            item: Object
        },
        methods: {
            openMenu() {
                return this.showMenu = !this.showMenu
            }
        }
    }

</script>
<style lang="scss">

    @import '~@/assets/styles/vars.scss';

    .post {
        width: 100%;
        position: relative;
        page-break-inside: avoid;
        break-inside: avoid;
        box-shadow: 0 3px 5px rgba(0,0,0,.2);
        border-radius: 10px;
        transition: .2s ease-in-out;
        margin-bottom: 10px;
    }

    .image {
        max-width: 100%;
        display: block;
        border-radius: 10px 10px 0 0;
    }

    .image-caption {
        padding: 8px 10px;
        color: $text;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .user {
        font-weight: bold;
        text-decoration: none;
        color: $text;
    }

    .menu-btn {
        display: flex;
    }

    .menu-dot {
        background-color: $text;
        display: block;
        width: 4px;
        height: 4px;;
        border-radius: 50%;
        margin: 0 1px;
    }
    .menu {
        padding: 0 10px;
        overflow: hidden;
        max-height: 0px;
        transition: .2s ease-in-out;
        opacity: 0;
        display: flex;
        flex-direction: column;
    }

    .menu-active {
        padding: 5px 10px;
        max-height: 500px;
        opacity: 1;
    }

    .menu-link {
        color: $text;
        text-decoration: none;
        margin: 5px 0;
    }

</style>