<template>
  <div class="body">
    <header>
      <NuxtLink class="nuxt-link" />
    </header>

    <main>
      <Nuxt />
    </main>

    <footer>&nbsp;</footer>
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
    top: 25px;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
  }

  footer {
    width: 100%;
    height: 25px;
    background: #1a1a1a;
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
