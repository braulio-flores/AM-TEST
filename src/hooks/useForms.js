import { useState } from 'react';

export const useForm = ( inicialSate = {} ) => {

    const [valuesForm, setValuesForm] = useState( inicialSate );

    const handleInputChange = ({target}) => {
        setValuesForm({
            ...valuesForm,
            [target.name]: target.value
        });
    };

    const reset = ( newFormState = inicialSate) => {
        setValuesForm(inicialSate);
    };
 

    return { valuesForm,handleInputChange,reset };  

};

