
/* global gsap */


import { 
  getNode as $,
  insertLast,
  tiger,
  delayP,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
  changeColor,
  attr,
  clearContents
} from "./lib/index.js";


const userCardContainer = $('.user-card-inner')

async function redingUserList(){

  renderSpinner(userCardContainer);

  try{
    await delayP(2000);
    
    $('.loadingSpinner').remove();

    let response = await tiger.get('http://localhost:3000/users')
  
    let userDate = response.data;
  
    userDate.forEach(data => renderUserCard(userCardContainer, data));
  
    changeColor('.user-card');
  
    gsap.to(gsap.utils.toArray('.user-card'),{
      x:0,
      opacity:1,
      duration:1.5,
      stagger:0.2,
    })
  }catch(err){
    renderEmptyCard(userCardContainer)
  }

}

function handler(e){
  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article');

  if(!deleteButton || !article) return;

  let id = attr(article, 'data-index').slice(5);

  tiger.delete(`http://localhost:3000/users/${id}`).then(()=>{
    clearContents(userCardContainer);
    redingUserList();
  })
  
}

userCardContainer.addEventListener("click", handler)

redingUserList();



