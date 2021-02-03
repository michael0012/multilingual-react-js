import React from "react";
import { useTranslation } from 'react-i18next';
import BaseScreen from './BaseScreen';

const Otherpage = (props) => {
    const { t } = useTranslation();
    
    return (
        <BaseScreen>
            <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{textAlign: 'center'}}>{t('Welcome to Other thing...')}</h1>
            </div>
        </BaseScreen>
    );
};

export default Otherpage;