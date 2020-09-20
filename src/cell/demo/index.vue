<template>
  <div>
    <h4>基础用法</h4>
    <wmj-cell-group>
      <wmj-cell title="单元格" value="内容" />
      <wmj-cell title="单元格" value="内容" label="描述信息" />
    </wmj-cell-group>

    <h4>单元格大小</h4>
    <wmj-cell title="单元格" value="内容" size="large" />
    <wmj-cell
      title="单元格"
      value="内容"
      size="large"
      label="描述信息"
    />
    <h4>展示图标</h4>
    <wmj-cell title="单元格" value="内容" icon="location-o" />

    <h4>只设置 value</h4>
    <wmj-cell value="内容" />

    <h4>展示箭头</h4>
    <wmj-cell title="单元格" is-link />
    <wmj-cell title="单元格" is-link value="内容" />
    <wmj-cell
      title="单元格"
      is-link
      arrow-direction="down"
      value="内容"
    />

    <wmj-cell title="URL 跳转" is-link url="/vant/mobile.html" />
    <wmj-cell title="路由跳转" is-link to="index" />

    <wmj-cell-group title="分组1">
      <wmj-cell title="单元格" value="内容" />
    </wmj-cell-group>
    <wmj-cell-group title="分组2">
      <wmj-cell title="单元格" value="内容" />
    </wmj-cell-group>

    <wmj-cell value="内容" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="custom-title">单元格</span>
        <wmj-tag type="danger">标签</wmj-tag>
      </template>
    </wmj-cell>

    <wmj-cell title="单元格" icon="shop-o">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <wmj-icon name="search" class="search=icon" />
      </template>
    </wmj-cell>

    <wmj-cell
      center
      title="单元格"
      value="内容"
      label="描述信息"
    />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../style/_variables';

.demo-button {
  .wmj-button {
    &--large {
      margin-bottom: $padding-md;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: $padding-md;
    }
  }

  .wmj-doc-demo-block {
    padding: 0 $padding-md;
  }

  .wmj-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: $padding-sm;
  }
}
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}

.search-icon {
  font-size: 16px;
  line-height: inherit;
}
</style>