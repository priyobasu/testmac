class Form{
    constructor()
    {
    this.input=createInput("Name");
    this.button=createButton('Play');
    this.greeting=createElement('h2');

    }
    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(600,50);

       

       this.input.position(550,250);
       this.button.position(700,250);

        this.button.mousePressed(()=>{
           this.input.hide();
            this.button.hide();

            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
           this.greeting.html("Hello"+player.name);
           this.greeting.position(550,100);

        });

    }
}