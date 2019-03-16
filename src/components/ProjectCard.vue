<template>
  <div class="w-1/3 p-2">
    <div class="project-card">
      <img src="http://www.illuminationworksllc.com/wp-content/uploads/2017/04/ProjectManagement-1.jpg" alt="Avatar" class="image">
      <div class="overlay">Project Name</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Container needed to position the overlay. Adjust the width as needed */
.project-card {
  position: relative;
  width: 100%;
}

/* Make the image to responsive */
.image {
  display: block;
  width: 100%;
  height: auto;
}

/* The overlay effect - lays on top of the container and over the image */
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}

/* When you mouse over the container, fade in the overlay title */
.project-card:hover .overlay {
  opacity: 1;
}
</style>
