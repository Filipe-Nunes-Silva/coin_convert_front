import * as C from './IndexStyled';
import { useState, useEffect, Dispatch } from 'react';


type TProps = {
    text?: string;
    value: string;
    placeholder: string;
    type: 'string' | 'number';
    setValue: Dispatch<any>;
    disabled?: boolean;
};

const CurrencyFields = ({ text, value, setValue, placeholder, type, disabled }: TProps) => {

    return (
        <C.Container>

            {text &&
                <C.Texts>
                    {text}
                </C.Texts>
            }

            {type === 'string' &&
                <C.InputCoin
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            }

            {type === 'number' &&
                <C.InputValue
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    disabled={disabled ? false : true}
                />
            }
        </C.Container>
    );
};

export default CurrencyFields;