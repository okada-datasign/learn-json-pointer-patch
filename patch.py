from jsonpatch import JsonPatch
from jsonpointer import resolve_pointer


def crypt(plain: str) -> str:
    return 'A5C3AB8D-DDBE-4E6B-8102-CFE777A270D0'


def update():
    bank = {
        "name": "みずほ銀行",
        "branch": "渋谷支店",
        "accountNumber": "1234567",
        "amount": 1000000,
    }

    pointer = '/accountNumber'
    accountNumber = resolve_pointer(bank, pointer)
    crypted = crypt(accountNumber)
    patch = JsonPatch([{
        "op": "replace",
        "path": pointer,
        "value": crypted,
    }])
    result = patch.apply(bank)
    print("=====update=====")
    print(result)
    print()


def copy():
    bank = {
        "name": "みずほ銀行",
        "branch": "渋谷支店",
        "accountNumber": "1234567",
        "amount": 1000000,
    }

    pointer = '/accountNumber'
    accountNumber = resolve_pointer(bank, pointer)
    crypted = crypt(accountNumber)
    patch = JsonPatch([{
        "op": "add",
        "path": pointer,
        "value": crypted,
    }])
    result = patch.apply({})
    print("=====copy=====")
    print(result)
    print()


def primitive():
    owned_cars = 2
    pointer = ''
    # value = resolve_pointer(owned_cars, pointer)
    patch = JsonPatch([{"op": "replace", "path": pointer, "value": 99}])
    result = patch.apply(owned_cars)
    print("=====primitive=====")
    print(result)
    print()


if __name__ == "__main__":
    update()
    copy()
    primitive()
