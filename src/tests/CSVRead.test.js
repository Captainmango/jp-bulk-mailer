import { CSVRead } from "../routes/CSVRead"
import test from "./test.csv"

test("is able to support filereader", () => {
    expect(window.FileReader).toBe(FileReader)

})

test("is able to use fileReader to read a CSV"), () => {

})