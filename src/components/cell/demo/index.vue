<template>
  <div>
    <wmj-cell-group title="标题拉拉">
      <!-- <wmj-cell title="标题1" value="随风倒十分" />
      <wmj-cell title="标题2" value="哈哈" label="标题" /> -->
    </wmj-cell-group>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../../style/_variables';

.demo-button {
  .van-button {
    &--large {
      margin-bottom: $padding-md;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: $padding-md;
    }
  }

  .van-doc-demo-block {
    padding: 0 $padding-md;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: $padding-sm;
  }
}
</style>