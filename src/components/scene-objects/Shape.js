

class Shape{

    constructor(shapeType)
    {
        this.shapeType = shapeType;
        this.xPos = "50";
        this.yPos = "20"
    }

    getShape()
    {
        return this.shape;
    }

    setShapePos(x, y)
    {
        this.xPos = x;
        this.yPos = y;
    }
}


export default Shape;



