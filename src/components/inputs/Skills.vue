<script lang="ts">
import { defineComponent } from "vue";
import Multiselect from "vue-multiselect";

export default defineComponent({
  name: "Skills",
  props: ["skills"],
  components: {
    Multiselect,
  },
  data() {
    return {
      options: [
        { name: "JavaScript", id: "js" },
        { name: "TypeScript", id: "typescript" },
        { name: "Python", id: "python" },
        { name: "Vue.js", id: "vue" },
        { name: "React", id: "react" },
        { name: "Django", id: "django" },
        { name: "Flask", id: "flask" },
        { name: "Cypress", id: "cypress" },
        { name: "Jest", id: "jest" },
        { name: "Chai", id: "chai" },
        { name: "Mocha", id: "mocha" },
        { name: "Selenium", id: "selenium" },
        { name: "ES6", id: "es6" },
        { name: "HTML", id: "html" },
        { name: "CSS / Sass", id: "css_sass" },
        { name: "Bootstrap", id: "bootstrap" },
        { name: "Material UI", id: "material_ui" },
        { name: "Figma", id: "figma" },
        { name: "PO Editor", id: "po_editor" },
        { name: "Node.js", id: "node" },
        { name: "NPM", id: "npm" },
        { name: "WebPack", id: "webpack" },
        { name: "ESBuild", id: "esbuild" },
        { name: "ElasticSearch", id: "elasticsearch" },
        { name: "Redux", id: "redux" },
        { name: "VueX", id: "vuex" },
        { name: "Git", id: "git" },
        { name: "REST", id: "rest" },
        { name: "API", id: "api" },
        { name: "SDK", id: "sdk" },
        { name: "UI / UX", id: "ui_ux" },
        { name: "Prototyping", id: "prototyping" },
        { name: "Microservices", id: "microservices" },
        { name: "Feature Flags", id: "feature_flags" },
        { name: "Vite", id: "vite" },
        { name: "Java", id: "java" },
        { name: "C++", id: "cpp" },
        { name: "C#", id: "csharp" },
        { name: "Angular", id: "angular" },
        { name: "Ruby on Rails", id: "rails" },
        { name: "SQL", id: "sql" },
        { name: "PostgreSQL", id: "postgresql" },
        { name: "NoSQL", id: "nosql" },
        { name: "MongoDB", id: "mongodb" },
        { name: "Docker", id: "docker" },
        { name: "Kubernetes", id: "kubernetes" },
        { name: "AWS", id: "aws" },
        { name: "Azure", id: "azure" },
        { name: "Google Cloud", id: "gcp" },
        { name: "CI/CD", id: "ci_cd" },
        { name: "Agile Methodologies", id: "agile" },
        { name: "Scrum", id: "scrum" },
        { name: "DevOps", id: "devops" },
        { name: "Open Source", id: "open_source" },
        { name: "GraphQL", id: "graphql" },
        { name: "Machine Learning", id: "ml" },
        { name: "Data Science", id: "data_science" },
        { name: "Cybersecurity", id: "cybersecurity" },
      ],
    };
  },
  methods: {
    onSelect(skill) {
      this.skills.push(skill);
    },
    onRemove(removeOption) {
      const index = this.skills.indexOf(removeOption);
      if (index > -1) {
        this.skills.splice(index, 1);
      }
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        id: this.snake_case_string(newTag),
      };
      this.options.push(tag);
      this.skills.push(tag);
    },
    snake_case_string(str) {
      return (
        str &&
        str
          .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
          )
          .map((s) => s.toLowerCase())
          .join("_")
      );
    },
  },
});
</script>

<template>
  <div class="sm:col-span-4">
    <h2>
      <b>Skills</b>
    </h2>
    <label for="degree" class="block text-sm/6 font-medium">skills</label>
    <multiselect
      id="tagging"
      tag-placeholder="Add this as new skill"
      placeholder="Search or add a skill"
      label="name"
      track-by="id"
      :model-value="skills"
      :options="options"
      :multiple="true"
      :taggable="true"
      @select="onSelect"
      @remove="onRemove"
      @tag="addTag"
    ></multiselect>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped></style>
