<head>
    <link type="text/css" rel="stylesheet" href="style.css"/>
    <?php
    if(isset($_GET['image'])){
        $imageID = htmlspecialchars($_GET["image"]);
    }
    else
        $imageID = 0;

    ?>
    <script type="text/javascript" src="jquery.min.js"></script>
    <script type="text/javascript" src="jquery-ui.min.js"></script>
    <script type='text/javascript' src="http://documentcloud.github.com/underscore/underscore-min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
    <script type="text/javascript" src="js/ion.rangeSlider.min.js"></script>
    <script type="text/javascript" src="js/jquery.scrollTo.min.js"></script>
    <script type="text/javascript" src="js/html2canvas.js"></script>
    <script type="text/javascript" src="js/jquery.plugin.html2canvas.js"></script>
    <script type="text/javascript" src="js/jquery.mb.YTPlayer.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <meta charset="utf-8" lang="fr"/>
    <meta property="og:site_name" content="Panorama Festival"/>
    <meta property="og:description" content="Viens toi aussi créer ta soirée Panorama !" />
    <meta property="og:title" content="Mon Pano" />
    <?php echo  '<meta property="og:image" content="http://'.$_SERVER['HTTP_HOST'].'/dev/panorama/pic_pano/img'.$imageID.'.png"/>'
    ?>

</head>
<body>
<div class="content_pano">
    <div class="center">
        <a href="/"><img alt="Panorama Festival" class="grand-logo" src="images/logo_pano_long.png"/></a>

    </div>
    <div class="image_container" >
        <?php echo '<img class="image" src="pic_pano/img'.$imageID.'.png"/>';
        ?>
    </div>
    <div class="url_container">
        <div class="url">
            <?php echo '<a href="http://'.$_SERVER['HTTP_HOST'].getcwd().'/mon_pano.php?image='.$imageID.'"> 
            URL : http://'.$_SERVER['HTTP_HOST'].getcwd().'/mon_pano.php?image='.$imageID.'</a>' ?>
        </div>
    </div>
    <div class="share center2">
        <?php echo '<a data-text="Partagez sur Facebook" class="button-hover hvr-sweep-to-right" href="https://www.facebook.com/sharer/sharer.php?u=http://'.$_SERVER['HTTP_HOST'].getcwd().'/mon_pano.php?image='.$imageID.'" target="_blank">Partagez sur Facebook</a>'
        ?>
    </div>
</div>
</body>
<script>
$(document).ready(function(){

  $("#inf").click(function(){
    window.location.replace("/#inf");
    console.log("test");
});
});

  </script>


<style type="text/css">

  body{
    background-color: #ffffff;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
}

@media screen and (min-width: 200px) and (max-width: 640px) {
  .image {
    display:block;
    clear:both;
  }
}

.image{
    width:90%;
    margin-left:5%;
    margin-right:5%;
    margin-top:20%;
/*    border-color: #35BFBF;
    border-style: solid;
    border-width: 1px;*/

}
.share{
    margin-top:5%;
    color: #35BFBF;
}

.image_container{
    margin-top:10%;

}

.grand-logo{
  margin-top:-5%;
}
.center{
    top:10%;
    left:25%;
    width:50%;
    height:50%;
    position:absolute;
    text-align:center;}

    .center2{
    left:25%;
    width:50%;
    height:50%;
    position:absolute;
    text-align:center;}

    .url_container{
        text-align: center;
        background-color:#ffffff;
        margin-top:10%;
        font-family:'Kelson';
        font-weight:500;
    }

}

</style>    