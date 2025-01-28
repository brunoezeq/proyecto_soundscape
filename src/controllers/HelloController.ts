import {BasicResponse} from "../controllers/types/index"
        //"@/controllers/types";
import {IHelloController} from "../controllers/interfaces";
import {LogSuccess} from "../utils/logger";

export class HelloController implements IHelloController {
    public async getMessage(name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] get Request');
        return {
            message: `Hello ${name || 'world'}`,
        }
    }
}