<template>
  <div class="m-3">
    <form>
      <!-- ToDo: add resume uploader option -->
      <!-- <div class="col-span-full">
          <label
            for="cover-photo"
            class="block text-sm/6 font-medium"
            >Upload Resume</label
          >
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
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                  />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs/5 text-gray-600">PDF, PNG, JPG, up to 10MB</p>
            </div>
          </div>
        </div> -->
      <h2><b>Personal Info:</b></h2>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm/6 font-medium"
            >First name</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              v-model="formData.firstName"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm/6 font-medium"
            >Last name</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              v-model="formData.lastName"
            />
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm/6 font-medium"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              v-model="formData.email"
            />
          </div>
        </div>
        <div class="sm:col-span-4">
          <label for="phone" class="block text-sm/6 font-medium">Phone</label>
          <div class="mt-2">
            <input
              id="phone"
              name="phone"
              type="phone"
              autocomplete="phone"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              v-model="formData.phone"
            />
          </div>
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="city" class="block text-sm/6 font-medium">City</label>
          <div class="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              autocomplete="address-level2"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              v-model="formData.city"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="state" class="block text-sm/6 font-medium">State</label>
          <div class="mt-2">
            <input
              type="text"
              name="state"
              id="state"
              autocomplete="address-level1"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              v-model="formData.state"
            />
          </div>
        </div>
        <div class="sm:col-span-4">
          <label for="linkedin" class="block text-sm/6 font-medium"
            >LinkedIn</label
          >
          <div class="mt-2">
            <input
              id="linkedin"
              name="linkedin"
              type="linkedin"
              autocomplete="linkedin"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              v-model="formData.linkedIn"
            />
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm/6 font-medium">GitHub</label>
          <div class="mt-2">
            <input
              id="github"
              name="github"
              type="github"
              autocomplete="github"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              v-model="formData.gitHub"
            />
          </div>
        </div>

        <div class="col-span-full">
          <h2><b>Summary</b></h2>
          <label for="summary" class="block text-sm/6 font-medium"
            >Summary</label
          >
          <div class="mt-2">
            <textarea
              name="summary"
              id="summary"
              rows="3"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              v-model="formData.summary"
            ></textarea>
          </div>
        </div>
        <SkillsVue :skills="skills" />
        <JobsVue
          :jobs="jobs"
          @update="
            (newJobs) => {
              this.jobs = newJobs;
            }
          "
        />
        <EducationVue
          :education="education || []"
          @update="
            (edu) => {
              this.education = edu;
            }
          "
        />
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm/6 font-semibold">Cancel</button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="onSubmit"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EducationVue from "./inputs/Education.vue";
import JobsVue from "./inputs/Jobs.vue";
import SkillsVue from "./inputs/Skills.vue";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedIn: string;
  gitHub: string;
  city: string;
  state: string;
  summary: string;
  gradYear: string;
}

interface EducationData {
  degree: string;
  school: string;
  gradYear: string;
}
interface JobData {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  description: string;
}

export default defineComponent({
  name: "ManualForm",
  components: { EducationVue, JobsVue, SkillsVue },
  data() {
    const formData: FormData = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedIn: "",
      gitHub: "",
      city: "",
      state: "",
      summary: "",
      gradYear: "",
    };

    const education: EducationData[] = [
      {
        degree: "",
        school: "",
        gradYear: "",
      },
    ];
    const jobs: JobData[] = [];
    const skills = [{ name: "Javascript", id: "js" }];

    return {
      formData,
      education,
      jobs,
      skills,
    };
  },
  mounted() {
    if (localStorage) {
      console.log(localStorage);
      this.formData = localStorage;
      const education = localStorage.getItem("education");
      const jobs = localStorage.getItem("jobs");
      const skills = localStorage.getItem("skills");

      if (education) {
        this.education = JSON.parse(education);
      }

      if (jobs) {
        this.jobs = JSON.parse(jobs);
      }

      if (skills) {
        this.skills = JSON.parse(skills);
      }
    }
  },
  methods: {
    onSubmit(event) {
      if (event) {
        event.preventDefault();
      }
      localStorage.firstName = this.formData.firstName;
      localStorage.lastName = this.formData.lastName;
      localStorage.email = this.formData.email;
      localStorage.city = this.formData.city;
      localStorage.state = this.formData.state;
      localStorage.summary = this.formData.summary;

      localStorage.phone = this.formData.phone;
      localStorage.linkedIn = this.formData.linkedIn;
      localStorage.gitHub = this.formData.gitHub;

      localStorage.education = JSON.stringify(this.education);
      localStorage.jobs = JSON.stringify(this.jobs);
      localStorage.skills = JSON.stringify(this.skills);
    },
  },
});
</script>
<style scoped></style>
