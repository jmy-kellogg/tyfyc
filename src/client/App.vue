<script lang="ts">
import { defineComponent } from "vue";
import jsPDF from "jspdf";
import ManualForm from "./components/ManualForm.vue";
import FormattedDoc from "./components/FormattedDoc.vue";

export default defineComponent({
  name: "App",
  components: { ManualForm, FormattedDoc },
  data() {
    return { view: "form" };
  },
  mounted() {
    this.$store.dispatch("getStateFromLocalStorage");
  },
  computed: {
    showForm() {
      return this.view == "form";
    },
    showPreview() {
      return this.view == "preview";
    },
  },
  methods: {
    onPrint() {
      const element = document.getElementById("element-to-convert");
      const doc = new jsPDF();

      // extra details we can reference when importing
      doc.setProperties({
        author: "tyfyc",
        keywords: "resume",
      });
      doc.html(element, {
        callback: function (doc) {
          doc.save("sample-document.pdf");
        },
        width: 170,
        windowWidth: 650, //window width in CSS pixels
      });
    },
  },
});
</script>

<template>
  <div class="flex">
    <button
      class="m-1 ml-0 w-24 rounded-t-lg p-3 hover:cursor-pointer hover:font-bold"
      :class="{
        'font-bold': showForm,
        'bg-white': showForm,
        'mb-0': showForm,
        'rounded-lg': !showForm,
      }"
      @click="view = 'form'"
    >
      <h3>Input</h3>
    </button>
    <button
      class="m-1 ml-0 w-24 rounded-t-lg p-3 hover:cursor-pointer hover:font-bold"
      :class="{
        'font-bold': showPreview,
        'bg-white': showPreview,
        'mb-0': showPreview,
        'rounded-lg': !showPreview,
      }"
      @click="view = 'preview'"
    >
      <h3>Preview</h3>
    </button>
    <button
      v-if="view == 'preview'"
      class="rounded-md bg-indigo-600 m-3 p-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 hover:cursor-pointer"
      @click="onPrint"
    >
      Export
    </button>
  </div>
  <div class="flex bg-white">
    <ManualForm v-if="showForm" />
    <FormattedDoc v-if="showPreview" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
