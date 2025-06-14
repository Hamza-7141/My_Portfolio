function toggleMenu() {
      const navList = document.getElementById('nav-list');
      navList.classList.toggle('show');
    }

    const projects = [
      {
        name: "Sky Gazing",
        description: "Skygazing: Interactive night sky viewer using HTML, CSS, and JavaScript.",
        link: "https://skygazingfinal.vercel.app"
      },
      {
        name: "Rheem Cooling",
        description: "Rheem-Cooling: Responsive HVAC cooling system interface using HTML, CSS, Bootstrap, JavaScript.",
        link: "https://rheem-cooling.vercel.app"
      },
      {
        name: "Mak Engineering",
        description: "MAK-Engineering: Interactive engineering portfolio built with HTML, CSS, JavaScript only.",
        link: "https://mak-engineering.vercel.app"
      }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-tile';
      card.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      projectList.appendChild(card);
    });