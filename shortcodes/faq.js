const fs = require("fs");
const glob = require("glob");
const yaml = require("js-yaml");
const path = require("path");

async function getFAQCode(title, className, subtitlesEnabled, markdownFiles) {
  const faq = [];
  if (markdownFiles) {
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
  }

  let html = `
      <h3>${title}</h3>
      <div class="faq-container ${className}">`;
  let faqScript = "";
  if (faq.length) {
    faq.forEach((f) => {
      subtitles = subtitlesEnabled
        ? `<a href=".${f.url}"><h4>${f.product}</h4></a>`
        : "";
      html += `<div class="faq-component">${subtitles}`;
      if (f.questionsAnswers.length) {
        f.questionsAnswers.forEach((qa) => {
          html += `<div class="faq-content">
                    <div class="faq-articles">
                        <article class="accordion">
                          <input type="checkbox" class="tgg-title" id="${qa.question}">
                          <div class="accordion-title">
                              <label for="${qa.question}">
                                <h4>${qa.question}</h4>   
                                <span class="arrow-icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(114, 46, 209)" viewBox="0 0 256 256">
                                  <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                                  </svg>
                                </span>
                              </label>
                          </div>
                          <div class="accordion-content">
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
                "text": "${qa.answer.replace(/<[^>]*>/g, "")}"
              }
            },`;
        });
        html += `</div>`;
      }
    });
    html += `</div>`;
  }

  return { html, faqScript };
}

module.exports = async function getFAQ() {
  const markdownFiles = glob.sync("./src/site/funktionen/**/*.md");
  const defaultFAQ = glob.sync("./src/site/faq/*.md");
  htmlCommon = await getFAQCode(
    "Allgemeine Fragen",
    "faq-common",
    false,
    defaultFAQ
  );
  htmlFunctions = await getFAQCode(
    "Fragen zu den Funktionen",
    "faq-functions",
    true,
    markdownFiles
  );
  let faqScript = "";
  if (htmlCommon.faqScript) {
    faqScript = `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [`;
    faqScript += htmlCommon.faqScript;
    faqScript += htmlFunctions.faqScript;
    faqScript = faqScript.slice(0, -1);
    faqScript += `]
                  }
                  </script>
    `;
  }
  html = htmlCommon.html + htmlFunctions.html;
  return html + faqScript;
};
