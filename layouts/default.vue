<template>
  <div class="body">
    <NuxtLink class="c-nuxt-link"></NuxtLink>
    <Nuxt class="cp-nuxt" />
    <footer>test</footer>
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

<style>
  .body {
    width: 100vw;
  }

  .c-nuxt-link {
    margin-top: 50px;
  }

  .cp-nuxt {
    margin-bottom: 50px;
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
