import DadosNota from './interfaces/dadosNota.interface';
import DadosEmitente from './interfaces/dadosEmitente.interface';
import DadosItem from './interfaces/dadosItem.interface';
import Totalizadores from './interfaces/totalizadores.interface';
import Tecnico from './interfaces/tecnico.interface';
import Pagamento from './interfaces/pagamento.interface';
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
export declare const generateTx2: (caminhoTx2: string, dadosNota: DadosNota, dadosEmitente: DadosEmitente, itens: Array<DadosItem>, pagamento: Pagamento, totalizadores: Totalizadores, tecnico: Tecnico) => Promise<String>;
