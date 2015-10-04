$(document).ready(function() {
  // File Upload Area
  $('input[type="file"]').ezdz();
  
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
  $('#element').popover('toggle');
// if($('.ezdz-dropzone').hasClass("ezdz-accept")) {
  // var text = $('.ezdz-dropzone span').baseURI;
  // console.log(text);
// console.log(CopyToClipboard('hello world', true));
	
// }
 //  $('.upload').each(function(){
	//   var $t = $(this),
	//       $span = $t.siblings('span'),
	//       value;
	//   $t.change(function(){
	//     value = $t.val();
	//     $span.text(value);
	//   });
	// });
});