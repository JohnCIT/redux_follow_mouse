export const MAIN_MENU_START_ACTION = "MAIN_MENU_START_ACTION";


export function mainMenuStart(userName) {
    return { type: MAIN_MENU_START_ACTION, userName }
  }