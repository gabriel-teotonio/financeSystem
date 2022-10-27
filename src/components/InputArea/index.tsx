import * as C from './style'

export const InputArea = () => {
    return (
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input type='date' placeholder='Ex:12/10/2022' />
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.Select>
                    <option></option>
                    <option>Salário</option>
                    <option>Alimentação</option>
                    <option>Aluguel</option>
                </C.Select>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Título</C.InputTitle>
                <C.Input type='text' placeholder='Ex: seu título' />
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input type='number' placeholder='Ex: 80' />
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>&nbsp;</C.InputTitle>
                <C.Button>Adicionar</C.Button>
            </C.InputLabel>
        </C.Container>
    )
}
