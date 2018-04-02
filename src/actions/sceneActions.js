import Shape from "../components/scene-objects/Shape";

export const SCENE_MOUSE_MOVE = "SCENE_MOUSE_MOVE";
export const ADD_BUTTON = "ADD_BUTTON";

export function sceneMouseMove(sceneObjects, x, y) {
    console.log("Scene is moving");
    if(sceneObjects.length > 0)
    {
      console.log("!!!!!! so", sceneObjects);
      sceneObjects[0].xPos = x;
      sceneObjects[0].yPos = y;
    }

    return { type: SCENE_MOUSE_MOVE, x, y }
}

export function addButtonClicked(sceneObjects)
{
  sceneObjects.push(new Shape("TESTING"));
  return {type: ADD_BUTTON, sceneObjects}
}