import { Fragment } from "react";
import * as C from './IndexStyled';

export const InsertErrors = ({ arrayErrors }: { arrayErrors: string[] }) => {

    return (
        <C.Container>
            {arrayErrors.map((err) => (
                <Fragment key={err}>
                    <span>{err}</span><br />
                </Fragment>
            ))}
        </C.Container>
    );
};
