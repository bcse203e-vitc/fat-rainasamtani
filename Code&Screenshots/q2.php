<?php
function insideOut($array) {
    if (count($array) % 2 != 0) {
        return $array;
    }
    $mid = count($array) / 2;
    $temp = $array[0];
    $array[0] = $array[count($array) - 1];
    $array[count($array) - 1] = $temp;
    for ($i = 1; $i < $mid; $i++) {
        $temp = $array[$i];
        $array[$i] = $array[count($array) - $i - 1];
        $array[count($array) - $i - 1] = $temp;
    }
    return $array;
}

/
if (isset($_POST['submit'])) {
    /
    $inputArray = $_POST['inputArray'];

   
    $array = array_map('trim', explode(',', $inputArray)); 
   
    $result = insideOut($array);

    echo "<h3>Transformed Array:</h3>";
    echo "<pre>";
    print_r($result);
    echo "</pre>";
}

?>

</body>
</html>
