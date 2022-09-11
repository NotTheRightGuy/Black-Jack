let startButton = document.getElementById('start-button');
let rickRoll = document.getElementById('rick-roll');

counter = 0

startButton.onclick = () =>{
    if(counter  % 2 == 0){
        rickRoll.style.display = 'block';
        document.getElementById('header').innerHTML = "NEVER GONNA GIVE YOU UP";
        startButton.innerHTML = 'NEVER GONNA LET YOU DOWN!!!'
    }
    else{
        rickRoll.style.display = 'none';
        document.getElementById('header').innerHTML = "Black Jack";
        startButton.innerHTML = 'Start'
    }
    counter += 1;
}