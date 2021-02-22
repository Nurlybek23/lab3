<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('asset/css/n1.css') }}">
    <script src="{{ asset('asset/js/n1.js') }}"></script>
    <script
       src="https://code.jquery.com/jquery-3.5.1.js"
       integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
       crossorigin="anonymous"></script>
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>
    <header>
        <div class="header_head">
            <div class = "container">
               <div class="header_inner">
                   <div class="logo">Nurlybek</div>
                   <nav>
                       <ul>
                           <li><a href="">About me</a></li>
                           <li><a href="#works">Portfolio</a></li>
                           <li><a href="">Contacts</a></li>
                       </ul>
                   </nav>
                </div>
            </div>
        </div>
        <div class="header_body"></div>
    </header>

    <div class="Home">
           <img src="https://www.infogamma.pro/wp-content/uploads/2014/08/man.png" alt="" >
           <h1>I am <span>Nurlybek</span></h1>
           <h3>WEB DEVELOPER | JAVA DEVELOPER</h3>
           <a href="https://www.instagram.com/"> <i  id="is" class="fa fa-instagram" aria-hidden="true"> </i> </a>
           <a href="https://www.facebook.com/"> <i id="fc" class="fa fa-facebook" aria-hidden="true"></i> </a>
           <a href="https://www.linkedin.com/"> <i id="li" class="fa fa-linkedin" aria-hidden="true"></i> </a>
            <a href="https://web.telegram.org/#/im"> <i id="tg" class="fa fa-telegram" aria-hidden="true"></i> </a>
    </div>

    <div id="works" class="works">
           <h1>MY WORKS</h1>

           
        <div class="container">

            <div class="row">
                       <div class="card" style="width: 18rem;">
                            <img src="https://lh3.googleusercontent.com/proxy/NJ4E_fCVl-4X-3IIptbI6nM-Pwptx1NnXiZN6X59-i6uRotcM8OVjPL6tEaGjK9YAJW13xgZ9JXwMgbpf2_JxNupDIDqUZl1g2hs2Sfw_JDJ8pBZKLJqqA" width="300" height="200" class="card-img-top" alt="...">
                               <div class="card-body">
                                   <h5 class="card-title">PACMAN ALGORITHM</h5>
                                    <p class="card-text">Java project</p>
                                </div>
                        </div>

                        <div class="card" style="width: 18rem;">
                            <img src="data:image/jpeg;base64,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" width="300" height="200" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">PIZZA ORDER</h5>
                                <p class="card-text">Java project</p>
                            </div>
                        </div>
               
                        <div class="card" style="width: 18rem;">
                            <img src="data:image/jpeg;base64,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" width="300" height="200" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">RETRO CARS WEB SITE</h5>
                                <p class="card-text">Front end project</p>
                            </div>
                         </div>
        </div>
        </div>
         </div>
    
</body>
</html>

