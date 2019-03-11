var asia = {
    countries: {
        India: {
            Mumbai: {
                population: 18.5
            }
        },
        China: {
            Beijing: {
                population: 21.5
            },
            "Hong Kong": {
                population: 7.3
            },
        }
    }
}

//1
console.log(asia.countries.India.Mumbai.population);

//2
console.log(asia.countries.China.Beijing.population);

//3
console.log(asia.countries.China["Hong Kong"].population);



var familyBankValues = {

    familyMembers: {

        Mother: {

            "account number": 8096291,

            accountBalance: 10000000

        },

        Father: {

            "account number": 8096292,

            accountBalance: 9999999

        },

        Sister: {

            "account number": 8096293,

            accountBalance: 10000

        },

        "Step Brother": {

            "account number": 8096292,

            accountBalance: 15000

        }

    }

}

//Given the object familyBankValues, how would you access:

// 4. Mothers account number

// 5. Fathers accountBalance

// 6. Step brothers account number and account, store the information into a variable which is an array. 

//Q4
console.log(familyBankValues.familyMembers.Mother["account number"]);

//Q5
console.log(familyBankValues.familyMembers.Father["accountBalance"]);

//Q6
console.log(familyBankValues.familyMembers["Step Brother"]["account number"]);

console.log(familyBankValues.familyMembers["Step Brother"]["accountBalance"]);

let array = [];
array.push(familyBankValues.familyMembers["Step Brother"]["account number"])
array.push(familyBankValues.familyMembers["Step Brother"]["accountBalance"])
// (familyBankValues.familyMembers["Step Brother"].account) = "hehehaha";
console.log(array);
