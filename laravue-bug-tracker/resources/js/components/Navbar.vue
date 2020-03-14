<template>
  <nav class="nav-bar">
    <div class="container">
      <div class="items-wrapper row">
        <div class="col-3">
          <router-link
            class="nav-link d-flex flex-column flex-sm-row justify-content-center align-items-center"
            to="/"
          >
            <span>
              <img src="/asset_images/bug-icons.svg" alt srcset />
            </span>
            BUGS
          </router-link>
        </div>
        <div class="col-3">
          <router-link
            class="nav-link d-flex flex-column flex-sm-row justify-content-center align-items-center"
            to="/projects"
          >
            <span>
              <img src="/asset_images/project-icons.svg" alt srcset />
            </span>
            PROJECTS
          </router-link>
        </div>
        <div class="col-3">
          <router-link
            class="nav-link d-flex flex-column flex-sm-row justify-content-center align-items-center"
            to="/developers"
          >
            <span>
              <img src="/asset_images/code-icons.svg" alt srcset />
            </span>
            DEVELOPERS
          </router-link>
        </div>
        <div class="col-3">
          <router-link
            class="nav-link d-flex flex-column flex-sm-row justify-content-center align-items-center"
            to="/testers"
          >
            <span>
              <img src="/asset_images/test-icons.svg" alt srcset />
            </span>
            TESTERS
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
a.router-link-exact-active {
  color: aliceblue;
  font-weight: 900;
  width: 100%;
}
nav {
  top: 0;
  position: sticky;
  z-index: 3;
  width: 100%;
  background: #333;
  margin-bottom: 20px;
}
div.items-wrapper {
  list-style: none;
  line-height: 3rem;
  padding: 0;
  top: 0;
  position: sticky;

  border-top: 0;
  justify-content: center;
  align-items: center;
  background: #333;
}
.nav-link {
  color: rgb(201, 198, 198);
}
</style>
