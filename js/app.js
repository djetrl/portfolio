window.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll('.intro_controler_item'),
        tabsContent = document.querySelectorAll('.intro_item'),
        tabsParent =document.querySelector('.intro_controler');
        function hideTabContent(){
          tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show','fade');
          });
          tabs.forEach(item =>{
            item.classList.remove('intro_controler_active');
          })
        }
        function ShowTabContent(i = 0){
          tabsContent[i].classList.add('show','fade');
          tabsContent[i].classList.remove('hide');
          tabs[i].classList.add('intro_controler_active');
        }
      
        hideTabContent();
        ShowTabContent();
      
        tabsParent.addEventListener('click',(event)=>{
            const target = event.target;
      
            if(target && target.classList.contains('intro_controler_item')){
              tabs.forEach((item, i)=>{
                if (target == item){
                  hideTabContent();
                  ShowTabContent(i);
                }
              });
            }
        });


});