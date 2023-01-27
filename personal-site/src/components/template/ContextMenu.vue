<template>
  <div>
    <div
      v-if="visible"
      id="contextMenu"
      :style="{ top: top + 'px', left: left + 'px' }"
    >
      <button class="btn" @click="copy">
        <font-awesome-icon :icon="['far', 'copy']"></font-awesome-icon>
        <b>Copy</b>
      </button>
      <button v-if="canPaste" class="btn" @click="paste">
        <font-awesome-icon :icon="['far', 'paste']"></font-awesome-icon>
        <b>Paste</b>
      </button>
      <button
        v-for="customButton in customButtons"
        :key="customButton.key"
        class="btn"
        @click="customButton.click"
      >
        <font-awesome-icon :icon="customButton.icon"></font-awesome-icon>
        <b>{{ customButton.text }}</b>
      </button>
    </div>
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: 'ContextMenu'
}
</script>

<script setup>
import { ref, provide, readonly } from 'vue'

const visible = ref(false)
const canPaste = ref(true)

const top = ref(0)
const left = ref(0)

const customButtons = ref([])

const value = ref()

const show = (inputValue, readonly, x = 0, y = 0, buttons = []) => {
  top.value = y
  left.value = x
  visible.value = true
  value.value = inputValue
  canPaste.value = !readonly
  customButtons.value = buttons
}

const hide = () => {
  visible.value = false
}

const copy = () => {
  navigator.clipboard.writeText(value.value)
}

const paste = () => {
  navigator.clipboard.readText().then((clipText) => {
    if (clipText != '') {
      value.value.value = clipText
    }
  })
}

provide('showContextMenu', show)
provide('hideContextMenu', hide)

// eslint-disable-next-line no-undef
defineExpose({
  isVisible: readonly(visible),
  hideContextMenu: hide,
  showContextMenu: show
})
</script>

<style lang="scss">
#contextMenu {
  display: flex;
  min-width: 10rem;
  width: fit-content;
  flex-direction: column;
  justify-content: center;

  z-index: 9999;
  position: absolute;

  background-color: $braid-white;
  color: #000000;

  // border: 1px solid #000000;
  box-shadow: 0 0 5px $braid-grey-3;
  border-radius: 2px;

  .btn {
    border: 0;
    border-radius: 0;
    padding: 0.2em;
    text-align: left;
    padding: 0 1rem;
    &:hover {
      background-color: #f6f6f6;
    }

    &.btn + .btn {
      border-top: 1px solid $braid-grey-3;
    }

    & :last-child {
      padding-left: 0.5rem;
    }
  }
}
</style>
