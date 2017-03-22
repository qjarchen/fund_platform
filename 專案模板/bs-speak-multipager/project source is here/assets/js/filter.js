$(document).ready(function(){

var PageRefresh = function(){

var NumOfItem = $('.list-group-item').length,
    NumOfPage = NumOfItem/10,
    Item = $(".list-group").find('a'),
    pagenav = $('.container').find('#pagenav');

    // 先設立頁碼
    for (var i = NumOfPage ; i >0; i--) {            
        pagenav.after('<li><a href="#">'+Math.ceil(i)+'</a></li>');  
    };
    // 需先設立頁碼才可以抓li 不然會只抓到兩筆
    var pageli = $('.pagination').find('li');
    
    // 先設定第一頁
    pageli.eq(1).addClass('active');

    // 隱藏其他
    for (var i = 10 ; i <NumOfItem; i++) {
         Item.eq(i).hide();
         };

    pageli.click(function(){
    
        for (var i = (($('.active').text()-1)*10) ; i < ($('.active').text()*10); i++) {
            Item.eq(i).hide();
        };      

        $(this).addClass('active').siblings('.active').removeClass('active');
        // alert($(this).text());

        for (var i = (($(this).text()-1)*10) ; i < ($(this).text()*10); i++) {
            Item.eq(i).show();
        };
    });

    // alert(NumOfItem);
};

    PageRefresh();

    // *********************************//
    // **********filter_start***********//
    // *********************************//

    var asc_lastUpdate = function(a, b) {
        var date1  = $(a).find(".last-update").text();
        date1 = date1.split('/');
        // date1 = new Date(date1[2], date1[1] -1, date1[0]);
        var date2  = $(b).find(".last-update").text();
        date2 = date2.split('/');
        // date2 = new Date(date2[2], date2[1] -1, date2[0]);

        return date1 < date2 ? -1 : 1;
    }

    var desc_lastUpdate = function(a, b) {
        var date1  = $(a).find(".last-update").text();
        date1 = date1.split('/');
        // date1 = new Date(date1[2], date1[1] -1, date1[0]);
        var date2  = $(b).find(".last-update").text();
        date2 = date2.split('/');
        // date2 = new Date(date2[2], date2[1] -1, date2[0]);

        return date1 < date2 ? 1 : -1;
    }

    var asc_price = function(a, b) {
        return parseInt($(a).find('.monthly-price').text()) > parseInt($(b).find('.monthly-price').text()) ? 1 : -1;
    }

    var desc_price = function(a, b) {
        return parseInt($(a).find('.monthly-price').text()) > parseInt($(b).find('.monthly-price').text()) ? -1 : 1;
    }

    var asc_timeBought = function(a, b) {
        return parseInt($(a).find('.times-bought').text()) > parseInt($(b).find('.times-bought').text()) ? 1 : -1;
    }

    var desc_timesBought = function(a, b) {
        return parseInt($(a).find('.times-bought').text()) > parseInt($(b).find('.times-bought').text()) ? -1 : 1;
    }

    var sortByInput = function(sortBy) {
        var sortEle = $('.list-group>a').sort(sortBy);
        $('.list-group').empty().append(sortEle);
    }

    // 日期:新到舊
    $('.fltr-latest').click(function(){
        sortByInput(desc_lastUpdate);//這個地方要寫把list-item排序的方法
        PageRefresh();
    });

    // 日期:舊到新
    $('.fltr-oldest').click(function(){
        sortByInput(asc_lastUpdate);
    });

    // 價錢:低到高
    $('.fltr-cheapest').click(function(){
        sortByInput(asc_price);
    });

    // 價錢:高到低
    $('.fltr-costliest').click(function(){
        sortByInput(desc_price);
    });

    // 次數:多到少
    $('.fltr-most').click(function(){
        sortByInput(desc_timesBought);
    });

    // 次數:少到多
    $('.fltr-least').click(function(){
        sortByInput(asc_timeBought);
    });

    // *********************************//
    // ***********filter_end************//
    // *********************************//


}
)