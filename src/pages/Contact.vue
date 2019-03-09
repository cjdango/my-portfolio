<template>
  <Layout>
    <h1>Contact page</h1>

    <form name="contact-form" method="POST" netlify>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">
      </div>

      <div class="form-group">
        <label for="mobile">Mobile:</label>
        <input type="text" name="mobile" id="mobile">
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </div>

      <div class="form-group">
        <input type="submit" value="Submit">
      </div>
    </form>
  </Layout>
</template>

<style>
.form-group {
  display: flex;
  flex-direction: column;
}
</style>
