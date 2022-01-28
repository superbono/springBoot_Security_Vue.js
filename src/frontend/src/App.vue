<template>
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
*,
*::before,
*::after {
  /* 테두리를 기준으로 크기를 정합니다. */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
