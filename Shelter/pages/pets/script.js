//Hamburger
const sandwichmenu = document.querySelector('#sandwichmenu');
const header__navigation = document.querySelector('.header__navigation');

sandwichmenu.addEventListener('click', function(e) {
  // e.preventDefault();
  // document.body.classList.toggle('_lock');
  sandwichmenu.classList.toggle('_active');
  header__navigation.classList.toggle('_active');
});

const data = [
  {
    id: 1,
    title: "Katrine",
    img: "../../assets/images/pets-katrine.png",
    breed: "Cat - British Shorthair",
    // type: "Cat",
    // breed: "British Shorthair",
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "age: 6 months",
    inoculations: ["inoculations: panleukopenia"],
    diseases: ["diseases: none"],
    parasites: ["parasites: none"],
  },
  {
    id: 2,
    title: "Jennifer",
    img: "../../assets/images/pets-jennifer.png",
    // type: "Dog",
    breed: "Dog - Labrador",
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["inoculations: none"],
    diseases: ["diseases: none"],
    parasites: ["parasites: none"]
  },
  {
    id: 3,
    title: "Woody",
    img: "../../assets/images/pets-woody.png",
    // type: "Dog",
    breed: "Dog - Golden Retriever",
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["inoculations: adenovirus, distemper"],
    diseases: ["diseases: right back leg mobility reduced"],
    parasites: ["parasites: none"]
  },
  {
    id: 4,
    title: "Sophia",
    img: "../../assets/images/pets-sophia.jpg",
    // type: "Dog",
    breed: "Dog - Shih tzu",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["inoculations: parvovirus"],
    diseases: ["diseases: none"],
    parasites: ["parasites: none"]
  },
  {
    id: 5,
    title: "Timmy",
    img: "../../assets/images/pets-timmy.png",
    // type: "Cat",
    breed: "Cat - British Shorthair",
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["inoculations: calicivirus, viral rhinotracheitis"],
    diseases: ["diseases: kidney stones"],
    parasites: ["parasites: none"]
  },
  {
    id: 6,
    title: "Charly",
    img: "../../assets/images/pets-charly.jpg",
    // type: "Dog",
    breed: "Dog- Jack Russell Terrier",
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["inoculations: bordetella bronchiseptica, leptospirosis"],
    diseases: ["diseases: deafness, blindness"],
    parasites: ["parasites: lice, fleas"]
  },
  {
    id: 7,
    title: "Scarlett",
    img: "../../assets/images/pets-scarlet.png",
    // type: "Dog",
    breed: "Dog - Jack Russell Terrier",
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["inoculations: parainfluenza"],
    diseases: ["diseases: none"],
    parasites: ["parasites: none"]
  },
 
  {
    id: 8,
    title: "Freddie",
    img: "../../assets/images/pets-freddie.png",
    // type: "Cat",
    breed: "Cat - British Shorthair",
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["inoculations: rabies"],
    diseases: ["diseases: none"],
    parasites: ["parasites: none"]
  },
  
]

window.onload = function() {
  console.log('Hello Rolling Scopes!');


  //Render Article
  if(data) {
      renderArticlesToDom();
  }
    //Generate Base Modal from Modal Class
  addPromoClickHandler();
 
  
}
 const renderArticlesToDom = () => {
   let strategiesWrapper = getStrategiesWrapper();
  //  console.log(generateArticles(data));
  generateArticles(data).forEach(article => {
    strategiesWrapper.append(article.generateArticle())
  })
    addStrategyClickHandler();
 }
 const addStrategyClickHandler = () => {
   document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {
    //  console.log(e.target);
    if (e.target.closest('.strategy')) {
      let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
      // console.log(clickedStrategyId)
      let clickedStrategyData = getClickedData( clickedStrategyId);

      renderArticleModalWindow(clickedStrategyData);
    }
   })
 }
const getClickedData = (id) => {
  return data.find(article => article.id == id)
}
const renderArticleModalWindow = (article) => {
  let modal = new ArticleModal('.article-modal', article);
  // console.log(modal);
   modal.renderModal();
}
 const getStrategiesWrapper = () => {
   const strategiesConstainer = document.querySelector('.strategy-wrapper');
   strategiesConstainer.innerHTML = '';
   return strategiesConstainer
 }

 const generateArticles = (data) => {
   let articles = [];
   data.forEach(article => {
     articles.push(new Article({...article, button: 'Learn More'}))
   });
   return articles;
 }

const addPromoClickHandler = () => {
  document.querySelector('.card__animal .strategy').addEventListener('click', () => {
    
    generatePromoModal();
  })
}

