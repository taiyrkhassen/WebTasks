<?php

	$files = file_get_contents("Data.txt");
	$text = "Aiganym <3";

	file_put_contents("Data.txt", $text, FILE_APPEND);
	// REQUEST = GET+POST+COOKIE;
	$output = substr('hello', 2);
	
	foreach (file("data2.txt") as $name) {  //file() reads a file into an array. po strochke 
		//list($first, $mid, $last) = explode(" ", $name); // delit na chasti ves string po strokam 	 
		//echo "list($first, $mid, $last)";	
		echo $name;
		echo "<br/>";
	}

	$aarr = file("data2.txt");
	echo $aarr[0];
	echo "<br/>";

	$text2 = "hello woRld";
	var_dump($text2);      // count number of symbols
	$trimmed = trim($text2);  // ignore all spaces in that string 

	$str = "hello Eseey";
	echo str_replace("Eseey", "Taiyr", $str);


	echo $output;
	$arrayName = array('Like a Boss' =>["Essey", "Taiyr"], "Ages" => [33, 25]);
	$o1 = count($arrayName);
	echo "<br/>";
	echo $arrayName["Like a Boss"][1];
	echo "<br/>";

	/*echo $_REQUEST['check'];
	echo '<br />';
	echo $_REQUEST['age'];
	echo '<br/>';
	echo $_REQUEST['Name'];*/
?>
<form action="PRACTISE.php?check=1&amp; age=133" method="post">
	Name: <input type="text" name="Name" /><br/>
	Message: <textarea name="Message"></textarea><br/>
	<input type="submit" value="Send Message"/>
