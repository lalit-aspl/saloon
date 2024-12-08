<!-- inertia/pages/admin/master/master.vue -->

<template>
  <div id="app">
    <HeaderComponent />
    <div class="main">
      <SidebarComponent />
      <main>
        <slot></slot>
      </main>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../partials/header.vue'
import FooterComponent from '../partials/footer.vue'
import SidebarComponent from '../partials/sidebar.vue'

export default {
  name: 'MasterLayout',
  components: {
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  }
}
</script>

<style scoped>
/* Add your layout-specific styles here */
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main {
  display: flex;
  flex: 1;
}
main {
  flex: 1;
  padding: 10px;
}
</style>
