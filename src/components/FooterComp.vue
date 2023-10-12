<template>
  <footer>
    <p>Minden jog fenntartva © {{ currentYear }}</p>
    <p>Az oldalt készítette: Tóth Gabriella</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
footer {
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(36, 33, 33);
  background: linear-gradient(
    90deg,
    rgba(27, 27, 27, 0.443) 21%,
    rgba(37, 37, 37, 0.107) 51%
  );
  color: #fff;
  font-family: var(--secondary-font);
}
</style>
