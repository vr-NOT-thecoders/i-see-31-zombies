class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage=loadImage("sprites/smoke.png");

    this.trajectory=[];
  

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

      
    
    
    if(this.body.velocity.x>9.980978989877556778677873978248983952998117252479837785978917278372648712789347832656789689423578954727897893478943789789457859278954890445890345890456890568906789076907890780978090678904567789789678567 && this.body.position.x>200)
    {
      var position=[this.body.position.x,this.body.position.y];
      this.trajectory.push(position);

    }

    
      for(var i=0;i<this.trajectory.length;i++){ 

        image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1])

      }
    
  }
}
