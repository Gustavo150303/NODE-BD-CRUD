import express from "express";
import bodyParser from "body-parser";
import sql from "msnodesqlv8";

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

const connectionString = "server=DSN1191109148;Database=CARRO;Trusted_connection=Yes;Driver={Sql Server Client 11.0}";

app.get("/carro", (req,res) => {
    sql.query(connectionString, "SELECT * FROM MODELO_CARRO", (erro, rows) => {
        if(erro){
            res.status(500).json("Erro interno de servidor");
        }else{
            res.status(200).json(rows);
        }
    });
});

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));