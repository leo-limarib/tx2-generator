import DadosNota from './interfaces/dadosNota.interface';
import DadosEmitente from './interfaces/dadosEmitente.interface';
import DadosItem from './interfaces/dadosItem.interface';
import Totalizadores from './interfaces/totalizadores.interface';
import Tecnico from './interfaces/tecnico.interface';
import Pagamento from './interfaces/pagamento.interface';
import * as fs from 'fs';

const createHeader = (caminhoTx2: string) => {
  return new Promise((resolve, reject) => {
    fs.appendFileSync(caminhoTx2, 'formato=tx2\nnumlote=0');
    resolve('Cabeçalho criado com sucesso!');
  });
};

const createDadosNota = (caminhoTx2: string, dadosNota: any) => {
  return new Promise((resolve, reject) => {
    //Cabeçalho dos dados da nota.
    fs.appendFileSync(caminhoTx2, '\nINCLUIR');
    const keys = Object.keys(dadosNota);
    keys.forEach((key: string) => {
      fs.appendFileSync(caminhoTx2, `\n${key}=${dadosNota[key]}`);
    });
    resolve('Dados da nota criados com sucesso.');
  });
};

const createDadosEmitente = (caminhoTx2: string, dadosEmitente: any) => {
  return new Promise((resolve, reject) => {
    //Cabeçalho dos dados da nota.
    const keys = Object.keys(dadosEmitente);
    keys.forEach((key: string) => {
      fs.appendFileSync(caminhoTx2, `\n${key}=${dadosEmitente[key]}`);
    });
    resolve('Dados do emitente criados com sucesso.');
  });
};

const createDadosItens = (caminhoTx2: string, itens: Array<any>) => {
  return new Promise((resolve, reject) => {
    //Cabeçalho dos dados da nota.
    itens.forEach((item) => {
      fs.appendFileSync(caminhoTx2, '\nINCLUIRITEM');
      const keys = Object.keys(item);
      keys.forEach((key: string) => {
        fs.appendFileSync(caminhoTx2, `\n${key}=${item[key]}`);
      });
      fs.appendFileSync(caminhoTx2, '\nSALVARITEM');
      resolve('Dados dos itens criados com sucesso.');
    });
  });
};

const createPagamento = (caminhoTx2: string, dadosPagamento: any) => {
  return new Promise((resolve, reject) => {
    //Cabeçalho dos dados da nota.
    fs.appendFileSync(caminhoTx2, '\nINCLUIRPARTE=YA');
    const keys = Object.keys(dadosPagamento);
    keys.forEach((key: string) => {
      fs.appendFileSync(caminhoTx2, `\n${key}=${dadosPagamento[key]}`);
    });
    fs.appendFileSync(caminhoTx2, '\nSALVARPARTE=YA');
    resolve('Dados do pagamento criados com sucesso.');
  });
};

const createTotalizadores = (caminhoTx2: string, totalizadores: any) => {
  return new Promise((resolve, reject) => {
    //Cabeçalho dos dados da nota.
    const keys = Object.keys(totalizadores);
    keys.forEach((key: string) => {
      fs.appendFileSync(caminhoTx2, `\n${key}=${totalizadores[key]}`);
    });
    resolve('Dados do pagamento criados com sucesso.');
  });
};

const createTecnico = (caminhoTx2: string, tecnico: any) => {
  return new Promise((resolve, reject) => {
    //Cabeçalho dos dados da nota.
    const keys = Object.keys(tecnico);
    keys.forEach((key: string) => {
      fs.appendFileSync(caminhoTx2, `\n${key}=${tecnico[key]}`);
    });
    fs.appendFileSync(caminhoTx2, '\n\nSALVAR');
    resolve('Dados do pagamento criados com sucesso.');
  });
};

/**
 * Generates a random string to complement the cNF_B03 value.
 */
export const generatecNF_B03 = (): Promise<String> => {
  return new Promise((resolve, reject) => {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    resolve(result);
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
export const generateTx2 = (
  caminhoTx2: string,
  dadosNota: DadosNota,
  dadosEmitente: DadosEmitente,
  itens: Array<DadosItem>,
  pagamento: Pagamento,
  totalizadores: Totalizadores,
  tecnico: Tecnico,
): Promise<String> => {
  return new Promise(async (resolve, reject) => {
    if (fs.existsSync(caminhoTx2)) {
      reject('Um tx2 já existe no caminho especificado.');
    } else {
      await createHeader(caminhoTx2);
      await createDadosNota(caminhoTx2, dadosNota);
      await createDadosEmitente(caminhoTx2, dadosEmitente);
      await createDadosItens(caminhoTx2, itens);
      await createPagamento(caminhoTx2, pagamento);
      await createTotalizadores(caminhoTx2, totalizadores);
      await createTecnico(caminhoTx2, tecnico);
      resolve(caminhoTx2);
    }
  });
};
