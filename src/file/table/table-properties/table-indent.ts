// http://officeopenxml.com/WPtableWidth.php
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

// import { IndentType } from "../table-cell";

interface ITableIndent {
    // readonly type: IndentType;
    readonly type: string;
    readonly ind: number | string;
}

class TableIndentAttributes extends XmlAttributeComponent<ITableIndent> {
    protected readonly xmlKeys = { type: "w:type", ind: "w:w" };
}

export class TableIndent extends XmlComponent {
    constructor(type: string, ind: number) {
        super("w:tblInd");
        this.root.push(new TableIndentAttributes({ type, ind }));
    }
}
