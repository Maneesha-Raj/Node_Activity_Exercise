const mins=860;


    if(mins>0 && mins<=600){
        console.log("Early Morning");
       
        }
   else if(mins>=601 && mins<=780){
        console.log("Morning");
       
        }
    else if(mins>=781 && mins<=960){
        console.log("Noon");
      
        }
    else if(mins>=961 && mins<=1140){
        console.log("Afternoon");
   
        }
  else if(mins>=1141 && mins<=1320){
        console.log("Evening");
        
        }
   else if(mins>=1321 && mins<=1439){
        console.log("Night");
        
        }
 else{
        console.log("Invalid Value");
}