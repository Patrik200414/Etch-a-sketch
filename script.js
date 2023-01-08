let state = {
    rowsAndCollumns : 16,
    currentColor: '#000000',
    mode: 'color',
    mouseDown: false
};


document.querySelector('.size').textContent = `${document.querySelector('#slider').value} X ${document.querySelector('#slider').value}`;


document.querySelector('#slider').addEventListener('change', (event) => {
    state.rowsAndCollumns = event.target.value;
    document.querySelector('.size').textContent = `${event.target.value} X ${event.target.value}`
    RenderSquares();
});




//clear button
document.querySelector('#clear').addEventListener('click', () => {
    let td = document.querySelectorAll('.styleSquare');
    for(let item of td){
        item.style.backgroundColor = '#ffffff';
    }
})



document.querySelector('#colorMode').addEventListener('click', (event) => {
    state.mode = 'color';
    document.querySelector('#colorMode').classList.add('btn-chosen');
    if(document.querySelector('#rainbowMode').classList.contains('btn-chosen') === true){
        document.querySelector('#rainbowMode').classList.remove('btn-chosen');
    }
    if(document.querySelector('#erase').classList.contains('btn-chosen') === true){
        document.querySelector('#erase').classList.remove('btn-chosen');
    }
})
document.querySelector('#rainbowMode').addEventListener('click', (event) => {
    state.mode = 'rainbow';
    document.querySelector('#rainbowMode').classList.add('btn-chosen');
    if(document.querySelector('#colorMode').classList.contains('btn-chosen') === true){
        document.querySelector('#colorMode').classList.remove('btn-chosen');
    }
    if(document.querySelector('#erase').classList.contains('btn-chosen') === true){
        document.querySelector('#erase').classList.remove('btn-chosen');
    }
})
document.querySelector('#erase').addEventListener('click', (event) => {
    state.mode = 'erase';
    document.querySelector('#erase').classList.add('btn-chosen');
    if(document.querySelector('#rainbowMode').classList.contains('btn-chosen') === true){
        document.querySelector('#rainbowMode').classList.remove('btn-chosen');
    }
    if(document.querySelector('#colorMode').classList.contains('btn-chosen') === true){
        document.querySelector('#colorMode').classList.remove('btn-chosen');
    }
})

document.querySelector('#drawingContainer').addEventListener('mousedown', () => {
    state.mouseDown = true;
});
document.querySelector('#drawingContainer').addEventListener('mouseup', () => {
    state.mouseDown = false;
})


document.querySelector('#drawingContainer').addEventListener('mouseover', (event) => {
    console.log(event.type);
    if(state.mouseDown === true){
        if(state.mode === 'color'){
            if(event.target.className !== 'drawing-container'){
                state.currentColor = '#000000';
                document.getElementById(event.target.id).style.backgroundColor = state.currentColor;
            }
            
        }else if(state.mode === 'rainbow'){
            if(event.target.className !== 'drawing-container'){
                Rainbow();
                document.getElementById(event.target.id).style.backgroundColor = state.currentColor;
            }
        }
        else if(state.mode === 'erase'){
            if(event.target.className !== 'drawing-container'){
                state.currentColor = '#ffffff';
                document.getElementById(event.target.id).style.backgroundColor = state.currentColor;
            }
        }
    }
    
})


function RenderSquares(){
    let divToAppend = document.querySelector('#drawingContainer');
    let table = document.createElement('table');
    table.setAttribute('class', 'grid-container');
    table.setAttribute('id', 'gridContainer')
    for(let i = 0;i<state.rowsAndCollumns;i++){
        let tr = document.createElement('tr');
        for(let j= 0;j<state.rowsAndCollumns;j++){
            let td = document.createElement('td');
            td.setAttribute('class', 'styleSquare');
            td.setAttribute('id', uniqueid());
            tr.append(td)
        }
        table.append(tr);
    }

    if(divToAppend.childElementCount === 0){
        divToAppend.append(table);
    }
    else{
        divToAppend.replaceChildren(table)
    }
    
}

RenderSquares();

function Rainbow(){
    let colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
    let random = Math.floor(Math.random() * (7 - 1)) + 0;
    state.currentColor = colors[random];
}


function uniqueid(){
    // always start with a letter (for DOM friendlyness)
    var idstr=String.fromCharCode(Math.floor((Math.random()*25)+65));
    do {                
        // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
        var ascicode=Math.floor((Math.random()*42)+48);
        if (ascicode<58 || ascicode>64){
            // exclude all chars between : (58) and @ (64)
            idstr+=String.fromCharCode(ascicode);    
        }                
    } while (idstr.length<32);

    return (idstr);
}