/* Importanto biblioteca 'useState' do react */
import { useState } from "react";

/* Função que retorna uma DIV com um input para digitar valores */
/* E mostra uma frase informando se o número é Impar ou Par */
export const CheckNumber =  () => {

    /* Variável que recebe como parâmetro: number(valor do input), setNumber (função
       que altera valor do input), e recebe um estado inicial com valor '0' */
    const [number, setNumber] = useState('0');
    /* Variável que recebe como parâmetro: valor do input caso seja uma string, e
       o setErrorMessage(função que altera o valor do input) e recebe um estado
       inicial com valor vazio.*/
    const [errorMessage, setErrorMessage] = useState('');
    /* Variável que recebe como parâmetro: o typeMessage que recebe o valor digitado
    é par ou impar, ou mensagem de erro, e o setTypeMessage que altera esse valor*/
    const [typeMessage, setTypeMessage] = useState('');

    
    return (
        <div>
            <h1>Componente Par ou Ímpar</h1>
            <input 
            type="text" 
            name="number" 
            placeholder="Digite o número"
            /* valor está vinculado ao number. */
            value={number}
            onChange={event => {
                //armazenando valor bruto na variável 'rawValue'.
                const rawValue = event.target.value;
                //armazenando o valor(text) convertido em nº int na variável 'numberValue'.
                const numberValue = parseInt(rawValue)
                setNumber(rawValue);
                
                /* verifica se valor do input é um número, se não for ele dá erro, 
                se for ele retorna(ou seja sai do fluxo) */
                if (rawValue === "") {
                    setErrorMessage('')
                    setTypeMessage('')
                    return;
                }
                
                if (isNaN(numberValue)) {
                    setTypeMessage("");
                    setErrorMessage('Por favor, digite um número')
                    return;
                } 
                
                //armazenando resultado da divisão number/2 na variável 'isEven'.
                const isEven = (numberValue) % 2 === 0;
                
                setTypeMessage(isEven ? 'Par' : 'Ímpar');
                /* Limpar mensagem de erro caso número for Válido. */
                setErrorMessage("");
                console.log(numberValue);
            }}
            />
            
            {/* Parágrafo c/ função p/ exibir se nº é Par ou Impar */}
            {/* Foi inserido uma tag 'role' p/ identificar o elemento(essa tag também
                é uma tag de acessibilidade(ajuda PcD a identificar o que significa)) 
                para mais informações sobre qual role usar pesquise por aria-label no mdn */}
            <p role="presentation">{typeMessage}</p>
            
            {/* Parágrafo p/ exibir mensagem de erro caso digite string */}
            <p role="alert" data-testid="ERROR_MESSAGE">{errorMessage}</p>
        </div>
    )
}