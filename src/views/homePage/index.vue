<template>
    <div id='homePage'>
      homePage
      <button @click='gotopage'>返回登录</button>
    </div>
</template>

<script>
export default {
    name: 'homePage',
    props: {},
    data() {
      return {};
    },
    created() {},
    mounted() {},
    watch: {},
    methods: {
      gotopage(){
        window.location.href = `${location.origin}/login.html#/`
      }
    },
    components: {},
}
</script>

<style lang="scss" scoped>

</style>
