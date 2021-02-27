import DadosNota from './interfaces/dadosNota.interface';
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
export declare const generateNfce: (caminhoTx2: string, dadosNota: DadosNota) => Promise<String>;
