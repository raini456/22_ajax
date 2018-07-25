<?php
//datadb.php
//Hotelname
//Sterne
$row = [];
$row['name'] = "Adlon";
$row['stars'] = 5;
//echo $row; würde nicht funktionieren, weil in PHP nur ein String schicken kann
//ab einer gewissen Anzahl von verschachtelten Arrays wird es unübersichtlich
//JSON funktioniert so, dass der String wie ein JavaScript-Objekt umgebaut wird

echo $row['name'].';'.$row['stars'];
//$json ="['name':'Adlon', 'stars':5]";
//echo $json;
//$json wird nun auf JS-Seite in JSON umbewandelt