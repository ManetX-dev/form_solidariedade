function onlyNumbers(num, limit){

    num.setAttribute("maxlength", limit);

    var v = num.value;
    
    if(isNaN(v[v.length-1])){

        num.value = v.substring(0, v.length-1);
        return;

    }

 }
 function cpfFormat(num){

    num.setAttribute("maxlength", "14");

    var v = num.value;
    
    if(isNaN(v[v.length-1])){

        num.value = v.substring(0, v.length-1);
        return;

    }

    if (v.length == 3 || v.length == 7) num.value += ".";
    if (v.length == 11) num.value += "-";

 }
 
 function cepFormat(num){

    num.setAttribute("maxlength", "9");

    var v = num.value;
    
    if(isNaN(v[v.length-1])){

        num.value = v.substring(0, v.length-1);
        return;

    }

    if (v.length == 5) num.value += "-";
     
 }

 function hideShowPreCandidatura(val){

    var lblCargo = document.getElementById('lblCargo');
    var cargo = document.getElementById('cargo');
    var lblAno = document.getElementById('lblAno');
    var ano = document.getElementById('ano');

    alert(val);

    if(val == 1){

        $(lblCargo).show();
        $(cargo).show();
        $(lblAno).show();
        $(ano).show();
        
    }
    else if(val == 2){

        $(lblCargo).hide();
        $(cargo).hide();
        $(lblAno).hide();
        $(ano).hide();
        
    }

}