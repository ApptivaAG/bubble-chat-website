const fs = require("fs");
const glob = require("glob");
const path = require("path");
const yaml = require("js-yaml");
const sourceFiles = "./src/site/funktionen/";

module.exports = async function getFAQ() {
  // Get a list of all Markdown files in the current directory

  const markdownFiles = glob.sync("./src/site/funktionen/**/*.md");
  const pattern =
    /faq:\s*\n((\s*-\s*question:\s*(.*)\n\s*answer:\s*(.*)\n)+)/gms;
  let test = "";
  const faq = [];
  const questionAnswers = [];

  markdownFiles.forEach((file) => {
    if (file) {
      const content = fs.readFileSync(file, "utf8");
      // const doc = yaml.load(fs.readFileSync(file, "utf8"));
      // console.log(doc);
      const matches = [...content.matchAll(pattern)];
      // Extract and print the FAQ questions and answers
      matches.forEach((match) => {
        const url = path.dirname(file).split(path.sep).pop();
        const faqSection = match[1];
        const questions = [...faqSection.matchAll(/-\s*question:\s*(.*)\n/g)];
        const answers = [...faqSection.matchAll(/\s*answer:\s*(.*)\n/g)];
        const titleMatch = faqSection.match(/\s*title:\s*(.*?)\n/g);
        const title = titleMatch ? titleMatch[1] : null;
        console.log("title:", titleMatch);
        for (let i = 0; i < questions.length; i++) {
          const questionAnswer = {
            question: questions[i][1],
            answer: answers[i][1],
          };
          questionAnswers.push(questionAnswer);
        }
        const productFAQ = {
          product: title,
          questionAnswers,
        };

        faq.push(productFAQ);
        console.log(faq);
      });
    }
  });

  let html = `<div class="faq-page">
                <div class="container">
                  <h1>FAQ</h1>
                    <div class="faq-container">
                      `;
  if (faq.length) {
    faq.forEach((f) => {
      html += `<div class="faq-component"><a href="../${f.product}"><h3>${f.product}</h3></a><ul><li>${f.question}</li></ul></div>`;
    });
  }
  html += "</div></div></div></div>";

  //   fs.readdirSync(sourceFiles).forEach((file) => {
  //     if (file) {
  //       test = file;
  //       console.log(file);
  //       const content = fs.readFileSync(file, "utf8");
  //       const matches = [...content.matchAll(pattern)];

  //       // Extract and print the FAQ questions and answers
  //       matches.forEach((match) => {
  //         const faqSection = match[1];
  //         const questionAnswers = [
  //           ...faqSection.matchAll(/-\s*question:\s*(.*)\n\s*answer:\s*(.*)\n/g),
  //         ];
  //         faq.push(questionAnswers);
  //       });
  //     }
  //   });
  return `

  ${html}

  `;
};
