<template>
  <header class="header">
    <g-link class="brand" to="/">@cjdango</g-link>
    <nav class="nav">
      <ul>
        <li>
          <AppLink :to="{name: 'home'}">Work</AppLink>
        </li>
        <li>
          <AppLink :to="{name: 'about'}">About</AppLink>
        </li>
        <li>
          <AppLink :to="{name: 'contact'}">Contact</AppLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  @apply font-light;
}

.brand {
  @apply no-underline my-5 inline-block text-5xl text-red;
}

.nav {
  @apply inline-block ml-5;
}

.nav > ul {
  @apply list-reset;
}

.nav li {
  @apply inline;
}

.nav li > .app-link {
  @apply m-5 lowercase inline-block;
}
</style>
