function buttonPressed(){
    
    var randomTopic = prompt("Pick a number between 1 and 2");

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
    else{
        alert("This is MadLibs! Press OK to continue!");
        var noun = prompt("Give me a noun!");
        var pronoun = prompt("Give me a pronoun!")

        var movieScene2 = ("May the " + noun + " be with " + pronoun);
        
        
        document.body.appendChild(document.createElement('p'));
        document.querySelector("body p:last-child").id = "jstext";
        document.querySelector("#jstext").innerHTML = movieScene2;

    }

    
    

}
