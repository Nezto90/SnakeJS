<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Javascript</title>
<style>
body{
    width: 95vw;
    height: 95vh;
    display: grid;
    place-items: center;
    background-color: black;
    color: white;
    font-family: verda;
}
h1{
    text-align: center;

}
#lienzo{
    box-shadow: 0px 0px 20px 20px lightgreen;
}
.container{
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.left, .right{
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.btn{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: black;
    color: white;
    font-weight: bold;
    border:  10px solid green;
    margin: 20px;
}
#results{
            display :flex;
            justify-content: space-around;
        }
.btn:active{
background-color: greenyellow;
}
</style>
</head>
<body>

    <div class="container">
        <div class=" left">
            <button class="btn" onclick="left()">Left</button>
            <button class="btn" onclick="right()">Right</button>
        </div>
        <div class="center">
        <h1>Snake Javascript</h1>
     
        <div id="results"><h2>Puntos: <span id="puntos"></span> </h2>
        <h2>Max: <span id="max"></span></h2>
        </div>
        
    
        <canvas id="lienzo" width="500" height="300"></canvas>
    </div>
    <div class="right">
        <button class="btn" onclick="up()">Up</button>
        <button class="btn" onclick="down()">Down</button>
    </div>
</div>
    <script src="./app.js"></script>
</body>
</html>
