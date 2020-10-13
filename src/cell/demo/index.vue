<template>
  <div>
    <demo-block :title="t('basicUsage')">
      <wmj-cell-group>
        <wmj-cell :title="t('cell')" :value="t('content')" />
        <wmj-cell :title="t('cell')" :value="t('content')" :label="t('desc')" />
      </wmj-cell-group>
    </demo-block>

    <demo-block :title="t('largeSize')">
      <wmj-cell :title="t('cell')" :value="t('content')" size="large" />
      <wmj-cell
        :title="t('cell')"
        :value="t('content')"
        size="large"
        :label="t('desc')"
      />
    </demo-block>

    <demo-block :title="t('showIcon')">
      <wmj-cell :title="t('cell')" :value="t('content')" icon="location-o" />
    </demo-block>

    <demo-block :title="t('valueOnly')">
      <wmj-cell :value="t('content')" />
    </demo-block>

    <demo-block :title="t('showArrow')">
      <wmj-cell :title="t('cell')" is-link />
      <wmj-cell :title="t('cell')" is-link :value="t('content')" />
      <wmj-cell
        :title="t('cell')"
        is-link
        arrow-direction="down"
        :value="t('content')"
      />
    </demo-block>

    <demo-block :title="t('router')">
      <wmj-cell :title="t('urlRoute')" is-link url="/vant/mobile.html" />
      <wmj-cell :title="t('vueRoute')" is-link to="index" />
    </demo-block>

    <demo-block :title="t('groupTitle')">
      <wmj-cell-group :title="`${t('group')} 1`">
        <wmj-cell :title="t('cell')" :value="t('content')" />
      </wmj-cell-group>
      <wmj-cell-group :title="`${t('group')} 2`">
        <wmj-cell :title="t('cell')" :value="t('content')" />
      </wmj-cell-group>
    </demo-block>

    <demo-block :title="t('useSlots')">
      <wmj-cell :value="t('content')" is-link>
        <template #title>
          <span class="custom-title">{{ t('cell') }}</span>
          <van-tag type="danger">{{ t('tag') }}</van-tag>
        </template>
      </wmj-cell>

      <wmj-cell icon="shop-o" :title="t('cell')">
        <template #right-icon>
          <van-icon name="search" class="search-icon" />
        </template>
      </wmj-cell>
    </demo-block>

    <demo-block :title="t('verticalCenter')">
      <wmj-cell
        center
        :title="t('cell')"
        :value="t('content')"
        :label="t('desc')"
      />
    </demo-block>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      valueOnly: '只设置 value',
      showIcon: '展示图标',
      showArrow: '展示箭头',
      largeSize: '单元格大小',
      group: '分组',
      groupTitle: '分组标题',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      useSlots: '使用插槽',
      verticalCenter: '垂直居中',
    },
    'en-US': {
      cell: 'Cell title',
      valueOnly: 'Value only',
      showIcon: 'Left Icon',
      showArrow: 'Link',
      largeSize: 'Size',
      group: 'Group',
      groupTitle: 'Group Title',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      useSlots: 'Use Slots',
      verticalCenter: 'Vertical center',
    },
  },
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