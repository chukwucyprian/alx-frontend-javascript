// main.ts
/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const obj: RowElement = { firstName: "Guillaume", lastName: "Salva" };
const newRowID: RowID = CRUD.insertRow(obj);
console.log(`Insert row ${newRowID}`);

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`, updatedRow);

CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);
