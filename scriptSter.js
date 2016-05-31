var klik = Math.ceil(9 * Math.random());
var totaal = klik * Math.random() * 5;
var aantalKlik = document.getElementById("punten");
var aantalTotaal = document.getElementById("rating");
var sterrenn = document.querySelectorAll(".sterren");

function kleurSterren(sterNummer, percentage) {
	var naam = "ster" + sterNummer;
	percentage = Math.min(percentage, 100);
	document.getElementById(naam).style.width = percentage + "%";
}

function sterrenKleurIn(rating) {
	for (var i=1; i<6; i++) {
		kleurSterren(i, rating*100);
		rating --;
	}
}


function voerUit(){
	aantalKlik.innerHTML = klik;
	aantalTotaal.innerHTML = Math.ceil(10*totaal/klik)/10;
	sterrenKleurIn(Math.ceil(10*totaal/klik)/10);
}
voerUit();

function klikAantal(){
	klik++;
	var nummer = this.getAttribute("data-role");
	totaal += parseInt(nummer);
	voerUit();
}
for(var i=0;i<sterrenn.length;i++){
	sterrenn[i].addEventListener("click", klikAantal);
}