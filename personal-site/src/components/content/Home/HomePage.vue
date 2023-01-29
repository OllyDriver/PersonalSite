<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 landing center">
        <h2>
          Hi, I'm <b class="active">Olly</b>. Software developer, designer and
          lover of the outdoors.
        </h2>
        <div class="button-panel">
          <a href="#">
            <button class="btn call-to-action center">
              <b>Button</b>
              <FontAwesomeIcon :icon="['fas', 'arrow-right']"></FontAwesomeIcon>
            </button>
          </a>
          <a href="/about">
            <button class="btn secondary-call-to-action center">
              <b>More about me</b>
              <FontAwesomeIcon :icon="['fas', 'arrow-right']"></FontAwesomeIcon>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped lang="scss">
.landing {
  height: 60vh;
  display: flex;
  flex-direction: column;
}

.button-panel {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  & .call-to-action,
  & .secondary-call-to-action {
    display: flex;
    flex-direction: row;
    padding: 0.5rem 1rem;
    border-radius: 5rem;

    & b {
      margin: 0 0.5rem 0 0;
    }
  }

  & .secondary-call-to-action {
    background-color: transparent !important;
  }
}
</style>

<!-- PAGE SPECIFIC COLOR THEMES -->
<style lang="scss">
.secondary-call-to-action {
  b {
    color: #222 !important;
  }

  & svg {
    & path {
      fill: #222 !important;
    }
  }
}
.dark-theme {
  .secondary-call-to-action {
    b {
      color: #ddd !important;
    }

    & svg {
      & path {
        fill: #ddd !important;
      }
    }
  }
}
</style>
