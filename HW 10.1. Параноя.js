var testArray = [
    { userName: "Test123", lastName: "Test", email: "Test123.Test@gmail.com" },
    { userName: "Dmitro", lastName: "Porohov", email: "DmitroPorohov99@yahoo.com" },
    { userName: "Andrii", lastName: "", email: "andrii@mail.ru" },
    { userName: "Test", lastName: "Test", email: "test_test@gmail.com" },
    { userName: "Dmitro", lastName: "Porohov", email: "dmitro-porohov@yahoo.com" },
    { userName: "Andrii", lastName: "", email: "andrii@test.com" },
];

const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

const validEmails = testArray
    .map(user => user.email)
    .filter(email => emailRegex.test(email));
    // або можно використати метод match
    //.filter(email => email.match(emailRegex));

console.log(validEmails); 