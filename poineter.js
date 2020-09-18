var jsonpointer = require('jsonpointer');

function GetObjectRoot() {
  const bank = {
    name: "みずほ銀行",
    branch: "渋谷支店",
    amount: 1000000,
  };
  const pointer = ""
  console.log("=====GetObjectRoot=====");
  console.log(jsonpointer.get(bank, pointer));
  console.log();
}

function GetObjectValue() {
  const bank = {
    name: "みずほ銀行",
    branch: "渋谷支店",
    amount: 1000000,
  };
  const pointer = "/name"
  console.log("=====GetObjectValue=====");
  console.log(jsonpointer.get(bank, pointer));
  console.log();
}

function GetNestedObjectValue() {
  const userAttributes = {
    name: {
      last_name: "山田",
      first_name: "太郎"
    },
    birth: {
      day: 20,
      year: 1980,
      month: 11
    },
    gender: "Cis Male",
    job_id: 0,
    address: {
      city: "港区",
      state: "東京都",
      street: "南青山2-13-2",
      zip_code: "1234567",
      prefecture_id: 13
    },
    marriage: "married",
    phone_number: "09012345678",
    children_number: -1
  };
  const pointer = "/birth/month"
  console.log("=====GetNestedObjectValue=====");
  console.log(jsonpointer.get(userAttributes, pointer));
  console.log();
}

function GetArrayRoot() {
  const banks = [{
    name: "みずほ銀行",
    branch: "渋谷支店",
    amount: 1000000,
  },{
    name: "三菱URJ銀行",
    branch: "青山支店",
    amount: 2000000,
  }];
  const pointer = ""
  console.log("=====GetArrayRoot=====");
  console.log(jsonpointer.get(banks, pointer));
  console.log();
}

function GetArrayValue() {
  const banks = [{
    name: "みずほ銀行",
    branch: "渋谷支店",
    amount: 1000000,
  },{
    name: "三菱URJ銀行",
    branch: "青山支店",
    amount: 2000000,
  }];
  const pointer = "/1/name"
  console.log("=====GetArrayValue=====");
  console.log(jsonpointer.get(banks, pointer));
  console.log();
}

function GetNestedArrayValue() {
  const banks = [{
    name: "みずほ銀行",
    branches: [
      "渋谷支店",
      "渋谷区役所出張所",
      "恵比寿支店",
    ]
  },{
    name: "三菱URJ銀行",
    branches: [
      "青山支店",
      "青山通支店",
      "赤坂支店",
    ],
  }];
  const pointer = "/1/branches/2"
  console.log("=====GetNestedArrayValue=====");
  console.log(jsonpointer.get(banks, pointer));
  console.log();
}

/**
 * これはエラーになる。
 * jsonpointer.getは、ルートがプリミティブ型のJSONを許容していない。
 */
function GetPrimitiveValue() {
  const ownedCars = 2
  const pointer = ""
  console.log("=====GetPrimitiveValue=====");
  console.log(jsonpointer.get(ownedCars, pointer));
  console.log();
}

GetObjectRoot();
GetObjectValue();
GetNestedObjectValue();
GetArrayRoot();
GetArrayValue();
GetNestedArrayValue();
GetPrimitiveValue()