function setup(){
    createCanvas(600,600);
}


var circulo = {
    x:10,
    y:200,
    diametro:50
};

var velx = 5;
var vely = 5;
function draw(){
    background(100,100,100);
    //ellipse
    fill(250,200,200); // colors
    ellipse(circulo.x,circulo.y,circulo.diametro, circulo.diametro);
    if(circulo.x == 600 || circulo.x == 0 )
    {
        //vely = velx*1.1;
        velx = -velx;
    }
    if( circulo.y== 600 || circulo.y == 0)
    {
        vely = -vely;
    }
    circulo.x += velx;
    circulo.y += vely;


}