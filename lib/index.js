"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNfce = void 0;
const fs = require("fs");
const path = require("path");
const createHeader = (caminhoTx2) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(caminhoTx2, 'formato=tx2\nnumlote=0', function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve('Cabeçalho criado com sucesso!');
            }
        });
    });
};
const createDadosNota = (caminhoTx2, dadosNota) => {
    return new Promise((resolve, reject) => {
        //Cabeçalho dos dados da nota.
        fs.appendFile(caminhoTx2, '\n\n----------------- Dados da Nota --------------------\nINCLUIR', () => { });
        const keys = Object.keys(dadosNota);
        keys.forEach((key) => {
            fs.appendFile(caminhoTx2, `\n${key}=${dadosNota[key]}`, () => { });
        });
    });
};
/**
 * Gera o arquivo tx2 no caminho especificado.
 * @param caminhoTx2 o caminho onde o tx2 será gerado (um arquivo com o mesmo nome não pode existir)
 * @param dadosNota um objeto contendo os dados iniciais da nota.
 * @param dadosEmitente um objeto contendo os dados do emitente.
 * @param dadosItem um objeto contendo os dados do item.
 * @return retorna uma string do caminho onde o arquivo foi gerado
 */
const generateNfce = (caminhoTx2, dadosNota) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        if (fs.existsSync(caminhoTx2)) {
            reject('Um tx2 já existe no caminho especificado.');
        }
        else {
            yield createHeader(caminhoTx2);
            yield createDadosNota(caminhoTx2, dadosNota);
            return caminhoTx2;
        }
    }));
};
exports.generateNfce = generateNfce;
exports.generateNfce(path.join(__dirname, 'teste.tx2'), {
    Id_A03: 1,
    cDV_B23: 1,
    cMunFG_B12: 1,
    cNF_B03: 1,
    cUF_B02: 1,
    dhEmi_B09: new Date(),
    finNFe_B25: 1,
    idDest_B11a: 1,
    indFinal_B25a: 1,
    indPres_B25b: 1,
    mod_B06: 1,
    nNF_B08: 1,
    natOp_B04: 'asdasdas',
    procEmi_B26: 1,
    serie_B07: 1,
    tpAmb_B24: 1,
    tpEmis_B22: 1,
    tpImp_B21: 1,
    tpNF_B11: 1,
    verProc_B27: 1,
    versao_A02: 1,
});
