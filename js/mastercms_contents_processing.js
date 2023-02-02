$(window).load(function(){
	  $(".beforeAfterContainer[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.5});      
	  $(".beforeAfterContainer[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.5, orientation: 'vertical'});
});
$(document).ready(function(){	
	$('.__mb_article_in_image img').each(function(index, element) {
		var getImgUrlEmbed			=	$(this).attr('src');
		if(getImgUrlEmbed!==''){
			//alert(getImgUrlEmbed);
			var finalString			=	'';
			var res = getImgUrlEmbed.split(".pagespeed");
			finalString			=	res[0];
			//var res1 = finalString.replace("croped/", "croped/thumbnail/");
			$(this).attr('src',finalString);
		}
	
	});
	
	// $('.__MB_CONTENT p').each(function() {
	// 	var $this = $(this);
	// 	if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
	// 		$this.remove(); 
	// }); 
	
content_detail_process_mobile('.__MASTERCMS_CONTENT_MOBILE');content_detail_process_pc('.__MASTERCMS_CONTENT');});
function content_detail_process_pc(dom_selector){
	var getDomSelector=$(dom_selector);
	getDomSelector.children('table.MASTERCMS_TPL_TABLE').css({'max-width':'100%'});	
	getDomSelector.find('table.MASTERCMS_TPL_TABLE img').removeAttr('width').removeAttr('height');
	getDomSelector.find('table.MASTERCMS_TPL_TABLE img').css('height','');
	var checkImgInTable=getDomSelector.find('table.MASTERCMS_TPL_TABLE').width();
	getDomSelector.find('table.MASTERCMS_TPL_TABLE img').css('width','100%');
	
	$('.__MASTERCMS_CONTENT .MASTERCMS_TPL_TABLE,.__MASTERCMS_CONTENT_MOBILE .MASTERCMS_TPL_TABLE').each(function(index, element) {		
        if($(this).attr('align')=='center'){
			$(this).css('margin','auto');
		}
    });
}
function content_detail_process_mobile(dom_selector){var getDomSelector=$(dom_selector);getDomSelector.children('table.MASTERCMS_TPL_TABLE').removeAttr('width').css({'width':'100%','max-width':'100% !important','margin-right':'10px'});var checkImgInTable=getDomSelector.children('table.MASTERCMS_TPL_TABLE').children('img').width();getDomSelector.children('table.MASTERCMS_TPL_TABLE').attr('width',checkImgInTable).css({'width':checkImgInTable,'max-width':'100% !important'})
	
;}