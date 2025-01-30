<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Jobs",
  props: ["jobs"],
  emits: ["update"],
  methods: {
    addNew() {
      const newJobs = [
        ...this.jobs,
        {
          title: "",
          company: "",
          location: "",
          start: "",
          end: "",
          description: "",
        },
      ];

      this.$emit("update", newJobs);
    },
    remove(index) {
      let newJobs = [...this.jobs];
      newJobs.splice(index, 1);

      this.$emit("update", newJobs);
    },
  },
});
</script>

<template>
  <div class="col-span-full">
    <h2>
      <b>Professional Experience </b>
    </h2>
    <div
      class="border-b border-gray-300 my-3"
      v-for="(job, index) in jobs"
      :key="index"
    >
      <label for="title" class="block text-sm/6 font-medium">Title</label>
      <input
        name="title"
        type="title"
        autocomplete="title"
        class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        v-model="job.title"
      />

      <label for="company" class="block text-sm/6 font-medium">Company</label>
      <input
        type="text"
        name="company"
        id="company"
        autocomplete="address-level2"
        class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        v-model="job.company"
      />

      <label for="location" class="block text-sm/6 font-medium">Location</label>
      <input
        type="location"
        autocomplete="location"
        class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        v-model="job.location"
      />

      <label for="start" class="block text-sm/6 font-medium">Start</label>
      <input
        type="text"
        name="start"
        id="start"
        autocomplete="address-level2"
        class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        v-model="job.start"
      />

      <label for="end" class="block text-sm/6 font-medium">End</label>
      <input
        type="text"
        name="end"
        id="end"
        autocomplete="address-level2"
        class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        v-model="job.end"
      />

      <label for="description" class="block text-sm/6 font-medium"
        >Description</label
      >
      <textarea
        name="description"
        id="description"
        rows="3"
        class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        v-model="job.description"
      ></textarea>

      <button
        type="button"
        class="rounded-md text-sm/6 my-3 px-2 py-1 outline-1 -outline-offset-1 outline-gray-300 font-semibold shadow-sm hover:bg-indigo-300 outline-1"
        @click="remove(index)"
      >
        Remove Job
      </button>
    </div>

    <button
      type="button"
      class="rounded-md bg-indigo-600 my-3 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="addNew"
    >
      Add Another
    </button>
  </div>
</template>
<style scoped></style>
