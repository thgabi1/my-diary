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
              >Profilom</router-link
            >
          </li>
          <li class="nav-item me-2">
            <router-link
              :to="{ name: 'login' }"
              class="nav-link button-default-style"
              >Bejelentkés</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@700&family=Raleway:wght@300&display=swap");

.navbar {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.44303658963585435) 51%,
    rgba(141, 175, 190, 0.10690213585434172) 100%
  );
}

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
