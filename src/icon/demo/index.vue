<template>
  <div>
    <van-tabs v-model="tab" sticky>
      <van-tab :title="t('demo')">
        <div :title="t('basicUsage')">
          <van-col span="6" @click="copy(demoIcon)">
            <wmj-icon :name="demoIcon" />
          </van-col>
          <!-- <van-col span="6" @click="copy(demoImage)">
            <wmj-icon :name="demoImage" />
          </van-col> -->
        </div>

        <!-- <div :title="t('badge')">
          <van-col span="6" @click="copy(demoIcon, { dot: true })">
            <wmj-icon :name="demoIcon" dot />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { badge: '9' })">
            <wmj-icon :name="demoIcon" badge="9" />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { badge: '99+' })">
            <wmj-icon :name="demoIcon" badge="99+" />
          </van-col>
        </div>

        <div :title="t('color')">
          <van-col span="6" @click="copy(demoIcon, { color: BLUE })">
            <wmj-icon :name="demoIcon" :color="BLUE" />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { color: GREEN })">
            <wmj-icon :name="demoIcon" :color="GREEN" />
          </van-col>
        </div>

        <div :title="t('size')">
          <van-col span="6" @click="copy(demoIcon, { size: '40' })">
            <wmj-icon :name="demoIcon" size="40" />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { size: '3rem' })">
            <wmj-icon :name="demoIcon" size="3rem" />
          </van-col>
        </div> -->
      </van-tab>

      <!-- <van-tab :title="t('basic')">
        <van-col
          v-for="icon in icons.basic"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <wmj-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>

      <van-tab :title="t('outline')">
        <van-col
          v-for="icon in icons.outline"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <wmj-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>

      <van-tab :title="t('filled')">
        <van-col
          v-for="icon in icons.filled"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <wmj-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab> -->
    </van-tabs>
  </div>
</template>

<script>
import icons from '@vant/icons';
import { BLUE, GREEN } from '../../utils/constant';
import Vue from 'vue'
import { Tabs, Tab } from 'vant'
Vue.use(Tabs).use(Tab)
import { Col } from 'vant'
Vue.use(Col)
// import Tabs from 'vant/lib/tabs';
// import Tab from 'vant/lib/tab';
// import Col from 'vant/lib/col';
// import 'vant/lib/tabs/style';
// import 'vant/lib/tab/style';
// import 'vant/lib/col/style';

export default {
  // components: {
  //   'van-tabs': Tabs,
  //   'van-tab': Tab,
  //   'van-col': Col,
  // },
  i18n: {
    'zh-CN': {
      title: '图标列表',
      badge: '徽标提示',
      basic: '基础图标',
      copied: '复制成功',
      outline: '线框风格',
      filled: '实底风格',
      demo: '用法示例',
      color: '图标颜色',
      size: '图标大小',
    },
    'en-US': {
      title: 'Icon List',
      badge: 'Show Badge',
      basic: 'Basic',
      copied: 'Copied',
      outline: 'Outline',
      filled: 'Filled',
      demo: 'Demo',
      color: 'Icon Color',
      size: 'Icon Size',
    },
  },

  data() {
    this.BLUE = BLUE;
    this.GREEN = GREEN;
    this.icons = icons;
    return {
      tab: 0,
      demoIcon: 'chat-o',
      demoImage: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
    };
  },

  methods: {
    
  }
};
</script>

<style lang="scss">

</style>
