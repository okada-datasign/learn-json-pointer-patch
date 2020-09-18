from jsonpointer import resolve_pointer


def get_object_root():
    bank = {
        "name": "みずほ銀行",
        "branch": "渋谷支店",
        "amount": 1000000,
    }
    pointer = ""
    print("=====get_object_root=====")
    print(resolve_pointer(bank, pointer))
    print()


def get_object_value():
    bank = {
        "name": "みずほ銀行",
        "branch": "渋谷支店",
        "amount": 1000000,
    }
    pointer = "/name"
    print("=====get_object_value=====")
    print(resolve_pointer(bank, pointer))
    print()


def get_nested_object_value():
    userAttributes = {
        "name": {
            "last_name": "山田",
            "first_name": "太郎"
        },
        "birth": {
            "day": 20,
            "year": 1980,
            "month": 11
        },
        "gender": "Cis Male",
        "job_id": 0,
        "address": {
            "city": "港区",
            "state": "東京都",
            "street": "南青山2-13-2",
            "zip_code": "1234567",
            "prefecture_id": 13
        },
        "marriage": "married",
        "phone_number": "09012345678",
        "children_number": -1
    }
    pointer = "/birth/month"
    print("=====get_nested_object_value=====")
    print(resolve_pointer(userAttributes, pointer))
    print()


def get_array_root():
    banks = [{
        "name": "みずほ銀行",
        "branch": "渋谷支店",
        "amount": 1000000,
    }, {
        "name": "三菱URJ銀行",
        "branch": "青山支店",
        "amount": 2000000,
    }]
    pointer = ""
    print("=====get_array_root=====")
    print(resolve_pointer(banks, pointer))
    print()


def get_array_value():
    banks = [{
        "name": "みずほ銀行",
        "branch": "渋谷支店",
        "amount": 1000000,
    }, {
        "name": "三菱URJ銀行",
        "branch": "青山支店",
        "amount": 2000000,
    }]
    pointer = "/1/name"
    print("=====get_array_value=====")
    print(resolve_pointer(banks, pointer))
    print()


def get_nested_array_value():
    banks = [{
        "name": "みずほ銀行",
        "branches": [
            "渋谷支店",
            "渋谷区役所出張所",
            "恵比寿支店",
        ]
    }, {
        "name": "三菱URJ銀行",
        "branches": [
            "青山支店",
            "青山通支店",
            "赤坂支店",
        ],
    }]
    pointer = "/1/branches/2"
    print("=====get_nested_array_value=====")
    print(resolve_pointer(banks, pointer))
    print()


def get_primitive_value():
    """
    JSだとおエラーになるがPythonでは正常に扱われる
    """
    ownedCars = 2
    pointer = ""
    print("=====get_primitive_value=====")
    print(resolve_pointer(ownedCars, pointer))
    print()


if __name__ == "__main__":
    get_object_root()
    get_object_value()
    get_nested_object_value()
    get_array_root()
    get_array_value()
    get_nested_array_value()
    get_primitive_value()
