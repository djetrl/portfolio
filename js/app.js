window.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll('.intro_controler_item'),
        tabsContent = document.querySelectorAll('.intro_item'),
        tabsParent =document.querySelector('.intro_controler'),
        
        nav_item = document.querySelectorAll('.nav_item'),
        Content_block = document.querySelectorAll('.Content_block'),
        navbar_inner = document.querySelector('.navbar_inner');
        
// intro_controler_active -classActiveControler
//intro_controler_item -intro_controler_item
        // автоматическая генерация контролера в intro
        tabsSys(tabsContent, tabsParent, tabs, 'intro_controler_active', 'intro_controler_item');
        tabsSys( Content_block, navbar_inner,nav_item, 'nav_item_active', 'nav_item');
 function tabsSys(tabsContent, tabsParent, tabs, classActiveControler, intro_controler_item){


        function hideTabContent(){
          tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show','fade');
          });
          tabs.forEach(item =>{
            item.classList.remove(classActiveControler);
          })
        }
        function ShowTabContent(i = 0){
          tabsContent[i].classList.add('show','fade');
          tabsContent[i].classList.remove('hide');
          tabs[i].classList.add(classActiveControler);
        }
      
        hideTabContent();
        ShowTabContent();
      
        tabsParent.addEventListener('click',(event)=>{
            const target = event.target;
      
            if(target && target.classList.contains(intro_controler_item)){
              tabs.forEach((item, i)=>{
                if (target == item){
                  hideTabContent();
                  ShowTabContent(i);
                }
              });
            }
        });
      }
});
