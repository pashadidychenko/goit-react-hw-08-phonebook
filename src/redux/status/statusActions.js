import { createAction } from "@reduxjs/toolkit";

const statusInOn = createAction("CHENGE_STATUS_ISON");
const statusExist = createAction("CHENGE_STATUS_EXIST");
const statusRemember = createAction("CHENGE_STATUS_REMEMBER");

export { statusInOn, statusExist, statusRemember };
