$(document).ready(function(){
	if(document.getElementById("nextSlide")!=null)
    {
	var i=1;
	var j=2;
	var k=3;
    var l=4;
	
	var countIMG = 8;
	var stop = false;

	var adres = [];
	adres[0] = "http://www.piwet.pulawy.pl/";
	adres[1] = "https://www.gov.pl/web/rolnictwo/";
	adres[2] = "http://www.arimr.gov.pl/";
	adres[3] = "https://gis.gov.pl";
	adres[4] = "https://www.gif.gov.pl/";
	adres[5] = "http://www.vetpol.org.pl/";
	adres[6] = "http://urpl.gov.pl/pl";
    adres[7] = "http://dziennikustaw.gov.pl/"

	document.getElementById("nextSlide").addEventListener("click", nextSlide);
	document.getElementById("nextSlide").addEventListener("click", stopAutoplay);
	document.getElementById("prevSlide").addEventListener("click", prevSlide);
	document.getElementById("prevSlide").addEventListener("click", stopAutoplay);
    
    
	function nextSlide(){
		$("#firstslide").fadeOut(700);
		$("#secondslide").fadeOut(550);
		$("#thirdslide").fadeOut(350);
        $("#fourthslide").fadeOut(250);

		
		setTimeout(function(){
		i++;
		j++;
		k++;
		l++;
		if(i>countIMG)	i=1;
		if(j>countIMG)	j=1;
		if(k>countIMG) k=1;
		if(l>countIMG) l=1;
		
		const img1 = document.querySelector('.img1');
		img1.src = 'img/'+i+'.png';
		
		const adres1 = document.querySelector('.adres1');
		adres1.href = adres[i-1];

		const img2 = document.querySelector('.img2');
		img2.src = 'img/'+j+'.png';
		
		const adres2 = document.querySelector('.adres2');
		adres2.href = adres[j-1];

		const img3 = document.querySelector('.img3');
		img3.src = 'img/'+k+'.png';
		
		const adres3 = document.querySelector('.adres3');
		adres3.href = adres[k-1];
		
		const img4 = document.querySelector('.img4');
		img4.src = 'img/'+l+'.png';
		
		const adres4 = document.querySelector('.adres4');
		adres4.href = adres[l-1];
        
        $("#firstslide").fadeIn(750);
		$("#secondslide").fadeIn(550);
		$("#thirdslide").fadeIn(350);
        $("#fourthslide").fadeIn(250);
		}, 800);
		

	}
	
	function prevSlide(){
    
		$("#firstslide").fadeOut(700);
		$("#secondslide").fadeOut(550);
		$("#thirdslide").fadeOut(350);
        $("#fourthslide").fadeOut(250);

		i--;
		j--;
		k--;
		l--;
		if(i<1)		i=countIMG;
		if(j<1)  	j=countIMG;
		if(k<1) 	k=countIMG;	
		if(l<1) 	l=countIMG;	
		
		setTimeout(function(){
		const img1 = document.querySelector('.img1');
		img1.src = 'img/'+i+'.png';
		
		const adres1 = document.querySelector('.adres1');
		adres1.href = adres[i-1];

		const img2 = document.querySelector('.img2');
		img2.src = 'img/'+j+'.png';
		
		const adres2 = document.querySelector('.adres2');
		adres2.href = adres[j-1];

		const img3 = document.querySelector('.img3');
		img3.src = 'img/'+k+'.png';
		
		const adres3 = document.querySelector('.adres3');
		adres3.href = adres[k-1];
		
		const img4 = document.querySelector('.img4');
		img4.src = 'img/'+l+'.png';
		
		const adres4 = document.querySelector('.adres4');
		adres4.href = adres[l-1];
        
        $("#firstslide").fadeIn(250);
		$("#secondslide").fadeIn(350);
		$("#thirdslide").fadeIn(550);
        $("#fourthslide").fadeIn(750);
        }, 800);
        


	}
	
	function stopAutoplay()
	{
		stop = true;
	}
	
	function autoplay(){
		if(stop != true)
		{
			nextSlide();
			setTimeout(autoplay, 4000);
		}
	}
    
    
    window.onload=function(){
		autoplay();
	}
    }
});

