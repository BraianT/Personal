'use strict';
{
    var liveApiAttempt = [];
    let addTest = document.getElementById("titleInput").value

    liveApiAttempt.push(addTest)

    var btn = document.getElementById("btnAdd")
    btn.addEventListener("click", addInput())

      //let btnAdd = document.getElementById("btnAdd").addEventListener("click", addInput());
       function addInput() {
        var x = liveApiAttempt;
        document.getElementById("inputs").innerHTML = x;
       }
       console.log(liveApiAttempt);

}