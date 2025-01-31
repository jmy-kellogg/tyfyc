<script lang="ts">
import html2pdf from "html2pdf.js";
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
    ...mapState("education", { education: "eduHistory" }),
    ...mapState("jobs", { jobs: "jobsHistory" }),
    ...mapState("skills", { skills: "skillsList" }),
  },
  methods: {
    onPrint() {
      const element = document.getElementById("element-to-convert");
      html2pdf()
        .from(element)
        .set({
          filename: "generated-pdf.pdf",
          margin: 1,
          pagebreak: {
            mode: "avoid-all",
            before: "#page2el",
          },
        })
        .save();
    },
  },
});
</script>

<template>
  <div>
    <div class="page">
      <div id="element-to-convert">
        <h1>{{ firstName }} {{ lastName }}</h1>
        <p>
          Email: {{ email }} | Phone: {{ phone }} | Location: {{ city }},
          {{ state }} |
        </p>
        <p>
          LinkedIn: linkedin.com/in/{{ linkedIn }} | GitHub: github.com/{{
            gitHub
          }}
        </p>
        <h2>Summary</h2>
        <p>
          {{ summary }}
        </p>
        <h3>Skills</h3>
        <ul>
          <li v-for="skill in skills" :key="skill.id">{{ skill.name }}</li>
        </ul>
        <h2>Professional Experience</h2>

        <div v-for="(job, index) in jobs" :key="index">
          <h3>{{ job.title }}</h3>

          <p>
            <b>{{ job.company }}</b> – {{ job.location }}
          </p>
          <p>{{ job.start }} – {{ job.end }}</p>

          <p>
            {{ job.description }}
          </p>
        </div>
        <h2>Education</h2>
        <div v-for="(school, index) in education" :key="index">
          <p>
            <b>{{ school.degree }}</b>
          </p>
          <p>{{ school.school }} – {{ school.gradYear }}</p>
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
  outline-style: solid;
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
