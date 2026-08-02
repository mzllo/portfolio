const characters = { //backticks are template literals, allow to write multiline HTML in js
  programmer: {
    speech: "I'm the engineering side of Chloe. I'm interested in designing systems, writing maintainable code, and continuously improving my technical skills.",
    sprite: "artnanims/swe-char.gif",
    icon: "artnanims/swe-icon.png",
    name: "SOFTWARE ENGINEER",
    level: "LEVEL: 2ND YEAR UNIVERSITY STUDENT",
    skills: `
     <h3>SKILLS</h3>
      <p>Java <span>▰▰▰▰▰▱▱▱</span></p>
                  <p>C <span>▰▰▰▰▱▱▱▱</span></p>
                  <p>Python <span>▰▰▰▱▱▱▱▱</span></p>
                  <p>Javascript <span>▰▰▰▰▱▱▱▱</span></p>
                  <p>HTML/CSS <span>▰▰▰▰▰▱▱▱</span></p>
    `,
    specialty: `
      <h3>SPECIALTY</h3>
      <p>Problem solving • Object-Oriented Programming • Software Design</p>
    `,
    quest: `
      <h3>ACTIVE QUEST</h3>
      <p>Building a game-inspired portfolio, learning DSA, and seeking a Fall 2026 COOP internship.</p>
    `
  },

  gamedev: {
    speech: "I’m the game development side of Chloe. I'm passionate about creating interactive experiences, experimenting with mechanics, and bringing stories to life.",
    sprite: "artnanims/gamedev-char.gif",
    icon: "artnanims/gamedev-icon.png",
    name: "GAME DEVELOPER",
    level: "LEVEL: PERSONAL PROJECTS / GAME JAMS",
    skills: `
      <h3>SKILLS</h3>
      <p>GameMaker Studio <span>▰▰▰▰▰▱▱▱</span></p>
                  <p>Unity <span>▰▰▰▰▱▱▱▱</span></p>
                  <p>Unreal <span>▰▰▱▱▱▱▱▱</span></p>
                  <p>Aesprite <span>▰▰▰▰▱▱▱▱</span></p>
                 
    `,
    specialty: `
      <h3>SPECIALTY</h3>
      <p>Gameplay Programming • Pixel Art • Level Design</p>
    `,
    quest: `
      <h3>ACTIVE QUEST</h3>
      <p>Building a pixel platformer, learning Unreal Engine, and seeking a Fall 2026 COOP internship.</p>
    `
  }
};

function selectCharacter(type) {
  const c = characters[type]; //returns the field of argument 

  document.getElementById("speechText").innerText = c.speech;
  document.getElementById("characterSprite").src = c.sprite;
  document.getElementById("smallIcon").src = c.icon;
  document.getElementById("characterName").innerText = c.name;
  document.getElementById("characterLevel").innerText = c.level;

  document.getElementById("skillsBlock").innerHTML = c.skills;
  document.getElementById("specialtyBlock").innerHTML = c.specialty;
  document.getElementById("questBlock").innerHTML = c.quest;
}

const projects = [
    {
        name: "PORTFOLIO WEBSITE",
        link: "portfolio.html"
    },
    {
        name: "PIXEL PLATFORMER",
        link: "platformer.html"
    },
    {
        name: "???",
        link: ""
    }
];

const leftSlot = document.getElementById("leftSlot");
const centerSlot = document.getElementById("centerSlot");
const rightSlot = document.getElementById("rightSlot");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const selectBtn = document.getElementById("selectBtn");
const projectName = document.getElementById("projectName");

let currentProject = 0;

function updateProjectInfo() {
    projectName.innerText = projects[currentProject].name;
}

nextBtn.addEventListener("click", () => {
    if (leftSlot.classList.contains("current")) {
        leftSlot.classList.remove("current");
        centerSlot.classList.add("current");

        currentProject = 1;
    }
    else if (centerSlot.classList.contains("current")) {
        centerSlot.classList.remove("current");
        rightSlot.classList.add("current");

        currentProject = 2;
    }

    updateProjectInfo();
});

prevBtn.addEventListener("click", () => {
    if (centerSlot.classList.contains("current")) {
        centerSlot.classList.remove("current");
        leftSlot.classList.add("current");

        currentProject = 0;
    }
    else if (rightSlot.classList.contains("current")) {
        rightSlot.classList.remove("current");
        centerSlot.classList.add("current");

        currentProject = 1;
    }

    updateProjectInfo();
});

selectBtn.addEventListener("click", () => {
    const link = projects[currentProject].link;

    if (link !== "") {
        window.location.href = link;
    }
    else{
        alert("Level in progress... Will become available soon.");
    }
});

updateProjectInfo();