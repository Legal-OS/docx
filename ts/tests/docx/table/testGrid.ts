import { expect } from "chai";
import { GridCol, TableGrid } from "../../../docx/table/grid";
import { Formatter } from "../../../export/formatter";

describe("GridCol", () => {
    describe("#constructor", () => {
        it("sets the width attribute to the value given", () => {
            const grid = new GridCol(1234);
            const tree = new Formatter().format(grid);
            expect(tree).to.deep.equal({
                "w:gridCol": [{_attr: {"w:w": 1234}}],
            });
        });

        it("does not set a width attribute if not given", () => {
            const grid = new GridCol();
            const tree = new Formatter().format(grid);
            expect(tree).to.deep.equal({
                "w:gridCol": [{_attr: {}}],
            });
        });
    });
});

describe("TableGrid", () => {
    describe("#constructor", () => {
        it("creates a column for each width given", () => {
            const grid = new TableGrid([1234, 321, 123]);
            const tree = new Formatter().format(grid);
            expect(tree).to.deep.equal({
                "w:tblGrid": [
                    {"w:gridCol": [{_attr: {"w:w": 1234}}]},
                    {"w:gridCol": [{_attr: {"w:w": 321}}]},
                    {"w:gridCol": [{_attr: {"w:w": 123}}]},
                ],
            });
        });

        it("does not set a width attribute if not given", () => {
            const grid = new GridCol();
            const tree = new Formatter().format(grid);
            expect(tree).to.deep.equal({
                "w:gridCol": [{_attr: {}}],
            });
        });
    });
});
