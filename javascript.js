// obtém todas as âncoras do menu
const menuLinks = document.querySelectorAll('nav ul li a');

// obtém todas as seções do site
const siteSections = document.querySelectorAll('main section');

// adiciona um ouvinte de evento de clique a cada âncora do menu
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // previne o comportamento padrão do link

    // obtém o ID da seção vinculada ao link
    const sectionId = link.getAttribute('href');

    // percorre todas as seções do site
    siteSections.forEach(section => {
      // verifica se a seção é a que está vinculada ao link
      if (section.id === sectionId) {
        // exibe a seção se estiver oculta
        if (section.classList.contains('hidden')) {
          section.classList.remove('hidden');
        }
        // oculta a seção se estiver visível
        else {
          section.classList.add('hidden');
        }
      }
      // oculta todas as outras seções
      else {
        section.classList.add('hidden');
      }
    });
  });
});


