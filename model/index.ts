import {Chat, ChatOptions} from "./base";
import {You} from "./you";
import {Mcbbs} from "./mcbbs";
import {ChatDemo} from "./chatdemo";
import {Phind} from "./phind";
import {Vita} from "./vita";

export enum Site {
    // define new model here
    You = 'you',
    Phind = 'phind',
    Mcbbs = 'mcbbs',
    ChatDemo = 'chatdemo',
    Vita = 'vita',
}

export class ChatModelFactory {
    private modelMap: Map<Site, Chat>;
    private readonly options: ChatOptions | undefined;

    constructor(options?: ChatOptions) {
        this.modelMap = new Map();
        this.options = options;
        this.init();
    }

    init() {
        // register new model here
        this.modelMap.set(Site.You, new You(this.options))
    }

    get(model: Site): Chat | undefined {
        return this.modelMap.get(model);
    }
}
