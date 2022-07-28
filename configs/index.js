import {dotenv} from 'dotenv';

export const qa = dotenv.config({path: '../configs/qa/qa.env'});
export const dev = dotenv.config({path: '../configs/dev/dev.env'});
export const stage = dotenv.config({path: '../configs/stage/stage.env'});