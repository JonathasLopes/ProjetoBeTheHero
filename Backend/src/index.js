/**Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * Post: Criar uma informação no Back-end
 * Put: Alterar uma informação no Back-end
 * Delete: Deletar uma informação no Back-end
 */

 /**
  * Tipos de Parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
  * 
  */

  /**
   * Banco de dados:
   * 
   * SQL: MySQL, Oracle, SQL Server
   * NoSQL: MongoDB, CouchDB, etc..
   * 
   * Driver: Select * FROM users
   * Query Builder: table('users').select('*').where()
   * 
   */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);