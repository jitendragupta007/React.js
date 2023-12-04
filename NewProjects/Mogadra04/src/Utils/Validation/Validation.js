export const checkValidData=(origin,destination,fromDate,toDate)=>{
    console.log("checkvaliddata")   
      if (origin === "" || destination === "")
        return "Please fill all the inputs!";
    
        // const currentDate = new Date();
        // const selectedDate = new Date(fromDate);
    
    //   if (selectedDate < currentDate) 
    //   return "Invalid date. Please select a From date greater than today.";
    // if(toDate!==null && toDate!=="")
    // {
    //     const selectedtoDate = new Date(toDate);
    //     if (selectedtoDate < currentDate || selectedtoDate < selectedDate) 
    //     return "Invalid date. Please select a valid return date.";
    
    // }
    
    return null;
    
    }