<?php 
 
 $apiKey = "sax7qx28cef235apyedq3v3v";
 $query = $_SERVER['QUERY_STRING'];
 $url = "http://content.guardianapis.com/search";
 $queryUrl = $url . "?api-key=" . $apiKey . "&" . $query;

 
 if (isset($_GET['format'])) {
   $format = $_GET['format'];
   
   if ($format == 'json') {
    $response = file_get_contents($queryUrl);
    print $response;
   }
 }
?>
