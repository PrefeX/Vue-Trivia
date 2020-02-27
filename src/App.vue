<template>
  <div id="app">
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <!-- Place menu buttons here -->
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view></router-view>
    </section>
  </div>
</template>


<script>
export default {
  name: "App",
  components: {}
};
</script>


<style lang="scss">
@import "bulma";
</style>
