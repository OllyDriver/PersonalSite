<template>
  <header id="header" class="container">
    <div class="row h-100">
      <div class="col-2 center">Logo</div>
      <div class="col-6 offset-1">
        <nav class="h-100">
          <RouterLink
            v-for="(link, index) in headerRoutes"
            :key="'headerRoute' + index"
            :title="link.label"
            :to="link.route"
            class="nav-link center"
            :class="routeName == link.label ? 'active' : ''"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </div>
      <div class="col-2 offset-1 center">
        <button
          class="btn btn-reverse theme-toggle"
          @click="$emit('toggleTheme')"
        >
          <FontAwesomeIcon
            v-if="userTheme == 'light-mode'"
            :icon="['fas', 'sun']"
          ></FontAwesomeIcon>
          <FontAwesomeIcon v-else :icon="['fas', 'moon']"></FontAwesomeIcon>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import headerRoutes from '@/composables/headerRoutes'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  userTheme: {
    type: String,
    default: ''
  },
  routeName: {
    type: String,
    default: ''
  }
})
const emit = defineEmits('toggleTheme')
</script>

<style scoped lang="scss">
#header {
  position: sticky;
  top: 0;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  .nav-link {
    font-size: 1.25rem;
    opacity: 0.6;

    &.active,
    &:hover {
      opacity: 1;
    }
  }
}
.theme-toggle {
  display: flex;
  justify-content: center;
  align-items: center;

  align-self: center;
  justify-self: center;

  height: 3rem;
  width: 3rem;
  border-radius: 50%;
}
</style>
