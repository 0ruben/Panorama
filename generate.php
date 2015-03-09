
       <?php 
       $imageID=rand (1 , 100000000000);
       while(file_exists('pic_pano/img'.$imageID.'.png')){
       	$imageID=rand (1 , 100000000000);
       }
        //Get the base-64 string from data
        $filteredData=substr($_POST['img_val'], strpos($_POST['img_val'], ",")+1);
        //Decode the string
        $unencodedData=base64_decode($filteredData);
        //Save the image
        file_put_contents('pic_pano/img'.$imageID.'.png', $unencodedData); 
        echo 'http://'.$_SERVER['HTTP_HOST'].'/mon_pano.php?image='.$imageID;
        ?>