<template>
  <nav class="nav-bar">
    <ul class="items-wrapper">
      <li class="nav-item">
        <router-link class="nav-link" to="/">
          <span>
            <img src="/asset_images/bug-icons.svg" alt srcset />
          </span>
          BUGS
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/projects">
          <span>
            <img src="/asset_images/project-icons.svg" alt srcset />
          </span>
          PROJECTS
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/developers">
          <span>
            <img src="/asset_images/code-icons.svg" alt srcset />
          </span>
          DEVELOPERS
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/testers">
          <span>
            <img src="/asset_images/test-icons.svg" alt srcset />
          </span>
          TESTERS
        </router-link>
      </li>
    </ul>
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
}
ul.items-wrapper {
  display: flex;

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
  padding-left: 90px;
}
</style>
