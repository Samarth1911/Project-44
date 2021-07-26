class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createImput("Code1")
        this.acess1.position(100,90)
        this.acess1.style('background','lightgrey')

        this.button1 = createButton("Check")
        this.button1.positon(100,200)
        this.button1.style('background','lightgrey')

    }

    display(){

        // Add code to make the buttons function as expected
        this.button1.mousePressed(() =>{
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide()
                this.access1.hide()
                score++
            }

        
        });
        


    }
}