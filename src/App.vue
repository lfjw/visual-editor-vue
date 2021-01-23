<template>
  <visual-editor></visual-editor>
</template>

<script lang="ts">
import { VisualEditor } from "@/packages/visual-editor";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    VisualEditor,
  },
});
</script>

<style lang="scss">
body,
html {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
