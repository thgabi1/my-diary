<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4 sidebar"></div>

      <div class="col content p_top">
        <h1>Regisztráció</h1>
        <Form
          @submit="onSubmit"
          :validation-schema="formSchema"
          class="register-form"
        >
          <div class="form-group">
            <Field
              name="name"
              type="text"
              v-model="name"
              v-slot="{ field, errors, errorMessage }"
            >
              <label for="name" class="form-label p_top_small"
                >Név <span class="required">*</span></label
              >
              <input
                type="text"
                class="form-control"
                id="name"
                v-bind="field"
              />
              <div class="input_alert" v-if="errors.length !== 0">
                {{ errorMessage }}
              </div>
            </Field>
          </div>

          <div class="form-group">
            <Field
              name="email"
              type="email"
              v-model="email"
              v-slot="{ field, errors, errorMessage }"
            >
              <label for="email" class="form-label p_top_small"
                >Email cím <span class="required">*</span></label
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
                >Jelszó <span class="required">*</span></label
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
          </div>

          <div class="form-group">
            <Field
              name="confirmPassword"
              type="password"
              v-slot="{ field, errors, errorMessage }"
            >
              <label for="confirmPassword" class="form-label p_top_small"
                >Jelszó megerősítése <span class="required">*</span></label
              >
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                v-model="confirmPassword"
                v-bind="field"
              />
              <div class="input_alert" v-if="errors.length !== 0">
                {{ errorMessage }}
              </div>
            </Field>

            <br />
            <div class="d-flex justify-content-between align-items-center">
              <button type="submit" class="btn btn-primary mb-3 btn-block">
                Regisztrálok
              </button>
              <router-link :to="{ name: 'login' }"
                >Már rendelekezem fiókkal</router-link
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
        name: yup
          .string()
          .required("A név megadása kötelező")
          .min(8, "Add meg a teljes neved"),
        email: yup
          .string()
          .required("Az email cím megadása kötelző.")
          .email("Helytelen email cím formátum."),
        password: yup
          .string()
          .required("A jelszó megadása kötelező.")
          .min(8, "A jelszó minimális hossza 8 karakter")
          .matches(/[0-9]/, this.getCharacterValidationError("számot"))
          .matches(/[a-z]/, this.getCharacterValidationError("kisbetűt"))
          .matches(/[A-Z]/, this.getCharacterValidationError("nagybetűt")),
        confirmPassword: yup
          .string()
          .required("Kérlek add meg újra a jelszavad.")
          .oneOf([yup.ref("password")], "A két jelszó nem egyezik."),
      },
    };
  },
  methods: {
    onSubmit(values, { resetForm }) {
      console.log(values);
      resetForm();
    },
    getCharacterValidationError(str) {
      return `A jelszónak muszáj legalább 1 ${str} tartalmaznia.`;
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

.register-form {
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
