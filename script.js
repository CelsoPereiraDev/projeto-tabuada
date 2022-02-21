function tabuada(){
    var numerot = document.getElementById('tabuadainicio')
    var tab = document.getElementById ('seltab')
    var N = Number(numerot.value)
    var D = 0
    var R = 0
    tab.innerHTML = ''
    for (D; D <= 10 ; D++){
        R = D*N
        let item = document.createElement('option')
        item.text = ` ${N} X ${D} = ${R}`  
        tab.appendChild (item)      
    }
}