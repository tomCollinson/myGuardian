<?php 
 
 $apiKey = "API Key Here";
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
