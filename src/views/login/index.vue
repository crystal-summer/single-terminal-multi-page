<template>
    <div id='login'>
      login
      <button @click='gotopage'>前往首页</button>
    </div>
</template>

<script>
export default {
    name: 'login',
    props: {},
    data() {
      return {};
    },
    created() {},
    mounted() {},
    watch: {},
    methods: {
      gotopage(){
        window.location.href = `${location.origin}/homePage.html#/`
      }
    },
    components: {},
}
</script>

<style lang="scss" scoped>

</style>
