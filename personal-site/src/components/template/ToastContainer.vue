<template>
  <div>
    <div class="toast-container">
      <div
        ref="toastEl"
        class="toast"
        :class="classObject"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <span>
            <FontAwesomeIcon
              v-if="toastIcon"
              :icon="toastIcon"
            ></FontAwesomeIcon>
            {{ toastHeader }}
          </span>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="close"
          ></button>
        </div>
        <div class="toast-body">
          {{ toastMessage }}
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, provide } from 'vue'
import { Toast } from 'bootstrap'

const toastType = ref('')
const toastHeader = ref('')
const toastIcon = ref()
const toastMessage = ref('')
const toastEl = ref()
const toast = ref()

const classObject = computed(() => {
  return {
    error: toastType.value === 'error',
    success: toastType.value === 'success',
    info: toastType.value === 'info'
  }
})

const newToast = (message, header) => {
  toastMessage.value = message
  toastHeader.value = header
  nextTick(() => {
    toast.value.show()
  })
}

const successToast = (message, header = 'Success') => {
  toastType.value = 'success'
  toastIcon.value = ['fas', 'check']
  newToast(message, header)
}

const infoToast = (message, header = 'Information') => {
  toastType.value = 'info'
  toastIcon.value = ['fas', 'eye']
  newToast(message, header)
}

const errorToast = (message, header = 'Error') => {
  toastType.value = 'error'
  toastIcon.value = ['fas', 'exclamation']
  newToast(message, header)
}

const createToast = (type, message, header) => {
  switch (type.toLowerCase()) {
    case 'success':
      successToast(message, header)
      break

    case 'error':
      errorToast(message, header)
      break

    case 'info':
    default:
      infoToast(message, header)
      break
  }
}

onMounted(() => {
  toast.value = new Toast(toastEl.value)
})

provide('createToast', createToast)
</script>

<style lang="scss">
.toast-container {
  width: 100%;
  position: relative;

  .toast {
    position: absolute;
    background-color: $braid-white;
    top: 0;
    right: 0;
    z-index: 20;

    .toast-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    &.success {
      border: 0.1rem solid $success-color;
      .toast-header {
        border-bottom: 0.1rem solid $success-color;
      }
    }

    &.error {
      border: 0.1rem solid $error-color;
      .toast-header {
        border-bottom: 0.1rem solid $error-color;
      }
    }

    &.info {
      border: 0.1rem solid $info-color;
      .toast-header {
        border-bottom: 0.1rem solid $info-color;
      }
    }
  }
}
</style>
