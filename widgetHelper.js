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
	var currentIndex = (function() {
		switch (c.id) {
			case "a-wego":
				return 0;
				break;
			case "a-housecalls":
				return 1;
				break;
			case "a-healthsystems":
				return 2;
				break;
			case "a-westay":
				return 3;
				break;
		}
	})();

	for (y = 0; y < ca.length; y++) {
		if (y != currentIndex) {
			ca[y].style.opacity = "0";
			ca[y].style.zIndex = "0";
		} else {
			ca[y].style.zIndex = "4";
			ca[y].style.opacity = "1";
		}
		switch (currentIndex) {
			case 0:
				mc.style.backgroundColor = "#F8971d";
				break;
			case 1:
				mc.style.backgroundColor = "#008ea0";
				break;
			case 2:
				mc.style.backgroundColor = "#f6be00";
				break;
			case 3:
				mc.style.backgroundColor = "#323372";
				break;
		}
	}

	/* old **
	switch (c.id) {
		case "a-wego":
			mc.style.backgroundColor = "#F8971d";
			ca[0].style.opacity="1";
			ca[0].style.zIndex="4";
			ca[1].style.opacity="0";
			ca[2].style.opacity="0";
			ca[3].style.opacity="0";
			break;
		case "a-housecalls":
			mc.style.backgroundColor = "#008ea0";
			ca[1].style.opacity="1";
			ca[0].style.opacity="0";			
			ca[2].style.opacity="0";
			ca[3].style.opacity="0";
			break;
		case "a-healthsystems":
			mc.style.backgroundColor = "#f6be00";
			ca[2].style.opacity="1";
			ca[0].style.opacity="0";
			ca[1].style.opacity="0";			
			ca[3].style.opacity="0";
			break;
		case "a-westay":
			mc.style.backgroundColor = "#323372";
			ca[3].style.opacity="1";
			ca[0].style.opacity="0";
			ca[1].style.opacity="0";
			ca[2].style.opacity="0";			
			break;
	}*/
}