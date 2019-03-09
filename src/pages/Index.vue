<template>
  <Layout>
    <h1>Hi!</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nam velit magnam reprehenderit repellat qui inventore quasi similique fuga expedita.</p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hi!"
  }
};
</script>

<style>
.me {
  width: 20%;
}

.home-links a {
  margin-right: 1rem;
}
</style>
