<style type="text/css">
     
     *{
         padding: 0;
         margin: 0;
     }
     body{
         background: #333;
         height: 100vh;
         display: flex;
         text-align: center;
         justify-content: center;

     }
     .color {
         font-family: 'Montserrat',sans-serif;
         display: flex;
         text-align: center;
         flex-flow: column nowrap;
         padding: 20px;
         /*background-color: tomato;*/

     }
     #hex{
         color: white;
         font-size: 40px;
         text-transform: uppercase;
         margin-bottom: 10px;
     }
     .color button{
         background: none;
         outline: none;
         color: white;
         cursor: pointer;
         font-size: 20px;
         padding: 10px;
         transition: all.2s linear;


     }
     .color button :hover{
         background: white;
         color: #333;

     }

    </style>
</head>
<body>
  <div class="color">
      <span id="hex">#33333</span>
      <button onclick="getNewColor()">Yeni Renk</button>
  </div>


function getNewColor(){
    var symbols ='0123456789ABCDEF'
    var color='#'
    for(let i =0; i<6; i++){
        color = color +symbols[Math.floor(Math.random()*16)];
    }
    document.body.style.background = color
}
