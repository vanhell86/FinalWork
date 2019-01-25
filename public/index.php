<?php
include '../function.php';


include '../components/header.php';

if(empty($_GET)){
    include '../pages/landingPage.php';
 }else if(isset($_GET['articles'])) {
    include '../pages/Articles.php';
 }else if(isset($_GET['articles1'])) {
   include '../pages/Articles/Article1.php';
}else if(isset($_GET['articles2'])) {
   include '../pages/Articles/Article2.php';
}else if(isset($_GET['articles3'])) {
   include '../pages/Articles/Article3.php';
}  else if(isset($_GET['chat'])) {
    include '../pages/Chat.php';
 }else if(isset($_GET['register'])) {
   include '../pages/Register.php';
} else if(isset($_GET['about-us'])) {
   include '../pages/About.php';
}else {
    include '../pages/404.php';
 }



include '../components/footer.php';




?>