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
    <!-- SIDE MENU -->
    <nav class="nav" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
      <a href="#" class="nav-logo"> 
         <img src="images/icon.png" alt="Panorama 18"/>
     </a>
     <ul class="nav-items">
         <li class="nav-item" id="art" data-target="art">
            <a href="#" class="nav-iconContainer">
               <img src="images/icon1.png" alt="nav"/>
           </a>
       </li>
       <li class="nav-item" id="bte" data-target="bte">
          <a href="#" class="nav-iconContainer">
             <img src="images/icon2.png" alt="nav"/>
         </a>
     </li>
     <li class="nav-item" id="mdl" data-target="mdl">
      <a href="#" class="nav-iconContainer">
         <img src="images/icon3.png" id="medley" alt="nav"/>
     </a>
 </li>
 <li class="nav-item" id="inf" data-target="inf">
  <a href="#" class="nav-iconContainer last">
     <img src="images/icon4.png" id="info" alt="nav"/>
 </a>
</li>
</ul>   
</nav>
<div class="content_pano center">
    <div>
        <img class="logo_pano" data-target="art" src="images/logo_pano_long.png"/>

    </div>
    <div class="image_container" >
        <?php echo '<img class="image" src="pic_pano/img'.$imageID.'.png"/>';
        ?>
    </div>
    <div class="url_container">
        <div class="url">
            <?php echo '<a href="http://'.$_SERVER['HTTP_HOST'].getcwd().'/mon_pano.php?image='.$imageID.'"> 
            http://'.$_SERVER['HTTP_HOST'].getcwd().'/mon_pano.php?image='.$imageID.'</a>' ?>
        </div>
    </div>
    <div class="share">
        <?php echo '<a data-text="Partagez sur Facebook" class="button-hover hvr-sweep-to-right" href="https://www.facebook.com/sharer/sharer.php?u=http://'.$_SERVER['HTTP_HOST'].getcwd().'/mon_pano.php?image='.$imageID.'" target="_blank">Partagez sur Facebook</a>'
        ?>
    </div>
</div>
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
/*    border-color: #35BFBF;
    border-style: solid;
    border-width: 1px;*/

}
.share{
    margin-top:5%;
    color: #35BFBF;
}
.logo_pano{
    margin-top:5%;
}

.image_container{
    margin-top:10%;

}
.center{
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

.url{

}

</style>    