const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

console.log("it works");


const cardEl = document.querySelector("#members, .card");
console.log(cardEl);

let colsStrings = ''



// LOOP

for (let i = 0; i < teamMembers.length; i++) {
  const thisMember = teamMembers[i];
  console.log(thisMember);

  const {name, role, email, img} = thisMember;
  console.log(name, role, email, img);

  const markupString = `
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./assets/img/${img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${role}</p>
        <p class="card-text"><small class="text-body-secondary">${email}</small></p>
      </div>
    </div>
  </div>
</div>`


colsStrings += markupString;

}




console.log(colsStrings);


