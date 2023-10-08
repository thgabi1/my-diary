<template>
  <div class="container d-flex flex-column justify-content-center content">
    <div class="content-text">
      <p class="p-2">Meditate</p>
      <p class="p-2">Share your thoughts</p>
      <p class="p-2">Write your own story day by day</p>
    </div>
    <div class="buttons-container">
      <router-link
        class="btn btn-warning me-4 btn-lg"
        :to="{ name: 'signinsignup' }"
      >
        Get Started
      </router-link>
      <button class="btn btn-outline-secondary me-4 btn-lg">Learn More</button>
    </div>
  </div>
</template>

<style scoped>
.content {
  height: 80vh;
}

.content-text {
  font-family: var(--secondary-font);
  font-size: 1.8rem;
  color: var(--eggplant);
  text-transform: capitalize;
  letter-spacing: 5px;
}

.buttons-container {
  margin-top: 10%;
}

.btn {
  border-radius: 15px;
}
</style>
