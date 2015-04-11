/**
 * Created by Pavel on 11/04/2015.
 */
var pages;
var curPage = null;

$(document).ready(function(){
    loadPages();
    $("section").hide();
    setTimeout(function(){
        $(".mainSection").fadeIn(500);
        loadPage(pages.news);
    },200);

});

function loadPages(){
    pages = {
        news : {
            element: $("#news"),
            link: $("#aNews")
        },
        media : {
            element: $("#media"),
            link: $("#aMedia")
        },
        sports : {
            element: $("#sports"),
            link: $("#aSports")
        },
        contact : {
            element: $("#contact"),
            link: $("#aContact")
        }
    };
}

function loadPage(page){
    if(curPage){
        curPage.element.fadeOut(500);
        curPage.link.css("color", "white");
        curPage.link.mouseenter(function(){
            $(this).css("color","rgba(255,255,255,0.8)");
        });
        curPage.link.mouseleave(function(){
            $(this).css("color","white");
        });

        curPage = page;
        curPage.element.delay(500).fadeIn(500);
    }
    else{
        curPage = page;
        curPage.element.fadeIn(500);
    }

    curPage.link.css("color","rgba(255,255,255,0.8)");
    curPage.link.unbind("mouseenter");
    curPage.link.unbind("mouseleave");
}
