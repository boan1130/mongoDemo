import { Route } from "../abstract/Route"
import { UserController } from "../controller/UserController";
import { logger } from "../middlewares/log";

export class UserRoute extends Route{
    
    protected url: string;
    protected Contorller = new UserController();

    constructor(){
        super()
        this.url = '/api/v1/user/'
        this.setRoutes()
    }

    protected setRoutes(): void {
        this.router.get(`${this.url}findAll`,(req, res)=>{
            this.Contorller.findAll(req, res);
        })

        this.router.post(`${this.url}insertOne`,(req, res)=>{
            this.Contorller.insertOne(req, res);
        })
    }
}