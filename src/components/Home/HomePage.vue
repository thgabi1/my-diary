<template>
  <div class="center content">
    <div class="container">
      <div class="content-text">
        <p class="p-2">Meditálj</p>
        <p class="p-2">Kövesd nyomon hangulatod</p>
        <p class="p-2">Gyógyulj</p>
      </div>
      <div class="buttons-container center">
        <!-- <router-link
          class="btn button-default-style me-4 btn-lg"
          :to="{ name: 'login' }"
          id="get-started-button"
        >
          Nekivágok
        </router-link> -->
        <a
          href="#learn-more-section"
          class="btn button-default-style me-4 btn-lg"
          id="learn-more-button"
        >
          Többet akarok tudni
        </a>
      </div>
    </div>
  </div>
  <section id="learn-more-section">
    <div class="container-fluid p_top_small">
      <h1>A rendszeres naplóírás jótékony hatásai</h1>
      <ul>
        <li>Enyhíti a szorongást és a stresszt</li>
        <li>Segít a depresszió leküzdésében</li>
        <li>Nyugtat</li>
        <li>Fókuszáltabbá tesz</li>
      </ul>
    </div>
  </section>
  <section>
    <div class="container-fluid p_top_small">
      <h1>A hatékony naplóírás módszerei</h1>
      <ul>
        <li>
          Válassz egy olyan helyet, ahol nem zavar meg semmi és senki naplóírás
          közben.
        </li>
        <li>
          Hetente legalább 3-4 alkalommal ragadj tollat, egymást követő napokon.
        </li>
        <li>
          A naplóírás végeztével szánj időt arra, hogy átgondold, amit írtál, és
          hogy visszanyerd lelki egyensúlyodat.
        </li>
        <li>
          Ha traumafeldolgozás miatt naplózol, ne erőltesd magadra, hogy az
          adott traumatikus eseményről írj, helyette írj arról, amit abban a
          pillanatban helyesnek érzel a témával kapcsolatban.
        </li>
        <li>
          Úgy építsd fel a szövegedet, úgy rendszerezd a mondanivalódat, ahogyan
          az neked kényelmes.
        </li>
        <li>
          Ne mutasd meg másoknak a naplódat, legyen ez csak a tiéd. Még a
          pszichológusodnak se mutasd meg feltétlenül, mit vetettél papírra,
          inkább a naplóvezetési élményeidről beszélj vele.
        </li>
      </ul>
    </div>
  </section>
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

#get-started-button,
#learn-more-button {
  background-color: #e7e4e4;
  color: var(--coyote);
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
