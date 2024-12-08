<template>
  <header>
    <!-- Header content goes here -->
    <nav>
      <h1>My Application</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
/* Add your header-specific styles here */
header {
  background: #333;
  color: #fff;
  padding: 10px;
}
nav h1 {
  display: inline-block;
  margin: 0;
}
nav ul {
  display: inline-block;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  display: inline;
  margin-right: 10px;
}
</style>
