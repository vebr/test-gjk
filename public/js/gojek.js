!function(j){function b(a){a=a||"[data-key=\"same-heights\"]";const b=document.querySelectorAll(a);let c=b.length,d={};if(c){for(;c--;){const f=b[c],e=b[c].dataset.heightId;e&&(d[e]=d[e]||0,d[e]=f.clientHeight>d[e]?f.clientHeight:d[e])}for(let a=0,c=b.length;a<c;a++){const c=b[a].dataset.heightId;b[a].style.height=d[c]+"px"}}}j.slickSlider=function(a){let b={options:j.extend({trigger:""},a),sliderIds:{},arrowConfig:function(){const b=this,c=j(".js-arrow-slider-next"),d=j(".js-arrow-slider-prev"),e=(c,d,e)=>{((a,c)=>{let d=document.querySelector(a+" .slick-current");const e=j(a).attr("id");if(!b.sliderIds[e])return!1;for(let f=b.sliderIds[e].desktop?b.sliderIds[e].desktop:1;d&&0<f;)d=d[c+"Sibling"],f-=1;return d})(c,d)?j(e).removeClass("slick-disabled"):j(e).addClass("slick-disabled")};for(arrow of d)e(arrow.dataset.sliderPrev,"previous",arrow);c.on("click.nextArrow",function(){const a=this.dataset.sliderNext;j(a).slick("slickNext"),e(a,"next",this),e(a,"previous",j(this).siblings())}),d.on("click.prevArrow",function(){const a=this.dataset.sliderPrev;j(a).slick("slickPrev"),e(a,"next",j(this).siblings()),e(a,"previous",this)})},initSlider:function(){j(".js-slider-mobile").length&&j(".js-slider-mobile").each(function(){b.mobileConfig(j(this))}),j(".js-slider-desktop").length&&j(".js-slider-desktop").each(function(){b.desktopConfig(j(this))}),j(".js-slider-both").length&&j(".js-slider-both").each(function(){b.bothConfig(j(this))}),b.sliderController(),b.arrowConfig()},mobileConfig:function(b){let e=b.data("slider-mobile").split(","),f=b.data("slider-relation"),g="true"==e[0],a="true"==e[1],i=parseInt(e[2]),k="true"==e[3],l="true"==e[4],m="true"==e[5],c=parseInt(e[6])?parseInt(e[6]):1,d="true"==e[7],h=f||"";1<b.children().length&&(b.slick({slidesToShow:i,slidesToScroll:c,mobileFirst:!0,dots:g,infinite:m,autoplay:l,autoplaySpeed:4e3,arrows:a,asNavFor:h,fade:k,cssEase:k?"linear":"",adaptiveHeight:d,responsive:[{breakpoint:767,settings:"unslick"}]}),""===h||j(h).hasClass("slick-slider")||j(b).on("beforeChange",function(b,c,d,e){j(h+" .js-toggle").removeClass("active"),j(j(h+" .js-toggle")[e]).addClass("active")}),this.sliderIds[b[0].id]={mobile:i,desktop:void 0})},desktopConfig:function(b){let e=b.data("slider-desktop").split(","),f=b.data("slider-relation"),g="true"==e[0],a="true"==e[1],i=parseInt(e[2]),k="true"==e[3],l="true"==e[4],m="true"==e[5],c=parseInt(e[6])?parseInt(e[6]):1,d="true"==e[7],h=f||"";1<b.children().length&&(b.slick({dots:g,infinite:m,autoplay:l,autoplaySpeed:4e3,arrows:a,asNavFor:h,speed:300,prevArrow:"<button type=\"button\" class=\"slick-prev\"></button>",nextArrow:"<button type=\"button\" class=\"slick-next\"></button>",slidesToShow:i,slidesToScroll:c,fade:k,cssEase:k?"linear":"",adaptiveHeight:d,responsive:[{breakpoint:768,settings:"unslick"},{breakpoint:769,settings:{slidesToShow:i-2}}]}),""===h||j(h).hasClass("slick-slider")||j(b).on("beforeChange",function(b,c,d,e){j(h+" .js-toggle").removeClass("active"),j(j(h+" .js-toggle")[e]).addClass("active")}),this.sliderIds[b[0].id]={mobile:void 0,desktop:i})},bothConfig:function(e){let q=e.data("slider-desktop").split(","),s=e.data("slider-mobile").split(","),w=e.data("slider-relation")||"",a="true"==q[0],i="true"==q[1],n=parseInt(q[2]),l="true"==q[3],o="true"==q[4],c="true"==q[5],d=parseInt(q[6])?parseInt(q[6]):1,h="true"==q[7];var p="true"==s[0],r="true"==s[1],g=parseInt(s[2]);let t="true"==s[3],m="true"==s[4],f="true"==s[5],b=parseInt(s[6])?parseInt(s[6]):1,u="true"==s[7];1<e.children().length&&(e.slick({slidesToShow:n,slidesToScroll:d,dots:a,infinite:c,autoplay:o,autoplaySpeed:4e3,arrows:i,asNavFor:w,fade:l,cssEase:l?"linear":"",prevArrow:"<button type=\"button\" class=\"slick-prev\"></button>",nextArrow:"<button type=\"button\" class=\"slick-next\"></button>",adaptiveHeight:h,responsive:[{breakpoint:768,settings:{dots:p,arrows:r,slidesToShow:g,slidesToScroll:b,fade:t,cssEase:t?"linear":"",infinite:f,autoplay:m,autoplaySpeed:4e3,adaptiveHeight:u}}]}),""===w||j(w).hasClass("slick-slider")||j(e).on("beforeChange",function(a,b,c,d){j(w+" .js-toggle").removeClass("active"),j(j(w+" .js-toggle")[d]).addClass("active")}),this.sliderIds[e[0].id]={mobile:g,desktop:n})},sliderController:function(){j(".js-slider-controller").length&&j(document).on("click",".js-slider-controller",function(){let a=j(this).data("slider-controller").split(","),b=a[0],c=parseInt(a[1]);j(b).slick("slickGoTo",c)})}};return{inits:b.initSlider}},j.slickSlider().inits();const d=new LazyLoad({elements_selector:".lazy"});d&&d.update(),window.onload=function(){const a=document.querySelectorAll(".defer");for(let b=0;b<a.length;b++)a[b].dataset.src&&a[b].setAttribute("src",a[b].dataset.src),a[b].dataset.srcset&&a[b].setAttribute("srcset",a[b].dataset.srcset)};const e=function(){return 768>=j(window).width()},f=document.querySelector(".header > .container");let g=window.getComputedStyle(f)||f.currentStyle;document.documentElement.style.setProperty("--language-right",`${parseInt(g.marginRight.replace(/px/,""))+29+"px"} `),window.addEventListener("resize",()=>{document.documentElement.style.setProperty("--language-right",`${parseInt(g.marginRight.replace(/px/,""))+29+"px"} `)}),j("#step-fb-intro").length&&(j("#step-fb-close").length&&j("#step-fb-close").on("click",function(a){a.preventDefault(),j("#step-fb-intro").hasClass("active")&&j("#step-fb-intro").removeClass("active")}),j("#step-fb-open").length&&j("#step-fb-open").on("click",function(a){a.preventDefault(),j("#step-fb-intro").addClass("active")}),j(window).scroll(function(){350<=j(this).scrollTop()?(j("#step-fb-open").show(),j("#step-fb-intro").show(),j("#step-fb-open").offset().top+j("#step-fb-open").height()>=j(".c-footer").offset().top-60&&(j("#step-fb-open").css("opacity",0),j("#step-fb-intro").css("opacity",0)),j(document).scrollTop()+window.innerHeight<j(".c-footer").offset().top&&(j("#step-fb-open").css("opacity",1),j("#step-fb-intro").css("opacity",1))):(j("#step-fb-open").hide(),j("#step-fb-intro").hide())})),j(".js-secondary-nav-mobile").length&&j(".js-secondary-nav-mobile").on("click",function(){j(".js-secondary-nav-mobile").toggleClass("active")});const a=j("#go-language-switcher > *"),h=j("#go-language-switcher-2 > *"),c=j("#go-language-switcher-form");if(a,h.on("click",function(a){const b=a.target.dataset.lang;c.find("input[name=\"language\"]").val(b),c.submit()}),j.fn.toggler=function(){this.on("click",function(a){a.preventDefault(),$el=j(this),$el_parent=".js-toggler-parent",$el.parents($el_parent+":first").toggleClass("active").siblings(".active").removeClass("active")})},j(".js-toggler").toggler(),j(".js-toggle").length&&j(".js-toggle").on("click",function(){let a=j(this).data("parent");j(this).data("target"),j(a+" .js-toggle").removeClass("active"),j(this).addClass("active")}),j(".js-show-popup").length&&j(".js-close-popup").length&&(j(".js-show-popup").bind("click",function(){let a=j(this).data("id"),b=j("#"+a).html();j("#js-popup-content").html(b),j("#js-popup").addClass("show"),j("body").addClass("u-overflow--hidden")}),j(".js-close-popup").bind("click",function(){j("#js-popup").removeClass("show"),j("#js-popup-content").html(""),j("body").removeClass("u-overflow--hidden")})),j("[data-toggle]").length&&j("[data-toggle]").on("click",function(){let a=j(this).data("toggle"),b=j(this).data("toggle-inactive");b?(j(b).removeClass("active"),j(a).toggleClass("active")):j(a).toggleClass("active")}),j.fn.navclose=function(){let b=j(this),c=j("#c-link-menu-lang"),d=j("#link-item-service"),a=j("#link-item-join"),f=j("#f-location");b.click(function(b){j(b.target).is("#c-link-menu-lang, #c-link-menu-lang *, .js-toggler-parent *")||(c.removeClass("active"),j("#c-language").removeClass("active"),f.removeClass("active"),d.removeClass("active"),d.hasClass("active")||e()||j(".c-secondary-navbar").css("top","80px"),a.removeClass("active"),d.hasClass("active")||e()||j(".c-secondary-navbar").css("top","80px"))})},j(document).navclose(),j.fn.animateScrollTo=function(){let b=j(".c-secondary-navbar"),c=j(".header"),d=b.length?b.innerHeight()+c.innerHeight():c.innerHeight();d+=32;let e=window.location.hash;if(j(e).length){let a=j("[id="+e.replace(/#/g,"")+"]");j("html, body").animate({scrollTop:a.offset().top-d},"slow")}j("a[href*=\"#\"]:not([href=\"#\"])").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){let a=j(this.hash);if((a=a.length?a:j("[name="+this.hash.slice(1)+"]")).length)return j("html, body").animate({scrollTop:a.offset().top-d},"slow"),!1}})},j(document).ready(function(){j(document).animateScrollTo()}),j(".c-secondary-navbar").length&&j(".header").siblings(".c-secondary-navbar")&&j(".header").css("border-bottom","1px solid #e8e8e8"),j(".js-menu-secondary").length&&j(".js-menu-secondary").on("click",function(){let a,b;j("#c-service-menu-desktop").length&&(a=document.querySelector("#c-service-menu-desktop").clientHeight),j("#c-join-menu-desktop").length&&(b=document.querySelector("#c-join-menu-desktop").clientHeight),j(this).parent()&&j(this).parent().hasClass("active")&&"link-item-service"==j(this).parent().attr("id")?(j(".c-secondary-navbar").css("top",`calc(80px + ${a}px)`),j(".header").css("border-bottom","1px solid #FFFFFF")):j(this).parent()&&j(this).parent().hasClass("active")&&"link-item-join"==j(this).parent().attr("id")?(j(".c-secondary-navbar").css("top",`calc(80px + ${b}px)`),j(".header").css("border-bottom","1px solid #FFFFFF")):e()?j(".c-secondary-navbar").css("top","56px"):(j(".c-secondary-navbar").css("top","80px"),j(".header").css("border-bottom","1px solid #e8e8e8"))}),j(".js-side-menu").length&&j(".js-side-menu").on("click",function(){let a=j(this).data("target");j("#"+a).hasClass("active")?j("#"+a).removeClass("active"):j("#"+a).addClass("active")}),!e()){let b,c=j(".header"),d=j(".c-secondary-navbar");j(window).scroll(function(){let a=j(this).scrollTop();b=c.length&&d.length?d:c,a>=50?b.addClass("active"):b.removeClass("active")})}window.FullVideo=class{constructor(a,b){return(this.video=document.getElementById(a),!!this.video)&&void(this.iframeContainer=this.video.querySelector(".js-iframe-container"),this.placeholder=this.video.querySelector("#"+b),this.playBtn=this.video.querySelector(".js-play-btn"),this.videoCover=this.video.querySelector(".js-video-cover"),this.player={},this.check=0,this.handlePlayBtnClick=this.handlePlayBtnClick.bind(this),this.toggleCover=this.toggleCover.bind(this),this.togglePlayBtn=this.toggleShowPlayBtn.bind(this),this.hidePlaceholder=this.hidePlaceholder.bind(this),this.onReady=this.onReady.bind(this),this.onError=this.onError.bind(this),this.playBtn.addEventListener("click",this.handlePlayBtnClick))}static getYoutubeId(a){let b="";return void 0===(a=a.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?a:(b=a[2].split(/[^0-9a-z_\-]/i))[0]}handlePlayBtnClick(){this.toggleShowPlayBtn(),this.toggleCover(),this.hidePlaceholder(),this.video.classList.remove("d-none"),this.iframeContainer.classList.remove("d-none"),this.player.playVideo()}getEmbedData(){return!!this.placeholder&&this.placeholder.dataset.embed}toggleShowPlayBtn(){this.playBtn.classList.contains("d-none")?this.playBtn.classList.remove("d-none"):this.playBtn.classList.add("d-none")}toggleCover(){this.videoCover.classList.contains("d-none")?this.videoCover.classList.remove("d-none"):this.videoCover.classList.add("d-none")}hidePlaceholder(){this.placeholder.classList.remove("card__btn-play--active")}onReady(a){if(this.player=a.target,0===this.check)return this.player.playVideo(),this.check=1,void this.player.stopVideo()}onError(a){5!==a.data&&this.toggleShowPlayBtn()}};class i{constructor({id:a}){this.id=a,this.el=document.getElementById(this.id),this.links=this.el.querySelectorAll("."+this.id+"--has-child"),this.backs=this.el.querySelectorAll("."+this.id+"__back"),this.reset=this.el.querySelector("#"+this.id+"__reset"),this.hamburger=document.getElementById("c-hamburger"),this.handleItemClick=this.handleItemClick.bind(this),this.handleBackClick=this.handleBackClick.bind(this),this.handleReset=this.handleReset.bind(this),this.links.forEach(a=>{a.addEventListener("click",this.handleItemClick)}),this.backs.forEach(a=>{a.addEventListener("click",this.handleBackClick)}),this.reset&&this.reset.addEventListener("click",this.handleReset),this.hamburger&&this.hamburger.addEventListener("click",this.handleReset),this.handleReset()}handleItemClick(a){a.preventDefault();const b=a.target.nextElementSibling;if(b){const a=this.el.querySelector(".parent"),c=this.el.querySelector("."+this.id+"__list.mnav-active");c&&c.classList.remove("mnav-active"),a.classList.remove("parent"),a.classList.add("root"),b.parentElement.parentElement.classList.add("parent"),b.classList.add("mnav-active")}}handleBackClick(a){a.preventDefault();const b=a.target.parentElement.parentElement,c=b.parentElement.parentElement,d=c.parentElement.parentElement;d.classList.remove("root"),d.classList.add("parent"),c.classList.remove("parent"),c.classList.add("mnav-active"),b.classList.remove("mnav-active")}handleReset(a){a&&a.preventDefault(),this.el.querySelectorAll(".mnav-active").forEach(a=>{a.classList.remove("mnav-active")}),this.el.querySelectorAll(".parent").forEach(a=>{a.classList.remove("parent")}),this.el.querySelectorAll(".root").forEach(a=>{a.classList.remove("root")}),this.el.classList.add("parent"),this.el.querySelector("."+this.id+"__container").classList.add("parent"),this.el.querySelector("."+this.id+"__list").classList.add("mnav-active")}}document.getElementById("c-treemenu")&&(window.multinav=new class extends i{constructor(a){super(a),this.resetToggler=this.resetToggler.bind(this)}resetToggler(){this.el.querySelectorAll(".js-toggler-parent").forEach(a=>{a.classList.remove("active")})}handleBackClick(a){super.handleBackClick(a),this.resetToggler()}handleReset(a){super.handleReset(a),this.resetToggler()}}({id:"c-treemenu"})),window.countrySelector=new class{constructor(a){this.id=a,this.el=document.getElementById(a),this.scrim=this.el.querySelector(".c-bottom-sheet__scrim"),this.handle=this.el.querySelector(".c-bottom-sheet__handle"),this.activate=this.activate.bind(this),this.deactivate=this.deactivate.bind(this),this.scrim.addEventListener("click",this.deactivate),this.handle.addEventListener("click",this.deactivate)}activate(a){a&&a.preventDefault(),this.el.classList.add("active")}deactivate(){this.el.classList.remove("active")}}("country-selector"),document.getElementById("country-select-button").addEventListener("click",countrySelector.activate),window.addEventListener("resize",function(){b()}),window.addEventListener("load",function(){b()})}(jQuery),function(b){function e(b){b.preventDefault(),c(),a.classList.add(k)}function c(){a.classList.remove("transport-logistics","daily-needs","food-fmcg","products","news-entertainment","payments","business")}function d(b){b.preventDefault();const d=b.target.dataset.navbg;d&&(l="Daily Needs"===d||"Kebutuhan Harian"===d?"daily-needs":"Products"===d||"Produk"===d||"Shopping Cart"===d||"Keranjang Belanja"===d||"Food & FMCG"===d||"Food and FMCG"===d||"Makan & Belanja"===d||"Makan dan Belanja"===d?"food-fmcg":"News & Entertainment"===d||"News and Entertainment"===d||"Berita & Hiburan"===d||"Berita dan Hiburan"===d?"news-entertainment":"Payments"===d||"Pembayaran"===d?"payments":"Business"===d||"Bisnis"===d?"business":"Transport & Logistic"===d||"Transport & Logistics"===d||"Transport and Logistics"===d||"Transportasi & Logistik"===d||"Transportasi dan Logistik"===d||"Services"===d||"Layanan"===d||"Gojek"===d?"transport-logistics":k,c(),a.classList.add(l))}const f=b(".c-treemenu--has-child[data-navbg=\"Gojek\"]"),g=b(".c-treemenu__back[data-navbg=\"Current\"]"),h=b(".c-treemenu__link.js-toggler"),i=b("#c-hamburger"),a=document.querySelector("body"),j=a.classList,k=j[j.length-1];let l=k;i.on("click",e),g.on("click",e),f.on("click",d),h.on("click",d)}(jQuery);