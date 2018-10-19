<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <div class="logindiv">
        <el-input v-model="input" placeholder="请输入账号！"></el-input>
    </div>
    
    <div  class="logindiv">
        <el-input v-model="input" type="password" placeholder="请输入密码！"></el-input>
    </div>
    
    <div  class="logindiv">
      <el-row>
        <el-button type="primary">登陆</el-button>
        <el-button type="success">重置</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '精致的生活'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.index {
  max-width: 500px;
  margin:0 auto;
}
.logindiv {
  margin-top:20px;
}
</style>
