const team = require("../src/site/_data/team.json");
const imageShortcode = require("./image");

module.exports = async function contactPerson(name, cta = "xxx") {
  const person = team.items.find((i) => i.name === name);
  if (person) {
    return `
    <div class="contact-person">
        <div>
            ${await imageShortcode(
              person.picture,
              `${person.name}`,
              { class: "avatar" },
              "./"
            )}
        </div>
        <div>
            <h2 class="cta">
                ${cta.replace("$name", person.firstname)}
            </h2>
            <div class="contact">
                <a href="mailto:${person.mail}">${person.mail}</a>
                <a href="tel:+41413222626">041 322 26 26</a>
            </div>
        </div>
    </div>`;
  } else {
    return "";
  }
};
