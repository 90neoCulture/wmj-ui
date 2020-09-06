<template>
  <div>
    <div class="card">
      <p>按钮类型</p>
      <wmj-button type="primary">主要按钮</wmj-button>
      <wmj-button type="info">信息按钮</wmj-button>
      <wmj-button type="default">默认按钮</wmj-button>
      <wmj-button type="warning">警告按钮</wmj-button>
      <wmj-button type="danger">危险按钮</wmj-button>
    </div>
    <div class="card">
      <p>朴素按钮</p>
      <wmj-button plain type="primary">朴素按钮</wmj-button>
      <wmj-button plain type="info">朴素按钮</wmj-button>
    </div>
    <div class="card">
      <p>细边框</p>
      <wmj-button plain hairline type="primary">细边框按钮</wmj-button>
      <wmj-button plain hairline type="info">细边框按钮</wmj-button>
    </div>
    <div class="card">
      <p>禁用状态</p>
      <wmj-button disabled type="primary">禁用状态</wmj-button>
      <wmj-button disabled type="info">禁用状态</wmj-button>
    </div>
    <div class="card">
      <p>加载状态</p>
      <wmj-button loading type="primary" />
      <wmj-button loading type="primary" loading-type="spinner" />
      <wmj-button loading type="info" loading-text="加载中..." />
    </div>
    <div class="card">
      <p>按钮形状</p>
      <wmj-button square type="primary">方形按钮</wmj-button>
      <wmj-button round type="info">圆形按钮</wmj-button>
    </div>
    <div class="card">
      <p>图标按钮</p>
      <wmj-button icon="plus" type="primary" />
      <wmj-button icon="plus" type="primary">按钮</wmj-button>
      <wmj-button icon="https://img.yzcdn.cn/vant/user-active.png" type="info">
        按钮
      </wmj-button>
    </div>
    <div class="card">
      <p>按钮尺寸</p>
      <wmj-button type="primary" size="large">大号按钮</wmj-button>
      <wmj-button type="primary" size="normal">普通按钮</wmj-button>
      <wmj-button type="primary" size="small">小型按钮</wmj-button>
      <wmj-button type="primary" size="mini">迷你按钮</wmj-button>
    </div>
    <div class="card">
      <p>块级元素</p>
      <wmj-button type="primary" block @click="handleClick">块级元素</wmj-button>
    </div>
    <div class="card">
      <p>页面导航</p>
      <wmj-button type="primary" url="/vant/mobile.html">URL 跳转</wmj-button>
      <wmj-button type="primary" to="index">路由跳转</wmj-button>
    </div>
    <div class="card">
      <p>自定义颜色</p>
      <wmj-button color="#7232dd">单色按钮</wmj-button>
      <wmj-button color="#7232dd" plain>单色按钮</wmj-button>
      <wmj-button color="linear-gradient(to right, #ff6034, #ee0a24)">
        渐变色按钮
      </wmj-button>
    </div>
  </div> 
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert(232)
    }
  }
}
</script>

<style lang="scss">
@import 'index.scss';

.card{
  width: 80%;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
