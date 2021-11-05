var arr = [];
while(arr.length < 7){
    var r = Math.floor(Math.random() * 3000) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}

function addLi(element, winner) {
     // Create the list item:
     var item = document.createElement('li');
     item.style.fontSize = 30;

     // Set its contents:
     item.appendChild(document.createTextNode(winner));

     // Add it to the list:
     element.appendChild(item);
}

// Add the contents of json to #foo:

function get_next_winner()
{
    if(arr.length == 0)
    {
        document.getElementById('next').style.visibility = 'hidden';
        document.getElementById('lotter_number').style.visibility = 'hidden';
        document.getElementById('lotter_number').style.display = 'none';
        document.getElementById('congrats').style.visibility = 'visible';
        document.getElementById('congrats').style.display = 'initial';
        document.getElementById('winner_banner').style.visibility = 'visible';
        document.getElementById('winner_list').style.visibility = 'visible';
        applause.pause();
        applause.currentTime = 0;
        rolling.pause();
        rolling.currentTime = 0;
        congratulations.pause();
        congratulations.currentTime = 0
        congratulations.play();
    }
    else
    {
        applause.pause();
        applause.currentTime = 0;
        rolling.pause();
        rolling.currentTime = 0;
        rolling.play();
        document.getElementById('lotter_number').style.visibility = 'visible';
        winner=arr.pop();
        setTimeout(function(){
            $('.odometer').html(winner);
        }, 100);
        addLi(document.getElementById('winner_list'), winner.toString().padStart(4, '0'));
    }
}