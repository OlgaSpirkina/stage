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
    name: 'Groupe-Micropole',
    post: 'Developpeur web/mobile ',
    technologies:['React', 'Node.js', 'Angular', 'HTML / CSS', 'Google Dialogflow', 'Amazon Lex', 'IBM Watson'],
    applicationDate: '2021-06-30',
    website: 'https://www.micropole.com/fr-fr/offres-d-emploi/mic-stginnov-01-developpeur-web-mobile-h-f-en-stage',
    img: 'assets/img/micropole.png'
  },
  {
    id:3,
    name: 'Sap',
    post: "Développeur JavaScript Application Web pour Intelligent RPA",
    technologies: ['Cloud Studio', 'Robotic Process Automation (RPA)', 'tests unitaires JavaScript',
    'GIT GITHUB', 'gestion du DOM',
    'Design Patterns type FLUX', 'REACT'
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
    post: 'Développeur web',
    technologies: ['HTML / CSS', 'Framework CSS', 'Next.js, ReactJS, Vue',
    'Apache', 'Shell', 'Linux'],
    applicationDate: '2021-07-19',
    website: 'https://www.linkedin.com/jobs/view/2576495755/?refId=%3D%C3%B9%C3%80%C3%89%01%C3%9Dd%5B%C3%AE%C3%B87%19%25j%25T&trackingId=va5jGv6ATzRM8WbPdGHgPA%3D%3D',
    img: 'assets/img/topitech.png'
  },
  {
    id: 15,
    name: 'Suez',
    post: 'Développeur web',
    technologies: ['HTML / CSS', 'NodeJS, ExpressJS', 'Angular 7++',
    'MongoDB'],
    applicationDate: '2021-07-20',
    website: 'https://hris-suez.csod.com/ux/ats/careersite/10/home/requisition/27357?c=hris-suez',
    img: 'assets/img/suez.png'
  },
  {
    id: 16,
    name: 'Neovee',
    post: 'Développeur Full-stack',
    technologies: ['PHP', 'ANGULAR', 'HTML (CSS)', 'JAVASCRIPT', 'Symfony', 'Wordpress', 'Git'],
    applicationDate: '2021-07-20',
    website: 'https://www.glassdoor.fr/job-listing/d%C3%A9veloppeur-full-stack-hf-stage-ou-contrat-d-apprentissage-neovee-energie-JV_IC2881970_KO0,58_KE59,73.htm?jl=4116151824&pos=104&ao=1136006&s=58&guid=0000017ac3ecc41eb35783a7b4a44b2b&src=GD_JOB_AD&t=SR&vt=w&uido=F27B4AD139D93FD8D71226FB9A14C149&ea=1&cs=1_bb22a6df&cb=1626784711839&jobListingId=4116151824&ctt=1626784736481',
    img: 'assets/img/neovee.png'
  },
  {
    id: 17,
    name: 'Fygr',
    post: 'Développeur Full-Stack',
    technologies: ['Python (Flask Framework)', 'Javascript (Vue.js Framework)', ' SQL (PostgreSQL)', 'CI/CD: Jenkins', 'AWS (ECS, EC2, Lambda, Cloud Formation)'],
    applicationDate: '2021-07-20',
    website: 'https://jobs.stationf.co/companies/fygr-sas/jobs/stage-developpeur-full-stack_paris_FS_GAPd7pJ',
    img: 'assets/img/fygr.png'
  },
  {
    id: 18,
    name: 'Qantev',
    post: 'Frontend Developer ',
    technologies: ['HTML', 'CSS', 'JavaScript (ES6)', 'React JS'],
    applicationDate: '2021-07-20',
    website: 'https://jobs.stationf.co/companies/qantev/jobs/frontend-developer-intern_paris',
    img: 'assets/img/quantev.png'
  },
  {
    id: 19,
    name: 'Graneet',
    post: 'Frontend Developer',
    technologies: ['Node.js', 'principe LEAN', 'CSS', 'React JS(NestJS / TypeORM)', 'Rollup + Webpack', 'PostgreSQL'],
    applicationDate: '2021-07-21',
    website: 'https://jobs.stationf.co/companies/graneet/jobs/developpeur-se-full-stack-js-stage_paris',
    img: 'assets/img/graneet.png'
  },
  {
    id: 20,
    name: 'SAP',
    post: 'Développeur(euse) Web',
    technologies: ['Python & Django', 'JavaScript TypeScript (Angular  Backbone)',
'bases de données MySQL', 'Docker, Kubernetes'],
    applicationDate: '2021-07-21',
    website: "https://jobs.sap.com/job/Paris-Stagiaire-D%C3%A9veloppeur%28euse%29-FH-75009/676334201/",
    img: 'assets/img/sap.png'
  },
  {
    id: 21,
    name: 'Voysen',
    post: 'Fullstack Developer / Web',
    technologies: [' JavaScript', 'Vue.js', 'Python', 'Django', 'PostgreSQL',
'Devops: AWS, Heroku'],
    applicationDate: '2021-07-21',
    website: 'https://jobs.stationf.co/companies/voysen/jobs/stage-6-mois-developpeur-fullstack-django-python_paris',
    img: 'assets/img/voysen.png'
  },
  {
    id: 22,
    name: 'Sikiwis Digitalizr',
    post: 'développeur web',
    technologies: ['asp.net', 'maria db', 'mysql', 'javascript', 'css'],
    applicationDate: '2021-07-29',
    website: 'https://www.aidostage.com/stage/offre-developpeur-web-93648.html',
    img: 'assets/img/digitalizr.png'
  },
  {
    id: 23,
    name: 'Digitalyze',
    post: 'developpeur.se web FullStack teletravail',
    technologies: ['Node.Js', 'React', 'Familier des notions d\'API', 'Architecture Cloud de type AWS'],
    applicationDate: '2021-07-29',
    website: 'https://studl.com/user/offer/detail/stage-developpeur-se-web-fullstack-teletravail-98189',
    img: 'assets/img/digitalyze.png'
  },
  {
    id: 24,
    name: 'Tediber',
    post: 'développeur(se) frontend',
    technologies: ['HTML', 'CSS/SASS', 'PHP', 'javascript'],
    applicationDate: '2021-07-29',
    website: 'https://www.welcometothejungle.com/en/companies/tediber/jobs/stage-developpeur-se-frontend-pre-embauche_paris_TEDIB_kR6ax5g',
    img: 'assets/img/tediber.png'
  },
  {
    id: 25,
    name: 'Shayp',
    post: 'frontend developer eng',
    technologies: ['Javascript(Typescript)', 'ReactJS', 'REST API'],
    applicationDate: '2021-07-29',
    website: 'https://www.welcometothejungle.com/en/companies/shayp/jobs/frontend-engineer_etterbeek#apply',
    img: 'assets/img/shayp.png'
  },
  {
    id: 26,
    name: 'Buster.Ai',
    post: 'frontend developer eng',
    technologies: ['JavaScript (ES6)', 'Typescript', 'HTML5/CSS3', 'UI/UX', ],
    applicationDate: '2021-07-29',
    website: 'https://www.welcometothejungle.com/fr/companies/buster-ai/jobs/front-end-developer-intern_paris',
    img: 'assets/img/buster.png'
  },
  {
    id: 27,
    name: 'Cibiltech',
    post:'Web développeur·se Fullstack',
    technologies:['PHP orienté objet',
    'Framework MVC (Laravel)',
    'MySQL',
    'HTML5/CSS3', 'JavaScript',
    'Git'],
    applicationDate: '2021-09-01',
    website: 'https://www.welcometothejungle.com/en/companies/cibiltech/jobs/web-developpeur-se-fullstack-stage_paris_CIBIL_qxJR3R1',
    img: 'assets/img/cibiltech.png'
  },
  {
    id: 28,
    name: 'Blockpulse',
    post:'Développeur web Fullstack',
    technologies:['Javascript (Vue + NodeJs)'],
    applicationDate: '2021-09-01',
    website: 'https://www.welcometothejungle.com/en/companies/blockpulse/jobs/developpeur-web-full-stack-stage-fin-d-etude_paris',
    img: 'assets/img/blockpulse.png'
  },
  {
    id: 29,
    name: 'AlumnForce',
    post:'Développeur Web PHP JS',
    technologies:['PHP', 'Javascript', 'la programmation objet'],
    applicationDate: '2021-09-01',
    website: 'https://www.welcometothejungle.com/en/companies/alumnforce/jobs/stage-developpeur-backend_bordeaux',
    img: 'assets/img/alumnforce.png'
  },
  {
    id: 30,
    name: 'Bevouac',
    post:'Développeur Front End',
    technologies:['TDD', 'Javascript', 'FEO', 'Front-End frameworks: Vue, React, Angular', 'TypeScript', 'API REST', 'Bootstrap', 'Materialize'],
    applicationDate: '2021-09-01',
    website: 'https://www.welcometothejungle.com/en/companies/bevouac/jobs/developpeur-front-end-stage_paris',
    img: 'assets/img/bevouac.png'
  },
  {
    id: 31,
    name: 'société Générale',
    post:'Développeur Web',
    technologies:['Stack tech: ', 'React', 'RxJS (ReactiveX)', 'TypeScript', 'C#', 'ElasticSearch', 'SQLServer', 'Azure', 'architecture SOA'],
    applicationDate: '2021-09-01',
    website: 'https://www.welcometothejungle.com/en/companies/societe-generale/jobs/developpeur-web_fontenay-sous-bois_SG_QXWDwll',
    img: 'assets/img/societe.png'
  }
];
// la bar de recherche
const input = document.getElementById("searchBar");
(function (){
  input.addEventListener('keyup', (e) => {
    let searchString = e.target.value.toLowerCase();
    const filteredCompanies = companiesList.filter(eachCompany => {
      return (
        eachCompany.name.toLowerCase().includes(searchString) || eachCompany.post.toLowerCase().includes(searchString)
      );
    });
    // j'appelle la fonction qui génére les cartes avec la fonction qui filtre comme argument
    displayCharacters(filteredCompanies);
  });
})()

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
(function (){
  let resentTwelve = companiesList.slice(-12);
  console.log(resentTwelve)
  let allReverseOrder = companiesList.sort((f, s) => s - f);
  resentTwelve = resentTwelve.sort((f, s) => s - f);
  displayCharacters(resentTwelve)
  seeMore = document.getElementById('see-more');
  seeMore.addEventListener('click', function(){
    seeMore.innerHTML = (seeMore.innerHTML == 'Voir plus...') ? 'Voir moins' : 'Voir plus...';
    // afficher toutes les cartes en cliquant sur le bouton 'Voir plus...' sinon 12 les plus récentes
    (seeMore.innerHTML == 'Voir plus...') ? displayCharacters(resentTwelve) : displayCharacters(allReverseOrder);
  })
})()

// afficher l'onglet avec plus de détaille consernant chaque offre. L'onglet est composé des divs stylisées
// elle est appeller au moment de génération des cartes (à la ligne 167)
function displayPopup(name, post, id, web){
  input.value = '';
  companiesList.forEach((item) => {
    if(item.name === name){
      let answer =
      `
      <div id="popup" class="popup">
        <div id="popup-heading">
          <i class="far fa-2x fa-window-close m-2" onclick="closeIt()"></i>
          <p class="m-2"><small>Savoir plus sur le post</small></p>
        </div>
        <div id="popup-title">
          <h1>${name.toUpperCase()}</h1>
          <h2>${post}</h2>
        </div>
        <div id="popup-body">
          <ul id="${name}_${id}">
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
// window.addEventListener('load', function () {
let displayList = (index) =>{
  companiesList.forEach((item) => {
    if(Number(index) === item.id){
      item.technologies.forEach((elems) => {
        console.log(elems);
        document.getElementById(`${item.name}_${item.id}`).innerHTML += `<li class="mx-auto">${elems}</li>`;
      });
    }
  });
}
// })
