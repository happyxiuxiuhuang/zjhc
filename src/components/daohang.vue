<template>
 
<div>

<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><router-link :to="{name:'welcome',params:{username:'123'}}">欢迎页面</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <!-- 直接用会显示到一个空白页面 -->
  <el-menu-item index="3"> <router-link to="/slide">幻灯片</router-link> </el-menu-item>
  <!-- 直接显示一个其他网站的页面 -->
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  <!-- 一定要将/daohang/upload放在daohang后面，否则会显示到一个空白页面 -->
   <el-menu-item index="5"><router-link to="/daohang/upload">上传</router-link></el-menu-item>
</el-menu>
<br>
<router-view></router-view>


 </div>

   
</template> 


<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
