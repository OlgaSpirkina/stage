let companiesList = [
  {
    id: 1,
    name: 'Galadrim',
    post:'Développeur Full-Stack',
    technologies:['MySQL', 'Node.js', 'NestJS', 'JavaScript', 'TypeScript', 'React', 'React Native'],
    applicationDate: '2021-07-07',
    website: 'https://www.welcometothejungle.com/en/companies/galadrim/jobs/stage-developpeur-full-stack_paris',
    img: 'assets/img/galadrim.png'
  },
  {
    id: 2,
    name: 'Scaleway',
    post: 'Front-End Developer, Console (JavaScript, React)',
    technologies:['REST API', 'JavaScript ES2018', 'CSS-in-JS',
    'TESTS: units and functional', 'UI navigation with and without pointers',
    'Scaleway, Docker, Ansible', 'Jest, Testing-Library, Enzyme',
    'Gitlab, Sentry',
    'Docz, Storybook',
    'Git, Yarn, Renovate'
    ],
    applicationDate: '2021-06-30',
    website: 'https://app.50intech.com/job/scaleway-front-end-developer-console-java-script-react-internship-alternance-paris',
    img: 'assets/img/scaleway.png'
  },
  {
    id: 3,
    name: 'Groupe Micropole',
    post: 'Developpeur web/mobile ',
    technologies:['React', 'Node.js', 'Angular',
    'HTML / CSS', 'Google Dialogflow',
    'Amazon Lex', 'IBM Watson'
    ],
    applicationDate: '2021-06-30',
    website: 'https://www.micropole.com/fr-fr/offres-d-emploi/mic-stginnov-01-developpeur-web-mobile-h-f-en-stage',
    img: 'assets/img/micropole.png'
  },
  {
    id:4,
    name: 'SAP',
    post: "Développeur JavaScript Application Web pour Intelligent RPA",
    technologies: ['Cloud Studio', 'Robotic Process Automation (RPA)', 'testes unitaires JavaScript',
    'GIT/GITHUB', 'gestion du DOM',
    'Design Patterns type FLUX, REACT'
    ],
    applicationDate: '2021-07-05',
    website:  'https://jobs.sap.com/',
    img: 'assets/img/sap.png'
  },
  {
    id: 5,
    name: 'Numberly',
    post: 'Front-end Engineer (VueJS)',
    technologies: ['Javascript', 'Vue.js 2', 'Vue.js 3(Typescript)',
    'HTML5', 'CSS3/SASS',
    'GIT (GitLab)', 'Docker',
    'Kubernetes', 'Cypress'
    ],
    applicationDate: '2021-07-05',
    website:  'https://jobs.smartrecruiters.com/Numberly/743999756879073-stage-alternance-front-end-engineer-vuejs-',
    img: 'assets/img/numberly.png'
  },
  {
    id: 6,
    name: 'Dataiku',
    post: 'File metadata extraction',
    technologies: ['generate datasets from folders of files', 'basic knowledge of Web development',
    'Java', 'JavaScript',
    'Python', 'Ruby'
    ],
    applicationDate: '2021-07-06',
    website: 'https://www.welcometothejungle.com/fr/companies/dataiku/jobs/software-engineer-intern-folder-to-dataset-recipe-in-dss_paris',
    img: 'assets/img/dataiku.png'
  },
  {
    id: 7,
    name: 'Criteo',
    post: 'Backend or Fullstack',
    technologies: ['TypeScript/JavaScript', 'C# (.Net Frmwk, .Net Core)',
    'Mesos', 'Frontend: JSON',
    'POO', 'Data quality in the RichTimeline'
    ],
    applicationDate: '2021-07-06',
    website: 'https://app.50intech.com/job/criteo-software-engineer-internship-6-months-backend-or-fullstack-paris-france',
    img: 'assets/img/criteo.png'
  },
  {
    id: 8,
    name: 'Axa',
    post: 'Développeur IT',
    technologies:   ['Frameworks Python', 'SQL',
    'SPARK', 'Adapter les requêtes/batchs SQL existants au nouvel environnement cloud',
    'Assurer la qualité de la migration via des tests de non-régression'
    ],
    applicationDate: '2021-07-07',
    website: 'https://recrutement.axa.fr/nos-offres-emploi/210006DQ-stage-developpeur-it-f-h',
    img: 'assets/img/axa.png'
  },
  {
    id: 9,
    name: 'Sparted',
    post: 'Developer Fullstack Web/Mobile',
    technologies: ['PostgreSQL', 'React',
    'React Native', 'Redux',
    'Déploiement sur AWS', 'Node.js', 'JavaScript',
    'ES2020', 'Docker', 'ElasticSearch',
    'Ansible', 'Terraform', 'design UI/UX'
    ],
    applicationDate: '2021-07-07',
    website: 'https://sparted.welcomekit.co/jobs/developer-fullstack-web-mobile-cdi_paris_SPART_mzwMoQ7',
    img: 'assets/img/sparted.png'
  },
  {
    id: 10,
    name: 'LumApps',
    post: 'Fullstack Engineer Integration',
    technologies:['React Redux', 'JavaScript', 'Expérience HTML, CSS, SASS', 'Tests', 'Python',
    'Hébergement Google App Engine Azure'],
    applicationDate: '2021-07-07',
    website: 'https://www.lumapps.com/company/job-offers/?gh_jid=5242816002',
    img: 'assets/img/lumapps.png'
  },
  {
    id: 11,
    name: 'Coucou',
    post: 'Fullstack',
    technologies: 'JS',
    applicationDate: '2021-07-11',
    website: 'https://www.coucou.fr',
    img: 'assets/img/galadrim.png'
  }
];
// la bar de recherche
const input = document.getElementById("searchBar");
input.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredCompanies = companiesList.filter(eachCompany => {
    return (
      eachCompany.name.toLowerCase().includes(searchString) || eachCompany.post.toLowerCase().includes(searchString)
    );
  });
  displayCharacters(filteredCompanies);

});
const displayCharacters = (anyArray) => {
  const today = new Date();
  const htmlString = anyArray.map((arrayElement) => {
      var application = new Date(arrayElement.applicationDate);
      var differenceInTime = today.getTime() - application.getTime();
      var differenceInDays = parseInt(differenceInTime / (1000 * 3600 * 24));
      differenceInDays = (
        differenceInDays == 0 ? 'postulé aujourd\'hui' : differenceInDays == 1 ? 'postulé il y a ' + differenceInDays + ' jour' : 'postulé il y a ' + differenceInDays + ' jours'
      );

    return `
    <div id="item_${arrayElement.name}" class="card m-2" style="width: 18rem;">
     <img src="${arrayElement.img}" class="card-img-top" alt="logo de la sociéte ${arrayElement.name}">
      <div class="card-body">
        <h5 class="card-title mb-5">${arrayElement.post}</h5>
        <p class="card-text m-3">`+ differenceInDays + `</p>
        <button class="btn btn-primary" onclick="displayPopup('${arrayElement.name}', '${arrayElement.post}', '${arrayElement.id}', '${arrayElement.website}')">Consulter</button>
      </div>
    </div>
    `;
  })
  .join('');
  document.getElementById("displayCards").innerHTML = htmlString;
}
displayCharacters(companiesList);


function displayPopup(name, post, id, web){
      companiesList.forEach((item) => {
        if(item.name == name){
          let answer =
          `
          <div id="popup" class="popup">
            <div id="popup-heading">
              <i class="far fa-2x fa-window-close m-2" onclick="closeIt()"></i>
              <p class="m-2"><small>Savoir plus sur le post</small></p>
            </div>
            <div id="popup-title">
              <h1>${name}</h1>
              <h2>${post}</h2>
            </div>
            <div id="popup-body">
              <ul id="displayTechnos">
              </ul>
            </div>
            <div id="popup-footer">
              <a href="${web}" target="_blank" class="btn m-2">Consulter l'offre</a>
            </div>
          </div>
          `;
          document.getElementById('displayPopup').innerHTML += answer;
          displayList(`${id}`);
        }
      });
}
function closeIt(){
  document.getElementById('displayPopup').innerHTML = "";
}
let displayList = (ids) =>{
  companiesList[ids].technologies.forEach((item) => {
    document.getElementById('displayTechnos').innerHTML += `<li class="mx-auto">${item}</li>`;
})
}
