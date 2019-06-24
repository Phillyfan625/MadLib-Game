function buttonPressed(){
    
    var randomTopic = prompt("Pick a number between 1 and 3");

    if(randomTopic == 1){
        alert("This is MadLibs! Press OK to continue!");
        var name = prompt("Give me any name");
        var verb = prompt("Now give me a verb that ends with 'ed' please!");
        var verb2 = prompt("Now give me one more verb that ends with 'ed'!");

        var movieScene1 = ("Because I did what " + name + " said a kid couldn't do. I " + verb + " it to Shell City, and I " + verb2 + " the Cyclone!");
        document.body.appendChild(document.createElement('p'));
        document.querySelector("body p:last-child").id = "jstext";
        document.querySelector("#jstext").innerHTML = movieScene1;
        
    }
    if(randomTopic == 2){
        alert("This is MadLibs! Press OK to continue!");
        var noun = prompt("Give me a noun!");
        var pronoun = prompt("Give me a pronoun!")

        var movieScene2 = ("May the " + noun + " be with " + pronoun);
        
        
        document.body.appendChild(document.createElement('p'));
        document.querySelector("body p:last-child").id = "jstext";
        document.querySelector("#jstext").innerHTML = movieScene2;

    }
    if(randomTopic == 3) {
        alert("This is MadLibs! Press OK to continue!");
        var verb = prompt("Give me a verb that ends in 'ing'!");
        var pronoun = prompt("Give me a pronoun!");
        var name = prompt("Give me a name!");

        var movieScene3 = ("You're  " + verb + "   " + pronoun + " apart "+ name);

        document.body.appendChild(document.createElement('p'));
        document.querySelector("body p:last-child").id = "jstext";
        document.querySelector("#jstext").innerHTML = movieScene3;

    }

    var p = document.getElementById("label");
    p.style.display = "block";  	

    
    

}
