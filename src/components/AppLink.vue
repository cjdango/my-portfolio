<template>
  <g-link class="app-link" active-class="app-link-active" exact v-bind="$attrs">
    <slot/>
  </g-link>
</template>

<style scoped>
.app-link,
.app-link:visited {
  @apply text-red-lighter no-underline;
}

.app-link:hover,
.app-link-active {
  @apply text-red-dark !important;
}
</style>
