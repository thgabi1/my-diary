<template>
  <div class="center content">
    <div class="container">
      <div class="content-text">
        <p class="p-2">Meditate</p>
        <p class="p-2">Share your thoughts</p>
        <p class="p-2">Write your own story day by day</p>
      </div>
      <div class="buttons-container">
        <router-link
          class="btn button-default-style me-4 btn-lg"
          :to="{ name: 'login' }"
          id="get-started-button"
        >
          Get Started
        </router-link>
        <button
          class="btn button-default-style me-4 btn-lg"
          id="learn-more-button"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-text p {
  font-family: var(--secondary-font);
  font-size: 2.3rem;
  color: var(--eggplant);
  text-transform: capitalize;
  letter-spacing: 5px;
  animation-name: infinite-flowing-text;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

.buttons-container {
  margin-top: 10%;
}

.btn {
  box-shadow: var(--box-shadow);
  padding: 15px 5%;
}

#get-started-button {
  background-color: #e7e4e4;
  color: var(--coyote);
  font-weight: bolder;
}

#learn-more-button {
  color: var(--peachYellow);
  font-weight: bolder;
}

@keyframes infinite-flowing-text {
  from {
    color: var(--eggplant);
  }
  to {
    color: var(--buff);
  }
}
</style>
