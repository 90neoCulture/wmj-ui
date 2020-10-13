<template>
  <div>
    <demo-block :title="t('type')">
      <div class="demo-button-row">
        <wmj-button type="primary">{{ t('primary') }}</wmj-button>
        <wmj-button type="info">{{ t('info') }}</wmj-button>
        <wmj-button type="default">{{ t('default') }}</wmj-button>
      </div>
      <wmj-button type="danger">{{ t('danger') }}</wmj-button>
      <wmj-button type="warning">{{ t('warning') }}</wmj-button>
    </demo-block>

    <demo-block :title="t('plain')">
      <wmj-button plain type="primary" :text="t('plain')" />
      <wmj-button plain type="info" :text="t('plain')" />
    </demo-block>

    <demo-block :title="t('hairline')">
      <wmj-button plain hairline type="primary" :text="t('hairlineButton')" />
      <wmj-button plain hairline type="info" :text="t('hairlineButton')" />
    </demo-block>

    <demo-block :title="t('disabled')">
      <wmj-button disabled type="primary" :text="t('disabled')" />
      <wmj-button disabled type="info" :text="t('disabled')" />
    </demo-block>

    <demo-block :title="t('loadingStatus')">
      <wmj-button loading type="primary" />
      <wmj-button loading type="primary" loading-type="spinner" />
      <wmj-button loading :loading-text="t('loadingText')" type="info" />
    </demo-block>

    <demo-block :title="t('shape')">
      <wmj-button type="primary" square :text="t('square')" />
      <wmj-button type="info" round :text="t('round')" />
    </demo-block>

    <demo-block :title="t('icon')">
      <wmj-button type="primary" icon="plus" />
      <wmj-button type="primary" icon="plus" :text="t('button')" />
      <wmj-button
        plain
        type="info"
        icon="https://img.yzcdn.cn/vant/user-active.png"
        :text="t('button')"
      />
    </demo-block>

    <demo-block :title="t('size')">
      <wmj-button type="primary" size="large">{{ t('large') }}</wmj-button>
      <wmj-button type="primary" size="normal">{{ t('normal') }}</wmj-button>
      <wmj-button type="primary" size="small">{{ t('small') }}</wmj-button>
      <wmj-button type="primary" size="mini">{{ t('mini') }}</wmj-button>
    </demo-block>

    <demo-block :title="t('blockElement')">
      <wmj-button type="primary" block>{{ t('blockElement') }}</wmj-button>
    </demo-block>

    <demo-block :title="t('router')">
      <wmj-button
        :text="t('urlRoute')"
        type="primary"
        url="/vant/mobile.html"
      />
      <wmj-button :text="t('vueRoute')" type="primary" to="index" />
    </demo-block>

    <demo-block :title="t('customColor')">
      <wmj-button color="#7232dd" :text="t('pure')" />
      <wmj-button plain color="#7232dd" :text="t('pure')" />
      <wmj-button
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        :text="t('gradient')"
      />
    </demo-block>
  </div> 
</template>

<script>

export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      size: '按钮尺寸',
      icon: '图标按钮',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      info: '信息按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮',
      square: '方形按钮',
      round: '圆形按钮',
      hairline: '细边框',
      hairlineButton: '细边框按钮',
      loadingText: '加载中...',
      router: '页面导航',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      customColor: '自定义颜色',
      pure: '单色按钮',
      gradient: '渐变色按钮',
      blockElement: '块级元素',
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      icon: 'Icon',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      info: 'Info',
      danger: 'Danger',
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain',
      square: 'Square',
      round: 'Round',
      hairline: 'Hairline',
      hairlineButton: 'Hairline',
      loadingText: 'Loading...',
      router: 'Router',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      customColor: 'Custom Color',
      pure: 'Pure',
      gradient: 'Gradient',
      blockElement: 'Block Element',
    },
  },
  methods: {
    handleClick() {
      alert(232)
    }
  }
}
</script>

<style lang="scss">
@import '../index.scss';

.card{
  width: 80%;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
