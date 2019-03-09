<template>
  <div class="layout">
    <header class="header">
      <g-link class="nav__link" to="/">
        <h1 class="brand">cjdango</h1>
      </g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/contact">Contact</g-link>
      </nav>
      <hr class="divider">
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  margin-top: 20px;
  text-align: center;
}

.nav__link {
  margin-left: 20px;
}

.brand {
  display: inline-block;
  padding: 35px 25px 40px 25px;
  line-height: 0;
  background-color: black;
  color: white;
}

.divider {
  margin: 20px 0;
}
</style>
