import * as React from 'react'
import { CSSProperties } from 'react';
import { RingLoader } from 'react-spinners';
import { useAppSelector, useAppDispatch } from '../store/hooks';

interface SpinnerProps {
    loadingImage: boolean
}

const override: CSSProperties = {
    position: "relative",
    // display: "block",
    margin: "0 auto",
    top: "25%",
    borderColor: "red",
}

const Spinner: React.FC<SpinnerProps> = () => {
    const loadingImage = useAppSelector(state => state.loadingImage.value)
    return (
        <RingLoader
            color={ 'white' }
            loading={ loadingImage }
            cssOverride={ override }
            // size={50}
            aria-label='Image is now loading'
            data-testid={ 'loader' }
        />
    );
}

export default Spinner;