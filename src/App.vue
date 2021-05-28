<template>
  <div id="app">
    <transition name="view">

      <router-view/>
      
    </transition>
    <div id="nav">
      <router-link to="/">
        <svg-icon class="nav-svg" name="home" :width="24" :height="24" />
      </router-link>
      <router-link to="/search">
        <svg-icon class="nav-svg" name="search" :width="24" :height="24" />
      </router-link>
      <router-link to="/profile">
        <svg-icon class="nav-svg" name="bookmark" :width="24" :height="24" />
      </router-link>
      <router-link to="/profile">
        <svg-icon class="nav-svg" name="user" :width="24" :height="24" />
      </router-link>
    </div>
  </div>
</template>

<script>
import SvgIcon from './components/SvgIcon'


export default {

  components: {
    SvgIcon
  }

}
</script>


<style lang="scss">
@import './assets/styles/vars.scss';
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: $bg;
}

#app {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,ＭＳ Ｐゴシック,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 10px;
  font-size: 14px;
}
.nav-svg {

  fill: $text;

}
#nav {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: $bg;
  box-shadow: 0 3px 5px rgba(0,0,0,.2);
  border-radius: 25px;
  width: 220px;
  a {
    font-weight: bold;
    color: #a3a3a3;
    margin: 0 10px;

    &.router-link-exact-active {
      color: $accent;
    }
  }
}

.view-enter-active, .view-leave-active {
  transition: opacity 0.2s ease-in-out, transform 0.2s ease;
}

.view-enter-active {
  transition-delay: 0.2s;
}

.view-enter, .view-leave-to {
  opacity: 0;
}
.view-enter-to, .view-leave {
  opacity: 1;
}

</style>
