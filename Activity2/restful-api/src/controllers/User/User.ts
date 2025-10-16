import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import usersjson from '../../resources/users.json';
export class UserController extends CrudController {
Public create(req: Request<import("express-serve-static-core").ParamsDictionary>,
res: Response): void {
throw new Error("Belum diimplementasikan");
 }
public read(req: Request<import("express-serve-static-core").ParamsDictionary>,
res: Response): void {
 res.json(usersjson);
 }
 public update(req: Request<import("express-serve-static-core").ParamsDictionary>,
res: Response): void {
 throw new Error("Belum diimplementasikan");
 }
public delete(req: Request<import("express-serve-static-core").ParamsDictionary>,
res: Response): void {
 throw new Error("Belum diimplementasikan");
 }
}