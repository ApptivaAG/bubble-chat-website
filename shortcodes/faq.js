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
  const faq = [];
  markdownFiles.forEach((file) => {
    const questionsAnswers = [];
    if (file) {
      const content = fs.readFileSync(file, "utf8");
      const yamlMatch = content.match(/^---\n([\s\S]+?)\n---/);
      if (yamlMatch) {
        const yamlFrontMatter = yamlMatch[1];
        const doc = yaml.load(yamlFrontMatter);
        if (doc.faq) {
          doc.faq.forEach((f) => {
            const questionAnswer = {
              question: f.question,
              answer: f.answer,
            };
            questionsAnswers.push(questionAnswer);
          });
          const productFAQ = {
            product: doc.title,
            questionsAnswers: questionsAnswers,
          };
          faq.push(productFAQ);
        }
      } else {
        console.log("YAML front matter not found in the file.");
      }

      const matches = [...content.matchAll(pattern)];
      // Extract and print the FAQ questions and answers
      // matches.forEach((match) => {
      //   const url = path.dirname(file).split(path.sep).pop();
      //   const faqSection = match[1];
      //   const questions = [...faqSection.matchAll(/-\s*question:\s*(.*)\n/g)];
      //   const answers = [...faqSection.matchAll(/\s*answer:\s*(.*)\n/g)];
      //   const titleMatch = faqSection.match(/\s*title:\s*(.*?)\n/g);
      //   const title = titleMatch ? titleMatch[1] : null;
      //   // console.log("title:", titleMatch);
      //   for (let i = 0; i < questions.length; i++) {
      //     const questionAnswer = {
      //       question: questions[i][1],
      //       answer: answers[i][1],
      //     };
      //     questionAnswers.push(questionAnswer);
      //   }
      // const productFAQ = {
      //   product: title,
      //   questionAnswers,
      // };

      // faq.push(productFAQ);
      // // console.log(faq);
      // });
    }
  });

  let html = `<div class="faq-container">
                      `;
  if (faq.length) {
    faq.forEach((f) => {
      html += `<div class="faq-component"><h3>${f.product}</h3><ul>`;
      if (f.questionsAnswers.length) {
        console.log("f", f);
        f.questionsAnswers.forEach((qa) => {
          html += `<li>${qa.question}</li>`;
        });
      }
      html += `</ul></div>`;
    });
  }
  html += "</div></div>";

  return `
  ${html}
  `;
};
