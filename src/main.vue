<template>
  <div>
    <ul class="left-nav">
      <li v-for="(item, index) in menuList" :key="item.id" @click="handleJump(item, index)">
        <div class="item" :class="{'active': index===currentIndex}">{{item.name}}</div>
      </li>
    </ul>
    <div class="container">
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data(){
    return{
      currentIndex: 1,
      menuList: [
        {id: 1, name: 'Button按钮',url: '/button'},
        {id: 2, name: 'Cell单元格',url: '/cell'},
        {id: 3, name: 'Icon图标',url: '/icon'},
        {id: 4, name: 'Image图片',url: '/image'},
      ]
    }
  },
  methods: {
    handleJump(item, index){
      this.currentIndex = index
      if(this.$route.path !== item.url) this.$router.push(item.url)
    }
  },
  created(){
    if(this.$route.path !== this.menuList[this.currentIndex].url) this.$router.push(this.menuList[this.currentIndex].url)
  }
}
</script>

<style lang="scss">
.left-nav{
  width: 200px;
  position:fixed;
  overflow-y: auto;
  .item{
    line-height: 40px;
    text-align: center;
    &:hover{
      cursor: pointer;
    }
    &.active{
      color: #07c160;
    }
  }
}
.container{
  width: calc(100% - 200px);
  margin-left: 200px;
  overflow-y: auto;
}
</style>