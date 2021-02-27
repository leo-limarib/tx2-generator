import DadosNota from './interfaces/dadosNota.interface';
import DadosEmitente from './interfaces/dadosEmitente.interface';
import DadosItem from './interfaces/dadosItem.interface';
import Totalizadores from './interfaces/totalizadores.interface';
import Tecnico from './interfaces/tecnico.interface';

/**
 * Gera o arquivo tx2 no caminho especificado.
 * @param dadosNota um objeto contendo os dados iniciais da nota.
 * @param dadosEmitente um objeto contendo os dados do emitente.
 * @param dadosItem um objeto contendo os dados do item.
 * @return retorna uma string do caminho onde o arquivo foi gerado
 */
export const generateNfce = (
  dadosNota: DadosNota,
  dadosEmitente: DadosEmitente,
  items: Array<DadosItem>,
  totalizadores: Totalizadores,
  tecnico: Tecnico,
) => {
  console.log(dadosNota);
  return 'eae';
};
