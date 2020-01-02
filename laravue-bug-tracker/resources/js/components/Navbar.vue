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
  background: #3490dc;
  width: 100%;
}
nav {
  top: 0;
  position: sticky;
  z-index: 3;
  width: 350px;
  background: #333;
}
ul.items-wrapper {
  display: flex;
  flex-direction: column;
  list-style: none;
  line-height: 3rem;
  padding: 0;
  top: 0;
  position: sticky;
  border-top: 5px solid #343a40;
}
.nav-link {
  color: whitesmoke;
  padding-left: 90px;
}
@media (max-width: 1170px) {
  nav {
    width: 280px;
  }
}
@media (max-width: 1100px) {
  nav {
    width: 230px;
  }
}
@media (max-width: 900px) {
  nav {
    width: 100%;
    background: none;
  }
  ul.items-wrapper {
    flex-direction: row;
    border-top: 0;
    justify-content: center;
    align-items: center;
    background: #333;
  }
  .nav-link {
    color: whitesmoke;
    padding-left: 5px;
  }
  a.router-link-exact-active {
    background: none;
    width: 100%;
  }
}
</style>
