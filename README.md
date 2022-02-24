<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/RafaelDalarosa/TeamSoft-API">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Team Soft API Project</h3>

  <p align="center">
    A Project to make API + Documentation for TeamSoft!
    <br />
    <a href="https://github.com/RafaelDalarosa/TeamSoft-API"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/RafaelDalarosa/TeamSoft-API/issues">Report Bug</a>
    ·
    <a href="https://github.com/RafaelDalarosa/TeamSoft-API/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project have a goal to make a API with documentation.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

Technologies and Languages used in this project!

* [TypeScript](https://www.typescriptlang.org/)
* [Node](https://nodejs.org/en/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

- First need install Node in your device.

    Access Node Website and choose you OS https://nodejs.org/en/download/

- Second if you want to run HTTPS Server you will need SSL certificate

    Acess Node Website and follow this instruction to generate you own certificate,
    https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/

- Third you need to create your database with MYSQL

    Access Mysql Website for windows https://dev.mysql.com/downloads/installer/

    For Linux users access here and chosse your favorite format to install mysql https://dev.mysql.com/downloads/,
    with yum or apt repos.

- Fourth you need to create your Google API key to request longitude and latitude

    Access Google Cloud Website https://cloud.google.com/

    Create a account if you dont have one

    Configure you payment Format, and create you Project

    Enable Geocoding Api for your project

    Open Credential Tab en left side, and create your Credentials

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/RafaelDalarosa/TeamSoft-API
   ```
2. Create .env to define yours environment variables
   
    You can follow .env.example to guide you to define yours environment variables.

    Your .env need to be in root directory of project.

3.  Install Node Modules

    Open your terminal inside of Project Directory and run.

    ```sh
    npm install
    ```
4. Copy SSL Certificate (Optional)

    After generate you certificate copy to "/src/config" path

5. Run db.sql to create your tables inside of your database

    db.sql is located inside "/src/sql" directory

6. Run the API Project

    Open your terminal inside of Project Directory and run.

   ```sh
   npm start
   ```

7. Open Browser to test

   ```sh
   http://localhost:3000/docs
   ```


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Rafael Dalarosa - contato@rafaeldalarosa.com.br

Project Link: [https://github.com/RafaelDalarosa/TeamSoft-API](https://github.com/RafaelDalarosa/TeamSoft-API)

<p align="right">(<a href="#top">back to top</a>)</p>

