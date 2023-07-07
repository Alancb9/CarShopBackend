import React from 'react';

//Componente reutilizable que sirve para mostrar un parrafo mediante la etiqueta p y strong
const ParagraphsForm = ({ classParagraph, textparagraph, textStrong }) => {
    return(
        <>
            {classParagraph === ''? (
                <p>
                    <strong>
                        {textStrong}
                    </strong>
                     {textparagraph}
                </p>
            ) : (
                <p className = {classParagraph}>
                    {textparagraph}
                </p>
            )}
        </>
        
    );
};

export default ParagraphsForm;