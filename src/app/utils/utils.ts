/**
 * Classe com métodos que são reaproveitados em no projeto
 */
export class Utils {
  /**
  * retorna o mês por extenso.
  * @param date
  * @argument number 1-12
  * @returns {boolean}
  */
  public static mesPorExtenso(month: string): string {
    let m;
    switch (Number(month.replace(/^0*/, ''))) {
      case 1: {
        m = 'janeiro';
        break;
      }
      case 2: {
        m = 'fevereiro';
        break;
      }
      case 3: {
        m = 'março';
        break;
      }
      case 4: {
        m = 'abril';
        break;
      }
      case 5: {
        m = 'maio';
        break;
      }
      case 6: {
        m = 'junho';
        break;
      }
      case 7: {
        m = 'julho';
        break;
      }
      case 8: {
        m = 'agosto';
        break;
      }
      case 9: {
        m = 'setembro';
        break;
      }
      case 10: {
        m = 'outubro';
        break;
      }
      case 11: {
        m = 'novembro';
        break;
      }
      case 12: {
        m = 'dezembro';
        break;
      }
      default: {
        m = 'Não é um mês válido!';
        break;
      }
    }

    return m;
  }
  /**
   * retorna true se o cnpj informado for válido.
   * @param cnpj
   * @returns {boolean}
   */
  public static validaCNPJ(cnpj: string): boolean {
    console.log(cnpj);
    // Primeiro dígito:
    // Uma sequência que é  mascara de pesos publicada para validação.
    const sequence = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const sumArray = new Array(sequence.length);
    const cnpjArray = cnpj.split('');
    // console.log(cnpjArray);

    // Multiplica cada dígito do cnpj pelo peso que se encontra na mesma posição.
    // Ex:13.347.016/0001-VV Sequencia de Pesos: [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    // A multiplicação seria 1*5, 3*4,  3*3 ...
    for (let i = 0; i < sequence.length; i++) {
      const value = Number(cnpjArray[i]);
      sumArray[i] = sequence[i] * value;
    }
    // Soma todas as posições
    let totalSumArray = Utils.somaTodasPosicoesdeUmArray(sumArray);

    // Obtem o resto da divisão por 11 e subtrae base 11 do restante da divisão.
    let result = 11 - (totalSumArray / 11);

    // Adiciona o digito encontrado ao CNPJ.
    cnpjArray.push(result.toString());


    // Segundo dígito:
    const sequenceSecondDigit = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const sumArray2 = new Array(sequenceSecondDigit.length);

    for (let i = 0; i < sequenceSecondDigit.length; i++) {
      const value = Number(cnpjArray[i]);
      sumArray2[i] = sequenceSecondDigit[i] * value;
    }

    totalSumArray = Utils.somaTodasPosicoesdeUmArray(sumArray2);

    result = 11 - (totalSumArray / 11);

    cnpjArray.push(result.toString());

    const valid = cnpj === cnpjArray.toString() ? true : false;
    console.log(valid);
    return valid;
  }

  /**
  * retorna resultado da soma de todas as posições de um array.
  * @param sumArray
  * @returns {number}
  */
  public static somaTodasPosicoesdeUmArray(sumArray: number[]): number {
    let result = 0;
    sumArray.forEach(element => {
      result += element;
    });
    return result;
  }

  /**
  * retorna resultado da soma de todas as posições de um array.
  * @param string
  * @returns {string}
  */
  public static formatPhoneNumber(v: string): string {
    v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
    v = v.substring(0, 11); // Não permite que ultrapasse o número máximo de caracteres
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, '$1-$2'); // Coloca hífen entre o quarto e o quinto dígitos
    return v;
  }

  public static extractValue(row, cell): string {
    let result = row;
    const properties = cell.split('.');

    properties.forEach(property => {
      result = result[property] ? result[property] : result;
    });
    return result;
  }
}
