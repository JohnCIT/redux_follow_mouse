import Shape from "../components/scene-objects/Shape";

export const SCENE_MOUSE_MOVE = "SCENE_MOUSE_MOVE";
export const ADD_BUTTON_ACTION = "ADD_BUTTON_ACTION";

export function sceneMouseMove(sceneObjects, x, y) {
  
  sceneObjects.forEach(sceneObject => {
    sceneObject.xPos = x;
    sceneObject.yPos = y;

    x -= 10;
    y -= 10;

  });

    return { type: SCENE_MOUSE_MOVE, x, y }
}

export function addButtonClicked(sceneObjects)
{
  sceneObjects.push(new Shape("TESTING"));
  return {type: ADD_BUTTON_ACTION, sceneObjects}
}