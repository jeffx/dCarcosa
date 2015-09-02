function decClick( image ) {
    var i = image.id;
    decValue( Number( i ) );
};
function decValue( idx ) {
    ele = 'hd' + idx;
    curHdValues[idx]--;
    ta = document.getElementById( ele );
    if( curHdValues[idx] < 0 ) {
        curHdValues[idx] = 0;
        alert( "Die Value can't be lower than 0" );
        return
    }
    ta.innerHTML = "";
    ta.innerHTML = curHdValues[idx];
};
function dieType( roll ) {
    if( roll <= 4 ){
        return 4;
    }else if( roll <= 8 ) {
        return 6;
    }else if( roll <= 12 ) {
        return 8;
    }else if( roll <= 16 ) {
        return 10;
    }else if( roll <= 20 ) {
        return 12;
    } else{
        alert( "Oops!  Nothing to see here" );
    }
};
function dX( dice ) {
    return Math.floor( Math.random() * (dice - 1 + 1 ) ) + 1;
};
function getConModifier( score ) {
    if( score <= 8 ) {
        return -1;
    } else if( score >= 15 ){
        return 1;
    } else{
        return 0;
    }
};
function incClick( image ) {
    var i = image.id;
    incValue( Number( i ) );
};
function incValue( idx ) {
    ele = 'hd' + idx;
    curHdValues[idx]++;
    ta = document.getElementById( ele );
    if( curHdValues[idx] > hdValues[idx] ) {
        alert( "Value higher than initial" );
        curHdValues[idx]--;
        return;
    }
    ta.innerHTML = "";
    ta.innerHTML = curHdValues[idx];
}
