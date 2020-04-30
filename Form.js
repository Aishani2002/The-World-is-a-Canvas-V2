class Form {
  constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.button2= createButton('Clear');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("The World is a Canavas");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
      this.button2.position(displayWidth-150,20);
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        
      });
  
    }
  }
  