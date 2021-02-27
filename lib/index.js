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
        fs.appendFileSync(caminhoTx2, 'formato=tx2\nnumlote=0');
        resolve('Cabeçalho criado com sucesso!');
    });
};
const createDadosNota = (caminhoTx2, dadosNota) => {
    return new Promise((resolve, reject) => {
        //Cabeçalho dos dados da nota.
        fs.appendFileSync(caminhoTx2, '\n\n----------------- Dados da Nota --------------------\nINCLUIR');
        const keys = Object.keys(dadosNota);
        keys.forEach((key) => {
            fs.appendFileSync(caminhoTx2, `\n${key}=${dadosNota[key]}`);
        });
        resolve('Dados da nota criados com sucesso.');
    });
};
const createDadosEmitente = (caminhoTx2, dadosEmitente) => {
    return new Promise((resolve, reject) => {
        //Cabeçalho dos dados da nota.
        fs.appendFileSync(caminhoTx2, '\n\n\n----------------- Dados do Emitente --------------------');
        const keys = Object.keys(dadosEmitente);
        keys.forEach((key) => {
            fs.appendFileSync(caminhoTx2, `\n${key}=${dadosEmitente[key]}`);
        });
        resolve('Dados do emitente criados com sucesso.');
    });
};
const createDadosItens = (caminhoTx2, itens) => {
    return new Promise((resolve, reject) => {
        //Cabeçalho dos dados da nota.
        fs.appendFileSync(caminhoTx2, '\n\n\n----------------- Dados do Item --------------------');
        itens.forEach((item) => {
            fs.appendFileSync(caminhoTx2, '\nINCLUIRITEM');
            const keys = Object.keys(item);
            keys.forEach((key) => {
                fs.appendFileSync(caminhoTx2, `\n${key}=${item[key]}`);
            });
            fs.appendFileSync(caminhoTx2, '\nSALVARITEM');
            resolve('Dados dos itens criados com sucesso.');
        });
    });
};
const createPagamento = (caminhoTx2, dadosPagamento) => {
    return new Promise((resolve, reject) => {
        //Cabeçalho dos dados da nota.
        fs.appendFileSync(caminhoTx2, '\n\n\n----------------- Pagamento --------------------\nINCLUIRPARTE=YA');
        const keys = Object.keys(dadosPagamento);
        keys.forEach((key) => {
            fs.appendFileSync(caminhoTx2, `\n${key}=${dadosPagamento[key]}`);
        });
        fs.appendFileSync(caminhoTx2, '\nSALVARPARTE=YA');
        resolve('Dados do pagamento criados com sucesso.');
    });
};
const createTotalizadores = (caminhoTx2, totalizadores) => {
    return new Promise((resolve, reject) => {
        //Cabeçalho dos dados da nota.
        fs.appendFileSync(caminhoTx2, '\n\n\n----------------- Totalizadores --------------------');
        const keys = Object.keys(totalizadores);
        keys.forEach((key) => {
            fs.appendFileSync(caminhoTx2, `\n${key}=${totalizadores[key]}`);
        });
        resolve('Dados do pagamento criados com sucesso.');
    });
};
const createTecnico = (caminhoTx2, tecnico) => {
    return new Promise((resolve, reject) => {
        //Cabeçalho dos dados da nota.
        fs.appendFileSync(caminhoTx2, '\n\n\n----------------- Responsável Técnico --------------------');
        const keys = Object.keys(tecnico);
        keys.forEach((key) => {
            fs.appendFileSync(caminhoTx2, `\n${key}=${tecnico[key]}`);
        });
        fs.appendFileSync(caminhoTx2, '\n\nSALVAR');
        resolve('Dados do pagamento criados com sucesso.');
    });
};
/**
 * Gera o arquivo tx2 no caminho especificado.
 * @param caminhoTx2 o caminho onde o tx2 será gerado (um arquivo com o mesmo nome não pode existir)
 * @param dadosNota um objeto contendo os dados iniciais da nota.
 * @param dadosEmitente um objeto contento os dados do emitente.
 * @param itens um array contendo objetos com os dados dos itens.
 * @param pagamento um objeto contendo os dados de pagamento.
 * @param totalizadores um objeto contendo os dados dos totalizadores.
 * @param tecnico um objeto contendo as informações do responsável técnico.
 * @return retorna uma string do caminho onde o arquivo foi gerado
 */
const generateNfce = (caminhoTx2, dadosNota, dadosEmitente, itens, pagamento, totalizadores, tecnico) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        if (fs.existsSync(caminhoTx2)) {
            reject('Um tx2 já existe no caminho especificado.');
        }
        else {
            yield createHeader(caminhoTx2);
            yield createDadosNota(caminhoTx2, dadosNota);
            yield createDadosEmitente(caminhoTx2, dadosEmitente);
            yield createDadosItens(caminhoTx2, itens);
            yield createPagamento(caminhoTx2, pagamento);
            yield createTotalizadores(caminhoTx2, totalizadores);
            yield createTecnico(caminhoTx2, tecnico);
            resolve(caminhoTx2);
        }
    }));
};
exports.generateNfce = generateNfce;
