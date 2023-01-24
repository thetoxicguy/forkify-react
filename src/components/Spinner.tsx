import React from 'react'
import { RingLoader } from 'react-spinners';

// interface Props {

// }

const override = {
    position: "relative",
    // display: "block",
    margin: "0 auto",
    top: "25%",
    borderColor: "red",
}

const Spinner: FunctionComponent<Props> = ({ loading }) => {
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