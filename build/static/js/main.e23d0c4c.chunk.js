(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(31)},20:function(e,a,t){},23:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),s=t.n(r),o=(t(20),t(2)),i=t(3),c=t(5),m=t(4),u=t(6),h=t(10),d=t(13),p=t.n(d),E=(t(23),function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.resumedownload,t=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))});return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#photography"},"Photography")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"SWE-Resume")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),l.a.createElement("h3",null,"I'm a ",l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Software Engineer"),". I'm an ",l.a.createElement("a",{href:"#myTravels",className:"smoothscroll"},"outdoor enthusiast"),". I'm an ",l.a.createElement("a",{href:"#photography",className:"smoothscroll"},"amateur photographer"),"."),l.a.createElement("div",null,"Read about all that below, or see my resume ",l.a.createElement("a",{className:"Core-resumeDownload",target:"_blank",href:a,download:!0},"here")),l.a.createElement("ul",{className:"social"},t))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),g=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2017 Tim Baker"),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),f=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.phone,r=this.props.data.email,s=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Tim Baker Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n),l.a.createElement("br",null),l.a.createElement("span",null,r))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:s,className:"button",download:!0},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),a}(n.Component),v=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map(function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))}),t=this.props.data.work.map(function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)))}),n=this.props.data.skills.map(function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))});return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},t)),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a)))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},n)))))}}]),a}(n.Component),b=t(14),w=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Gallery-container"},l.a.createElement(b.a,{photos:N,direction:"row"}))}}]),a}(l.a.Component),N=[{src:"./images/favoriteShots/lake-rock.jpg",width:6e3,height:4e3},{src:"./images/favoriteShots/foggy-landscape.jpg",width:5845,height:3654},{src:"./images/favoriteShots/playground_swiss.jpg",width:6e3,height:4e3},{src:"./images/favoriteShots/zion-bump.jpg",width:6e3,height:4e3},{src:"./images/favoriteShots/custer_round_mountains.jpg",width:2643,height:3133},{src:"./images/favoriteShots/zion-sunset.jpg",width:4.596,height:3.064},{src:"./images/favoriteShots/goat.jpg",width:1939,height:1917}],j=t(9),y=t.n(j),k=[{original:"./images/me/solitude.jpg",thumbnail:"./images/me/solitude.jpg"},{original:"./images/me/Glacier.jpg",thumbnail:"./images/me/Glacier.jpg"},{original:"./images/me/washington.jpg",thumbnail:"./images/me/washington.jpg"}],O=[{original:"./images/favoriteShots/zion-bump.jpg",thumbnail:"./images/favoriteShots/zion-bump.jpg"},{original:"./images/favoriteShots/house-mountain.jpg",thumbnail:"./images/favoriteShots/house-mountain.jpg"},{original:"./images/favoriteShots/river-canyon.jpg",thumbnail:"./images/favoriteShots/river-canyon.jpg"},{original:"./images/favoriteShots/teton-yosemite.jpg",thumbnail:"./images/favoriteShots/teton-yosemite.jpg"},{original:"./images/favoriteShots/zion-sunset.jpg",thumbnail:"./images/favoriteShots/zion-sunset.jpg"}],S=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(y.a,{items:k,infinite:!1,showNav:!1,showFullscreenButton:!1,showPlayButton:!1,showBullets:!0})}}]),a}(l.a.Component),C=(l.a.Component,function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},h.a.initialize("UA-110570651-1"),h.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getResumeData",value:function(){p.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"Container"},l.a.createElement("div",{className:"App"},l.a.createElement(E,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}),l.a.createElement("div",{className:"Photography-container row"},l.a.createElement("div",{id:"myTravels",className:"Do"}),l.a.createElement(S,{id:"myTravels"})),l.a.createElement("div",{className:"See"},l.a.createElement("h2",{id:"photography",classNam:"See-h2"},"Check out some more of my photography ",l.a.createElement("a",{target:"_blank",href:"https://lightroom.adobe.com/gallery/cf875829625a41dc9561fca2b8cfc5ce/albums/41d5a4790de9462b8ad839b20d145fab/assets"},"here!")),l.a.createElement(w,{id:"myPhotos"})),l.a.createElement(v,{data:this.state.resumeData.resume}),l.a.createElement(g,{data:this.state.resumeData.main})))}}]),a}(n.Component)),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(l.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/resume-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/resume-app","/service-worker.js");D?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):B(e)})}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.e23d0c4c.chunk.js.map