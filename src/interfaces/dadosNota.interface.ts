interface dadosNota {
  /** Não preencher */
  Id_A03: number;
  /** Versão */
  versao_A02: number;
  /** UF do emitente. */
  cUF_B02: number;
  /** Código gerado pelo sistema para nosso controle. Até 8 dígitos. */
  cNF_B03: number;
  /** Descrição da natureza da operação. */
  natOp_B04: string;
  /** 65 = NFCe | 55 = NFe*/
  mod_B06: number;
  /** Cada operador do caixa vai ter sua série. */
  serie_B07: number;
  /** Controle da numeração pelo SaaS. */
  nNF_B08: number;
  /** Data e hora de emissão do documento fiscal. */
  dhEmi_B09: string;
  /** Tipo de operação. */
  tpNF_B11: number;
  /** Identificador de local de destino da operação. */
  idDest_B11a: number;
  /** Código do município de ocorrência do fato gerador. */
  cMunFG_B12: number;
  /** Formato de impressão do DANFE. */
  tpImp_B21: number;
  /** Tipo de emissão da NF-e. */
  tpEmis_B22: number;
  /** Dígito verificador da chave de acesso da NF-e. */
  cDV_B23: number;
  /** Identificação do ambiente. */
  tpAmb_B24: number;
  /** Versão do processo de emissão da NF-e. */
  finNFe_B25: number;
  /** Indica operação com consumidor final. */
  indFinal_B25a: number;
  /** Indicador de presença do comprador no estabelecimento comercial no momento da operação. */
  indPres_B25b: number;
  /** Processo de emissão da NF-e. */
  procEmi_B26: number;
  /** Versão do processo de emissão da NF-e. */
  verProc_B27: string;
}

export default dadosNota;
