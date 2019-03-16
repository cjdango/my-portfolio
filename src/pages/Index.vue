<template>
  <DefaultLayout>
    <ProjectList>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </ProjectList>
  </DefaultLayout>
</template>

<script>
import ProjectList from '~/components/ProjectList.vue'
import ProjectCard from '~/components/ProjectCard.vue'

export default {
  metaInfo: {
    title: "Hi!"
  },
  components: {
    ProjectList,
    ProjectCard
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
