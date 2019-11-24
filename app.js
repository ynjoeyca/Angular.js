$(document).ready(function() {

    var currentStep = 0;
    
    $("#step1").hide();
    $("#step2").hide();
    
    $("#btnStep1").click(function(){
        
        $("#btnStep1").show();
        $("#btnStep2").hide();
        
        currentStep = 1;
        // update the database...
        
    });
    
    $("#btnStep2").click(function(){
        
        $("#btnStep1").hide();
        $("#btnStep2").show();
        
        currentStep = 2;
        
    });
    
     
});
