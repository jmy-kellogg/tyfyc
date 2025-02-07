# Tyfyc

Tyfyc stands for “thank you for your consideration” this is to assist in customizing a person resume. This tool will allow you to upload your resume and auto update it according to a given job post.


## Features
- [X] Manually add/change resume
- [X] Formats resume to downloadable PDF
- [X] Saves locally in cookies
- [X] Autofill resume from an existing resume
- [ ] Updates resume according to job posting

## Installation
```
npm install
```

### Run for development
```
npm run dev
```
The app will run locally http://localhost:3000/

### Compiles and minifies for production
```
npm run build
```

## Project Structure
```
tyfyc/
│── public/                 # Static assets
│── src/
│   ├── client/             # Client - frontend
│       ├── components/     # Vue components
│       ├── store/          # Vuex store
│       ├── types/          # TypeScript interfaces
│       ├── App.vue         # Root component
│       ├── main.ts         # Entry file
│   ├── server/             # Server - backend
│── index.html              # Html
│── package.json            # Dependencies and scripts
│── vite.config.js          # Vite configuration
│── README.md               # Project documentation
```

## Technologies Used
- Vue.js 3
- Vite
- TypeScript
- HTML & CSS
- License

## This project is licensed under the MIT License.