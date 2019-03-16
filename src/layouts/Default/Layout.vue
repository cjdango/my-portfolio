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
  @apply font-sans mt-5;
  max-width: 100%;
}

.divider {
  @apply mt-0 mb-5;
}

@screen sm {
  .layout {
    max-width: 75%;
  }
}
</style>


