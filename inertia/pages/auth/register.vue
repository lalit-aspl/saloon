<script setup lang="ts">
import { Link, Head, useForm } from '@inertiajs/vue3'

const form = useForm({
  name: '',
  email: '',
  password: '',
})

const submitForm = () => {
  // Log form data before submission

  form.post('/register', {
    onFinish: () => form.reset(),
    onError: (errors) => console.error('Error during registration:', errors),
  })
}
</script>

<template>
  <Head title="Register" />

  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input v-model="form.name" type="text" id="name" placeholder="Enter your name" required />
    </div>

    <div>
      <label for="email">Email</label>
      <input v-model="form.email" type="email" id="email" placeholder="Enter your email" required />
    </div>

    <div>
      <label for="password">Password</label>
      <input v-model="form.password" type="password" id="password" placeholder="Enter your password" required />
    </div>

    <button type="submit">Register</button>
    <div></div>
  </form>

  <Link href="/">Go back to home</Link>
</template>
