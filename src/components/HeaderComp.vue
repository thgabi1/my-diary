<template>
  <nav class="navbar">
    <div class="container-fluid">
      <router-link :to="{ name: 'home' }" class="navbar-brand"
        >My Diary</router-link
      >
      <div>
        <ul class="navbar-nav d-flex flex-row p-2">
          <li class="nav-item me-2">
            <router-link
              :to="{ name: 'profile', params: { profileId: 'asd' } }"
              class="nav-link"
              >Profile</router-link
            >
          </li>
          <li class="nav-item me-2">
            <router-link
              :to="{ name: 'signinsignup' }"
              class="nav-link button-default-style"
              >Login</router-link
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
  font-size: 1.2rem;
  margin: 0 10px;
}

.navbar-brand {
  font-family: var(--brand-font);
  font-size: 2.5rem;
  color: var(--coyote);
}
</style>
