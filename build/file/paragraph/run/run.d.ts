import { ShadingType } from "../../../file/table";
import { XmlComponent } from "../../../file/xml-components";
import { FootnoteReferenceRun } from "../../../file/footnotes/footnote/run/reference-run";
import { FieldInstruction } from "../../../file/table-of-contents/field-instruction";
import { EmphasisMarkType } from "./emphasis-mark";
import { Begin, End, Separate } from "./field";
import { RunProperties } from "./properties";
import { IFontAttributesProperties } from "./run-fonts";
import { UnderlineType } from "./underline";
interface IFontOptions {
    readonly name: string;
    readonly hint?: string;
}
export interface IRunOptions {
    readonly bold?: true;
    readonly italics?: true;
    readonly underline?: {
        readonly color?: string;
        readonly type?: UnderlineType;
    };
    readonly emphasisMark?: {
        readonly type?: EmphasisMarkType;
    };
    readonly color?: string;
    readonly size?: number;
    readonly rightToLeft?: boolean;
    readonly smallCaps?: boolean;
    readonly allCaps?: boolean;
    readonly strike?: boolean;
    readonly doubleStrike?: boolean;
    readonly subScript?: boolean;
    readonly superScript?: boolean;
    readonly style?: string;
    readonly font?: IFontOptions | IFontAttributesProperties;
    readonly highlight?: string;
    readonly shading?: {
        readonly type: ShadingType;
        readonly fill: string;
        readonly color: string;
    };
    readonly children?: Array<Begin | FieldInstruction | Separate | End | PageNumber | FootnoteReferenceRun | string>;
    readonly text?: string;
}
export declare enum PageNumber {
    CURRENT = "CURRENT",
    TOTAL_PAGES = "TOTAL_PAGES",
    TOTAL_PAGES_IN_SECTION = "TOTAL_PAGES_IN_SECTION"
}
export declare class Run extends XmlComponent {
    protected readonly properties: RunProperties;
    constructor(options: IRunOptions);
    break(): Run;
}
export {};
