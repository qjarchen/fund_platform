$(document).ready(function(){
		
var Item = $('.list-group').children(),
	NumOfItem = Item.length,
    NumOfPage = NumOfItem/10,
    pagenav = $('.pagination').find('#pagenav');


    
    // 先設立頁碼
    for (var i = NumOfPage ; i >0; i--) {            
        pagenav.after('<li><a href="#">'+Math.ceil(i)+'</a></li>');  
    };
    // 需先設立頁碼才可以抓li 不然會只抓到兩筆
    var pageli = $('.pagination').find('li');
    
    // 先設定第一頁
    pageli.eq(1).addClass('active');

    // 隱藏其他
    for (var i = 10 ; i < NumOfItem; i++) {
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

}
)