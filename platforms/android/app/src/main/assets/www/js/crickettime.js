
const card = document.createElement('card');
card.innerHTML = 
`
<link rel="stylesheet" href="https://unpkg.com/onsenui/css/onsenui.css">
<link rel="stylesheet" href="https://unpkg.com/onsenui/css/onsen-css-components.min.css">
<link rel="stylesheet" href="css/crickettime.css">
<script src="https://unpkg.com/onsenui/js/onsenui.min.js"></script>




`;

class Card extends HTMLElement {
    constructor() {
        super();
        // Open shadow root because we need access to it through JS
        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.appendChild(card.cloneNode(true));
    }
}

document.addEventListener('init', function(event) {
	var page = event.target;
  
	if (page.id === 'page1') {
	page.querySelector('#push-button2').onclick = function() {
	  document.querySelector('#myNavigator').pushPage('page3.html', {data: {title: 'NYE'}});
	};
	} else if (page.id === 'page3') {
	page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
	}
  });


  document.addEventListener('init', function(event) {
	var page = event.target;
  
	if (page.id === 'page1') {
	page.querySelector('#push-button').onclick = function() {
	  document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'ENG VS. NZ'}});
	};
	} else if (page.id === 'page2') {
	page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
	}
  });




window.customElements.define('card-element', Card);
