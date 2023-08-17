const fs = require("fs");
const glob = require("glob");
const yaml = require("js-yaml");
const path = require("path");

module.exports = async function getFAQ() {
  const markdownFiles = glob.sync("./src/site/funktionen/**/*.md");
  const faq = [];

  markdownFiles.forEach((file) => {
    const extractedPath = path.dirname(file).replace("/src/site", "");
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
            url: extractedPath,
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

  let html = `<div class="faq-page">
      <div class="container">
      <h3>Fragen zu den Funktionen</h3>
      <div class="faq-container">`;
  let faqScript = `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [`;
  if (faq.length) {
    faq.forEach((f) => {
      html += `<div class="faq-component"><a href=".${f.url}"><h4>${f.product}</h4></a>`;
      if (f.questionsAnswers.length) {
        f.questionsAnswers.forEach((qa) => {
          html += `<div class="faq-content">
                    <div class="faq-articles">
                        <article class="faq-accordion">
                          <input type="checkbox" class="tgg-title" id="${qa.question}">
                          <div class="faq-accordion-title">
                              <label for="${qa.question}">
                                <h4>${qa.question}</h4>   
                                <span class="arrow-icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="rgb(114, 46, 209)" viewBox="0 0 256 256">
                                  <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                                  </svg>
                                </span>
                              </label>
                          </div>
                          <div class="faq-accordion-content">
                              <p>${qa.answer}</p>
                          </div>
                        </article>
                      </div>
                    </div>`;
          faqScript += `{
              "@type": "Question",
              "name": "${qa.question}",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "${qa.answer}"
              }
            },`;
        });
        html += `</div>`;
      }
    });
    html += `</div></div></div>`;
    faqScript = faqScript.slice(0, -1);
    faqScript += `]
                  }
                  </script>
`;
  }
  return `
  ${html}
  ${faqScript}
  `;
};
