var d=document;headerChild=d.querySelector("#header > .container");let a=window.getComputedStyle(headerChild)||headerChild.currentStyle;d.documentElement.style.setProperty("--language-right",`${parseInt(a.marginRight.replace(/px/,""))+15+"px"} `),window.addEventListener("resize",()=>{d.documentElement.style.setProperty("--language-right",`${parseInt(a.marginRight.replace(/px/,""))+15+"px"} `)});const hamburger=d.querySelector(".hamburger"),sidebar=d.getElementById("mobile-navigation"),mLanguageWrapper=d.querySelector(".mobile-language"),footerDropdown1=d.querySelector(".footer-item--dropdown-1"),footerDropdown2=d.querySelector(".footer-item--dropdown-2"),footerDropdown3=d.querySelector(".footer-item--dropdown-3"),footerDropdown4=d.querySelector(".footer-item--dropdown-4"),footerDropdown5=d.querySelector(".footer-item--dropdown-5"),mLanguage=d.querySelector("#mobile-language"),desktopLanguage=d.querySelector("#link-menu-lang"),desktopLanguageWrapper=d.querySelector(".d-language"),desktopNavService=d.querySelector("#link-item-service"),desktopNavJoin=d.querySelector("#link-item-join"),mLocation=d.querySelector("#f-location"),mCSelector=d.querySelector("#country-selector"),dCSelector=d.querySelector("#country-select-desktop"),mCSelectorHandle=d.querySelector(".m-language-bottom__handle"),icon=d.querySelectorAll(".mnav-tree__icon"),mnavTreeRoot=d.querySelectorAll(".mnav-tree-item--root"),mLanguageBG=d.querySelectorAll(".mnav-tree__list-service"),mnavTreeLink=d.querySelectorAll(".mnav-tree__link");function togglemNav(e){e.path[1].parentNode.classList.toggle("mnav-active"),mLanguage.style.display="inherit",e.target.removeEventListener(e.type,arguments.callee)}mnavTreeRoot.forEach(function(e){e.childNodes[1].addEventListener("click",function(){e.childNodes[3].classList.toggle("mnav-active"),e.childNodes[3].classList.contains("mnav-active")&&(mLanguage.style.display="none"),d.querySelector(".mnav-active").childNodes[1].addEventListener("click",togglemNav)},!1)}),mnavTreeLink.forEach(function(e){e.addEventListener("click",function(){e.classList.toggle("active"),e.classList.toggle("rotate-icon"),elWrapper=e.parentNode.parentNode,anotherEl=e.parentNode.parentElement.querySelectorAll(".mnav-tree__link"),anotherEl.forEach(function(t){if(t===e)switch(e.id){case"fmcg-toggle":d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor="#ee2737",elWrapper.style.backgroundColor="#ee2737";break;case"dn-toggle":d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor="#f06400",elWrapper.style.backgroundColor="#f06400";break;case"pay-toggle":d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor="#00aed6",elWrapper.style.backgroundColor="#00aed6";break;case"ne-toggle":d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor="#df1995",elWrapper.style.backgroundColor="#df1995";break;default:d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor="#00aa13",elWrapper.style.backgroundColor="#00aa13"}else t.classList.remove("active"),t.style.fontWeight=400,t.parentNode.childNodes[3].classList.remove("active")}),e.parentNode.childNodes[3].classList.toggle("active"),e.classList.contains("active")?e.style.fontWeight=700:e.style.fontWeight=400})}),hamburger.addEventListener("click",function(){if(hamburger.classList.toggle("is-active"),hamburger.classList.contains("is-active"))sidebar.style.width="100%",sidebar.style.opacity="1";else{0===d.querySelectorAll(".mnav-active").length?(sidebar.style.width="0px",sidebar.style.opacity="0",mLanguageWrapper.parentNode.classList.remove("open")):d.querySelectorAll(".mnav-active")[0].classList.remove("mnav-active"),sidebar.style.width="0px",sidebar.style.opacity="0",d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor="#00aa13",mLanguage.style.display="flex";try{mLanguageBG[0].querySelectorAll(".active")[0].classList.remove("active"),mLanguageBG[0].querySelectorAll(".active")[0].classList.remove("rotate-icon"),mLanguageBG[0].querySelectorAll(".mnav-tree__list-collapse.pl-0.active")[0].parentNode.childNodes[1].style.fontWeight=400,mLanguageBG[0].querySelectorAll(".mnav-tree__list-collapse.pl-0.active")[0].classList.remove("active"),mLanguageBG[0].style.backgroundColor="#00aa13",mLanguageWrapper.parentNode.classList.remove("open")}catch(e){return}}}),icon.forEach(function(e){e.addEventListener("click",function(e){return e.preventDefault(),e.stopPropagation(),null},!0)}),mLanguageWrapper.addEventListener("click",function(){this.parentNode.classList.toggle("open")},!1),desktopLanguage.addEventListener("click",function(){desktopLanguageWrapper.classList.toggle("active")},!1),dCSelector.addEventListener("click",function(){mLocation.classList.toggle("active")},!1),mLocation.addEventListener("click",function(){mCSelector.classList.toggle("active"),mCSelectorHandle.addEventListener("click",function(){mCSelector.classList.remove("active")},!1)},!1),desktopNavService.addEventListener("click",function(){desktopNavJoin.classList.contains("active")&&desktopNavJoin.classList.toggle("active"),this.classList.toggle("active")},!1),desktopNavJoin.addEventListener("click",function(){desktopNavService.classList.contains("active")&&desktopNavService.classList.toggle("active"),this.classList.toggle("active")},!1),footerDropdown1.addEventListener("click",function(){let e=[footerDropdown2,footerDropdown3,footerDropdown4,footerDropdown5];this.classList.toggle("open"),this.classList.toggle("pb-3"),e.forEach(function(e){e.classList.remove("open"),e.classList.remove("pb-3")})},!1),footerDropdown2.addEventListener("click",function(){let e=[footerDropdown1,footerDropdown3,footerDropdown4,footerDropdown5];this.classList.toggle("open"),this.classList.toggle("pb-3"),e.forEach(function(e){e.classList.remove("open"),e.classList.remove("pb-3")})},!1),footerDropdown3.addEventListener("click",function(){let e=[footerDropdown1,footerDropdown2,footerDropdown4,footerDropdown5];this.classList.toggle("open"),this.classList.toggle("pb-3"),e.forEach(function(e){e.classList.remove("open"),e.classList.remove("pb-3")})},!1),footerDropdown4.addEventListener("click",function(){let e=[footerDropdown1,footerDropdown2,footerDropdown3,footerDropdown5];this.classList.toggle("open"),this.classList.toggle("pb-3"),e.forEach(function(e){e.classList.remove("open"),e.classList.remove("pb-3")})},!1),footerDropdown5.addEventListener("click",function(){let e=[footerDropdown1,footerDropdown2,footerDropdown3,footerDropdown4];this.classList.toggle("open"),this.classList.toggle("pb-3"),e.forEach(function(e){e.classList.remove("open"),e.classList.remove("pb-3")})},!1);let slider=tns({container:".information-1__slider-wrapper",items:1,nav:!0,navPosition:"bottom",arrowKeys:!0,prevButton:!0,mouseDrag:!0,center:!0,loop:!1,responsive:{320:{edgePadding:20,items:1.045},769:{edgePadding:20,gutter:0,items:1}}}),sliderService1=tns({container:".service-1__slider-wrapper",items:2.08,nav:!0,navPosition:"bottom",prevButton:!0,mouseDrag:!0,slideBy:2.6,loop:!1,responsive:{320:{edgePadding:20,gutter:20},769:{edgePadding:200,gutter:0,items:4,nav:!1}}}),sliderService2=tns({container:".service-2__slider-wrapper",nav:!0,items:2.08,navPosition:"bottom",prevButton:!0,mouseDrag:!0,slideBy:2.6,loop:!1,responsive:{320:{edgePadding:20,gutter:20},769:{edgePadding:0,gutter:20,items:3,nav:!1}}}),sliderService3=tns({container:".service-3__slider-wrapper",nav:!0,items:2.08,controls:!1,navPosition:"none",mouseDrag:!0,slideBy:2.6,loop:!1,responsive:{320:{edgePadding:20,gutter:20,items:2.08},769:{edgePadding:20,gutter:5,fixedWidth:268,items:4.1,nav:!1}}}),sliderService4=tns({container:".service-4__slider-wrapper",nav:!0,items:2.08,controls:!1,navPosition:"none",mouseDrag:!0,slideBy:2.6,loop:!1,responsive:{320:{edgePadding:20,gutter:20,items:2.08},769:{edgePadding:20,gutter:5,fixedWidth:268,items:4,nav:!1}}}),sliderService5=tns({container:".service-5__slider-wrapper",nav:!0,items:2.08,controls:!1,navPosition:"none",mouseDrag:!0,slideBy:2.6,loop:!1,responsive:{320:{edgePadding:20,gutter:20,items:2.08},769:{edgePadding:20,gutter:5,fixedWidth:268,items:2,nav:!1}}}),scrollpos=window.scrollY,header=d.getElementById("header");function add_class_on_scroll(){header.classList.add("is-active")}function remove_class_on_scroll(){header.classList.remove("is-active")}window.addEventListener("scroll",function(){(scrollpos=window.scrollY)>10?add_class_on_scroll():remove_class_on_scroll()});