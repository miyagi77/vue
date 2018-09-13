<template>
  <div id="app">
    <!-- 标题栏 -->
    <div>
      <div class="nav">
        <div class="navLeft"><img src="../src/assets/logo.png" class="navImg"></div>
        <div class="navRight" >
          <ul >
            <li  v-for="(item,index) in list"  :key="index">
              <router-link  @click="active(index)" :class="{active:index==ins}"  data-toggle="dropdown" aria-haspopup="true"  :id="index" :to="item.link">{{item.name}}</router-link>
              <ul  v-if="item.child" class="dropdown-menu" :aria-labelledby="index" v-bind:style="{'left': item.style}">
                <li  v-for="(items,index) in item.child" ><router-link :to="items.link">{{items.name}}</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="navLogin">
          <div style="height: 100%;line-height: 50px;cursor:pointer" data-toggle="dropdown" aria-haspopup="true"  id="login" >
            <span class="glyphicon glyphicon-user" style="color:#fff"></span>
          </div>
          <ul   class="dropdown-menu" aria-labelledby="login" style="left:92%">
              <li ><a>我的信息</a></li>
              <li ><a>安全退出</a></li>
          </ul>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      ins: 0,
      shows: 1,
      list: [
        { name: "首页", link: "/" },
        {
          name: "列表2",
          child: [
            { name: "Action2", link: "/main" },
            { name: "Action action", link: "/hello" }
          ],
          link: "/hello"
        },
        {
          name: "列表3",
          child: [
            { name: "Action3", link: "/hello" },
            { name: "Action action", link: "/hello" }
          ],
          style: "17.3%",
          link: "/hello"
        },
        {
          name: "列表4",
          child: [
            { name: "Action4", link: "/hello" },
            { name: "Action action", link: "/hello" }
          ],
          style: "21.42%",
          link: "/hello"
        },
        {
          name: "列表5",
          child: [
            { name: "Action5", link: "/hello" },
            { name: "Action action", link: "/hello" }
          ],
          style: "25.57%",
          link: "/hello"
        },
        {
          name: "列表6",
          child: [
            { name: "Action6", link: "/hello" },
            { name: "Action action", link: "/hello" }
          ],
          style: "29.73%",
          link: "/hello"
        },
        {
          name: "列表7",
          child: [
            { name: "Action7", link: "/hello" },
            { name: "Action action", link: "/hello" }
          ],
          style: "33.9%",
          link: "/hello"
        },
        { name: "列表8", link: "/hello" }
      ]
    };
  },
  methods: {
    active: function(num) {
      this.ins = num;
    }
  }
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.nav {
  width: 100%;
  height: 50px;
  background-color: #2c3e50;
  min-height: 50px;
  position: fixed;
  display: flex;
  flex-direction: row;
}
.navLeft {
  width: 9%;
}
.navRight {
  flex: 1;
}
.navRight > ul {
  list-style: none;
  float: left;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.navRight > ul > li {
  float: left;
  width: 5%;
  height: 100%;
  text-align: center;
}
.navRight > ul > li > a {
  color: #8a9495;
  line-height: 50px;
  text-decoration: none;
  display: inline-block;
  height: 100%;
  width: 100%;
  font-size: 14px;
}
.dropdown-menu {
  left: 13.15%;
  margin: 0;
  border-radius: 0px;
  transition: 1s;
  background-color: #162436;
  border: none;
  /* 162436 */
}
.nav .open > a,
.nav .open > a:focus,
.nav .open > a,
.dropdown-menu > a:hover {
  color: #fff;
  background-color: #162436;
  border-top: 2px solid red;
  height: 50px;
  line-height: 50px;
  transition: 1s background-color;
}
.dropdown-menu > li > a:focus,
.dropdown-menu > li > a:hover {
  color: #262626;
  text-decoration: none;
  background-color: #a9334c;
}
.dropdown-menu > li > a {
  color: #fff;
  padding: 15px;
}
.navRight > ul > li > a:hover {
  color: #fff;
  background-color: #0e151f;
  border-top: 2px solid red;
  height: 50px;
  line-height: 50px;
  transition: 1s background-color;
}
.active {
  color: #fff !important;
  background-color: #0e151f;
  border-top: 2px solid red;
  height: 50px;
  line-height: 50px;
  transition: 1s background-color;
}
.navImg {
  height: 100%;
  width: 100%;
  padding: 5px 10px;
}
.navLogin {
  width: 8%;
}
</style>
