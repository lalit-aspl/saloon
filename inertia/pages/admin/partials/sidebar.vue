<template>
  <aside>
    <!-- Sidebar content goes here -->
    <ul>
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/settings">Settings</a></li>
      <li><a href="/profile">Profile</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'SidebarComponent'
}
</script>

<style scoped>
/* Add your sidebar-specific styles here */
aside {
  width: 200px;
  background: #f4f4f4;
  padding: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  margin-bottom: 10px;
}
ul li a {
  text-decoration: none;
  color: #333;
}
ul li a:hover {
  text-decoration: underline;
}
</style>
