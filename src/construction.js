// @ts-check
import { html, LitElement, css }  from 'lit-element';
import { repeat }                 from 'lit-html/directives/repeat';
import { connect }                from 'pwa-helpers/connect-mixin.js';
import { store }                  from '../../../store.js';

// import { listings }            from '../../app-elements/firebaseUser';
import {
  firebaseUser,
  deleteDoc
}                                 from '../../snacks/paw-auth/src/user-functions';
import { select }                 from '../../app-elements/select';

import { left, right }            from './icons.js';
import { Design }                 from './design.js';

import {
  showProjects,
  industry,
  nextPost,
  previousPost
}                                 from './construction-action';

import {
  area
}                                 from '../../../actions/phonebook';

import { ContractorsNetwork }     from '../network';

// import { deleteDoc }              from '../snacks/user-account';
// import { plusIcon, lens }         from '../app-elements/icons';

export class ContractorsManagement extends connect(store)(LitElement) {
  static get is() { return 'customer-management'; }
  static get properties() {
    return {
        // PROJECT MANAGEMENT
        place:              { type: String },
        industry:           { type: String },
        residential:        { type: Array },
        commercial:         { type: Array },
        posts:              { type: Number },
        test:               { type: Array }
    }
  }

  constructor() {
    super();

    this.residential = [
      {
        image: "/images/bee.jpg",
        project: "Flower Bed for Bees",
        contract: "Company A",
        url: "mybusynest.com",
        text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        image: "/images/bee.jpg",
        project: "Flower Bed for Bees",
        contract: "Company B",
        url: "mybusynest.com",
        text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
  ];

  this.commercial = [
    {
      image: "/images/bee.jpg",
      project: "Flower Bed for Bees",
      contract: "Company A",
      url: "mybusynest.com",
      text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      image: "/images/bee.jpg",
      project: "Flower Bed for Bees",
      contract: "Company B",
      url: "mybusynest.com",
      text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];

    this._show();

  }

  firstUpdated() {
    this.shadowRoot.getElementById('a')             .addEventListener('click',  ()  => {this._previous()}     );
    this.shadowRoot.getElementById('b')             .addEventListener('click',  ()  => {this._next()}         );
    this.shadowRoot.getElementById('service')       .addEventListener('change', (e) => {this._industry(e)}    );
  }

  stateChanged(state) {
    this.area                = state.phonebook.area;
    this.industry            = state.projects.industry;
    this.posts               = state.projects.projectState;
    // this.residential         = state.projects.residential;
    // this.city                = state.user.setUser;
  }

  _deleteDoc() {
    const a = firebaseUser(); // currently selected collection
    const b = this.shadowRoot.getElementById('projects').value; // currently selected document
    deleteDoc(a, b);
  }

  _industry(e) {
   store.dispatch(industry(e.target.value));
  }

  _next() {
   store.dispatch(nextPost()); //+1
  }

  _previous() {
    if ( this.posts <= 0 ) {  }
    else { store.dispatch(previousPost()); } //-1
  }

  _show() {
/*
    this.residential  = [];
    this.commercial   = [];
    const listing = firebase.firestore().collection('residential');  // .orderBy('timestamp', 'desc').limit(12);
    
    listing.onSnapshot( (snapshot) => {
      // this.residential = snapshot.map(doc => doc.data().verb).join(", ");
      snapshot.docChanges().forEach( (change) => {
        if (change.type === 'removed') {
          // deleteMessage(change.doc.id);
         } else {
           this.residential = Object.values(change.doc.data());
           store.dispatch(showProjects(this.residential));
           console.log(
             typeof this.residential,
             change.doc.id,
             // this.residential.text
          );
         }

      });
    });
*/
/*

    firebase.auth().onAuthStateChanged( (firebaseUser) => {
      if (firebaseUser) {  INCLUDE 
        this.test = listings();
        // store.dispatch( setName( this._person ) );
        // store.dispatch( showProjects( this.residential ) );
        let get = firestore.collection('residential').get()
          .then(snapshot => {
            if (snapshot.empty) {
              console.log('No matching documents.');
              return;
            } 
            snapshot.forEach(doc => {
              console.log(doc.id, '=>', doc.data());
              // this.test = doc.data();
            });
            
            this.test = snapshot.docs.data;
            console.log(this.test);
          })
          .catch(err => {
            console.log('Error getting documents', err);
          });

      }
      else {  EXCLUDE 
        this.test = [
          {image: "/images/bee.jpg", project: "Flower Bed for Bees", contract: "Company A", url: "mybusynest.com", text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        ]      
      }

    });

*/


/*

    const article = firebaseDatabase.collection("projects");
    article.get().then(function(doc) {
      if (doc.exists) {
          // console.log("Document data:", doc.data() );
      } else { console.log("No such document!"); }
    }).catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    try {
      const querySnapshot = database.collection("projects").get();
      this.stuff = querySnapshot.map(doc => doc.data().verb).join(", "); 
    } catch (error) {
      console.log(error)
    }
*/

  }

  static get styles() {
    return [
      Design,
      css`
      :host {
        margin: auto;
        /*padding-bottom: 8px;
        background-color: rgba(0,0,0,.1);*/
      }

      .spec[on]     { display:           block; }
      .spec         { display:           none; }

      @media (max-width: 480px) {
        .project {

        }
      }

      @media (min-width: 480px) {
        .project {
   
        }
        .promoName, .promoProject, .projectImage {
          width: 400px;
        }
        .projectImage { height: 400px; }
      }

      `
    ];
  }

  render() {
    return html`

    <section class="showbook">
      <!-- PROJECT DISPLAY -->
      <div class="project">

        <!-- SELECT TRADE -->
        <label><h2 class="titles">Industry:</h2><select id="service">${select}</select></label>
      
        <div class="navigation">
          <button id="a"><div class="inLeft"><p>${left}</p><p>Previous</p></div></button>    <!-- nextPrev(-1) @click="\${ this._next }" -->
          <button id="b"><div class="inRight"><p>Next</p><p>${right}</p></div></button>        <!-- nextPrev(1) @click="\${ this._previous }" -->
        </div>

        <!-- COMMERCIAL LOOP -->
        <ul class="spec" ?on="${ this.industry === 'commercial' }">

          ${repeat(this.commercial, () => (commercial, i) => html`
            <li class="spec" ?on="${ this.posts === i }">

              <div class="leaf">
                <h2 class="titles">Project:</h2>
                <p class="data"><a href="/show/#">${commercial.project}</a></p>
              </div>

              <img class="projectImage" height="96" width="96"   src="${commercial.image}" >
              
              <div class="leaf">
                <p class="titles">Contractor</p>
                <p class="data"><a href="/network/#">${commercial.contract}</a></p>
              </div>

          </li>
          `)}
        </ul>

        <!-- RESIDENTIAL LOOP -->
        <ul class="spec" ?on="${ this.industry === 'residential' }">
          ${this.residential.map((residential, i) => html`
          <li class="spec" ?on="${ this.posts === i }">
            <div class="grid">

              <div class="leaf">
                <h2 class="titles">Project:</h2>
                <p class="data"><a href="/show/#">${residential.project}</a></p>
              </div>

              <img class="projectImage" src="${residential.image}" >
              <a class="promoName" href="/network/#">${residential.contract}</a>

            </div>
          </li>
          `)}
        </ul>

        <!-- NAVIGATION 
        <div class="navigation">
          <button id="a"><div class="inLeft"><p>${left}</p><p>Previous</p></div></button>    <!-- nextPrev(-1) @click="\${ this._next }"
          <button id="b"><div class="inRight"><p>Next</p><p>${right}</p></div></button>        <!-- nextPrev(1) @click="\${ this._previous }"
        </div>-->

        <!-- PARAGRAPH -->
        <ul> <!-- class="spec" \?on="\${ this.industry === 'residential' }" -->
          <!-- RESIDENTIAL: LIT LOOP -->
          ${this.residential.map((residential, i) => html`
          <li class="spec" ?on="${ this.posts === i }">
            <div>
              <a class="promoProject" href="${residential.url}">${residential.project}</a>
              <p>${residential.text}</p>
            </div>
          </li>
          `)}
        </ul>



      </div>

      <!-- OVERVIEW 
      <div>
        <ul>
          <!-- RECORD LOOP 
          \${this.residential.map((residential) => html\`
          <li class="record">
            <a class="promoProject" href="\${residential.url}" >\${residential.project}</a>
          </li>
          \`)}
        </ul>
      </div>
      -->

      <!-- PHONEBOOK -->
      <contractors-network class="phonebook"></contractors-network>

    </section>

    `
  }
}

window.customElements.define('contractors-management', ContractorsManagement);

/*
  connectedCallback() {
    super.connectedCallback();
    fetch('https://newsapi.org/v2/everything?q=tech&apiKey=<your-api-key>')
      .then(response => response.json())
      .then(response => {
        this.articles = response.articles.map((article, i) => ({...article, id: i, read: false}));
      })
  }
*/

/*

      <!-- NETWORK 
      <div class="phonebook">
        <ul>  
          <!-- LOOP 
          \${this.test.map((test, i) => html`
          <li class="spec" ?on="${ this.posts === i }">
            <div class="grid" >
              <img class="projectImage" height="96" width="96"   src="" >
              <p class="bottom"><a  href="">        \${test.project}</a></p>
            </div>
          </li>
          `)}
        </ul>
      </div>-->

*/