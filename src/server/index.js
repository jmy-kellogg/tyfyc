import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import multer from "multer";
import PDFParser from "pdf2json";

const app = express();
app.use(cors());

// Set up PDF parser
const pdfParser = new PDFParser(this, 1);
pdfParser.on("pdfParser_dataError", (errData) =>
  console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", (pdfData) => {
  const parsedText = pdfParser.getRawTextContent();
  const textData = parsedText.split("\r\n");
  console.log({ pdfData, textData, parsedText });
});

// ToDo: find a better upload solution
const upload = multer({ dest: "uploads/" });
app.post("/parser", upload.single("file"), (request, response) => {
  pdfParser.loadPDF(request.file.path);

  return response.send("Parser Endpoint");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Serving on: http://localhost:3000/")
);
