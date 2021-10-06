function coll_expan_fun() {
	  var coll_expan = document.getElementById('topnav');
	  coll_expan.style.display = 'flex';
	  if (coll_expan.clientHeight) {
	    coll_expan.style.height = 0;
	    coll_expan.style.border = 'none';
	  } else {
	  	coll_expan.style.borderTop = '1px solid gold';
	  	coll_expan.style.borderBottom = '1px solid gold';
	    coll_expan.style.height = 200 + "px";
	  }
}