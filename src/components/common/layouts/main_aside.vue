<template>
  <div class="common-layout">

    <el-container class="container">

      <el-main>
        <slot name="main" class="main">
          Main
        </slot>
      </el-main>

      <el-aside width="200px" class="aside">
        <slot name="aside">
          Aside
        </slot>
      </el-aside>

    </el-container>

  </div>
</template>

<style lang="scss" scoped>
.common-layout{
  width:100vw;
  height: 100vh;
}
.container{
  height: 100%;;
}
.main {
  width: 75%;
  height: 100%;
  background-color: red;
  overflow: auto;
}

.aside {
  width: 25%;
  height:100%;
  background-color: rgba(255, 255, 255, 0.5);
  overflow: auto;
}
</style>