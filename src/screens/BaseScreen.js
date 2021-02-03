import React from "react";
import ChangeLang from '../components/ChangeLang';
import HeadTranslator from '../components/HeadTranslator';

const BaseScreen = (props) => {

    return (
        <div style={{height: '100vh', postition: 'relative'}}>
            {props.children}
            <ChangeLang/>
            <HeadTranslator/>
        </div>
    );
};

export default BaseScreen;