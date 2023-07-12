const fs = require("fs");
const glob = require("glob");
const path = require("path");
const yaml = require("js-yaml");
const sourceFiles = "./src/site/funktionen/";

module.exports = async function getFAQ() {
  // Get a list of all Markdown files in the current directory

  const markdownFiles = glob.sync("./src/site/funktionen/**/*.md");
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
