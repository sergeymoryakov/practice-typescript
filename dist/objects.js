"use strict";
const profileList = [
    {
        id: 1,
        name: "John",
        surname: "Smith",
        dateOfBirth: "01.01.1990",
        email: "john@smith.mail",
    },
    {
        id: 2,
        name: "Jane",
        surname: "Smith",
        dateOfBirth: "01.01.1990",
        email: "jane@smith.mail",
    },
];
console.log(profileList);
const parseNumber = (value) => parseInt(value);
console.log('parseNumber("1") => ', parseNumber("1"));
const parseNumbers = (value, secondValue) => [
    parseInt(value),
    secondValue,
];
