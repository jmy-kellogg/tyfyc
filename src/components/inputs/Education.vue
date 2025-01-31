<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Education",
  computed: {
    ...mapState("education", { education: "eduHistory" }),
  },
  methods: {
    saveEducation() {
      this.$store.dispatch("education/saveToLocalStorage");
    },
    addNew() {
      this.$store.dispatch("education/addNew");
    },
    remove(index) {
      this.$store.dispatch("education/remove", index);
    },
  },
});
</script>
<template>
  <div class="sm:col-span-4">
    <h2>
      <b>Education </b>
    </h2>
    <div
      class="sm:col-span-4"
      v-for="(school, index) in education"
      :key="index"
    >
      <label for="degree" class="block text-sm/6 font-medium">Degree</label>
      <input
        name="degree"
        type="degree"
        autocomplete="degree"
        class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        v-model="school.degree"
        @input="saveEducation"
      />

      <label for="school" class="block text-sm/6 font-medium">School</label>
      <input
        type="school"
        autocomplete="school"
        class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        v-model="school.school"
        @input="saveEducation"
      />

      <label for="grad-year" class="block text-sm/6 font-medium"
        >Year Graduated</label
      >

      <input
        type="text"
        name="grad-year"
        id="grad-year"
        autocomplete="address-level2"
        class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        v-model="school.gradYear"
        @input="saveEducation"
      />
      <button
        type="button"
        class="rounded-md text-sm/6 my-3 px-2 py-1 outline-1 -outline-offset-1 outline-gray-300 font-semibold shadow-sm hover:bg-indigo-300 outline-1"
        @click="remove(index)"
      >
        Remove {{ school.school }}
      </button>
    </div>

    <button
      type="button"
      class="rounded-md bg-indigo-600 my-3 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="addNew"
    >
      Add School
    </button>
  </div>
</template>
<style scoped></style>
