<template>
  <div class="layout container">
    <LayoutHeader/>
    <hr class="divider">
    <transition name="fade" appear>
      <!-- a wrapper for slot is needed -->
      <main>
        <!-- the content -->
        <slot/>
      </main>
    </transition>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Header from "./Header.vue";

export default {
  components: {
    LayoutHeader: Header
  }
};
</script>


<style scoped>
.layout {
  @apply font-sans;
}

.divider {
  @apply mt-0 mb-5;
}
</style>


