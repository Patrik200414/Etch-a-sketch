let state = {
    rowsAndCollumns : 16
};





function RenderSquares(){
    for(let i = 0;i<state.rowsAndCollumns;i++){
        let tr = document.createElement('tr');
        for(let j= 0;j<state.rowsAndCollumns;j++){
            let td = document.createElement('td');
            td.setAttribute('class', 'styleSquare');
            tr.append(td)
        }
        document.querySelector('#gridContainer').append(tr);
    }
}

RenderSquares();