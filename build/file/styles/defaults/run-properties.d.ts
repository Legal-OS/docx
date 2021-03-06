import { IFontAttributesProperties } from "../../../file/paragraph/run/run-fonts";
import { XmlComponent } from "../../../file/xml-components";
export declare class RunPropertiesDefaults extends XmlComponent {
    private readonly properties;
    constructor();
    size(size: number): RunPropertiesDefaults;
    font(font: string | IFontAttributesProperties): RunPropertiesDefaults;
}
