import resultSearch from './template/object.hbs';

const url='https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=';

const apiKey='18983858-a286444dbdabde7838820de42';
const loadBtn = document.querySelector('.loadBtn');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('input');
const searchForm = document.querySelector('.search-form');

let page = 1;


const render =  function(){
  fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${input.value}&page=${page}&per_page=12&key=${apiKey}`)
  .then(data=> data.json())
  .then(data=>{
    const resSearch = resultSearch(data.hits);
    gallery.insertAdjacentHTML('beforeend',resSearch);
   window.pageYOffset>100 ? window.scrollTo({
      top:
      document.documentElement.scrollTop +
      document.documentElement.clientHeight,
      behavior: "smooth",
    }):'';
  })
};


loadBtn.addEventListener('click', ()=>{  
  page++;
  render(); 
});

searchForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  page=1;
  gallery.innerHTML='';
  render();
});



