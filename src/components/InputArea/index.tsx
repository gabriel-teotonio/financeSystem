import { useState } from 'react'
import { categories } from '../../data/categories'
import { newDateAjusted } from '../../helpers/dateFilter'
import { Item } from '../../types/item'
import * as C from './style'



type Props = {
    onAdd:(item:Item) => void
    notifySuccess:() => void
    notifyError:(erros:string) => void
}

export const InputArea = ({onAdd,notifySuccess, notifyError}: Props) => {
    const [dateField, setDateField] = useState('')
    const [categoryField, setCategoryField] = useState('')
    const [titleField, setTitleField] = useState('')
    const [valueField, setValueField] = useState(0)

    const categoryKeys: string[] = Object.keys(categories)

    const handleAddEvent = () => {
        let errors:string[] = []
        if(isNaN(new Date(dateField).getTime())){
            errors.push('Data inválida!')
        }
        if(!categoryKeys.includes(categoryField)){
            errors.push('categoria inválida!')
        }
        if(titleField === ''){
            errors.push('Preencha o campo Título!')
        }
        if(valueField <= 0){
            errors.push('Preencha o campo valor!')
        }

        if(errors.length > 0){
            const errosFormat = errors.join('\n')
            notifyError(errosFormat)
        }
        else{
            onAdd({
                date:newDateAjusted(dateField), 
                category:categoryField,
                title:titleField,
                value:valueField
            })
            notifySuccess()
            clearFields()
        }
    }

    const clearFields = () => {
        setCategoryField('')
        setDateField('')
        setTitleField('')
        setValueField(0)
    }

    return (
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input value={dateField} onChange={e => setDateField(e.target.value)} type='date' placeholder='Ex:12/10/2022' />
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.Select 
                value={categoryField}
                onChange={e => setCategoryField(e.target.value)}
                >
                    <>
                    <option>Selecione</option>
                    {categoryKeys.map((item, index) => (
                        <option key={index} value={item}>{categories[item].title}</option>
                    ))}
                    </>
                </C.Select>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Título</C.InputTitle>
                <C.Input value={titleField} onChange={e => setTitleField(e.target.value)} type='text' placeholder='Ex: seu título' />
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input value={valueField} onChange={e => setValueField(parseInt(e.target.value))} type='number' placeholder='Ex: 80' />
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>&nbsp;</C.InputTitle>
                <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
            </C.InputLabel>
        </C.Container>
    )
}
