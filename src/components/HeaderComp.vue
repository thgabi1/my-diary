<template>
  <nav class="navbar">
    <div class="container-fluid">
      <router-link :to="{ name: 'home' }" class="navbar-brand"
        >My Diary</router-link
      >
      <div>
        <ul class="navbar-nav d-flex flex-row p-2">
          <li class="nav-item me-2">
            <router-link :to="{ name: 'signinsignup' }" class="nav-link"
              >Login</router-link
            >
          </li>
          <li class="nav-item me-2">
            <router-link
              :to="{ name: 'profile', params: { profileId: 'asd' } }"
              class="nav-link"
              >Profile</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@700&family=Raleway:wght@300&display=swap");
.nav-link {
  font-family: var(--primary-font);
  color: var(--coyote);
}

.navbar-brand {
  font-family: var(--brand-font);
  font-size: 2rem;
  color: var(--eggplant);
}
</style>
