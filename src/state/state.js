import React from 'react'
import {ModalProvider, FiltersProvider} from './index'


function ProviderComposer({contexts, children}) {
    return contexts.reduceRight(
        (kids, parent) =>
            React.cloneElement(parent, {
                children: kids,
            }),
        children
    );
}

function ContextProvider({children}) {
    return (
        <ProviderComposer
            contexts={[<FiltersProvider/>]}
        >
            {children}
        </ProviderComposer>
    );
}

export {ContextProvider};
