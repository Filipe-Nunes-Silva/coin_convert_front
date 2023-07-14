import * as C from './IndexStyled';
import CurrencyFields from './CurrencyFields/Index';
import { useEffect, useState } from 'react';
import { runValidations } from '../../validations/Index';
import { InsertErrors } from '../InsertErros/Index';
import { http } from '../../config/http';

export type Tvalidations = {
    validate: boolean;
    base: {
        response: boolean;
        error: string;
    },
    end: {
        response: boolean;
        error: string;
    },
    value: {
        response: boolean;
        error: string;
    },
    differentCoins: {
        response: boolean;
        error: string;
    },
};

type TResponseApi = {
    error: boolean;
    value: string;
};


const Converter = () => {

    const [coinBase, setCoinBase] = useState('');
    const [coinEnd, setCoinEnd] = useState('');
    const [value, setValue] = useState('');

    const [validations, setValidations] = useState<Tvalidations>();
    const [errors, setErrors] = useState<string[]>([]);
    const [responseApi, setResponseApi] = useState<TResponseApi>();

    useEffect(() => {
        setErrors([]);
        setValidations(runValidations(coinBase, coinEnd, value) as Tvalidations);
    }, [coinBase, coinEnd, value]);

    useEffect(() => {

        const allErrors = [];
        if (coinBase && !validations?.base.response && validations?.base.error) {
            allErrors.push(validations.base.error);
        };
        if (coinEnd && !validations?.end.response && validations?.end.error) {
            allErrors.push(validations.end.error);
        };
        if (coinBase && coinEnd && !validations?.differentCoins.response && validations?.differentCoins.error) {
            allErrors.push(validations.differentCoins.error);
        };
        if (value && !validations?.value.response && validations?.value.error) {
            allErrors.push(validations.value.error);
        };

        setErrors(allErrors);

    }, [validations]);

    const swapValues = () => {
        let base = coinBase;
        let end = coinEnd;
        const res = [base, end] = [end, base];
        setCoinBase(base);
        setCoinEnd(end);
    };

    const handleClick = async () => {
        if (!validations?.validate) return;

        const response = await http.post<TResponseApi>('/convert', {
            base: coinBase,
            end: coinEnd,
            value: value,
        });

        if (!response.data.error) {
            const convertedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(response.data.value)).replace('R$', '').trim();

            response.data.value = convertedValue;
            setResponseApi(response.data);

        } else {
            setResponseApi(response.data);
        };
    };

    return (
        <C.Container>
            <C.InsertValues>

                <C.Steps
                    base={validations?.base.response ? 'true' : 'false'}
                    end={validations?.end.response ? 'true' : 'false'}
                    value={validations?.value.response ? 'true' : 'false'}
                >
                    <div className='divStep1'>
                        <div className='numberOne'>1</div>
                    </div>

                    <div className='spaceStep1'></div>

                    <div className='divStep2'>
                        <div className='numberTwo'>2</div>
                    </div>

                    <div className='spaceStep2'></div>

                    <div className='divStep3'>
                        <div className='numberThree'>3</div>
                    </div>
                </C.Steps>

                <C.Fields>
                    <CurrencyFields
                        type='string'
                        text='De:'
                        value={coinBase}
                        setValue={setCoinBase}
                        placeholder='Ex: Dolar'
                        disabled={false}
                    />

                    <div className='swap'>
                        <span onClick={swapValues} className="material-symbols-outlined">
                            autorenew
                        </span>
                    </div>

                    <CurrencyFields
                        type='string'
                        text='Para:'
                        value={coinEnd}
                        setValue={setCoinEnd}
                        placeholder='Ex: Dolar'
                        disabled={false}
                    />

                    <CurrencyFields
                        text='Valor'
                        type='string'
                        value={value}
                        setValue={setValue}
                        placeholder='Digite o valor a converter...'
                        disabled={
                            validations?.base.response && validations?.end.response && validations.differentCoins.response ? true : false
                        }
                    />
                    <InsertErrors arrayErrors={errors} />

                </C.Fields>

            </C.InsertValues>

            <div className='line'></div>

            <C.Btn onClick={handleClick} validate={validations?.validate ? 'true' : 'false'}>Converter</C.Btn>

            <C.Result>
                {responseApi && !responseApi?.error ?
                    <>
                        <span>O resultado da conversão é:</span>
                        <div>{responseApi?.value}</div>
                    </>
                    :
                    <>
                        {/* <div className=''></div> */}
                        {responseApi?.error &&
                            <InsertErrors arrayErrors={[responseApi.value]} />
                        }
                    </>
                }
            </C.Result>

        </C.Container>
    );
};

export default Converter;