<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-row>
        <el-col :lg="{span: 6,offset: 9}" :md="{span: 12,offset: 6}">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>登录框</span>
            </div>
            <div>
              <el-form :model="form" label-width="80px">
                <el-form-item label="用户名">
                  <el-input v-model="form.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input type="password" v-model="form.passwd"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">登录</el-button>
                  <el-button type="info">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '精致的生活',
      form: {
        userName: "张三",
        passwd: "123456"
      }
    }
  }
}
</script>
