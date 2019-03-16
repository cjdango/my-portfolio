<template>
  <div class="project-list">
    <slot/>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.project-list {
  @apply flex flex-wrap mb-4;
}
</style>
