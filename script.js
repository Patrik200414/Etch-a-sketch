let state = {
    rowsAndCollumns : 16
};



document.querySelector('#slider').addEventListener('change', (event) => {
    state.rowsAndCollumns = event.target.value;
    RenderSquares();
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