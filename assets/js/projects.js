const projects = [
  {
    projectImg: '',
    projectTitle: 'project 1',
    projectDesc: 'project1',
    liveLink: '',
    githubLink: '',
  },
  {
    projectImg: '../images/projects/1.jpg',
    projectTitle: 'project2',
    projectDesc: 'project 2',
    liveLink: '',
    githubLink: '',
  },
  {
    projectImg: '',
    projectTitle: 'project3',
    projectDesc: 'project3',
    liveLink: '',
    githubLink: '',
  },
];

document.getElementById('app').innerHTML = `${projects
  .map(({ projectImg, projectTitle, projectDesc, liveLink, githubLink }) => {
    return `
    <article class="project featured">
          <div class="project-wrap" href="#">
            <div class="project__img-wrap">
              <img class="project__img" src="./assets/images/projects/1.jpg" />
            </div>
            <div class="project__content">
              <h3 class="project__title">
                ${projectTitle}
              </h3>
              <!-- <div class="project__techs">
                <span>Tech:</span>
                <img src="./assets/images/icons/HTML.png" alt="" />
                <img src="./assets/images/icons/HTML.png" alt="" />
                <img src="./assets/images/icons/HTML.png" alt="" />
              </div> -->
              <p class="project__description">
${projectDesc}
              </p>
            </div>
            <div class="project__links">
              <a href="" class="flex web-link"
                >Live <img src="./assets/images/icons/globe.png" alt=""
              /></a>
              <a href="" class="flex github-link"
                >Source Code <img src="./assets/images/icons/github.svg" alt=""
              /></a>
            </div>
          </div>
        </article>
    `;
  })
  .join('')}`;
