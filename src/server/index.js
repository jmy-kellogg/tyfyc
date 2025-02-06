import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import multer from "multer";
import PDFParser from "pdf2json";

const app = express();
app.use(cors());

// ToDo: move these to reusable components
const snake_case_string = (str) => {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((s) => s.toLowerCase())
      .join("_")
  );
};

const divider = () => {
  let index = 75;
  let line = "";
  while (index > 0) {
    index--;
    line += "_";
  }
  return line;
};

// ToDo: split up and simplify logic
const parseTextData = (rawText) => {
  const textData = rawText.split("\r\n").filter((str) => !!str.trim());
  const names = textData[0]?.split(" ");
  const contacts = textData[1]?.split("|");
  const sites = textData[2]?.split("|");
  const summary = textData[4];
  const skills = textData
    .slice(
      textData.indexOf("Skills") + 1,
      textData.indexOf("Professional Experience")
    )
    .map((skill) => ({
      name: skill,
      id: snake_case_string(skill),
    }));

  const jobs = textData
    .slice(
      textData.indexOf("Professional Experience") + 1,
      textData.indexOf("Education")
    )
    .join("|||")
    .split(divider());

  let respJobs = [];

  jobs.forEach((element) => {
    const job = element.split("|||").filter((str) => !!str.trim());

    if (job.length) {
      respJobs.push({
        title: job[0],
        company: job[1]?.split(" - ")[0]?.trim(),
        location: job[1]?.split(" - ")[1]?.trim(),
        start: job[2]?.split(" - ")[0]?.trim(),
        end: job[2]?.split(" - ")[1]?.trim(),
        description: job.slice(3, job.length).join(" "),
      });
    }
  });

  const education = textData
    .slice(textData.indexOf("Education") + 1, textData.length)
    .join("|||")
    .split(divider());

  let respEdu = [];
  education.forEach((element) => {
    const edu = element.split("|||").filter((str) => !!str.trim());
    if (("school line", edu.length == 2)) {
      respEdu.push({
        degree: edu[0],
        school: edu[1]?.split(" - ")[0]?.trim(),
        gradYear: edu[1]?.split(" - ")[1]?.trim(),
      });
    }
  });

  return {
    personal: {
      firstName: names[0]?.trim() || "",
      lastName: names[1]?.trim() || "",
      email: contacts[0]?.split("Email: ")?.join("")?.trim() || "",
      phone: contacts[1]?.split("Phone: ")?.join("")?.trim() || "",
      city:
        contacts[2]?.split("Location: ")?.join("")?.split(", ")[0]?.trim() ||
        "",
      state:
        contacts[2]?.split("Location: ")?.join("")?.split(", ")[1]?.trim() ||
        "",
      linkedIn: sites[0]?.split("LinkedIn: ")?.join("")?.trim() || "",
      gitHub: sites[1]?.split("GitHub: ")?.join("")?.trim() || "",
      summary: summary?.trim() || "",
    },
    skills: skills,
    jobs: respJobs,
    education: respEdu,
  };
};

// ToDo: find a better upload solution
const upload = multer({ dest: "uploads/" });
app.post("/parser", upload.single("file"), async (req, res) => {
  const pdfParser = new PDFParser(this, 1);

  pdfParser.loadPDF(req.file.path);

  pdfParser.on("pdfParser_dataError", (errData) => {
    return res.status(500).send({ error: errData.parserError });
  });

  pdfParser.on("pdfParser_dataReady", (pdfData) => {
    const rawText = pdfParser.getRawTextContent();
    const textData = parseTextData(rawText);
    return res.status(200).send(textData);
  });
});

ViteExpress.listen(app, 3000, () =>
  console.log("Serving on: http://localhost:3000/")
);
