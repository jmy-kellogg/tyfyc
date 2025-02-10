<script lang="ts">
import Multiselect from "vue-multiselect";
import { defineComponent } from "vue";
import { mapState } from "vuex";

import { skillsOptions, createSkill } from "../../../utils";
import type { SkillsList, Skill } from "../../../types/index";

export default defineComponent({
  name: "Skills",
  components: {
    Multiselect,
  },
  data() {
    const options: SkillsList = skillsOptions;
    return { options };
  },
  computed: {
    ...mapState("skills", { skills: "list" }),
  },
  methods: {
    onSelect(skill: Skill) {
      this.$store.dispatch("skills/addSkill", skill);
    },
    onRemove(removeOption: Skill) {
      const index = this.skills.indexOf(removeOption);
      if (index > -1) {
        this.$store.dispatch("skills/remove", index);
      }
    },
    addTag(newSkill: string) {
      const tag: Skill = createSkill(newSkill);

      this.options.push(tag);
      this.onSelect(tag);
    },
  },
});
</script>

<template>
  <div class="col-span-full">
    <h2><b>Skills</b></h2>
    <label for="skills" class="block text-sm/6 font-medium">
      Technologies
    </label>
    <multiselect
      id="skills"
      tag-placeholder="Add this as new skill"
      placeholder="Search or add a skill"
      label="label"
      track-by="value"
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
