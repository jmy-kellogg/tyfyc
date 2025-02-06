<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "DocUploader",
  data() {
    return { embedSrc: "" };
  },
  methods: {
    async onFilePicked(event) {
      const files = event.target.files;
      const file = files[0];
      const fileReader = new FileReader();

      fileReader.addEventListener("load", async () => {
        // Add to Preview
        this.embedSrc = fileReader.result;

        // Send to be parsed by the API
        let formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(
          "http://localhost:3000/parser",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // ToDo: move the request and updates to the store
        // also make sure to sync with localStorage
        const parsedData = response.data;
        this.updatePersonalData(parsedData.personal);
        this.updateSkillsData(parsedData.skills);
        this.updateJobsData(parsedData.jobs);
        this.updateEducationData(parsedData.education);
      });

      fileReader.readAsDataURL(file);
    },
    updatePersonalData(personalData) {
      for (let field in personalData) {
        const value = personalData[field];
        this.$store.dispatch("personal/updateData", { field, value });
      }
    },
    updateSkillsData(skillsData) {
      this.$store.dispatch("skills/updateSkills", skillsData);
    },
    updateJobsData(jobsData) {
      this.$store.dispatch("jobs/updateJobs", jobsData);
    },
    updateEducationData(eduData) {
      this.$store.dispatch("education/updateEducation", eduData);
    },
  },
});
</script>

<template>
  <div class="mb-4 col-span-full">
    <label for="resume-uploader" class="block text-sm/6 font-medium">
      <h2><b>Upload </b></h2>
    </label>
    <div
      class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
    >
      <div class="text-center">
        <svg
          class="mx-auto size-12 text-gray-300"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
            clip-rule="evenodd"
          />
        </svg>
        <div class="mt-4 flex text-sm/6 text-gray-600">
          <label
            for="file-upload"
            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
          >
            <span>Upload Resume</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              class="sr-only"
              accept="application/pdf"
              @change="onFilePicked"
            />
          </label>
          <p class="pl-1">or drag and drop</p>
        </div>
        <p class="text-xs/5 text-gray-600">PDF, PNG, JPG, up to 10MB</p>
      </div>
    </div>
  </div>
  <!-- <div v-if="!!embedSrc">
    <h2>Preview</h2>
    <embed
      type="application/pdf"
      :src="embedSrc"
      width="100%"
      style="max-height: 50rem; min-height: 20rem"
    />
  </div> -->
</template>
<style scoped></style>
