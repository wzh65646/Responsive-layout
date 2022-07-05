let check = false;
$("#nav-style").on("click",() => {
    if(!check){
        $("#but-div").addClass("close");
        check = true;
    }else if(check){
        $("#but-div").removeClass("close");
        check = false;
    }
})