function change(e) {

	var mlinks = document.getElementsByClassName("mlink");
	var mbg = document.getElementById('menuContainer');

	for (i = 0; i < mlinks.length; i++) {
		//unset all other font sizes
		if (mlinks[i].innerHTML != e.innerHTML) {
			mlinks[i].style.fontSize = "2em";
			mlinks[i].style.opacity = ".5";
			//mlinks[i].style.lineHeight="2em";
		} else {
			//set current link style
			e.style.fontSize = "3.3em";
			//e.style.lineHeight="1em";
			e.style.opacity = "1";
			switchColors(e);

		}
	}

}

function switchColors(c) {
	var mc = document.getElementById('menuContainer');
	var ca = document.getElementById('contentContainer').children;
	c.style.color = "#fff";
	switch (c.id) {
		case "a-wego":
			mc.style.backgroundColor = "#F8971d";
			ca[0].style.opacity="1";
			ca[1].style.opacity="0";
			ca[2].style.opacity="0";
			ca[3].style.opacity="0";
			break;
		case "a-housecalls":
			mc.style.backgroundColor = "#008ea0";
			ca[0].style.opacity="0";
			ca[1].style.opacity="1";
			ca[2].style.opacity="0";
			ca[3].style.opacity="0";
			break;
		case "a-healthsystems":
			mc.style.backgroundColor = "#f6be00";
			ca[0].style.opacity="0";
			ca[1].style.opacity="0";
			ca[2].style.opacity="1";
			ca[3].style.opacity="0";
			break;
		case "a-westay":
			mc.style.backgroundColor = "#323372";
			ca[0].style.opacity="0";
			ca[1].style.opacity="0";
			ca[2].style.opacity="0";
			ca[3].style.opacity="1";
			break;
	}
}