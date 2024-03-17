const express = require('express');
const faker = require('faker');

const app = express();
const port = 8000;
const users = [];
const company = []

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.datatype.uuid()
    };
    return newUser;
};

const createNewCompany = () => {
    const newCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode()
        }
    }
    return newCompany;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to get all users
app.get('/api/users/new', (req, res) => {
    res.json({ users });
});

// create a new user
app.post('/api/users/new', (req, res) => {
    // console.log(req.body);
    newUser = createUser();
    users.push(newUser);
    // console.log(users)
    res.json({ message: "created a new user", user1: newUser });
});

app.post('/api/companies/new', (req, res) => {
    // console.log(req.body)
    newCompany = createNewCompany()
    company.push(newCompany)
    // console.log(company)
    // newCompany.push(req.body)
    res.json({ message: "created a company", Company: newCompany })

})
//get company only
app.get('/api/companies/new', (req, res) => {
    res.json({ company })
})
//to get both user and companies
app.get('/api/user/company', (req, res) => {
    newUser = createUser();
    newCompany = createNewCompany()
    res.json({ user: users, company: company })
})

app.listen(port, () => console.log(`Listening to port: ${port}`));
