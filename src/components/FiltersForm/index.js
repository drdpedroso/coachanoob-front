import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Button from '../Button'
import {Form, Responsive, Segment} from 'semantic-ui-react'
import BaseDropdown from "../Dropdown"
import BaseInput from "../Input"
import RadioButtonGroup from "../RadioButtonGroup"
import {FiltersContainer, FormContainer, Label, FiltersInnerContainer} from './styles'
import StickyButton from "../StickyButton";

const FiltersForm = (props) => {
    const [form, setForm] = useState({})
    const [open, setOpen] = useState(false)

    const onChangeDropdownValue = (value: string, key: string) => {
        setForm({
            ...form,
            [key]: value
        })
    }

    const onChangeInputValue = (e: any, key: string) => {
        const {value} = e.target
        setForm({
            ...form,
            [key]: value
        })
    }
    const onSubmit = (): function => {
        return typeof props.onSubmit === 'function' ? props.onSubmit(form) : null
    }

    const openFilters = () => setOpen(!open)

    const items = [
        {name: '1+', value: '1'},
        {name: '2+', value: '2'},
        {name: '3+', value: '3'},
        {name: '4+', value: '4'},
        {name: '5+', value: '5'},
    ]
    const countryOptions = [
        {key: 'af', value: 'af', flag: 'af', text: 'Afghanistan'},
        {key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands'},
        {key: 'al', value: 'al', flag: 'al', text: 'Albania'},
        {key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria'},
        {key: 'as', value: 'as', flag: 'as', text: 'American Samoa'},
        {key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra'},
        {key: 'ao', value: 'ao', flag: 'ao', text: 'Angola'},
        {key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla'},
        {key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua'},
        {key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina'},
        {key: 'am', value: 'am', flag: 'am', text: 'Armenia'},
        {key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba'},
        {key: 'au', value: 'au', flag: 'au', text: 'Australia'},
        {key: 'at', value: 'at', flag: 'at', text: 'Austria'},
        {key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan'},
        {key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas'},
        {key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain'},
        {key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh'},
        {key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados'},
        {key: 'by', value: 'by', flag: 'by', text: 'Belarus'},
        {key: 'be', value: 'be', flag: 'be', text: 'Belgium'},
        {key: 'bz', value: 'bz', flag: 'bz', text: 'Belize'},
        {key: 'bj', value: 'bj', flag: 'bj', text: 'Benin'},
    ]
    return (
        <div>

            <Responsive as={'div'} maxWidth={768}>
                <StickyButton onClick={openFilters} data-testid="open-filters">Abrir</StickyButton>
            </Responsive>
            <Responsive as={'div'} minWidth={769}>
                <FiltersContainer>
                    <Button onClick={openFilters} data-testid="open-filters">Abrir</Button>
                </FiltersContainer>
            </Responsive>

            {open && <FiltersInnerContainer>
                <FormContainer>
                    <Form.Field>
                        <Label>Tipo de Uso</Label>
                        <BaseDropdown options={countryOptions}
                                      onChange={(e, data) => onChangeDropdownValue(data.value, 'usageType')}
                                      selection/>
                    </Form.Field>
                    <Form.Field>
                        <Label>Tipo de Imóvel</Label>
                        <BaseDropdown options={countryOptions}
                                      onChange={(e, data) => onChangeDropdownValue(data.value, 'type')} selection/>
                    </Form.Field>
                    <Form.Group>
                        <Form.Field width={4}>
                            <Label>Estado</Label>
                            <BaseDropdown fluid selection defaultValue="SP"
                                          onChange={(e, data) => onChangeDropdownValue(data.value, 'state')}/>
                        </Form.Field>
                        <Form.Field width={12}>
                            <Label>Cidade</Label>
                            <BaseDropdown fluid selection
                                          onChange={(e, data) => onChangeDropdownValue(data.value, 'city')}/>
                        </Form.Field>
                    </Form.Group>
                    <Form.Field>
                        <Label>Bairro</Label>
                        <BaseInput data-testid="neighborhood" disabled
                                   onChange={(e) => onChangeInputValue(e, 'neighborhood')}/>
                    </Form.Field>
                    <Form.Group widths="equal">
                        <Form.Field>
                            <Label>Valor min.</Label>
                            <BaseInput data-testid="salePriceFrom" fluid
                                       onChange={(e) => onChangeInputValue(e, 'salePriceFrom')}/>
                        </Form.Field>
                        <Form.Field>
                            <Label>Valor max.</Label>
                            <BaseInput data-testid="salePriceTo" fluid
                                       onChange={(e) => onChangeInputValue(e, 'salePriceTo')}/>
                        </Form.Field>
                    </Form.Group>
                    <Form.Field>
                        <Label>Quartos</Label>
                        <RadioButtonGroup data-testid="rooms" white
                                          onItemClick={(value) => onChangeDropdownValue(value, 'rooms')} items={items}/>
                    </Form.Field>
                    <Form.Field>
                        <Label>Suites</Label>
                        <RadioButtonGroup data-testid="suites" white
                                          onItemClick={(value) => onChangeDropdownValue(value, 'suites')}
                                          items={items}/>
                    </Form.Field>
                    <Form.Field>
                        <Label>Banheiros</Label>
                        <RadioButtonGroup white onItemClick={(value) => onChangeDropdownValue(value, 'rooms')}
                                          items={items}/>
                    </Form.Field>
                    <Form.Field>
                        <Label>Vagas na Garagem</Label>
                        <RadioButtonGroup white onItemClick={(value) => onChangeDropdownValue(value, 'rooms')}
                                          items={items}/>
                    </Form.Field>
                    <Button data-testid="submit" type='submit' fluid onClick={onSubmit}>Filtrar</Button>
                </FormContainer>
            </FiltersInnerContainer>}
        </div>
    )
}
FiltersForm.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default FiltersForm
