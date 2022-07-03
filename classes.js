class Vector3d{
    constructor(x, y, z){
        this.x=x;
        this.y=y;
        this.z=z;
    }

    length(){
        return Math.sqrt(this.x*this.x + this.y * this.y + this.z * this.z);
    }

    norm(){
        return Vector3d.operation(this, this.length(), "/");
    }

    static dot(vec1, vec2){
        return vec1.x*vec2.x + vec1.y*vec2.y + vec1.z*vec2.z;
    }

    static operation(vec1, vec2, operation){
        if(typeof vec2 !== "object"){
            vec2={
                x:vec2,
                y:vec2,
                z:vec2,
            }
        }
        switch(operation){
            case "+":
                return new Vector3d(
                    vec1.x+vec2.x,
                    vec1.y+vec2.y,
                    vec1.z+vec2.z,
                    )
                break;
            case "-":
                return new Vector3d(
                    vec1.x-vec2.x,
                    vec1.y-vec2.y,
                    vec1.z-vec2.z,
                    )
                break;
            case "*":
                return new Vector3d(
                    vec1.x*vec2.x,
                    vec1.y*vec2.y,
                    vec1.z*vec2.z,
                    )
                break;
            case "/":
                return new Vector3d(
                    vec1.x/vec2.x,
                    vec1.y/vec2.y,
                    vec1.z/vec2.z,
                    )
                break;
        }

    }
}
class Vector2d{
    constructor(x, y){
        this.x=x;
        this.y=y;
    }

    length(){
        return Math.sqrt(this.x*this.x + this.y * this.y);
    }

    norm(){
        return Vector2d.operation(this, this.length(), "/")
    }
    
    static operation(vec1, vec2, operation){
        if(typeof vec2 !== "object"){
            vec2={
                x:vec2,
                y:vec2,
            }
        }
        switch(operation){
            case "+":
                return new Vector2d(
                    vec1.x+vec2.x,
                    vec1.y+vec2.y,
                    )
                break;
            case "-":
                return new Vector2d(
                    vec1.x-vec2.x,
                    vec1.y-vec2.y,
                    )
                break;
            case "*":
                return new Vector2d(
                    vec1.x*vec2.x,
                    vec1.y*vec2.y,
                    )
                break;
            case "/":
                return new Vector2d(
                    vec1.x/vec2.x,
                    vec1.y/vec2.y,
                    )
                break;
        }
    }
}

class Help
{
    static clamp(value, min, max){
        return Math.max(Math.min(value, max), min);
    }

    static sphere(camera, ray, radius){
        // camera = [-5,0,0]
        // ray = [1, x, y]
        // x1*x2+y1*y2+z1*z2
        var b=Vector3d.dot(camera,ray);
        // console.log(b);
        // camera = [-5,0,0]
        // ray = [1,-0.5214123,-0.215124]
        // b = [-5,0,0]
        var c=Vector3d.dot(camera,camera) - radius * radius;
       
        var h = b * b - c;
        if(h<0) return new Vector2d(-1,-1);
        h = Math.sqrt(h);
        return new Vector2d(- b - h, -b + h);
    }
}