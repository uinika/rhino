<template>
  <p class="editor"
     v-html="inputText"
     :placeholder = "placeholder"
     :contenteditable="isEditable"
     @blur="editorBlur"
     @focus="editorFocus"
     @input="editorChange"></p>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    isEditable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isBlock: false,
      inputText: this.placeholder
    };
  },
  methods: {
    editorChange() {
      if (this.$el.innerHTML === "<br>") {
        this.$el.innerHTML = "";
      }
      this.$emit("input", this.$el.innerHTML);
    },
    editorFocus() {
      if (this.$el.innerHTML === this.placeholder) {
        this.$el.innerHTML = "";
      }
      this.isBlock = true;
    },
    editorBlur() {
      if (this.$el.innerHTML === "") {
        this.$el.innerHTML = this.placeholder;
      }
      this.isBlock = false;
    }
  },
  watch: {
    placeholder() {
      if (!this.isBlock || !this.innerText) this.innerText = this.placeholder;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/color";
p[contenteditable].editor {
  display: inline-block;
  min-width: 50px;
  outline: none;
  border: 1px solid $color-border-base;
  color: $color-font-regular;
  line-height: 20px;
  font-size: 14px;
  border-radius: 4px;
  word-break: break-all;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin: 5px 2px;
  padding: 6px 5px !important;
}
</style>
