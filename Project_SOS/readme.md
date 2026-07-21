<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: rgb(0, 54, 163);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    #sos{
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        border-radius: 100%;
        border: 5px solid white;
        pointer-events: all;
        cursor: pointer;
    }
    p{
        color: white;
        font-size: 50px;
        font-weight: bolder;
    }
</style>
<body>
    <div id="sos">
        <p>SOS</p>
        <audio id="sound" src="freesound_community-sos-43210.mp3"></audio>
    </div>
    <script>
      const sound = document.getElementById('sound');
      document.getElementById('sos').addEventListener('click',
            function(){
               sound.play()
               console.log("pressed..!")
            }
        );
    </script>
</body>
</html>