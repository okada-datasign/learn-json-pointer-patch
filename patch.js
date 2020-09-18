var crypto = require("crypto");
var jsonpointer = require('jsonpointer');
const { applyOperation } = require('fast-json-patch');

function crypt(plain) {
  return crypto.createHash('sha256').update(plain, 'utf8').digest('hex');
}

function Update() {
  const bank = {
    name: "みずほ銀行",
    branch: "渋谷支店",
    accountNumber: "1234567",
    amount: 1000000,
  };

  const pointer = '/accountNumber';
  const accountNumber = jsonpointer.get(bank, pointer);
  const crypted = crypt(accountNumber);
  applyOperation(bank, {
    "op": "replace",
    "path": pointer,
    "value": crypted,
  });
  console.log("=====Update=====");
  console.log(bank);
  console.log();
}

function Copy() {
  const bank = {
    name: "みずほ銀行",
    branch: "渋谷支店",
    accountNumber: "1234567",
    amount: 1000000,
  };

  const newBank = {}

  const pointer = '/accountNumber';
  const accountNumber = jsonpointer.get(bank, pointer);
  applyOperation(newBank, {"op": "add", "path": pointer, "value": accountNumber});
  console.log("=====Copy=====");
  console.log(bank);
  console.log(newBank);
  console.log();
}

function Primitive() {
  const ownedCars = 2
  const pointer = '';
  // const ownedCars = jsonpointer.get(bank, pointer);
  applyOperation(ownedCars, {"op": "replace", "path": pointer, "value": 99});
  console.log("=====Primitive=====");
  console.log(ownedCars);
  console.log();
}

Update();
Copy();
Primitive();
