<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/test">Test</router-link>
      <router-link to="/admin">Admin</router-link>
      <router-link to="/table/1">Table 1</router-link>
      <router-link to="/table/2">Table 2</router-link>
      <router-link to="/table/3">Table 3</router-link>
      <router-link to="/table/4">Table 4</router-link>
    </nav>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Admin',
    props: {
        msg: String
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="scss">
@import "@/assets/classHelpers.css";
@import "@/assets/mainStyles.css";

#app {
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.container {
  padding: 0 10px 0 10px;
}

nav {
  padding: 10px;
  background-color: #42b983;
  color: #ffffff;

  a {
    font-weight: bold;
    color: #000000;
    margin-right: 10px;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
