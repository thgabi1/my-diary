<template>
  <div class="">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4 sidebar"></div>

        <div class="col content p_top">
          <h1>Login</h1>
          <Form
            @submit="onSubmit"
            :validation-schema="formSchema"
            class="login-form"
          >
            <div class="form-group">
              <Field
                name="email"
                type="email"
                v-model="email"
                v-slot="{ field, errors, errorMessage }"
              >
                <label for="email" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-bind="field"
                  placeholder="Your email address"
                  aria-describedby="emailHelp"
                />
                <div class="input_alert" v-if="errors.length !== 0">
                  {{ errorMessage }}
                </div>
              </Field>
            </div>

            <div class="form-group">
              <Field name="password" type="password">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  placeholder="Your password"
                  class="form-control"
                  id="password"
                  v-model="password"
                />
              </Field>
              <br />
              <div class="d-flex justify-content-between align-items-center">
                <button type="submit" class="btn btn-primary mb-3 btn-block">
                  Log in
                </button>
                <router-link :to="{ name: 'register' }"
                  >Let me register first</router-link
                >
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form } from "vee-validate";
import * as yup from "yup";

export default {
  components: {
    Field,
    Form,
  },
  data() {
    return {
      formSchema: {
        email: yup
          .string()
          .required("Please provide a valid email address.")
          .email("Not a valid email address."),
        password: yup.string().required("The password is required."),
      },
    };
  },
  methods: {
    onSubmit(values, { resetForm }) {
      console.log(values);
      resetForm();
    },
  },
};
</script>

<style scoped>
.content {
  background: white;
}

.sidebar {
  background-image: url("../../assets/pictures/landing-page.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.form-group {
  width: 80%;
}

.login-content {
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
}

.login-form {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
