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
 * @param dadosNota.Id_A03 Não precisa ser preenchido.
 * @param dadosNota.versao_A02 Versão.
 * @param dadosNota.cUF_B02 UF do emitente.
 * @param dadosNota.cNF_B03 Código gerado pelo sistema para nosso controle, até 8 digitos.
 * @param dadosNota.natOp_B04
 * @param dadosNota.mod_B06 Sempre 65 nessa função. 65 = NFCE.
 * @param dadosNota.serie_B07 Cada operador do caixa vai ter sua série.
 * @param dadosNota.nNF_B08 Controle da numeração pelo SaaS.
 * @param dadosNota.dhEmi_B09 Data (deve seguir formato usado pelo tx2)
 * @param dadosNota.tpAmb_B24 Ambiente produção ou homologação.
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
            resolve(caminhoTx2);
        }
    }));
};
exports.generateNfce = generateNfce;
