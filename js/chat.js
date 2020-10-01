
function openNav() {
  document.getElementById("mySidebar").style.width = "800px";
  document.getElementById("main").style.marginLeft = "800px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

$(document).ready(function () {
  $('#action_menu_btn').click(function () {
    $('.action_menu').toggle();
  });
});
