///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Start Javascript for index.html////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Used to toggle the menu on small screens when clicking on the menu button
	function myFunction() {
		var x = document.getElementById("navDemo");
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} else {
			x.className = x.className.replace(" w3-show", "");
		}
	}

// When the user clicks anywhere outside of the modal, close it
	var modal = document.getElementById('ticketModal');
	window.onclick = function (event)
	{
		if (event.target == modal)
			{
					modal.style.display = "none";
		}
	}


//// Animal Information Modals
	
//	var modalBtns = [...document.querySelectorAll(".button")];
//	modalBtns.forEach(function (btn)
//	{
//		btn.onclick = function ()
//		{
//			var modal = btn.getAttribute('data-modal');
//			document.getElementById(modal).style.display = "block";
//		}
//	});

//	var closeBtns = [...document.querySelectorAll(".close")];
//	closeBtns.forEach(function (btn)
//	{
//		btn.onclick = function ()
//		{
//			var modal = btn.closest('.modal');
//			modal.style.display = "none";
//		}
//	});

//	window.onclick = function (event)
//	{
//		if (event.target.className === "modal")
//		{
//			event.target.style.display = "none";
//		}
//	}
	
	

	
// When the user scrolls down 500px from the top of the document, show the button
	window.onscroll = function () { scrollFunction() };

	function scrollFunction()
	{
		if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
			document.getElementById("myBtn").style.display = "block";
		}
		else
		{
			document.getElementById("myBtn").style.display = "none";
		}
	}

// When the user clicks on the button, scroll to the top of the document
	function topFunction()
	{
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}




