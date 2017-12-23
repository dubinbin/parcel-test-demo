
<template>
    <div class="app">
        <router-view></router-view>
            <span @click="gotoIndex">首页</span>
            <span @click="gotoDetail">详情</span>
    </div>
</template>
<style>
div{
  color: green;
}
</style>
<script>
export default {
    methods:{
      gotoIndex() {
          this.$router.push('/index')
      },
      gotoDetail() {
          this.$router.push('/detail')
      }  
    }
}
</script>