import * as React from 'react'
import { CSSProperties } from 'react';
import { RingLoader } from 'react-spinners';

interface SpinnerProps {
    loading: boolean
}

const override: CSSProperties = {
    position: "relative",
    // display: "block",
    margin: "0 auto",
    top: "25%",
    borderColor: "red",
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
    return (
        <RingLoader
            color={'white'}
            loading={loading}
            cssOverride={override}
            // size={50}
            aria-label='Image is now loading'
            data-testid={'loader'}
        />
    );
}

export default Spinner;