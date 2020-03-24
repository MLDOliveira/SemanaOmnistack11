const express = require("express");

const app = express();

app.get('/', (request, response) => {
    return response.send('Bem vindo a Semana OmniStack 11 !');
});

app.listen(3333);