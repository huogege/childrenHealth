<template>
  <div id="app">
    <transition :name="transitionName" >  
      <router-view class="child-view" :class="headerShow == true ? 'topClass' : ''"></router-view>  
    </transition>  
  </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
        transitionName: "slide-left",
        };
    },
    watch: {
        $route(to, from) {
        if (to.path == "/") {
            this.transitionName = "slide-right";
        } else {
            this.transitionName = "slide-left";
        }
        }
    }
 
}
</script>
<style lang="less" scoped>
#app {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
  .child-view {
    position: absolute;
    left: 0;
    top: 0rem;
    width: 100%;
    height: 100%;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .topClass {
    top: .8rem;
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
}
</style>
