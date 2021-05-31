import { CSVRead } from "../routes/CSVRead"
import test from "./test.csv"

test("is able to support filereader", () => {
    expect(window.FileReader).toBe(FileReader)

})
