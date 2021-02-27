import DadosNota from './interfaces/dadosNota.interface';
/**
 * Gera o arquivo tx2 no caminho especificado.
 * @param caminhoTx2 o caminho onde o tx2 será gerado (um arquivo com o mesmo nome não pode existir)
 * @param dadosNota um objeto contendo os dados iniciais da nota.
 * @param dadosEmitente um objeto contendo os dados do emitente.
 * @param dadosItem um objeto contendo os dados do item.
 * @return retorna uma string do caminho onde o arquivo foi gerado
 */
export declare const generateNfce: (caminhoTx2: string, dadosNota: DadosNota) => Promise<String>;
