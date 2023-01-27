<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-2">Logo</div>
        <div class="col-6">
          <div class="row">
            <div
              v-for="(link, index) in headerRoutes"
              :key="'headerRoute' + index"
              class="col"
            >
              <a class="menu-link" :title="link.label">
                <RouterLink :to="link.route">
                  {{ link.label }}
                </RouterLink>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import headerRoutes from '@/composables/headerRoutes'
</script>

<style scoped lang="scss">
#header {
  width: 100%;
  height: 2rem;
  background-color: var(--background-color-primary);
}
</style>
