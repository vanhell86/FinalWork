
$(document).ready(
$('a.navi-link').on('click', function(){
  $('a.navi-link').removeClass("active");
  $(this).addClass("active");
  console.log('run');
}));