function generatePromoModal() {
  renderModalWindow('Test content for Cards Modal');
}

const renderModalWindow = (content) => {
  let modal = new Modal ('cards-modal');
  modal.buildModal(content);
}


 //Article

class Article {
  constructor({ id, title, img, button, ...rest}) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.button = button;
  }

  //Article generation
  generateArticle() {
    let template = '';
    let article = document.createElement('article');
    article.className = 'strategy card__animal';
    article.setAttribute('data-id', this.id);

    this.img &&
    (template += `<img class='card__image' src=${this.img} alt='pets-katrine'>`)


    if (this.img  || this.button) {
      template += `<h3 class="strategy cart__title">`

      this.title &&
      (template += `<h3 class="strategy cart__title">${this.title}</h3>`)

      template += `</h3>`
    }
    
    this.button &&
    (template += `<button class="button button_bordered">${this.button}</button>`)
    
    article.innerHTML = template;
    // console.log(article.innerHTML);
    // console.log(article);
    return article;
  }
}
 //Modal

 class Modal {
  constructor (classes) {
      this.classes = classes;
      this.modal = '';
      this.modalContent = '';
      this.modalCloseBtn = '';
      this.overlay = '';
   }
  buildModal(content) {
      //Overlay
      this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');

      //Modal
     
      this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

      //Modal content
      
      this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');

      //Close Button 
     
      this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
      this.modalCloseBtn.innerHTML = '<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">'

      this.setContent(content);

      this.appendModalElements();

      console.log(this.modal);

      //Bind Events
      this.bindEvents();

      //Open Modal
      this.openModal();
      
      //Close Modal
      // this.closeModal();

  }
  createDomNode (node, element, ...classes){
      node = document.createElement(element);
      node.classList.add(...classes);
      return node
  };
      
  setContent(content) {
      if(typeof content === 'string') {
          this.modalContent.innerHTML = content;
      } else {
          this.modalContent.innerHTML = '';
          this.modalContent.appendChild(content);
      }
  }
  appendModalElements() {
      this.modal.append(this.modalCloseBtn);
      this.modal.append(this.modalContent);
      this.overlay.append(this.modal);
  }
  
  bindEvents()  {
      this.modalCloseBtn.addEventListener('click', this.closeModal);
      this.overlay.addEventListener('click', this.closeModal);
  }
  openModal() {
      document.body.append(this.overlay);
  }

  closeModal(e) {
    let classes = e.target.classList;
    if(classes.contains('overlay') || classes.contains('modal__close-icon')) {
        document.querySelector('.overlay').remove();
    } 

  }

 }

 //ArticleModal

 class ArticleModal extends Modal {
    constructor (classes, {id, title, img, breed, description, age, inoculations, diseases, parasites}) {
        super(classes);
        this.id = id;
        this.title = title;
        this.img = img;
        // this.type = type;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
        // this.button = button;
    }

    //Article Modal generator
    generateContent() {
        let template = '';
        let article = document.createElement('div');
        article.className = 'article-modal__content';

        this.img &&
        (template += `<img class="card__image" src=${this.img} alt="pets-jennifer">`)

        // this.button &&
        //   (template += `<button class="button button_bordered">${this.button}</button>`)

        if (this.name || this.type ||  this.description || this.breed || this.age) {
            template += `<class="strategy__content">`

            this.title &&
            (template += `<h3 class="strategy__name">${this.title}</h3>`)

            this.breed &&
            (template += `<h4 class="strategy__type">${this.breed}</h4>`)

            this.description &&
            (template += `<p class="strategy__text">${this.description}</p>`)

            this.age &&
            (template += `<li class="strategy__age">${this.age}</li>`)

            if (this.inoculations) {
              template += `<h5 class="strategy__inoculations">`

              this.inoculations.map(inoculations => {
                template += `<li class="strategy__inoculations">${inoculations}</li>`
              })
              template += `</h5>`

            }
            if (this.diseases) {
              template += `<h5 class="strategy__inoculations">`

              this.diseases.map(diseases => {
                template += `<li class="strategy__inoculations">${diseases}</li>`
              })
                template += `</h5>`
              
            }
            if (this.parasites) {
              template += `<h5 class="strategy__inoculations">`

              this.parasites.map(parasites => {
                template += `<li class="strategy__inoculations">${parasites}</li>`
              })
                template += `</h5>`
              
            }

            article.innerHTML = template;
            return article;
        }

       
    }
    renderModal() {
        let content = this.generateContent();
        // console.log(content)
        super.buildModal(content);
    }
}





