<template>
  <div class="container-sm">
    <div class="row">
      <div
        v-for="(project, index) in projects"
        :key="'projectPanel' + index"
        class="col-4 project-panel"
      >
        <div class="project-card">
          {{ project.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import projects from '../../../../public/data/projects'
</script>

<style scoped lang="scss">
.project-panel {
  height: 10rem;
  padding: 2rem 1rem;

  & .project-card {
    background-color: red;
    height: 100%;
    width: 100%;

    border-radius: 5px;
  }
}
</style>
