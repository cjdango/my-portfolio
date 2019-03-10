<template>
  <Layout>
    <h1>Contact page</h1>

    <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact-form">
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
        <input type="submit" value="Submit" class="submit-btn">
      </div>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact"
  }
};
</script>

<style>
.form-group {
  display: flex;
  flex-direction: column;
}

.submit-btn {
  padding: 5px 0px;
  margin-top: 15px;
}
</style>
