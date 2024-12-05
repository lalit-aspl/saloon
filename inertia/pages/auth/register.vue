<script setup lang="ts">
import { Link, Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Register" />

  <form>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Enter your name" required />
    </div>

    <div>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" required />
    </div>

    <div>
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" required />
    </div>

    <button type="submit">Register</button>
  </form>

  <Link href="/">Go back to home</Link>
</template>
