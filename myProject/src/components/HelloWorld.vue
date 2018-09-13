<template>
<!-- 左侧导航栏 -->
 <div class="main">
      <div class="leftMain"></div>
      <div class="rightMain"></div>
    </div>
    
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex: 1;
}
</style>

<style scoped>

.leftMain {
  width: 9%;
  background-color: #2c3e50;
}
.rightMain {
  height: 1000px;
}
</style>
