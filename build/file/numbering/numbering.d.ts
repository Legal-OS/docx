import { IXmlableObject, XmlComponent } from "../../file/xml-components";
import { AbstractNumbering } from "./abstract-numbering";
import { ILevelsOptions } from "./level";
import { ConcreteNumbering } from "./num";
export interface INumberingOptions {
    readonly config: Array<{
        readonly levels: ILevelsOptions[];
        readonly reference: string;
    }>;
}
export declare class Numbering extends XmlComponent {
    private nextId;
    private readonly abstractNumbering;
    private readonly concreteNumbering;
    constructor(options: INumberingOptions);
    prepForXml(): IXmlableObject | undefined;
    createConcreteNumbering(abstractNumbering: AbstractNumbering, reference?: string, numId?: number): ConcreteNumbering;
    createAbstractNumbering(options: ILevelsOptions[]): AbstractNumbering;
    readonly ConcreteNumbering: ConcreteNumbering[];
}
