
    function myFunction() {

        var request;
        var input = document.getElementById('city');
        //var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
		//var api = 'http://www.gigablast.com/search?&q=';
		var api = "https://searx.org/search?q=";
		//var api = 'http://www.gigablast.com/search?&q=&qthz=';
        //var apikey = '&APPID=53d0750866eaf60d12c0fc7078f16511';
		//var units = "&units=metric";
        //var rand = "&rand=1591116010477";
		//var rand = "&rand=1";
		///// i dont know why this parmater
		////// keeps changing and w/out it i cant get good JSON
		//var spix = "&sipx=4039951131";
		//var qthx = "&qthx=3881576991";
		//var xnbw  = "&xnbw=1448210468";
		//var igal   = "&igal=3362823584";
		//var qtkn   = "&qtkn=3582123485";
		//var qthz   = "&qthz=3582123485"; 
        //var qthz   = "&qthz=1";	
        //var xntg   = "&xntg=4039951131";
        //var qtmn   = "&qtmn=547382388"; 
		//var qtlg   = "&qtlg=2227060812"; 
		var qtcj   = "&qtcj=2455588645"  
		var format = "&format=json";
		//var s = "&s";
		var spell = "&spell=1";
		var autospell = "&autospell=1";
		var n = "&n=100";
		var showimages = "&showimages=1";
		var ac = "&autocomplete=duckduckgo";
		var machine = "&engines=duckduckgo";
		//var sum = api + input.value + rand + spix + format + s + spell + autospell;
		//var sum = api + input.value + rand + qthx + format + s + spell + autospell;
		//var sum = api + input.value + rand + xnbw + format + s + spell + autospell;
		//var sum = api + input.value + rand + igal + format + s + spell + autospell;
		//var sum = api + input.value + rand + qtkn + format + s + spell + autospell + n + showimages;
		//var sum = api + input.value + rand + qthz + format + s + spell + autospell + n + showimages;
		//var sum = api + input.value + format + spell + autospell + n + showimages + qthz;
		//var sum = api + input.value + format + spell + autospell + n + showimages + xntg;
		//var sum = api + input.value + format + spell + autospell + n + showimages + qtmn;
		//var sum = api + input.value + format + spell + autospell + n + showimages + qtcj;
		var sum = api + input.value + format + ac + machine ;
		//var sum = api + ac + input.value + format  + machine 
        //var sum = api + input.value + apikey + units;
		

        request = new XMLHttpRequest();

        request.open('GET', sum, true);
        request.onload = function () {

            var data = JSON.parse(this.response);
			
                console.log(data);
				
				//////////
				function sss(data) {
       	   $.each(data.results, function(i, f) {
           var tblRow = "<tr>" + "<td>" + f.title + "</td>" +
		   "<td>" + f.url + "</td>" + "<td>" + f.htmlSum + "</td>" + "<td>" + f.sum + "</td>" + "</tr>"
		   $(tblRow).appendTo("#userdata tbody");
//document.write('<a style="color: #fff;background-color: #007bff;border-color: #007bff; outline: none; min-height: 38px;font-weight: 400;text-align: centercursor: pointer;padding: .375rem .75rem;font-size: 1rem;line-height: 1.5;border-radius: .25rem;"  href="' + f.site + '" target="_blank">{{f.site}}</a>'+"<br><br><br>");
            //"<td>" + f.url + "</td>" + "<td>" + f.htmlSum + "</td>" + "<td>" + f.imageUrl + "</td>" + "<td>" + f.sum + "</td>" + "</tr>" 
			
	 /*
document.getElementById("cityy").onclick = function(e) {
  if (document.getElementById("city").value == "") {
    //e.preventDefault();
    alert("Please enter a question");
  } else{
greeting = "";
  }
}
*/
  /////////////////		
			
			
			
///////////////////
		   document.getElementById("div5").innerHTML+="<a id='long' href='"+data.results[i].url+"'target='_blank'>"+data.results[i].url+"</a><br>"+data.results[i].htmlSum+"<br>"+data.results[i].title+"<br><br>"; 
           document.getElementById("div6").innerHTML+="<a id='long' href='"+data.results[i].imageUrl+"'target='_blank'>"+data.results[i].imageUrl+"</a><br>"+data.results[i].htmlSum+"<br>"+data.results[i].title+"<br><br>"; 		   
		   /////////////////
		   
		   
		   
		  
		  ////////////////////////////////
		 
	let theResults = [];
	var y;
	theResults = data.results;
	y = theResults.imageUrl;
	if (y == undefined) {
  //  block of code to be executed if the condition is true
  greeting = "";
               } else {
  //  block of code to be executed if the condition is false
  document.getElementById("div6").innerHTML+="<a id='long' href='"+data.results[i].imageUrl+"'target='_blank'>"+data.results[i].imageUrl+"</a><br>"+data.results[i].htmlSum+"<br>"+data.results[i].title+"<br><br>"; 
			   }  /* */
 ////////////////////////////////////////////////////////////     
 
		  
		  
		  
		  
		  
		  
		  
		   
				
     });

   }; sss(data);
   ////////
  /*var keys = Object.keys(data);
	console.log(keys);
	for (var i =0; i < keys.length; i++) {
	var word = keys[i];
	var score = data[word];
	var x = random(width);
	var y = random(height);
	fill(255);
	textSize(64);
	text(word, x, y);
   
   }*/
   
   
   
   
   
   ////////////////////
				
	}	
             //else {
               //console.log(input.value);
            //}
        //}

        request.send();
    }
