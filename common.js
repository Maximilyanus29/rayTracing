var canvas = document.getElementById("canvas");
ctx=canvas.getContext("2d");
ctx.fillStyle="silver";
var width=canvas.width;
var height=canvas.height;
var aspect = width/height;

var colors=[
    "black",
    // "silver",
    // "grey",
    // "black",
];


for(var i =1;i<40;i++){
    colors[i]="rgb("+(55-i)+","+(55-i)+","+(55-i)+")";
}










var dump=0;

var t=0;
setInterval(function(){

    

    var light=new Vector3d(Math.sin(t * 0.001), Math.cos(t * 0.001), -1).norm();

    for(var i=0;i<width;i++){
        for(var j=0;j<height;j++){

            var uv = Vector2d.operation(
                Vector2d.operation(
                    Vector2d.operation(
                        new Vector2d(i,j),
                        new Vector2d(width, height),
                        "/"
                    ),
                    2,
                    "*"
                ),
                1,
                "-"
            );

            // Позиция камеры
            var cameraPos = new Vector3d(-2,0,0);
            // Направление луча
            var cameraRayDirection = new Vector3d(1, uv.x, uv.y).norm();
            
            var intersection = Help.sphere(cameraPos, cameraRayDirection, 1);

            var color = 0;

            // console.log(intersection);
            // dump=1;
            // break;

            // console.log(intersection);
            if(intersection.x > 0){

                var itPoint = Vector3d.operation(
                    Vector3d.operation(
                        cameraRayDirection,
                        intersection.x,
                        "*"
                    ),
                    cameraPos,
                    "+"
                );
        
                var n = itPoint.norm();

                var diff = Vector3d.dot(n, light);

                color = diff*40;
            }




            color = parseInt( Help.clamp(color, 0, colors.length));

       
            ctx.fillStyle=colors[color];

            ctx.fillRect(i,j,1,1);

        }
        // if(dump==1){
        //     break;
        // }
    }






        

    if(dump==1){
        return;
    }
        
        

    t++;
},1);