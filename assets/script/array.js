// un tableau d'objets
let companiesList = [
  {
    id: 0,
    name: 'Galadrim',
    post:'Développeur Full-Stack',
    technologies:['MySQL', 'Node.js', 'NestJS', 'JavaScript', 'TypeScript', 'React', 'React Native'],
    applicationDate: '2021-07-07',
    website: 'https://www.welcometothejungle.com/en/companies/galadrim/jobs/stage-developpeur-full-stack_paris',
    img: 'assets/img/galadrim.png'
  },
  {
    id: 1,
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
    id: 2,
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
    id:3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
    name: 'LumApps',
    post: 'Fullstack Engineer Integration',
    technologies:['React Redux', 'JavaScript', 'Expérience HTML, CSS, SASS', 'Tests', 'Python',
    'Hébergement Google App Engine Azure'],
    applicationDate: '2021-07-07',
    website: 'https://www.lumapps.com/company/job-offers/?gh_jid=5242816002',
    img: 'assets/img/lumapps.png'
  },
  {
    id: 10,
    name: 'Goalmap',
    post: 'Développeuse web',
    technologies: ['Non précisées'],
    applicationDate: '2021-07-08',
    website: 'https://goalmap.com/fr',
    img: 'assets/img/goalmap.png'
  },
  {
    id: 11,
    name: 'Domissori',
    post: 'Développement Web',
    technologies: ['Non précisées'],
    applicationDate: '2021-07-15',
    website: 'https://recrutement.domissori.fr/ad/administrateur-reseau-informatique-ile-de-france/',
    img: 'assets/img/domissori.png'
  },
  {
    id: 12,
    name: 'Withings',
    post: 'API Fullstack Developer PHP / React',
    technologies: ['Methode Agile', 'JavaScript', 'React', 'Git', 'HTML/SASS', 'Linux'],
    applicationDate: '2021-07-19',
    website: 'https://www.welcometothejungle.com/en/companies/withings/jobs/stage-api-fullstack-developer-php-react-h-f_issy-les-moulineaux?sp_ref=45abb1ca-0952-4f78-8f77-17b267fb2d14&sp_src=job_alert_email&utm_medium=email&utm_source=job_alerts',
    img: 'assets/img/withings.png'
  },
  {
    id: 13,
    name: 'Iroko',
    post: 'Full-stack Developer',
    technologies: ['Methode Agile', 'Vue.js (Framework Nuxt)', 'Node.js (Framework Nest.js)',
    'CI/CD : GitLab CI + AWS CloudFormation + NX', 'PostgreSQL', 'Hébergement : AWS Serverless'],
    applicationDate: '2021-07-19',
    website: 'https://www.welcometothejungle.com/en/companies/iroko/jobs/full-stack-developer-stage_paris',
    img: 'assets/img/iroko.png'
  },
  {
    id: 14,
    name: 'Topitech',
    post: 'Stagiaire Développeur web',
    technologies: ['HTML / CSS', 'Framework CSS', 'Next.js, ReactJS, Vue',
    'Apache', 'Shell', 'Linux'],
    applicationDate: '2021-07-19',
    website: 'https://www.linkedin.com/jobs/view/2576495755/?refId=%3D%C3%B9%C3%80%C3%89%01%C3%9Dd%5B%C3%AE%C3%B87%19%25j%25T&trackingId=va5jGv6ATzRM8WbPdGHgPA%3D%3D',
    img: 'assets/img/topitech.png'
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
  // j'appelle la fonction qui génére les cartes avec la fonction qui filtre comme argument
  displayCharacters(filteredCompanies);

});
// la fonction qui parcours un tableau et permet d'afficher les elements du tableau dans le html en forme d'une carte bootstrap
const displayCharacters = (anyArray) => {
  const today = new Date();
  const htmlString = anyArray.map((arrayElement) => {
    // début de la fonction qui calcule les jours passés du moment de l'application
      var application = new Date(arrayElement.applicationDate);
      var differenceInTime = today.getTime() - application.getTime();
      var differenceInDays = parseInt(differenceInTime / (1000 * 3600 * 24));
      differenceInDays = (
        differenceInDays == 0 ? 'postulé aujourd\'hui' : differenceInDays == 1 ? 'postulé il y a ' + differenceInDays + ' jour' : 'postulé il y a ' + differenceInDays + ' jours'
      );
// la fin de la fonction calculant les jours passés et récupération de la variable differenceInDays

// la carte qui sera afficher pour chaque element du tableau
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
// j'appelle la fonction qui va trier / searchBar
displayCharacters(companiesList);

// afficher l'onglet avec plus de détaille consernant chaque offre. L'onglet est composé des divs stylisées
// elle est appeller au moment de génération des cartes (à la ligne 167)
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
          // j'appelle la fonction qui affiche toutes les technologies utilisées en tant que la list non-ordonnée
          displayList(`${id}`);
        }
      });
}

// fermer l'onglet explicatif est appeller à la ligne 186
function closeIt(){
  document.getElementById('displayPopup').innerHTML = "";
}

// pour afficher la liste des technologies utilisées je parcours le tableau de la clé companiesList.technologies
let displayList = (index) =>{
  companiesList.forEach((item) => {
    if(index == item.id){
      console.log(item.technologies);
      item.technologies.forEach((elems) => {
          document.getElementById('displayTechnos').innerHTML += `<li class="mx-auto">${elems}</li>`;
      });
    }
  });
}
