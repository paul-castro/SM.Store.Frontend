$(document).ready((function(){$(window).scroll(()=>{var e=$(this).scrollTop();$(".widgets").height();$(".widgets").css("margin-bottom","-"+e+"px")});const e=$(".burger-menu, .nav__mobile, .nav__mobile-sub, .nav__mobile *, .nav__mobile-sub *");function n(){$(".nav__mobile-container").css("display","none")}$(document).mouseup((function(o){$(window);e.is(o.target)||($(".burger-menu-default").prop("hidden",!1),$(".burger-menu-close").prop("hidden",!0),$(".nav__mobile").css("display","none"),$(".nav__mobile-sub").css("display","none"),$(".nav__mobile").css("left","12px"),n())})),$(window).on("resize",(function(){$(this);$(".burger-menu-default").prop("hidden",!1),$(".burger-menu-close").prop("hidden",!0),$(".nav__mobile").css("display","none"),$(".nav__mobile-sub").css("display","none"),$(".nav__mobile").css("left","12px"),n()})),$(".burger-menu").click((function(){"none"==$(".nav__mobile").css("display")?($(".nav__mobile").css("display","flex"),$(".burger-menu-default").prop("hidden",!0),$(".burger-menu-close").prop("hidden",!1)):($(".nav__mobile").css("display","none"),$(".nav__mobile-sub").css("display","none"),$(".burger-menu-default").prop("hidden",!1),$(".burger-menu-close").prop("hidden",!0),$(".nav__mobile").css("left","12px"),n())})),$(".nav__mobile-upper-item").click((function(){var e=$(this).data("item");$(".nav__mobile").css("left","-360px"),$(".nav__mobile-sub").css("display","flex"),$(".nav__mobile--"+e).css("display","flex"),$(".nav__mobile-control-back").data("item",e)})),$(".nav__mobile-control-back").click((function(){$(".nav__mobile").css("left","12px"),$(".nav__mobile-sub").css("display","none"),n()})),$(".modal .modal__close").click((function(){$(this).parent().parent().removeClass("active")})),$(".modal").click((function(){$(this).removeClass("active")})),$(".card--service-btn").click((function(){$(".modal").addClass("active")})),$(".nav__dropdown-controls--right").click((function(){$(this).css("opacity","0"),$(".nav__dropdown-controls--left").css("opacity","1"),$(".card--menu-categories:nth-of-type(1), .card--menu-categories:nth-of-type(2), .card--menu-categories:nth-of-type(3)").css("display","none"),$(".card--menu-categories:nth-of-type(5), .card--menu-categories:nth-of-type(6), .card--menu-categories:nth-of-type(7)").css("display","block")})),$(".nav__dropdown-controls--left").click((function(){$(this).css("opacity","0"),$(".nav__dropdown-controls--right").css("opacity","1"),$(".card--menu-categories:nth-of-type(1), .card--menu-categories:nth-of-type(2), .card--menu-categories:nth-of-type(3)").css("display","block"),$(".card--menu-categories:nth-of-type(5), .card--menu-categories:nth-of-type(6), .card--menu-categories:nth-of-type(7)").css("display","none")}))}));