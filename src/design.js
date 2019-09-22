//@ts-check

import { css } from 'lit-element';

export const Design = css`

button:focus { outline: 0; }

/** Container */
.showbook {
  background-color:       #2b3c44;
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     1fr;
  margin:                 0;
  border-radius:          8px;
  padding:                8px;
}
 
.showbook > * {
  margin-right:           auto;
  margin-left:            auto;
}

/** Project Display */
.project {
  margin:                 0;
  display:                grid;
  grid-template-rows:     64px 60px 1fr 1fr ;
  /*
  grid-template:
    'trade'
    'navigate'
    'paragraph'
    /*'industry'
    /*'container'
    /*'phonebook'
    ;
  /*border: 2px black solid;*/
}

/** Select Input */
.project > label {
  font-family:            serif;
  font-weight:            normal;
  display:                grid;
  grid-template-rows:     1fr 1fr;
  grid-template-columns:  1fr;
  /* grid-area:              trade; */
  border-radius:          8px;
  /*box-shadow:           4px 4px 4px -2px #000;
  border:                 1px solid #303030;*/
}

.project > label > select {
  -webkit-appearance:     none;
  width:                  135px;
  color:                  #fff;
  background-color:       transparent;
  text-align-last:        center;
  border:                 3px solid #fff;
  margin:                 auto;
  border-radius:          4px;
  padding:                8px;
}

.project > label > h2,
.leaf > .titles {
  margin:                 auto;
  color:                  #fff;
  font-size:              1em;
}


.leaf > .data {
  border:                 3px solid #fff;
  border-radius:          4px;
  padding:                8px;
}

/** List Container */
/*.spec         { grid-area: container; }*/

.project > ul {
  width:              100%;
  /*height:             100%;*/
  list-style-type:    none;
  padding:            0;
  margin:             0;
}

.project > ul > li {
  margin:             auto;
}

.grid {
  display:            grid;
  grid-template-rows: 76px 1fr 3em;
  grid-gap:           8px;
}

/** Display */
.data {
  margin:             0;
  text-align:         center;
}

.data > a {
  text-decoration:  none;
  color:            var(--app-white-color);
  font-weight:      800;
}

.titles {
  text-align:   center;
  font-size:    .8em;
  color:        grey;
  font-style:   italic;
  margin:       0;
}

/** Navigation */
.navigation   {
  display:                grid;
  /*grid-area:            navigate;*/
  grid-template-columns:  1fr 1fr;
  margin:                 auto;
}

.navigation > button {
  height:                 36px;
  margin:                 auto;
  width:                  100%;
  border:                 0;
  padding:                0;
}

.inLeft{
  height:                 100%;
  display:                grid;
  grid-template-columns:  36px 1fr;
  margin:                 0 auto;
}

.inRight {
  height:                 100%;
  display:                grid;
  grid-template-columns:  1fr 36px;
  margin:                 0 auto;
}

.navigation > button > div > p  {
  color:                  var(--app-black-color);
/*line-height:            30px;*/
  margin:                 auto;
}
.navigation > button > div > p > svg {
  height:                 30px;
  width:                  30px;
  fill:                   var(--app-black-color);
}






.city {
  text-align:   right;
}


.geo {
  height: 48px;
}


/*.paragraph    { grid-area: paragraph; }*/



.phonebook {
  grid-column-start: 1;
  grid-column-end:3;
  margin: 0;
}

.projectImage {
  border-radius: 8px;
  border: 2px solid black;
  margin: auto;
  height: 200px;
  width: 200px;
}

.promoName {
  margin: 0;
  text-align: center;
  text-decoration: none;
  color: var(--app-white-color);
  font-weight: 800;
}

.promoProject {
  margin: 0;
  text-align: center;
  text-decoration: none;
  color: var(--app-white-color);
  font-weight: 800;
}



/*.alter        { grid-area: industry; }*/
/*.spec         { grid-area: container; }*/
/*.phonebook    { grid-area: phonebook; }*/

/*
.carousel {
  display:            flex;
  overflow-x:         scroll;
  scroll-snap-type:   x mandatory;
}

.carousel > img {
  scroll-snap-align:   start;
}
*/



`; 