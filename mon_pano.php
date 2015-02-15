<head>
    <?php
    $randomID = rand (1 , 1000000000);
    if(isset($_GET['image'])){
        $imageID = htmlspecialchars($_GET["image"]);
    }
    else if(isset($_POST['img_val'])){
        $imageID=$randomID;
        //Get the base-64 string from data
        $filteredData=substr($_POST['img_val'], strpos($_POST['img_val'], ",")+1);
        //Decode the string
        $unencodedData=base64_decode($filteredData);
        //Save the image
        file_put_contents('pic_pano/img'.$imageID.'.png', $unencodedData);
        header('Location: http://'.$_SERVER['HTTP_HOST'].'/dev/panot/mon_pano.php?image='.$imageID);

    }
    else
        $imageID = 0;

    ?>
    <meta charset="utf-8" lang="fr"/>
    <meta property="og:site_name" content="Panorama Festival"/>
    <meta property="og:description" content="Viens toi aussi créer ta soirée Panorama !" />
    <meta property="og:title" content="Mon Pano" />
    <?php echo  '<meta property="og:image" content="http://'.$_SERVER['HTTP_HOST'].'/dev/panot/pic_pano/img'.$imageID.'.png"/>'
    ?>
    <link type="text/css" rel="stylesheet" href="style.css"/>
</head>
<body>
    <div class="center">
        <h2>MON PANO</h2>

    </div>
    <div class="image_container">
        <?php echo '<img class="image" src="pic_pano/img'.$imageID.'.png"/>';
        ?>
    </div>
    <div class="url_container">
        <div class="url">
            <?php echo '<a href="http://'.$_SERVER['HTTP_HOST'].'/dev/panot/mon_pano.php?image='.$imageID.'"> 
            http://'.$_SERVER['HTTP_HOST'].'/dev/panot/mon_pano.php?image='.$imageID.'</a>' ?>
        </div>
    </div>
    <?php echo '<a href="https://www.facebook.com/sharer/sharer.php?u=http://'.$_SERVER['HTTP_HOST'].'/dev/panot/mon_pano.php?image='.$imageID.'" target="_blank"> <img src="http://www.le-bon-plan.com/wp-content/uploads/2014/05/facebook-partage.png">'
    ?>
</body>

<style type="text/css">

  body{
    background-color: #ffffff;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
}

.image{
    width:100%;
    margin:0px auto;
    margin-top:10%;
    border-color: #35BFBF;
    border-style: solid;
    border-width: 1px;

}
.center{
    width:17%;
    margin-left:auto;
    margin-right:auto;
}
.image_container{
    width:70%;
    margin-left:auto;
    margin-right:auto;
    margin-top:10%;

}

.url_container{
    width: 475px;
    text-align: center;
    background-color:#ffffff;
    margin-left:auto;
    margin-right:auto;
    margin-top:2%;

}

.url{

}

</style>    