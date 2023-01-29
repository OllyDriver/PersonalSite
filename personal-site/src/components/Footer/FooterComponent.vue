<template>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-2 offset-3">
          <nav class="h-100">
            <RouterLink
              v-for="(link, index) in headerRoutes"
              :key="'headerRoute' + index"
              :title="link.label"
              :to="link.route"
              class="nav-link"
              :class="routeName == link.label ? 'active' : ''"
            >
              {{ link.label }}
            </RouterLink>
          </nav>
        </div>
        <div class="col-2"></div>
        <div class="col-2"></div>
      </div>
      <div class="row mt-3">
        <div class="col-2 offset-3 footer-row-container">
          <FontAwesomeIcon :icon="['fas', 'copyright']"></FontAwesomeIcon>
          <p class="m-0 px-2">Oliver Driver. 2023</p>
        </div>
        <div class="col-2 offset-3 footer-row-container">
          <a href="https://github.com/OllyDriver" class="px-1">
            <FontAwesomeIcon :icon="['fab', 'github']"></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/oliver-driver/" class="px-1">
            <FontAwesomeIcon :icon="['fab', 'linkedin']"></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import headerRoutes from '@/composables/headerRoutes'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  routeName: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
#footer {
  margin: 0.5rem 0 1rem 0;
  & .container {
    border-top: 1px solid rgba(17, 24, 29, 0.2);

    nav {
      display: flex;
      flex-direction: column;
      .nav-link {
        font-size: 1rem;
        opacity: 0.6;

        &.active,
        &:hover {
          opacity: 1;
        }
      }
    }

    .footer-row-container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
}

.dark-theme {
  & #footer {
    & .container {
      border-top: 1px solid rgba(229, 231, 235, 0.2);

      & p,
      & svg {
        opacity: 0.6;
      }
    }
  }
}
</style>
