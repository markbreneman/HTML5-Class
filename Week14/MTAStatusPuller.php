<?php

$txt = file_get_contents('http://mta.info/status/serviceStatus.txt');
$xml = new SimpleXMLElement($txt);
echo json_encode($xml);

?>