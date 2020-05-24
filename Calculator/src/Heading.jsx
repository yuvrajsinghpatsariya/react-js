import React from 'react';
let curDate = new Date(2020, 5 , 24, 5, 0, 0);
curDate = curDate.getHours();
let grt = " ";
if(curDate>=1 && curDate<12){
    grt="good mrg"
}
else if( curDate>=12 && curDate<20){
    grt="giid afternoon"

}
else{
    grt="nd night"
}
function Heading(){
    return(
    <div>
        <h1>
            hello div{grt}
        </h1>
    </div>
    );
}
export default Heading;