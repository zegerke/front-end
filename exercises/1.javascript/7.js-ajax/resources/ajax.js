document.getElementById('button').addEventListener("click",Loadtext);

      function Loadtext(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET',"https://thatsthespir.it/api",true);

        xhr.onload = function(){
          if(this.status == 200){
            var quoteitem = JSON.parse(this.responseText);
            document.getElementById('quotehere').innerHTML = quoteitem.quote;
            document.getElementById('authorhere').innerHTML ="~" + quoteitem.author;
            document.getElementById('pichere').src = quoteitem.photo;
          }
          else {
            document.getElementById('quotehere').innerHTML = "ERROR "
          }
        }
        xhr.send();
      }