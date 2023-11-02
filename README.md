# E-Commerce Back-End ![Static Badge](https://img.shields.io/badge/license-MIT-blue)

## Technology Used

| Technology Used |                                                    Resource URL                                                    |
| --------------- | :----------------------------------------------------------------------------------------------------------------: |
| JavaScript      | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| Node.js         |                              [https://nodejs.org/en/docs](https://nodejs.org/en/docs)                              |
| Express.js      |                                  [https://expressjs.com/](https://expressjs.com/)                                  |
| MySQL           |                              [https://dev.mysql.com/doc/](https://dev.mysql.com/doc/)                              |
| Sequelize       |                          [https://sequelize.org/docs/v6/](https://sequelize.org/docs/v6/)                          |
| Insomnia        |         [https://docs.insomnia.rest/insomnia/get-started](https://docs.insomnia.rest/insomnia/get-started)         |
| Git             |                                    [https://git-scm.com/](https://git-scm.com/)                                    |

## Description

This is the back end of what would be an e-commerce platform. This project consists of many files that work together to function as an API with endpoints for displaying requested information. By using environmental variables, no credentials were hard-coded for configuring and connecting to a local MySQL database. Seed data was also created to populate the database with information, allowing API endpoints to be tested using [Insomnia](https://docs.insomnia.rest/insomnia/get-started). The modeling of tables was done with Sequelize to seamlessly create tables within the execution of our back-end environment, and many-to-many relationships were also established. With everything in place, the Categories, Products, and Tags tables all have GET, POST, PUT, and DELETE (CRUD) endpoints that can be used to modify specific tables.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)
- [Author Info](#author-info)

## Installation

Assuming the user has Node.js and MySQL installed and configured, the user will run 'npm i' to install dependencies. Once dependencies are installed the user will create a .env file and insert proper database credentials inside file. The user should make sure these credentials are properly referenced in the connection.js file. This will ensure the database will be connected properly to the back-end. **IMPORTANT: If code is going into a public repository, add .env to .gitignore file so credentials are not pushed to the repository.** The back-end is now ready for use.

## Usage

Videos below will demonstrate how to properly create and seed your local database and start up the back-end. These videos will also demonstrate the use of Insomnia to test the API endpoints.

For video demonstration of how to initialize database in MySQL Shell click [HERE](https://drive.google.com/file/d/1aDgnOKw2O4kYLFE8hENoSS1Dl_frksJL/view?usp=sharing)

For video demonstration of Insomnia API endpoints click [HERE](https://drive.google.com/file/d/1tCvTWIjsimEDtK72vrc6LTo2n0AuTlkY/view?usp=sharing)

## License

This project is covered under the MIT License. For more information about license go to [https://mit-license.org/](https://mit-license.org/)

## Questions

If there are additional questions, you may contact me at jorgecastro619@gmail.com or visit my [GitHub](https://github.com/Jacastro619)

## Author Info

Created by Jorge Castro, a student at UC Berkeley Full Stack Coding Academy. For more information go to https://bootcamp.berkeley.edu/coding/

- [Portfolio](https://jacastro619.github.io/my-portfolio/)

- [LinkedIn](https://www.linkedin.com/in/jorge-castro-2a9545177/)

- [GitHub](https://www.linkedin.com/in/jorge-castro-2a9545177/)
