var arr = [];
var winners_count = 0;
var current_winner = null;
while(arr.length < 1000){
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

function add_to_winner() {
    winners_count++;
    addLi(document.getElementById('winner_list'), current_winner.toString().padStart(4, '0'));
    document.getElementById('addToList').style.visibility = 'hidden';
    rolling.pause();
    rolling.currentTime = 0;
    applause.pause();
    applause.currentTime = 0;
    applause.play();
}

// Add the contents of json to #foo:

function get_next_winner()
{
    document.getElementById('addToList').disabled=false;

    if(arr.length == 0 || winners_count == 7)
    {
        var winner_list = document.getElementById("winner_list");
        var i = winner_list.childNodes.length;
        while (i--)
            winner_list.appendChild(winner_list.childNodes[i]);

        document.getElementById('next').style.visibility = 'hidden';
        document.getElementById('lotter_number').style.visibility = 'hidden';
        document.getElementById('lotter_number').style.display = 'none';
        document.getElementById('congrats').style.visibility = 'visible';
        document.getElementById('congrats').style.display = 'initial';
        document.getElementById('winner_banner').style.visibility = 'visible';
        document.getElementById('winner_list').style.visibility = 'visible';
        document.getElementById('addToList').style.display = 'none';
        document.getElementById('addToList').style.visibility = 'hidden';
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
        document.getElementById('addToList').style.display = 'initial';
        document.getElementById('addToList').style.visibility = 'visible';
        winner=arr.pop();
        current_winner=winner;
        setTimeout(function(){
            $('.odometer').html(winner);
        }, 100);
    }
}