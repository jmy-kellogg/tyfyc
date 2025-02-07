<script lang="ts">
import jsPDF from "jspdf";

import { defineComponent } from "vue";
import { mapState } from "vuex";

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
    ...mapState("skills", { skills: "skillsList" }),
    // Note: this is to allow us to see sections when importing pdf, until we have a more robust parser
    divider() {
      let index = 75;
      let line = "";
      while (index > 0) {
        index--;
        line += "_";
      }
      return line;
    },
  },
  methods: {
    onPrint() {
      const element = document.getElementById("element-to-convert");
      const doc = new jsPDF();
      console.log(this.jobs);
      doc.html(element, {
        callback: function (doc) {
          // Save the PDF
          doc.save("sample-document.pdf");
        },
        x: 15,
        y: 15,
        width: 170, //target width in the PDF document
        windowWidth: 650, //window width in CSS pixels
      });
    },
  },
});
</script>

<template>
  <div>
    <div class="page">
      <div id="element-to-convert">
        <div>
          <h1>{{ firstName }} {{ lastName }}</h1>
          <p>
            Email: {{ email }} | Phone: {{ phone }} | Location: {{ city }},
            {{ state }} |
          </p>
          <p>LinkedIn: {{ linkedIn }} | {{ gitHub }}</p>
          <h2>Summary</h2>
        </div>
        <div>
          <p>{{ summary }}</p>
          <h3>Skills</h3>
          <ul>
            <li v-for="skill in skills" :key="skill.id">{{ skill.name }}</li>
          </ul>
        </div>
        <div>
          <h2>Professional Experience</h2>
          <div v-for="(job, index) in jobs" :key="index">
            <h3>{{ job.title }}</h3>
            <p>{{ job.company }} - {{ job.location }}</p>
            <p>{{ job.start }} - {{ job.end }}</p>
            <p>
              {{ job.description }}
            </p>
            <p>{{ divider }}</p>
          </div>
        </div>
        <div>
          <h2>Education</h2>
          <div v-for="(school, index) in education" :key="index">
            <p>
              {{ school.degree }}
            </p>
            <p>{{ school.school }} - {{ school.gradYear }}</p>
            <p>{{ divider }}</p>
          </div>
        </div>
      </div>
    </div>

    <button
      class="rounded-md bg-indigo-600 my-3 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="onPrint"
    >
      Print
    </button>
  </div>
</template>

<style scoped>
.page {
  padding: 15px 0px;
}

#element-to-convert {
  margin: 25px;
  width: 750px;
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
</style>
