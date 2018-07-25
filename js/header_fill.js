function fillHeader(active_link_id)
{
  document.getElementsByTagName("header")[0].innerHTML =
  `<nav class="navbar navbar-expand-md navbar-dark" >
  <a class="navbar-brand" href="#"><img src="img/pia_icon.jpg" width="32" height="32" alt="Pia's menu icon"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
  <ul class="navbar-nav">
    <li class="nav-item" id="index_link">
      <a class="nav-link" href="index.html">Home</a>
    </li>
    <li class="nav-item" id="characters_link">
      <a class="nav-link" href="characters.html">Characters</a>
    </li>
    <li class="nav-item"  id="mechanics_link">
      <a class="nav-link" href="mechanics.html">Game Mechanics<span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Page Sections
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="dropdown_fill_here">
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Game Downloads
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
        <a class="dropdown-item" href="http://fa2.s372.xrea.com/es/download.htm">Japanese Download</a>
        <a class="dropdown-item" href="http://vgperson.com/games/farawaystory.htm">English Download</a>
      </div>
    </li>
  </ul>
  </div>
  </nav>`;
  document.getElementById(active_link_id).classList.add("active");
}
