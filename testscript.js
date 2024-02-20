myitem = document.getElementById("firsttest");
//This line of code creates a variable called "myitem", which is set to the element with the id "firsttest" in the HTML file.

    myitem.addEventListener("click", onClick);
    //This line of code is adding an event listener, which means that file is waiting for a user to complete this action 
    //and then it will run the function that is specified in the second parameter, which is onClick in this case.

    function onClick() {  
        //This section of code is a function, which is a block of code that is only run when it is called. 
        //Specifically, it is calling onClick, which is the function that is specified in the event listener.
        myitem.style.color = "green";  
        //This line of code is changing the myitem's color to green 
        myitem.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    }

    myitem.addEventListener("mouseout", onMouseOut);

    function onMouseOut() {
        myitem.style.color = "black";
        myitem.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    }