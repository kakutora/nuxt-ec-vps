<template>
  <div class="body">
    <header>
      <NuxtLink class="nuxt-link" />
    </header>

    <main>
      <Nuxt />
    </main>

    <footer>t</footer>
  </div>
</template>

<script>
  import NuxtLink from '@/components/NuxtLink'
  export default {
    components: {
      NuxtLink
    }
  }

</script>

<style lang="scss">
  .body {
    width: 100%;
  }

  header {
    z-index: 100;
    position: fixed;
    top: 15px;
    left: 75px;
  }

  footer {
    margin-top: 1500px;
  }

  .page-enter-active {
    transition: opacity .4s ease;
    opacity: 0;
    animation: slide .4s ease;
  }

  .page-enter-to {
    opacity: 1;
  }

  .page-leave-active {
    transition: opacity .4s ease;
    opacity: 1;
    animation: slide .4s ease reverse;
  }

  .page-leave-to {
    opacity: 0;
  }

  @keyframes slide {
    from {
      transform: translateY(50px);
    }

    to {
      transform: translateY(0);
    }
  }

</style>
