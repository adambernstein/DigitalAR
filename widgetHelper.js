var currentIndex = 0;

function change(e) {

	var mlinks = document.getElementsByClassName("mlink");
	var mbg = document.getElementById('menuContainer');
	////pause animation///
	// object.style.animationPlayState="paused" 
	for (i = 0; i < mlinks.length; i++) {
		//unset all other font sizes
		if (mlinks[i].innerHTML != e.innerHTML) {
			mlinks[i].style.fontSize = "2em";
			mlinks[i].style.opacity = ".6";
			//mlinks[i].style.lineHeight="2em";

		} else {
			//set current link style
			e.style.fontSize = "3.3em";
			//e.style.lineHeight=".8em";
			e.style.opacity = "1";
			switchColors(e);

		}
	}

}

function switchColors(c) {
	var mc = document.getElementById('menuContainer');
	var ca = document.getElementById('contentContainer').children;
	//global variable currentIndex//
	currentIndex = (function() {
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

}

function autoRotate() {
	//timing funct
	var p = document.getElementById('a-wego');
	var q = document.getElementById('a-housecalls');
	var r = document.getElementById('a-healthsystems');
	var s = document.getElementById('a-westay');

	switch (currentIndex) {
		case 0:
			change(q);
			break;
		case 1:
			change(r);
			break;
		case 2:
			change(s);
			break;
		case 3:
			change(p);
			break;
	}
}

function autoTrigger() {
	var interval = setInterval(autoRotate, 2500);
	document.getElementById('overallContainer').addEventListener('mouseover', function() {
		clearInterval(interval)
	});
	document.getElementById('overallContainer').addEventListener('click', function() {
		clearInterval(interval)
	});
	document.getElementById('overallContainer').addEventListener('mouseout', function() {
		interval = setInterval(autoRotate, 2500)
	});

}