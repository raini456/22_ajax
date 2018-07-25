(function () {
    var output = document.querySelector('#output');
    var btn = document.querySelector('#btn');
    var btnCSV = document.querySelector('#btnCSV');
    var btnJSON = document.querySelector('#btnJSON');
    var ajax = function (url, params,callback) {
        //Kanal zum Aufruf der Datei, AJAX ruft immer eine Datei auf, die dann die Dateien liefert
        //es wird nur die Datei geholt, nichts verändert von JS
        var xhr = new XMLHttpRequest();
        //Transfer hat 4 Eigenschaften: 1 senden 2 PHP bearbeiten 3 zurück 4 Datenerhalt
        //wenn sich Status ändert = xhr.onreadystatechange   
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                //this.responseText ist die Antwort des Servers
                callback(this.responseText);
            }            
        };
        params = (params) ? '?' + params : '';
        xhr.open('GET', url+ params, true);
        xhr.send(null);
    };
    var viewResponse = function (response) {
        //this.responseText ist die Antwort des Servers
        output.innerText = 'Brutto: ' + response;
    };
    var viewHotel = function (response) {
        //this.responseText ist die Antwort des Servers
        var csv = response.split(';')        
        output.innerText = 'Hotel: ' + csv[0] + ' (Sterne: ' +  csv[1]+')';
    };
    var viewHotelJSON = function (jsonstr) {
        var hotel= JSON.parse(jsonstr);//this.responseText ist die Antwort des Servers
        
        output.innerText = 'Hotel: ' + hotel['name'] +  ' (' +hotel['stars']+ 'Sterne)';
    };
   
   btn.addEventListener('click', function(){
       //param holt sich die Daten vom Button #btn
       var param = "x=" + this.getAttribute('data-x');
       ajax('data.php',param, viewResponse);
   });
   btnCSV.addEventListener('click', function(){
       //param holt sich die Daten vom Button #btn
       var param = "x=" + this.getAttribute('data-x');
       ajax('datadb.php',null, viewHotel);
   });
   btnJSON.addEventListener('click', function(){
       //param holt sich die Daten vom Button #btn
       var param = "x=" + this.getAttribute('data-x');
       ajax('dataJSON.php',null, viewHotelJSON);
   });
   
   
})();