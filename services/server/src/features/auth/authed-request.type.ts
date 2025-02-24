import { Request } from "express";
import { JwtPayload } from "./jwt-payload.type";

export interface AuthedRequest extends Request {
  user: JwtPayload;
}