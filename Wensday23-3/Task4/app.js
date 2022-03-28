
    document.getElementById("font_family").addEventListener("change", function() {
        let fonts=["Arial","Verdana","Helvetica","Times New Roman","Courier New"];
        let x = document.getElementById("font_family").value;
    switch(x) {
case "Arial":
document.getElementById("text").style.fontFamily="Arial";
break;
case "Verdana":
document.getElementById("text").style.fontFamily="Verdana";
break;
case "Helvetica":
document.getElementById("text").style.fontFamily="Helvetica";
break;
case "Times New Roman":
document.getElementById("text").style.fontFamily="Times New Roman";
break;
case "Courier New":
document.getElementById("text").style.fontFamily="Courier New";
break;
}
    });


    
document.getElementById("font_size").addEventListener("change", function() {
   let y = document.getElementById("font_size").value;
    switch(y) {
case "8pt":
document.getElementById("text").style.fontSize="8pt";
break;
case "10pt":
document.getElementById("text").style.fontSize="10pt";
break;
case "12pt":
document.getElementById("text").style.fontSize="12pt";
break;
case "14pt":
document.getElementById("text").style.fontSize="14pt";
break;
case "16pt":
document.getElementById("text").style.fontSize="16pt";
break;
}
    });

    let checkbox = document.querySelector("input[name=font_italic]");
   // The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.
     checkbox.addEventListener("change", function() {
         //The addEventListener() method attaches an event handler to the specified element.
       if (this.checked) {
        document.getElementById("text").style.fontStyle = "italic";
        } else {
            document.getElementById("text").style.fontStyle = "";
}
});

checkbox = document.querySelector("input[name=font_bold]");

     checkbox.addEventListener("change", function() {
       if (this.checked) {
        document.getElementById("text").style.fontWeight = "bold";
        } else {
            document.getElementById("text").style.fontWeight = "";
}
});

checkbox = document.querySelector("input[name=font_underline]");

     checkbox.addEventListener("change", function() {
       if (this.checked) {
        document.getElementById("text").style.textDecoration = "underline";
        } else {
            document.getElementById("text").style.textDecoration = "";
}
});