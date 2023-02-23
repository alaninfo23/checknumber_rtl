/* Importando biblioteca de renderização e screen(para localizar textos) */
import { render, screen } from "@testing-library/react";
/* Importando a função Checknumber do diretório atual*/
import { CheckNumber } from ".";
/* Importando a lib userEvent para interagir com o input */
import userEvent, {} from '@testing-library/user-event';

/* Função que busca um texto do tipo placeholder na página html 
function getInput () {
    return screen.getByPlaceholderText('Digite o número');
}*/

/* Descrevendo qual componente quero testar e criando cenários de testes */
describe('<Checknumber >', () => {
    /* Renderiza um título. */
    test('renders a title', () => {
        render(<CheckNumber />)
        /* Armazena o valor do do tipo Text na variável title */
        const title = screen.getByText('Componente Par ou Ímpar');
         /* Verifica se existe algum texto com o nome do título na página */
        expect(title).toBeInTheDocument();
    });
    /* Renderiza um input. */
    test('renders an input', () => {
        render (<CheckNumber />);
        /* Armazena o valor do do tipo placeholdertext na variável input */
        const input = screen.getByPlaceholderText('Digite o número');
        /* Verifica se existe algum placeholder com o nome informado. */
        expect(input).toBeInTheDocument();
    });
    /* Quando não há erro. */
    describe('when there is no error', () => {
        /* torna a seção da mensagem de erro vazia */
       test('renders the error message section empty', () => {
        render (<CheckNumber />);
            /* Armazena valor do Role alert na variável alert. */
           const alert = screen.getByTestId('ERROR_MESSAGE');
            /* Verifica se o alert existe no documento */
           expect(alert).toBeInTheDocument();
           /* Espero que o conteúdo dele seja vazio (pq quando inicia o app
            ele deve estar vazio, só deve ter algum valor se digitar alguma string)*/
           expect(alert).toHaveTextContent('');
    
       });
    });
    /* Quando o usuário digita um número ímpar. */
    describe('when the user types an odd number', () => {
        /* Renderiza impar na tela */
        test('renders Ímpar on the screen', () => {
            render(<CheckNumber />);

            const input = screen.getByPlaceholderText('Digite o número');
            /* Limpa o input */
            userEvent.clear(input);
            /* Digita 1 no input */
            userEvent.type(input, '1');
            /* Armazena valor do Role presentation na variável section. */
            const section = screen.getByRole('presentation');
            /* Verifica se existe um texto com nome 'Ímpar' na section */
            expect(section).toHaveTextContent('Ímpar');
        });
    });
    /* Quando o usuário digita um número par. */
    describe('when the user types an even number', () => {
        /* Renderiza par na tela */
        test('renders Par on the screen', () => {
            render(<CheckNumber />);

            const input = screen.getByPlaceholderText('Digite o número');
             /* Limpa o input */
            userEvent.clear(input);
            /* Digita 12 no input */
            userEvent.type(input, '12');
            /* Armazena valor do Role presentation na variável section. */
            const section = screen.getByRole('presentation');
            /* Verifica se existe um texto com nome 'Par' na section */
            expect(section).toHaveTextContent('Par');
        });
    });
    /* Quando o usuário digita um valor string. */
    describe('when the user types a not number value', () => {
            /* renderiza a mensagem de erro na tela */
            test('renders the error message on the screen', () => {
            render(<CheckNumber />);
            
            const input = screen.getByPlaceholderText('Digite o número');
            /* Limpa o input */
            userEvent.clear(input);
            /* Digita 'batata' no input */
            userEvent.type(input, 'batata');
            /* Armazena o valor da Role alert na variável section */
            const section = screen.getByRole('alert');
            /* Verifica se existe a mensagem na página */
            expect(section).toHaveTextContent('Por favor, digite um número');
        });
    })
    /* Quando o usuário digita um valor não-numérico + valor numérico. */    
    describe('when the user types a (not number value + number value)', () => {
        /* Renderiza mensaggem de erro na tela */
        test('renders the error message on the screen', () => {
            
            render(<CheckNumber />);
            const input = screen.getByPlaceholderText('Digite o número');
            /* Limpa o input */
            userEvent.clear(input);
            /* Digita 'batata' no input */
            userEvent.type(input, 'a12');
            
            /* Armazena valor da Role presentation na variavel section1 */
            const section1 = screen.getByRole('presentation')
            /* Verifica se está vazio */
            expect(section1).toHaveTextContent('')

            /* Armazena o valor da Role alert na variável section */
            const section2 = screen.getByRole('alert');
            /* Verifica se existe a mensagem na página */
            expect(section2).toHaveTextContent('Por favor, digite um número');
            
        });
    });
    /* Quando o usuário digita um valor numérico + valor não-numérico. */    
    describe('when the user types a (not number value + number value.)', () => {
            test('renders the error message on the screen', () => {

                render(<CheckNumber />);
                const input = screen.getByPlaceholderText('Digite o número');
                /* Limpa o input */
                userEvent.clear(input);
                /* Digita 'batata' no input */
                userEvent.type(input, '12a');
                /* Armazena o valor da Role alert na variável section */
                const section = screen.getByRole('alert');
                /* Verifica se existe a mensagem na página */
                expect(section).toHaveTextContent('Por favor, digite um número');
                
            });
    });
      /* Quando o usuário digita um valor não número. */
    describe('when the user types empty value', () => {
        /* renderiza mensagem vazia */
        test('render empty message', () => {
        render(<CheckNumber />);
        
        const input = screen.getByPlaceholderText('Digite o número');
        /* Limpa o input */
        userEvent.clear(input);
        /* Digita '' no input */
        userEvent.type(input, '');
        /* Armazena o valor da Role alert na variável section */
        const section = screen.getByRole('alert');
        /* Verifica se existe a mensagem na página */
        expect(section).toHaveTextContent('');
    });
    });

});
