var states = []
input_text.oninput = function(){
    var curtxt = input_text.value
    states.push(curtxt)
}

function undo(){
    if(states.length > 1){
        states.pop();
        input_text.value=states[states.length-1]
    }
    else{
        input_text.value=""
        states.pop();
    }
}
