<template>
  <div id="app">
    <div id="nav">
      <img alt="Vue logo" src="./assets/logo.png">
      <span class="gekai">|</span>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/help">Help</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 20px 60px;
  text-align: left;
  display: flex;
  align-items: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 24px;
    text-decoration: none;
    padding: 0 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  img {
    height: 20px;
    width: 20px;
    margin-right: 15px;
  }
  .gekai {
    color: #333;
    height: 24px;
  }
}
</style>
