/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 let typingEffect = new Typed(".typedText",{
    strings : ["Jorge Garcia","Wordpress Developer","Frontend Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

const translations = {
  'en': {
      'site_name': 'DevJorge',
      'home': 'Home',
      'about': 'About Me',
      'projects': 'Projects',
      'contact': 'Contact',
      'download_cv': 'Download CV',
      'hire_me': 'Hire Me',
      'featured_info': 'Frontend Developer and WordPress Specialist with extensive experience. Passionate about transforming ideas into exceptional digital experiences, specializing in frontend development and creating custom solutions in WordPress. My focus is on designing visually appealing and highly functional websites, combining aesthetics with usability for intuitive navigation and unmatched user experience.',
      'header_experience': 'My Experience',
      'about_experience': 'I am an experienced professional in HTML, CSS, and JavaScript, as well as in some web development libraries and frameworks. This experience allows me to implement advanced interactive features and create dynamic websites. Additionally, I have a solid track record working with content management systems (CMS) like WordPress, which allows me to develop complete web solutions tailored to each project’s needs.',
      'projects_header': 'Projects',
      'completed_projects': 'Completed',
      'projects_completed': '3+ Projects Completed',
      'clients': 'Clients',
      'clients_satisfied': 'Satisfied Clients',
      'project_duration': 'Project Duration',
      'projects_duration': 'Short - Medium Term',
      'frontend_skills': 'Frontend',
      'backend_skills': 'Backend',
      'tools_skills': 'Tools',
      'scroll_down': 'Scroll Down',
      'contact_header': 'Contact',
      'email': 'Email:',
      'phone': 'Tel:',
      'send_message': 'Send',
      'footer_text': 'Jorge Garcia .',
      'footer_copyright': 'Copyright &copy; <a href="#home" style="text-decoration: none;">Jorge Garcia</a> - All rights reserved',
      'contact_header': 'Get in touch with me',
      'contact_subheader': 'Do you have a project in mind? Contact me here',
      'find_me': 'Find me',
      'name_placeholder': 'Name',
      'email_placeholder': 'Email',
      'message_placeholder': 'Message',
      'send': 'Send'
  },
  'es': {
      'site_name': 'DevJorge',
      'home': 'Inicio',
      'about': 'Sobre Mí',
      'projects': 'Proyectos',
      'contact': 'Contacto',
      'download_cv': 'Descargar CV',
      'hire_me': 'Contratame',
      'featured_name': 'Soy',
      'featured_info': 'Desarrollador Frontend y Especialista en WordPress con Amplia Experiencia. Apasionado por transformar ideas en experiencias digitales excepcionales, me especializo en el desarrollo frontend y en la creación de soluciones personalizadas en WordPress. Mi enfoque se centra en diseñar sitios web visualmente atractivos y altamente funcionales, combinando la estética con la usabilidad para ofrecer una navegación intuitiva y una experiencia de usuario inigualable.',
      'header_experience': 'Mi Experiencia',
      'about_experience': 'Soy un profesional experimentado en HTML, CSS y JavaScript, así como en algunas bibliotecas y frameworks de desarrollo web. Esta experiencia me permite implementar características interactivas avanzadas y crear sitios web dinámicos. Además, cuento con una sólida trayectoria trabajando con sistemas de gestión de contenido (CMS) como WordPress, lo que me permite desarrollar soluciones web completas y adaptadas a las necesidades de cada proyecto.',
      'projects_header': 'Proyectos',
      'completed_projects': 'Completados',
      'projects_completed': '3+ Proyectos Completados',
      'clients': 'Clientes',
      'clients_satisfied': 'Clientes Satisfechos',
      'project_duration': 'Duración del Proyecto',
      'projects_duration': 'Corto - Medio Plazo',
      'frontend_skills': 'Frontend',
      'backend_skills': 'Backend',
      'tools_skills': 'Tools',
      'scroll_down': 'Desliza hacia abajo',
      'contact_header': 'Contacto',
      'email': 'Email:',
      'phone': 'Tel:',
      'send_message': 'Enviar',
      'footer_text': 'Jorge Garcia .',
      'footer_copyright': 'Copyright &copy; <a href="#home" style="text-decoration: none;">Jorge Garcia</a> - Todos los derechos reservados',
      'contact_header': 'Ponte en Contacto Conmigo',
      'contact_subheader': '¿Tienes un proyecto en mente? Contáctame aquí',
      'find_me': 'Encuentrame',
      'name_placeholder': 'Nombre',
      'email_placeholder': 'Correo Electronico',
      'message_placeholder': 'Mensaje',
      'find_me': 'Encuentrame',
      'send': 'Enviar'
  }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
  const elementsToTranslate = document.querySelectorAll('[data-translate]');
  elementsToTranslate.forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
              el.setAttribute('placeholder', translations[lang][key]);
          } else {
              el.textContent = translations[lang][key];
          }
      }
  });
}

// Manejar el cambio de idioma en el selector
document.getElementById('language-selector').addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
  changeLanguage(selectedLanguage);
});

// Establecer idioma inicial
document.addEventListener('DOMContentLoaded', () => {
  changeLanguage('es'); 
});

  emailjs.init("ybL2VZD5VPWgxuCE6"); 

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Envía el formulario usando EmailJS
    emailjs.sendForm('service_138pee8', 'template_d2iucei', this)
      .then(function(response) {
        console.log('Éxito:', response);
        alert('Mensaje enviado con éxito');
        
        // Limpia los campos del formulario
        document.getElementById('contact-form').reset();
      }, function(error) {
        console.log('Error:', error);
        alert('Hubo un error al enviar el mensaje');
      });
  });
