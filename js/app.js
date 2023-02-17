window.addEventListener('DOMContentLoaded', () => {

  const nav_item = document.querySelectorAll('.nav_item'),
        Content_block = document.querySelectorAll('.Content_block'),
        navbar_inner = document.querySelector('.navbar_inner'),
        intro_inner = document.querySelector('.intro_Showcase_inner');
        
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
        function ShowTabContent(i = 1){
          tabsContent[i].classList.add('show','fade');
          tabsContent[i].classList.remove('hide');
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
      };
      // generate block

  async function getDataBd(src) { 
    let response = await fetch(src);
    if (response.ok) {
      data = await response.json();
      return data;
    } else {
      alert('error', response.status);
    }
    }
 function generateBlockSlider(){
      let dataBlock = getDataBd('../bd.json');
      dataBlock.then( data =>{
        intro_inner.innerHTML = '';
        
            data.dataForGenerateBlock.forEach((i)=>{
          const elem = document.createElement('div');
          elem.classList.add('intro_item');
          elem.innerHTML += `
          <a href="${i.src}"> <img src="${i.img}" alt=""></a>
          <div class="intro_contect">
            <div class="intro_item_title">${i.title}</div>
            <div class="container_tag">
               
            </div>
          </div>
          `;
         
          intro_inner.append(elem);
          
          const d = document.querySelectorAll('.container_tag');
        
          i.tag.forEach((i)=>{
            const elemTag = document.createElement('div');
            elemTag.classList.add('tag');
            elemTag.textContent = i;
            console.log(i);
            d.forEach((item)=>{
            item.append(elemTag);
          });
          });
        });
        changeSlider();
      });
    }

    generateBlockSlider();
// slider
function changeSlider(){
const slider = document.querySelector('.intro_inner'),
      slidesWrapper =  document.querySelector('.intro_Showcase'),      
      slides = document.querySelectorAll('.intro_item'),
      slidesField = document.querySelector('.intro_Showcase_inner');

      slideWitdh = window.getComputedStyle(slider).width ;
      let slideIndex = 1;
      let offset = 0;
      slidesField.style.width = 100 * slides.length + '%';
      slidesWrapper.style.overflow = 'hidden';
      
      slides.forEach(slide =>{
        slide.style.width = slideWitdh ;
      });
      slider.style.position = "relative";
  
      const indicators = document.createElement('ol');
        dots = [];
  
      indicators.classList.add('carousel-indicators');
      slider.append(indicators);
  
      for(let i = 0; i<slides.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if ( i == 0 ){
          dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
      }
  dots.forEach(dot =>{
    dot.addEventListener('click',(e)=>{
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = +slideWitdh.slice(0,slideWitdh.length-2) * (slideTo - 1);
      
      slidesField.style.transform = `translateX(-${offset}px)`;
    
      dots.forEach(dot =>dot.style.opacity = '.5');
      dots[slideIndex-1].style.opacity = 1;
    });
  });
  setInterval( ()=>{
    slideIndex ++;
    if( slideIndex > slides.length){
      slideIndex = 1;
      
    }
    offset = +slideWitdh.slice(0,slideWitdh.length-2) * (slideIndex - 1);
    slidesField.style.transform = `translateX(-${offset}px)`;
    dots.forEach(dot =>dot.style.opacity = '.5');
    dots[slideIndex-1].style.opacity = 1;
  }, 10000);

      }

  
});

