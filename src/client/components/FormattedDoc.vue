<script lang="ts">
import jsPDF from "jspdf";
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { divider } from "../../utils";

export default defineComponent({
  name: "FormattedDoc",
  computed: {
    ...mapState("personal", [
      "firstName",
      "lastName",
      "email",
      "phone",
      "city",
      "state",
      "linkedIn",
      "gitHub",
      "summary",
    ]),
    ...mapState("education", { education: "educationList" }),
    ...mapState("jobs", { jobs: "jobsList" }),
    ...mapState("skills", { skills: "list" }),
    divider,
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
          doc.save("tyfyc_resume.pdf");
        },
        width: 170,
        windowWidth: 650,
      });
    },
  },
});
</script>

<template>
  <div class="bg-white p-5">
    <button
      class="sticky float-right rounded-md bg-indigo-600 mx-3 p-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 hover:cursor-pointer"
      @click="onPrint"
    >
      Export
    </button>
    <div id="element-to-convert">
      <div>
        <div>
          <h1>{{ firstName }} {{ lastName }}</h1>
          <p>
            Email: {{ email }} | Phone: {{ phone }} | Location: {{ city }},
            {{ state }} |
          </p>
          <p>LinkedIn: {{ linkedIn }} | {{ gitHub }}</p>
          <h2>Summary</h2>
          <p>{{ summary }}</p>
        </div>
        <div>
          <h3>Skills</h3>
          <ul>
            <li v-for="skill in skills" :key="skill.value">
              {{ skill.label }}
            </li>
          </ul>
        </div>
      </div>
      <p class="divider">{{ divider }}</p>
      <div>
        <h2>Professional Experience</h2>
        <div v-for="(job, index) in jobs" :key="index">
          <h3>{{ job.title }}</h3>
          <p>{{ job.company }} - {{ job.location }}</p>
          <p>{{ job.start }} - {{ job.end }}</p>
          <p>
            {{ job.description }}
          </p>
          <p class="divider">{{ divider }}</p>
        </div>
      </div>
      <div>
        <h2>Education</h2>
        <div v-for="(school, index) in education" :key="index">
          <p>
            {{ school.degree }}
          </p>
          <p>{{ school.school }} - {{ school.gradYear }}</p>
          <p class="divider">{{ divider }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#element-to-convert {
  width: 750px;
  margin: 25px;
}

h1 {
  font-size: 3em;
  margin: 0.25em 0px;
  font-weight: bold;
}

h2 {
  font-size: 1.5em;
  margin: 0.25em 0px;
  font-weight: bold;
}

h3 {
  font-size: 1.17em;
  margin: 0.25em 0px;
  font-weight: bold;
}

h4 {
  font-size: 1em;
  margin: 0.25em 0px;
  font-weight: bold;
}

.divider {
  color: #a8a8aec9;
  font-size: 0.85em;
}
</style>
