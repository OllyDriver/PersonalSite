<template>
  <div
    v-if="loaded"
    class="app"
    :class="userTheme == 'dark-mode' ? 'dark-theme' : 'light-theme'"
  >
    <Header
      :user-theme="userTheme"
      :route-name="route.name"
      @toggle-theme="toggleTheme"
    ></Header>
    <main id="main" @click="dismissContextMenu">
      <ToastContainer>
        <ContextMenu ref="contextMenu">
          <router-view v-slot="{ Component }" :key="$route.path">
            <component :is="Component" />
          </router-view>
        </ContextMenu>
      </ToastContainer>
    </main>
    <Footer :route-name="route.name"></Footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Header from '@/components/Header/HeaderComponent.vue'
import Footer from '@/components/Footer/FooterComponent.vue'

import ToastContainer from '@/components/template/ToastContainer.vue'
import ContextMenu from '@/components/template/ContextMenu'

const loaded = ref(false)

const route = useRoute()
const contextMenu = ref(null)

const userTheme = ref('dark-mode')

const dismissContextMenu = () => {
  if (contextMenu.value.isVisible) {
    contextMenu.value.hideContextMenu()
  }
}

const toggleTheme = () => {
  userTheme.value = userTheme.value == 'light-mode' ? 'dark-mode' : 'light-mode'
}

onMounted(() => {
  loaded.value = true
})
</script>

<!-- STANDARD TEMPLATE SIZING AND LAYOUT -->
<style lang="scss">
.app {
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  margin: 0;
  column-gap: 0;
  row-gap: 0;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 4rem 1fr 4rem;
  grid-template-areas:
    ' header '
    ' main '
    ' footer ';
}

#header {
  grid-area: header;
}

#main {
  grid-area: main;
  min-height: calc(100vh - 4rem);
}

#footer {
  grid-area: footer;
}

.cls-1 {
  fill: none;
  stroke: #9e75b2;
  stroke-miterlimit: 10;
  stroke-width: 7px;
}
</style>
