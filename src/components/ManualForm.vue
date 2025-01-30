<script lang="ts">
import { defineComponent } from "vue";
import DocUploaderVue from "./inputs/DocUploader.vue";
import SkillsVue from "./inputs/Skills.vue";
import JobsVue from "./inputs/Jobs.vue";
import EducationVue from "./inputs/Education.vue";

interface Personal {
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

interface JobData {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  description: string;
}

interface EducationData {
  degree: string;
  school: string;
  gradYear: string;
}

export default defineComponent({
  name: "ManualForm",
  components: { DocUploaderVue, SkillsVue, JobsVue, EducationVue },
  data() {
    const personal: Personal = {
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

    const skills = [{ name: "Javascript", id: "js" }];
    const jobs: JobData[] = [];
    const education: EducationData[] = [
      {
        degree: "",
        school: "",
        gradYear: "",
      },
    ];

    return {
      personal,
      skills,
      jobs,
      education,
    };
  },
  mounted() {
    if (localStorage) {
      const personal = localStorage.getItem("personal");
      const education = localStorage.getItem("education");
      const jobs = localStorage.getItem("jobs");
      const skills = localStorage.getItem("skills");

      if (personal) {
        this.personal = JSON.parse(personal);
      }

      if (skills) {
        this.skills = JSON.parse(skills);
      }

      if (jobs) {
        this.jobs = JSON.parse(jobs);
      }

      if (education) {
        this.education = JSON.parse(education);
      }
    }
  },
  methods: {
    onSubmit(event) {
      if (event) {
        event.preventDefault();
      }
      localStorage.personal = JSON.stringify(this.personal);
      localStorage.skills = JSON.stringify(this.skills);
      localStorage.jobs = JSON.stringify(this.jobs);
      localStorage.education = JSON.stringify(this.education);
    },
    savePersonal() {
      localStorage.personal = JSON.stringify(this.personal);
    },
  },
});
</script>

<template>
  <div class="m-3">
    <form>
      <!-- <DocUploaderVue /> -->
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
              v-model="personal.firstName"
              @change="savePersonal"
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
              v-model="personal.lastName"
              @change="savePersonal"
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
              v-model="personal.email"
              @change="savePersonal"
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
              v-model="personal.phone"
              @change="savePersonal"
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
              v-model="personal.city"
              @change="savePersonal"
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
              v-model="personal.state"
              @change="savePersonal"
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
              v-model="personal.linkedIn"
              @change="savePersonal"
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
              v-model="personal.gitHub"
              @change="savePersonal"
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
              v-model="personal.summary"
              @change="savePersonal"
            ></textarea>
          </div>
        </div>
        <SkillsVue :skills="skills" />
        <JobsVue :jobs="jobs" />
        <EducationVue :education="education" />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
