// const h2 = document.createElement("h2");
// h2.textContent = "This content added by Javascript";
// document.querySelector("body").appendChild(h2);
const recentProjects = {
    projectName: {
        teamImpact: {
            url: "https://teamimpactcfa.com",
            image: "./media/newteamimpactscreenshot.JPG",
            description: "Team Impact Website",
        },
        halSutton: {
            url: "https://offers.halsuttongolf.com",
            image: "./media/newhalsuttonscreenshot.JPG",
            description: "Hal Sutton Golf Website",
        },
        workersCompCosulting: {
            url: "https://natef18.sg-host.com",
            image: "./media/newworkerscompconsultingscreenshot.JPG",
            description: "Workers Comp Consulting Website",
        },
        mackainPower: {
            url: "https://mckainpower.com",
            image: "./media/newmckainpowerscreenshot.JPG",
            description: "Mckain Power Website",
        },
        clickAnElectrician: {
            url: "https://clickanelectrician.com",
            image: "./media/newclickanelectrician.JPG",
            description: "Click An Electrician Website",
        },
        saturated: {
            url: "https://natef19.sg-host.com",
            image: "./media/newsaturatedscreenshot.JPG",
            description: "Saturated Website",
        },
        tellusMedia: {
            url: "https://tellus.co/webdevelopment",
            image: "./media/newtellusscreenshot.JPG",
            description: "Tellus Media Website",
        },
        republicFireBowls: {
            url: "https://republicfirebowls.com",
            image: "./media/newrepublicfirebowlsscreenshot.JPG",
            description: "Republic Fire Bowls Website",
        },
        ktxFit: {
            url: "https://ktxfit.com",
            image: "./media/newktxfitscreenshot.JPG",
            description: "KTX Fit Website",
        },
    }
}


const body = document.querySelector('body');
const hamburgerMenu = document.getElementById('mobile-menu-toggle');
const mobileMenuContainer = document.getElementById('mobile-menu-container');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const backToTopButton = document.getElementById('back-to-top-button');
const viewMoreButton = document.getElementById('view-more-button');
const viewMoreButtonA = document.querySelector('#view-more-button a');
const recentProjectsViewMoreSection = document.getElementById('recent-projects-view-more');
const projectImage = document.getElementsByClassName('recent-project-image');
const projectImageLightbox = document.getElementById('project-image-lightbox');
const mouseOverScale = document.getElementsByClassName('mouse-over-scale');
const sectionImage = document.getElementsByClassName('section-image');


hamburgerMenu.addEventListener('click', function() {
    mobileMenuContainer.style.visibility = "visible";
    mobileMenuContainer.style.backgroundColor = "rgba(20 31 53 / 88%)";
    mobileMenu.classList.toggle('mobile-menu-open');
    body.style.overflow = "hidden";
});

mobileMenuContainer.addEventListener('click', function () {
    mobileMenuContainer.style.visibility = "hidden";
    mobileMenuContainer.style.backgroundColor = "rgba(20 31 53 / 0%)";
    mobileMenu.classList.toggle('mobile-menu-open');
    body.style.overflow = "auto";
});

viewMoreButton.addEventListener('click', function () {
    if (viewMoreButtonA.innerHTML == "View More") {
        // recentProjectsViewMoreSection.scrollTo(0);
        recentProjectsViewMoreSection.classList.add('recent-projects-view-more-show');
        viewMoreButtonA.innerHTML = "View Less";
        viewMoreButtonA.setAttribute("href", "#recent-projects-view-more");
    } else {
        recentProjectsViewMoreSection.classList.remove('recent-projects-view-more-show');
        viewMoreButtonA.innerHTML = "View More";
        viewMoreButtonA.setAttribute("href", "#recent-projects");
    }
});

window.onscroll = function() {backToTop()};

function backToTop() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        // backToTopButton.style.visibility = "visible";
        backToTopButton.classList.add('back-to-top-button-show');
    } else {
        // backToTopButton.style.visibility = "hidden";
        backToTopButton.classList.remove('back-to-top-button-show');
    }
  }

  for (let i = 0; i < sectionImage.length; i++) {
      let secImage = sectionImage[i];
        
        secImage.addEventListener('mouseenter', function () {
        secImage.classList.add('mouse-over-scale');
      })
        secImage.addEventListener('mouseout', function () {
        secImage.classList.remove('mouse-over-scale');
      })
  }

  for (let i = 0; i < projectImage.length; i++) {
      let image = projectImage[i];
      let div = document.createElement("div");
      let icon = document.createElement("i");
    
    //   image.addEventListener('click', function() {
    //       document.body.style.overflow = "hidden";
    //       projectImageLightbox.classList.add('project-image-lightbox-show');
    //       projectImageLightbox.appendChild(image);
    //       image.classList.add('image-scale');
    //       projectImageLightbox.appendChild(div);
    //       div.classList.add('image-close-button');
    //       div.appendChild(icon);
    //       icon.classList.add('fal');
    //       icon.classList.add('fa-times');
    //   })

    image.addEventListener('click', function() {
        document.body.style.overflow = "hidden";
        projectImageLightbox.classList.add('project-image-lightbox-show');
        image.classList.add('full-image');
        projectImageLightbox.appendChild(div);
        div.classList.add('image-close-button');
        div.appendChild(icon);
        icon.classList.add('fal');
        icon.classList.add('fa-times');
        image.style.cursor = "unset";
    })

    icon.addEventListener('click', function() {
        document.body.style.overflow = "auto";
        projectImageLightbox.classList.remove('project-image-lightbox-show');
        image.classList.remove('full-image');
        projectImageLightbox.removeChild(div);
        div.classList.remove('image-close-button');
        div.removeChild(icon);
        icon.classList.remove('fal');
        icon.classList.remove('fa-times');
        image.style.cursor = "pointer";
    })
  }