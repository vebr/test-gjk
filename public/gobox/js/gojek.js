// I'm using gojek default javascript, I only remove flybanner since i didn't use it, and i will change flybanner to add to home screen
!function(e) {
  e.slickSlider = function(t) {
    let s = {
      options: e.extend({
        trigger: ""
      }, t),
      sliderIds: {},
      arrowConfig: function() {
        const t = this,
          s = e(".js-arrow-slider-next"),
          i = e(".js-arrow-slider-prev"),
          a = (s, i, a) => {
            ((s, i, a) => {
              let n = document.querySelector(s + " .slick-current");
              const o = e(s).attr("id");
              if (!t.sliderIds[o]) return !1;
              let l = t.sliderIds[o].desktop ? t.sliderIds[o].desktop : 1;
              for (; n && l > 0;) n = n[i + "Sibling"], l -= 1;
              return n
            })(s, i) ? e(a).removeClass("slick-disabled"): e(a).addClass("slick-disabled")
          };
        for (arrow of i) a(arrow.dataset.sliderPrev, "previous", arrow);
        s.on("click.nextArrow", function(t) {
          const s = this.dataset.sliderNext;
          e(s).slick("slickNext"), a(s, "next", this), a(s, "previous", e(this).siblings())
        }), i.on("click.prevArrow", function(t) {
          const s = this.dataset.sliderPrev;
          e(s).slick("slickPrev"), a(s, "next", e(this).siblings()), a(s, "previous", this)
        })
      },
      initSlider: function() {
        e(".js-slider-mobile").length && e(".js-slider-mobile").each(function() {
          s.mobileConfig(e(this))
        }), e(".js-slider-desktop").length && e(".js-slider-desktop").each(function() {
          s.desktopConfig(e(this))
        }), e(".js-slider-both").length && e(".js-slider-both").each(function() {
          s.bothConfig(e(this))
        }), s.sliderController(), s.arrowConfig()
      },
      mobileConfig: function(t) {
        let s = t.data("slider-mobile").split(","),
          i = t.data("slider-relation"),
          a = "true" == s[0],
          n = "true" == s[1],
          o = parseInt(s[2]),
          l = "true" == s[3],
          r = "true" == s[4],
          c = "true" == s[5],
          d = parseInt(s[6]) ? parseInt(s[6]) : 1,
          h = "true" == s[7],
          p = i || "";
        t.children().length > 1 && (t.slick({
          slidesToShow: o,
          slidesToScroll: d,
          mobileFirst: !0,
          dots: a,
          infinite: c,
          autoplay: r,
          autoplaySpeed: 4e3,
          arrows: n,
          asNavFor: p,
          fade: l,
          cssEase: l ? "linear" : "",
          adaptiveHeight: h,
          responsive: [{
            breakpoint: 767,
            settings: "unslick"
          }]
        }), "" === p || e(p).hasClass("slick-slider") || e(t).on("beforeChange", function(t, s, i, a) {
          e(p + " .js-toggle").removeClass("active"), e(e(p + " .js-toggle")[a]).addClass("active")
        }), this.sliderIds[t[0].id] = {
          mobile: o,
          desktop: void 0
        })
      },
      desktopConfig: function(t) {
        let s = t.data("slider-desktop").split(","),
          i = t.data("slider-relation"),
          a = "true" == s[0],
          n = "true" == s[1],
          o = parseInt(s[2]),
          l = "true" == s[3],
          r = "true" == s[4],
          c = "true" == s[5],
          d = parseInt(s[6]) ? parseInt(s[6]) : 1,
          h = "true" == s[7],
          p = o - 2,
          u = i || "";
        t.children().length > 1 && (t.slick({
          dots: a,
          infinite: c,
          autoplay: r,
          autoplaySpeed: 4e3,
          arrows: n,
          asNavFor: u,
          speed: 300,
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
          slidesToShow: o,
          slidesToScroll: d,
          fade: l,
          cssEase: l ? "linear" : "",
          adaptiveHeight: h,
          responsive: [{
            breakpoint: 768,
            settings: "unslick"
          }, {
            breakpoint: 769,
            settings: {
              slidesToShow: p
            }
          }]
        }), "" === u || e(u).hasClass("slick-slider") || e(t).on("beforeChange", function(t, s, i, a) {
          e(u + " .js-toggle").removeClass("active"), e(e(u + " .js-toggle")[a]).addClass("active")
        }), this.sliderIds[t[0].id] = {
          mobile: void 0,
          desktop: o
        })
      },
      bothConfig: function(t) {
        let s = t.data("slider-desktop").split(","),
          i = t.data("slider-mobile").split(","),
          a = t.data("slider-relation") || "",
          n = "true" == s[0],
          o = "true" == s[1],
          l = parseInt(s[2]),
          r = "true" == s[3],
          c = "true" == s[4],
          d = "true" == s[5],
          h = parseInt(s[6]) ? parseInt(s[6]) : 1,
          p = "true" == s[7];
        var u = "true" == i[0],
          g = "true" == i[1],
          v = parseInt(i[2]);
        let m = "true" == i[3],
          f = "true" == i[4],
          b = "true" == i[5],
          y = parseInt(i[6]) ? parseInt(i[6]) : 1,
          k = "true" == i[7];
        t.children().length > 1 && (t.slick({
          slidesToShow: l,
          slidesToScroll: h,
          dots: n,
          infinite: d,
          autoplay: c,
          autoplaySpeed: 4e3,
          arrows: o,
          asNavFor: a,
          fade: r,
          cssEase: r ? "linear" : "",
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
          adaptiveHeight: p,
          responsive: [{
            breakpoint: 768,
            settings: {
              dots: u,
              arrows: g,
              slidesToShow: v,
              slidesToScroll: y,
              fade: m,
              cssEase: m ? "linear" : "",
              infinite: b,
              autoplay: f,
              autoplaySpeed: 4e3,
              adaptiveHeight: k
            }
          }]
        }), "" === a || e(a).hasClass("slick-slider") || e(t).on("beforeChange", function(t, s, i, n) {
          e(a + " .js-toggle").removeClass("active"), e(e(a + " .js-toggle")[n]).addClass("active")
        }), this.sliderIds[t[0].id] = {
          mobile: v,
          desktop: l
        })
      },
      sliderController: function() {
        e(".js-slider-controller").length && e(document).on("click", ".js-slider-controller", function() {
          let t = e(this).data("slider-controller").split(","),
            s = t[0],
            i = parseInt(t[1]);
          e(s).slick("slickGoTo", i)
        })
      }
    };
    return {
      inits: s.initSlider
    }
  }, e.slickSlider().inits();
  const t = new LazyLoad({
    elements_selector: ".lazy"
  });
  t && t.update(), window.onload = function() {
    const e = document.querySelectorAll(".defer");
    for (let t = 0; t < e.length; t++) e[t].dataset.src && e[t].setAttribute("src", e[t].dataset.src), e[t].dataset.srcset && e[t].setAttribute("srcset", e[t].dataset.srcset)
  };
  const s = function() {
      return e(window).width() <= 768
    },
    i = document.querySelector(".header > .container");
  let a = window.getComputedStyle(i) || i.currentStyle;
  document.documentElement.style.setProperty("--language-right", `${parseInt(a.marginRight.replace(/px/,""))+29+"px"} `), window.addEventListener("resize", () => { // I modified this line for adjusting the right positiion, because i use bootstrap 4 instead of pure css and the width ot the container between them is different
    document.documentElement.style.setProperty("--language-right", `${parseInt(a.marginRight.replace(/px/,""))+29+"px"} `)
  }), e("#step-fb-intro").length && (e("#step-fb-close").length && e("#step-fb-close").on("click", function(t) {
    t.preventDefault(), e("#step-fb-intro").hasClass("active") && e("#step-fb-intro").removeClass("active")
  }), e("#step-fb-open").length && e("#step-fb-open").on("click", function(t) {
    t.preventDefault(), e("#step-fb-intro").addClass("active")
  }), e(window).scroll(function() {
    e(this).scrollTop() >= 350 ? (e("#step-fb-open").show(), e("#step-fb-intro").show(), e("#step-fb-open").offset().top + e("#step-fb-open").height() >= e(".c-footer").offset().top - 60 && (e("#step-fb-open").css("opacity", 0), e("#step-fb-intro").css("opacity", 0)), e(document).scrollTop() + window.innerHeight < e(".c-footer").offset().top && (e("#step-fb-open").css("opacity", 1), e("#step-fb-intro").css("opacity", 1))) : (e("#step-fb-open").hide(), e("#step-fb-intro").hide())
  })), e(".js-secondary-nav-mobile").length && e(".js-secondary-nav-mobile").on("click", function() {
    e(".js-secondary-nav-mobile").toggleClass("active")
  });
  const n = e("#go-language-switcher > *"),
    c = e("#go-language-switcher-2 > *"), // I add more id for language switcher to get point from lighthouse
    o = e("#go-language-switcher-form");
  if (n,c.on("click", function(e) {
      const t = e.target.dataset.lang;
      o.find('input[name="language"]').val(t), o.submit()
    }), e.fn.toggler = function() {
      this.on("click", function(t) {
        t.preventDefault(), $el = e(this), $el_parent = ".js-toggler-parent", $el.parents($el_parent + ":first").toggleClass("active").siblings(".active").removeClass("active")
      })
    }, e(".js-toggler").toggler(), e(".js-toggle").length && e(".js-toggle").on("click", function() {
      let t = e(this).data("parent");
      e(this).data("target"), e(t + " .js-toggle").removeClass("active"), e(this).addClass("active")
    }), e(".js-show-popup").length && e(".js-close-popup").length && (e(".js-show-popup").bind("click", function() {
      let t = e(this).data("id"),
        s = e("#" + t).html();
      e("#js-popup-content").html(s), e("#js-popup").addClass("show"), e("body").addClass("u-overflow--hidden")
    }), e(".js-close-popup").bind("click", function() {
      e("#js-popup").removeClass("show"), e("#js-popup-content").html(""), e("body").removeClass("u-overflow--hidden")
    })), e("[data-toggle]").length && e("[data-toggle]").on("click", function() {
      let t = e(this).data("toggle"),
        s = e(this).data("toggle-inactive");
      s ? (e(s).removeClass("active"), e(t).toggleClass("active")) : e(t).toggleClass("active")
    }), e.fn.navclose = function() {
      let t = e(this),
        i = e("#c-link-menu-lang"),
        a = e("#link-item-service"),
        n = e("#link-item-join"),
        o = e("#f-location");
      t.click(function(t) {
        e(t.target).is("#c-link-menu-lang, #c-link-menu-lang *, .js-toggler-parent *") || (i.removeClass("active"), e("#c-language").removeClass("active"), o.removeClass("active"), a.removeClass("active"), a.hasClass("active") || s() || e(".c-secondary-navbar").css("top", "80px"), n.removeClass("active"), a.hasClass("active") || s() || e(".c-secondary-navbar").css("top", "80px"))
      })
    }, e(document).navclose(), e.fn.animateScrollTo = function() {
      let t = e(".c-secondary-navbar"),
        s = e(".header"),
        i = t.length ? t.innerHeight() + s.innerHeight() : s.innerHeight();
      i += 32;
      let a = window.location.hash;
      if (e(a).length) {
        let t = e("[id=" + a.replace(/#/g, "") + "]");
        e("html, body").animate({
          scrollTop: t.offset().top - i
        }, "slow")
      }
      e('a[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
          let t = e(this.hash);
          if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length) return e("html, body").animate({
            scrollTop: t.offset().top - i
          }, "slow"), !1
        }
      })
    }, e(document).ready(function() {
      e(document).animateScrollTo()
    }), e(".c-secondary-navbar").length && e(".header").siblings(".c-secondary-navbar") && e(".header").css("border-bottom", "1px solid #e8e8e8"), e(".js-menu-secondary").length && e(".js-menu-secondary").on("click", function() {
      let t, i;
      e("#c-service-menu-desktop").length && (t = document.querySelector("#c-service-menu-desktop").clientHeight), e("#c-join-menu-desktop").length && (i = document.querySelector("#c-join-menu-desktop").clientHeight), e(this).parent() && e(this).parent().hasClass("active") && "link-item-service" == e(this).parent().attr("id") ? (e(".c-secondary-navbar").css("top", `calc(80px + ${t}px)`), e(".header").css("border-bottom", "1px solid #FFFFFF")) : e(this).parent() && e(this).parent().hasClass("active") && "link-item-join" == e(this).parent().attr("id") ? (e(".c-secondary-navbar").css("top", `calc(80px + ${i}px)`), e(".header").css("border-bottom", "1px solid #FFFFFF")) : s() ? e(".c-secondary-navbar").css("top", "56px") : (e(".c-secondary-navbar").css("top", "80px"), e(".header").css("border-bottom", "1px solid #e8e8e8"))
    }), e(".js-side-menu").length && e(".js-side-menu").on("click", function() {
      let t = e(this).data("target");
      e("#" + t).hasClass("active") ? e("#" + t).removeClass("active") : e("#" + t).addClass("active")
    }), !s()) {
    let t, s = 50,
      i = e(".header"),
      a = e(".c-secondary-navbar");
    e(window).scroll(function() {
      let n = e(this).scrollTop();
      t = i.length && a.length ? a : i, n >= s ? t.addClass("active") : t.removeClass("active")
    })
  }
  window.FullVideo = class {
    constructor(e, t) {
      if (this.video = document.getElementById(e), !this.video) return !1;
      this.iframeContainer = this.video.querySelector(".js-iframe-container"), this.placeholder = this.video.querySelector("#" + t), this.playBtn = this.video.querySelector(".js-play-btn"), this.videoCover = this.video.querySelector(".js-video-cover"), this.player = {}, this.check = 0, this.handlePlayBtnClick = this.handlePlayBtnClick.bind(this), this.toggleCover = this.toggleCover.bind(this), this.togglePlayBtn = this.toggleShowPlayBtn.bind(this), this.hidePlaceholder = this.hidePlaceholder.bind(this), this.onReady = this.onReady.bind(this), this.onError = this.onError.bind(this), this.playBtn.addEventListener("click", this.handlePlayBtnClick)
    }
    static getYoutubeId(e) {
      let t = "";
      return void 0 !== (e = e.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? (t = e[2].split(/[^0-9a-z_\-]/i))[0] : e
    }
    handlePlayBtnClick() {
      this.toggleShowPlayBtn(), this.toggleCover(), this.hidePlaceholder(), this.video.classList.remove("d-none"), this.iframeContainer.classList.remove("d-none"), this.player.playVideo()
    }
    getEmbedData() {
      return !!this.placeholder && this.placeholder.dataset.embed
    }
    toggleShowPlayBtn() {
      this.playBtn.classList.contains("d-none") ? this.playBtn.classList.remove("d-none") : this.playBtn.classList.add("d-none")
    }
    toggleCover() {
      this.videoCover.classList.contains("d-none") ? this.videoCover.classList.remove("d-none") : this.videoCover.classList.add("d-none")
    }
    hidePlaceholder() {
      this.placeholder.classList.remove("card__btn-play--active")
    }
    onReady(e) {
      if (this.player = e.target, 0 === this.check) return this.player.playVideo(), this.check = 1, void this.player.stopVideo()
    }
    onError(e) {
      5 !== e.data && this.toggleShowPlayBtn()
    }
  };
  class l {
    constructor({
      id: e
    }) {
      this.id = e, this.el = document.getElementById(this.id), this.links = this.el.querySelectorAll("." + this.id + "--has-child"), this.backs = this.el.querySelectorAll("." + this.id + "__back"), this.reset = this.el.querySelector("#" + this.id + "__reset"), this.hamburger = document.getElementById("c-hamburger"), this.handleItemClick = this.handleItemClick.bind(this), this.handleBackClick = this.handleBackClick.bind(this), this.handleReset = this.handleReset.bind(this), this.links.forEach(e => {
        e.addEventListener("click", this.handleItemClick)
      }), this.backs.forEach(e => {
        e.addEventListener("click", this.handleBackClick)
      }), this.reset && this.reset.addEventListener("click", this.handleReset), this.hamburger && this.hamburger.addEventListener("click", this.handleReset), this.handleReset()
    }
    handleItemClick(e) {
      e.preventDefault();
      const t = e.target.nextElementSibling;
      if (t) {
        const e = this.el.querySelector(".parent"),
          s = this.el.querySelector("." + this.id + "__list.mnav-active");
        s && s.classList.remove("mnav-active"), e.classList.remove("parent"), e.classList.add("root"), t.parentElement.parentElement.classList.add("parent"), t.classList.add("mnav-active")
      }
    }
    handleBackClick(e) {
      e.preventDefault();
      const t = e.target.parentElement.parentElement,
        s = t.parentElement.parentElement,
        i = s.parentElement.parentElement;
      i.classList.remove("root"), i.classList.add("parent"), s.classList.remove("parent"), s.classList.add("mnav-active"), t.classList.remove("mnav-active")
    }
    handleReset(e) {
      e && e.preventDefault(), this.el.querySelectorAll(".mnav-active").forEach(e => {
        e.classList.remove("mnav-active")
      }), this.el.querySelectorAll(".parent").forEach(e => {
        e.classList.remove("parent")
      }), this.el.querySelectorAll(".root").forEach(e => {
        e.classList.remove("root")
      }), this.el.classList.add("parent"), this.el.querySelector("." + this.id + "__container").classList.add("parent"), this.el.querySelector("." + this.id + "__list").classList.add("mnav-active")
    }
  }

  function r(e) {
    e = e || '[data-key="same-heights"]';
    const t = document.querySelectorAll(e);
    let s = t.length,
      i = {};
    if (s) {
      for (; s--;) {
        const e = t[s],
          a = t[s].dataset.heightId;
        a && (i[a] = i[a] || 0, i[a] = e.clientHeight > i[a] ? e.clientHeight : i[a])
      }
      for (let e = 0, s = t.length; e < s; e++) {
        const s = t[e].dataset.heightId;
        t[e].style.height = i[s] + "px"
      }
    }
  }
  document.getElementById("c-treemenu") && (window.multinav = new class extends l {
    constructor(e) {
      super(e), this.resetToggler = this.resetToggler.bind(this)
    }
    resetToggler() {
      this.el.querySelectorAll(".js-toggler-parent").forEach(e => {
        e.classList.remove("active")
      })
    }
    handleBackClick(e) {
      super.handleBackClick(e), this.resetToggler()
    }
    handleReset(e) {
      super.handleReset(e), this.resetToggler()
    }
  }({
    id: "c-treemenu"
  })), window.countrySelector = new class {
    constructor(e) {
      this.id = e, this.el = document.getElementById(e), this.scrim = this.el.querySelector(".c-bottom-sheet__scrim"), this.handle = this.el.querySelector(".c-bottom-sheet__handle"), this.activate = this.activate.bind(this), this.deactivate = this.deactivate.bind(this), this.scrim.addEventListener("click", this.deactivate), this.handle.addEventListener("click", this.deactivate)
    }
    activate(e) {
      e && e.preventDefault(), this.el.classList.add("active")
    }
    deactivate() {
      this.el.classList.remove("active")
    }
  }("country-selector"), document.getElementById("country-select-button").addEventListener("click", countrySelector.activate), window.addEventListener("resize", function() {
    r()
  }), window.addEventListener("load", function() {
    r()
  })
}(jQuery),
function(e) {
  const t = e('.c-treemenu--has-child[data-navbg="Gojek"]'),
    s = e('.c-treemenu__back[data-navbg="Current"]'),
    i = e(".c-treemenu__link.js-toggler"),
    a = e("#c-hamburger"),
    n = document.querySelector("body"),
    o = n.classList,
    l = o[o.length - 1];
  let r = l;

  function c(e) {
    e.preventDefault(), d(), n.classList.add(l)
  }

  function d() {
    n.classList.remove("transport-logistics", "daily-needs", "food-fmcg", "products", "news-entertainment", "payments", "business")
  }

  function h(e) {
    e.preventDefault();
    const t = e.target.dataset.navbg;
    if (t) {
      switch (t) {
        case "Daily Needs":
        case "Kebutuhan Harian":
          r = "daily-needs";
          break;
        case "Products":
        case "Produk":
        case "Shopping Cart":
        case "Keranjang Belanja":
        case "Food & FMCG":
        case "Food and FMCG":
        case "Makan & Belanja":
        case "Makan dan Belanja":
          r = "food-fmcg";
          break;
        case "News & Entertainment":
        case "News and Entertainment":
        case "Berita & Hiburan":
        case "Berita dan Hiburan":
          r = "news-entertainment";
          break;
        case "Payments":
        case "Pembayaran":
          r = "payments";
          break;
        case "Business":
        case "Bisnis":
          r = "business";
          break;
        case "Transport & Logistic":
        case "Transport & Logistics":
        case "Transport and Logistics":
        case "Transportasi & Logistik":
        case "Transportasi dan Logistik":
        case "Services":
        case "Layanan":
        case "Gojek":
          r = "transport-logistics";
          break;
        default:
          r = l
      }
      d(), n.classList.add(r)
    }
  }
  a.on("click", c), s.on("click", c), t.on("click", h), i.on("click", h)
}(jQuery);