<template>
    <div>
        公共头部
        <el-rate
    v-model="value2"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </el-rate>
        <router-view></router-view>
        公共底部 
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>

</style>