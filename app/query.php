<?php 
 
 $apiKey = "n76dazxksq8ucapnrz6fmc7n";
 $query = $_SERVER['QUERY_STRING'];
 $queryType = $_GET['type'];
 
 if ($queryType === "section") {
  $url = "http://content.guardianapis.com/search";
  $queryUrl = $url . "?api-key=" . $apiKey . "&" . $query;
 } elseif ($queryType === "story") {
   $url = "http://content.guardianapis.com/";
   $queryUrl = $url . $query . "&api-key=" . $apiKey;
 }
 
 if (isset($_GET['format'])) {
   $format = $_GET['format'];
   
   if ($format == 'json') {
    $response = file_get_contents($queryUrl);
    print $response;
   }
 }
?>
