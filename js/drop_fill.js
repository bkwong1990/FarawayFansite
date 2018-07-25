var dropfillArr = document.getElementsByClassName("dropfill");
var droplinks_str = '';
for(var i = 0; i < dropfillArr.length; i++)
{
  var currentID = dropfillArr[i].id;
  var droptitle = dropfillArr[i].getElementsByClassName("droptitle")[0].innerHTML;
  droplinks_str += '<a class="dropdown-item" href="#' + currentID + '">' + droptitle + '</a>';
}
document.getElementById("dropdown_fill_here").innerHTML = droplinks_str;
