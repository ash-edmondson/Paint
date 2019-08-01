<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>

    <canvas id=stage width="400" height="400">
    </canvas>
        <div id=colors>
        <button data-color=white></button>
        <button data-color=black></button>
        <button data-color=orange></button>
        <button data-color=blue></button>
        <button data-color=green></button>
        <button data-color=pink></button>
        <button data-color=yellow></button>
        </div>

        <div id=pens>
          <button data-shape=square> &#x25A0; </button>  
          <button data-shape=circle> &#x25CF; </button> 
          <button data-shape=triangle> &#x25B2; </button>
          <button data-shape=rectangle> &#x25AC; </button>

          
         
          
        </div>
  
        <div>
          <input type=range id=size min=1 max=30 vaule=5>
        </div>

        <div> 
          <button id=clear>Clear</button> 
        </div>

      
    <script src="script.js"></script>
  </body>
</html>
