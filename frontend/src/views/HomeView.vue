<template>
  <div id="home">
    <img id="logo" alt="Vue logo" src="../assets/images/ruri_logo_blue.png" />
  </div>
</template>

<script setup>
</script>

<style scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;

  #logo {
    width: 30%;
  }
}


@media (max-width: 1199.98px) {
  #logo {
    width: 75%;
  }
}

</style>