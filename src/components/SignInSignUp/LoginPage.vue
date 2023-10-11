<template>
  <div class="content p_top">
    <div class="container">
      <h1>Login</h1>
      <Form as="v-form">
        <div class="form-group">
          <Field name="email" type="email" v-model="email">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </Field>
          <Field name="password" type="password">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
            />
          </Field>
          <br />
          <button type="submit" class="btn btn-primary">Log me in</button>
          <br />
          <br />
          <a href="">Let me register first</a>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Field, Form } from "vee-validate";

export default {
  components: {
    Field,
    Form,
  },
};
</script>
