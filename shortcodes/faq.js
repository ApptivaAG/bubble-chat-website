const fs = require("fs");
const glob = require("glob");
const yaml = require("js-yaml");

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

  let html = `<div class="faq-page">
      <div class="container">
      <h1>FAQ</h1>
      <div class="faq-container">`;
  let faqScript = `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [`;
  if (faq.length) {
    faq.forEach((f) => {
      html += `<div class="faq-component"><h3>${f.product}</h3>`;
      console.log("Was ist jetzt?", f.questionsAnswers.length);
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
            },
          `;
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
