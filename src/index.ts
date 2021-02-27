import DadosNota from './interfaces/dadosNota.interface';
import DadosEmitente from './interfaces/dadosEmitente.interface';
import DadosItem from './interfaces/dadosItem.interface';
import Totalizadores from './interfaces/totalizadores.interface';
import Tecnico from './interfaces/tecnico.interface';
import * as fs from 'fs';
import * as path from 'path';

const createHeader = (caminhoTx2: string) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(caminhoTx2, 'formato=tx2\nnumlote=0', function (err) {
      if (err) {
        reject(err);
      } else {
        resolve('Cabeçalho criado com sucesso!');
      }
    });
  });
};

const createDadosNota = (caminhoTx2: string, dadosNota: any) => {
  return new Promise((resolve, reject) => {
    //Cabeçalho dos dados da nota.
    fs.appendFile(caminhoTx2, '\n\n----------------- Dados da Nota --------------------\nINCLUIR', () => {});
    const keys = Object.keys(dadosNota);
    keys.forEach((key: string) => {
      fs.appendFile(caminhoTx2, `\n${key}=${dadosNota[key]}`, () => {});
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
export const generateNfce = (caminhoTx2: string, dadosNota: DadosNota): Promise<String> => {
  return new Promise(async (resolve, reject) => {
    if (fs.existsSync(caminhoTx2)) {
      reject('Um tx2 já existe no caminho especificado.');
    } else {
      await createHeader(caminhoTx2);
      await createDadosNota(caminhoTx2, dadosNota);
      return caminhoTx2;
    }
  });
};
