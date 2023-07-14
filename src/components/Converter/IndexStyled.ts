import styled, { keyframes, css } from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    background-color: #fff;
    border-radius: 3px;

    .line{
        margin:0 auto;
        width: 95%;
        height: 2px;
        background-color: var(--color2);
    };

    @media (min-width:800px) {
        padding: 20px;
        width: 700px;
    }
`;

export const InsertValues = styled.div`
    display: flex;
    padding: 15px 5px 5px 5px;
    box-sizing: border-box;

`;

export const forwardStepsAnimation = keyframes`
    0%{
        background-color: initial;
    }
    10%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 0%, rgba(255,255,255,1) 10%);
    }
    20%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 10%, rgba(255,255,255,1) 20%);
    }
    30%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 20%, rgba(255,255,255,1) 30%);
    }
    40%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 30%, rgba(255,255,255,1) 40%);
    }
    50%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 40%, rgba(255,255,255,1) 50%);
    }
    60%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 50%, rgba(255,255,255,1) 60%);
    }
    70%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 60%, rgba(255,255,255,1) 70%);
    }
    80%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 70%, rgba(255,255,255,1) 80%);
    }
    90%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 80%, rgba(255,255,255,1) 90%);
    };
    100%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 100%, rgba(255,255,255,1) 100%);
    };
`;

export const backwardStepsAnimation = keyframes`
    0%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 100%, rgba(255,255,255,1) 100%);
    }
    10%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 80%, rgba(255,255,255,1) 90%);
    }
    20%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 70%, rgba(255,255,255,1) 80%);
    }
    30%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 60%, rgba(255,255,255,1) 70%);
    }
    40%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 50%, rgba(255,255,255,1) 60%);
    }
    50%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 40%, rgba(255,255,255,1) 50%);
    }
    60%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 30%, rgba(255,255,255,1) 40%);
    }
    70%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 20%, rgba(255,255,255,1) 30%);
    }
    80%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 10%, rgba(255,255,255,1) 20%);
    }
    90%{
        background: linear-gradient(180deg, rgba(246,146,56,1) 0%, rgba(255,255,255,1) 10%);
    };
    100%{
        background-color: initial;
    };
`;

type StepProps = {
    base: 'true' | 'false';
    end: 'true' | 'false';
    value: 'true' | 'false';
};

export const Steps = styled.div<StepProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 5px 0 0;

    .numberOne,.numberTwo,.numberThree{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 80%;
        border-radius: 50%;
        border: 2px solid #fff;
        font-weight: bold;
    };
    .numberOne{
        background-color: ${(props) => props.base === 'true' ? 'var(--color2)' : 'var(--color3)'};
    };
    .numberTwo{
        background-color: ${(props) => props.end === 'true' && props.base === 'true' ? 'var(--color2)' : 'var(--color3)'};
    };
    .numberThree{
        background-color: ${(props) => {
        return props.base === 'true' && props.end === 'true' && props.value === 'true' ?
            'var(--color2)' : 'var(--color3)'
    }};
    };

    .divStep1,.divStep2,.divStep3{

        width:35px;
        height:35px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    };

    .divStep1{
        animation:${(props) => props.base === 'true' ? css`${forwardStepsAnimation}` : css`${backwardStepsAnimation}`};
        animation-duration: 0.5s;
        animation-timing-function:ease-in;
        animation-fill-mode: forwards;
    };
    .divStep2{
        animation:${(props) => {
        return props.end === 'true' && props.base === 'true' ?
            css`${forwardStepsAnimation}` : css`${backwardStepsAnimation}`
    }};
            
        animation-duration: 0.5s;
        animation-timing-function:ease-in;
        animation-fill-mode: forwards;
    };
    .divStep3{
        animation:${(props) => {
        return props.base === 'true' && props.end === 'true' && props.value === 'true' ?
            css`${forwardStepsAnimation}` : css`${backwardStepsAnimation}`
    }};
        animation-duration: 0.5s;
        animation-timing-function:ease-in;
        animation-fill-mode: forwards;
    };

    .spaceStep1,.spaceStep2{
        width: 2px;
    };

    .spaceStep1{
        height: 55px;
        animation:${(props) => props.base === 'true' ? css`${forwardStepsAnimation}` : css`${backwardStepsAnimation}`};
        animation-delay: ${(props) => props.base === 'true' ? '0.5s' : '0'};
        animation-duration: 0.5s;
        animation-timing-function:ease-in;
        animation-fill-mode: forwards;
    };
    .spaceStep2{
        height: 34px;

        animation:${(props) => {
        return props.end === 'true' && props.base === 'true' ?
            css`${forwardStepsAnimation}` : css`${backwardStepsAnimation}`
    }};
    
        animation-delay: ${(props) => props.end === 'true' ? '0.5s' : '0'};
        animation-duration: 0.5s;
        animation-timing-function:ease-in;
        animation-fill-mode: forwards;
    };

`;

export const Fields = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    .swap{
        position: relative;
        /* margin:40px 0 20px 0; */
        width: 100%;
        height: 2px;
        display: flex;
        justify-content: center;
        align-items: center;

        .material-symbols-outlined{
            color: var(--color2);
            cursor: pointer;
        };
    };
`;


type btnProps = {
    validate: 'true' | 'false';
};

export const Btn = styled.button<btnProps>`
    margin: 20px 3px;
    padding: 6px;
    font-size: 16px;
    border-radius: 3px;
    background-color: ${(props) => props.validate === 'true' ? 'var(--color2)' : 'var(--color3)'};
    color: #fff;
    font-family: var(--font1);
    font-weight: 600;
    outline: none;
    border: ${(props) => props.validate === 'true' ? '1px solid var(--color2)' : '1px solid var(--color3)'};
    cursor: ${(props) => props.validate === 'true' ? 'pointer' : 'auto'};

    &:hover{
        background-color: ${(props) => props.validate === 'true' ? 'var(--color2hover)' : ''};
    };
`;

export const Result = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    div{
        font-weight: bolder;
        font-size: 50px;
    };
`;