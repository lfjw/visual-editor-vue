import { defineComponent, ref } from "vue";
import "./visual-editor.scss";

export const VisualEditor = defineComponent({
  props: {},
  setup(props) {
    console.log(props);
    const num = ref(0);
    function onBody() {
      num.value++
    }
    return () => (
      <div class='visual-editor-1'>
        <div class='visual-editor-menu'>menu-{num.value}</div>
        <div class='visual-editor-body' onClick={onBody}>body</div>
        <div class='visual-editor-right'>right</div>
      </div>
    )
  },
})