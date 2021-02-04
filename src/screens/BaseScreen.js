import React from "react";
import ChangeLang from '../components/ChangeLang';
import HeadTranslator from '../components/HeadTranslator';

const BaseScreen = (props) => {

    return (
        <div style={{postition: 'relative'}}>
            {props.children}
            <ChangeLang/>
            <HeadTranslator/>
        </div>
    );
};

export default BaseScreen;