(this.webpackJsonpcreate=this.webpackJsonpcreate||[]).push([[0],{16:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(17),i=c.n(s),r=c(7),n=c(10),l=c(2),j=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,status:e.status,species:e.species,origin:e.origin.name,episode:e.episode.length}}))}))},o={get:function(e,t){var c=localStorage.getItem(e);return null===c?t:JSON.parse(c)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},m=c.p+"static/media/RickAndMorty.1f3156d3.png",h=c(0),d=function(e){var t,c=Object(h.jsx)("i",{title:"Dead",className:"icons fas fa-skull icons"}),a=Object(h.jsx)("i",{title:"Alive",className:" icons fas fa-heartbeat "}),s=Object(h.jsx)("i",{title:"May be alive...or not",className:" icons fas fa-question"});return Object(h.jsx)(h.Fragment,{children:(t=e.status,"dead"===t.toLowerCase()?c:"alive"===t.toLowerCase()?a:"unknown"===t.toLowerCase()?s:void 0)})},u=function(e){var t,c=Object(h.jsx)("span",{className:"icons",title:"Alien",children:"\ud83d\udc7d"}),a=Object(h.jsx)("i",{title:"Human",className:"fas fa-user icons"}),s=Object(h.jsx)("i",{title:"Who knows what it is",className:" icons fas fa-question"});return Object(h.jsx)(h.Fragment,{children:(t=e.specie,"human"===t.toLowerCase()?a:"alien"===t.toLowerCase()?c:"unknown"===t.toLowerCase()?s:void 0)})},b=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("article",{className:"character__li--article",children:[Object(h.jsx)("img",{className:"character__li--article-img",src:e.image,alt:e.name}),Object(h.jsxs)("div",{className:"character__li--article-info",children:[Object(h.jsx)("h2",{className:"character__li--article-info-name",children:e.name}),Object(h.jsx)("p",{children:e.species}),Object(h.jsx)(d,{status:e.status}),Object(h.jsx)(u,{specie:e.species})]})]})})},f=c.p+"static/media/portal.aeba5f34.gif",x=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"noResults",children:[Object(h.jsxs)("p",{className:"noResults__text",children:["Ops, ",Object(h.jsx)("span",{className:"noResults__text-input",children:e.filterName})," ","is not in this dimension."]}),Object(h.jsx)("img",{className:"noResults__img",src:f,alt:"Not found"})]})})},O=function(e){if(0===e.characters.length)return Object(h.jsx)(x,{filterName:e.filterName});var t=e.characters.map((function(e){return Object(h.jsx)("li",{className:"character__li",children:Object(h.jsx)(r.b,{to:"/character/".concat(e.id),children:Object(h.jsx)(b,{image:e.image,name:e.name,species:e.species,status:e.status})})},e.id)}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:"character",children:t})})},p=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"detail",children:[Object(h.jsx)(r.b,{to:"/",className:"detail__back",children:Object(h.jsx)("p",{className:"detail__back",children:"\u21a9 Back"})}),Object(h.jsxs)("article",{className:"detail__article",children:[Object(h.jsx)("img",{className:"detail__article--img",src:e.character.image,alt:e.character.name}),Object(h.jsxs)("div",{className:"detail__article--info",children:[Object(h.jsx)("h2",{className:"detail__article--info-name",children:e.character.name}),Object(h.jsx)("p",{className:"detail__article--info-all",children:e.character.species}),Object(h.jsxs)("p",{className:"detail__article--info-all",children:["Comes from ",e.character.origin]}),Object(h.jsxs)("p",{className:"detail__article--info-all",children:["It's ",e.character.status]}),Object(h.jsxs)("p",{className:"detail__article--info-all",children:["Has been in ",e.character.episode," episodes"]})]})]})]})})},g=c.p+"static/media/existNot.2b0fa255.gif",_=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("p",{className:"noCharacterBack",children:"\u21a9 Back"})}),Object(h.jsxs)("div",{className:"noCharacter",children:[Object(h.jsx)("p",{className:"noCharacter__text",children:"This page does not exist...but do we?"}),Object(h.jsx)("img",{className:"noCharacter__img",src:g,alt:"error 404"})]})]})},N=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{htmlFor:"searchBox"}),Object(h.jsx)("input",{className:"filter__form--textBox",placeholder:"Rick",id:"SearchBox",type:"text",value:e.lsFilter,onChange:function(t){e.handleFilter({searchValue:t.target.value,key:"name"})}})]})},v=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{htmlFor:"filterSpecies",className:"filter__form--species",children:"Specie"}),Object(h.jsxs)("select",{id:"filterSpecies",className:"filter__form--select",name:"filterSpecies",onChange:function(t){e.handleFilter({specieValue:t.target.value,key:"specie"})},value:e.lsSpecie,children:[Object(h.jsx)("option",{value:"All",children:"All"}),Object(h.jsx)("option",{value:"Alien",children:"Alien"}),Object(h.jsx)("option",{value:"Human",children:"Human"})]})]})},F=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{className:"filter__form",onSubmit:function(e){e.preventDefault()},children:[Object(h.jsx)(N,{handleFilter:e.handleFilter,lsFilter:e.lsFilter}),Object(h.jsx)(v,{handleFilter:e.handleFilter,lsSpecie:e.lsSpecie})]})})},k=c.p+"static/media/silvia.74fcf9ca.ico",S=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsx)("a",{className:"footer__link",alt:"My github page",href:"https://github.com/silviaespanagil",children:"by Silvia Espa\xf1a Gil"}),Object(h.jsx)("img",{className:"footer__img",src:k,alt:"mini developer"})]})})},C=function(e){return Object(h.jsx)("button",{className:"filter__resetBut",onClick:e.reset,type:"button",children:"Reset"})},y=(c(16),function(){var e=o.get("character",[]),t=o.get("Filter name:",""),c=o.get("Filter specie:","All"),s=Object(a.useState)(e),i=Object(n.a)(s,2),r=i[0],d=i[1],u=Object(a.useState)(t),b=Object(n.a)(u,2),f=b[0],x=b[1],g=Object(a.useState)(c),N=Object(n.a)(g,2),v=N[0],k=N[1];Object(a.useEffect)((function(){0===e.length&&j().then((function(e){var t=e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));d(t)}))}),[e]),Object(a.useEffect)((function(){o.set("character",r),o.set("Filter name:",f),o.set("Filter specie;",v)}));var y=r.filter((function(e){return e.name.toUpperCase().includes(f.toUpperCase())})).filter((function(e){return"All"===v||e.species===v}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("header",{className:"logo",children:Object(h.jsx)("img",{className:"logo__img",src:m,alt:"Rick and Morty"})}),Object(h.jsx)("main",{children:Object(h.jsxs)(l.c,{children:[Object(h.jsxs)(l.a,{exact:!0,path:"/",children:[Object(h.jsxs)("div",{className:"filter",children:[Object(h.jsx)(C,{reset:function(){x("")}}),Object(h.jsx)(F,{handleFilter:function(e){"name"===e.key?x(e.searchValue):"specie"===e.key&&k(e.specieValue)},lsFilter:f,lsSpecie:v})]}),Object(h.jsx)(O,{filterName:f,characters:y})]}),Object(h.jsx)(l.a,{path:"/character/:id",render:function(e){var t=e.match.params.id,c=r.find((function(e){return e.id===parseInt(t)}));return c?Object(h.jsx)(p,{character:c}):Object(h.jsx)(_,{})}}),Object(h.jsx)(l.a,{children:Object(h.jsx)(_,{})})]})}),Object(h.jsx)(S,{})]})});i.a.render(Object(h.jsx)(r.a,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.1b703148.chunk.js.map