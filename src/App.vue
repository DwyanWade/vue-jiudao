<template>
  <div class="panel">
    {{test}}
    <span>less</span>
    <div>
      <img src="@/assets/images/lian.png" alt="">
    </div>
    <div>
      <p class="bkg"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      test: '142'
    }
  }
}
</script>

<style lang="less" scoped>
  .panel{
    color: red;
    span{
      color: yellow;
    }
    img{
      width: 100%;
    }
    .bkg{
      width: 100px;
      height: 100px;
      background: url(./assets/images/great.png);
      background-size: 100% 100%;
    }
  }
</style>




