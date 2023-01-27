<template>
  <div v-if="loaded" :class="{ 'dark-theme': userTheme === 'dark-mode' }">
    <Header></Header>
    <main id="main" @click="dismissContextMenu">
      <ToastContainer>
        <ContextMenu ref="contextMenu">
          <router-view v-slot="{ Component }" :key="$route.path">
            <component :is="Component" />
          </router-view>
        </ContextMenu>
      </ToastContainer>
    </main>
    <Footer></Footer>
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

onMounted(() => {
  loaded.value = true
})
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  min-width: 100%;
  overflow-x: hidden;
  margin: 0;
  column-gap: 0;
  row-gap: 0;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 3.2rem auto;
  grid-template-areas:
    ' header '
    ' main '
    ' footer ';
}

#header {
  grid-area: header;
}

#footer {
  grid-area: footer;
}
</style>
