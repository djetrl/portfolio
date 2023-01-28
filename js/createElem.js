const tabs = document.querySelectorAll('.intro_controler_item'),
tabsContent = document.querySelectorAll('.intro_item'),
tabsParent =document.querySelector('.intro_controler'),
ParentContent_title = document.querySelectorAll('.intro_item_title');

// автоматическая генерация контролера в intro
tabsContent .forEach((item, i) => {
  const elem = document.createElement('div');
  elem.classList.add('intro_controler_item');
  elem.textContent =  ParentContent_title[i].outerText;
  tabsParent .append(elem);
});
