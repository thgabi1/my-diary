<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4 sidebar"></div>

      <div class="col content p_top">
        <h1>Bejelentkezés</h1>
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
              <label for="email" class="form-label p_top_small"
                >Email cím</label
              >
              <input
                type="email"
                class="form-control"
                id="email"
                v-bind="field"
                aria-describedby="emailHelp"
              />
              <div class="input_alert" v-if="errors.length !== 0">
                {{ errorMessage }}
              </div>
            </Field>
          </div>

          <div class="form-group">
            <Field
              name="password"
              type="password"
              v-slot="{ field, errors, errorMessage }"
            >
              <label for="password" class="form-label p_top_small"
                >Jelszó</label
              >
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                v-bind="field"
              />
              <div class="input_alert" v-if="errors.length !== 0">
                {{ errorMessage }}
              </div>
            </Field>
            <br />
            <div class="d-flex justify-content-between align-items-center">
              <button type="submit" class="btn btn-primary mb-3 btn-block">
                Bejelentkezés
              </button>
              <router-link :to="{ name: 'register' }"
                >Még nincs fiókom</router-link
              >
            </div>
          </div>
        </Form>
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
          .required("Az email cím megadása kötelző.")
          .email("Helytelen email cím formátum."),
        password: yup.string().required("A jelszó megadása kötelező."),
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

Form,
button {
  font-size: 1.2rem;
}
</style>
