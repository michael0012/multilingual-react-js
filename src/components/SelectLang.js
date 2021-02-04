import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import i18n, { languages } from '../i18n';
import { SELECTING } from '../reducers/language'; 
import './SelectLang.css'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeLang: (lang) =>  dispatch({
            type: SELECTING,
            language: lang,
        }),
    };
}

const SelectLang = (props) => {

    let history = useHistory();
    const selectLanguages = [
        "Select Language",
        "Selecciona Un Idioma",
        "选择语言"
    ];
    const [state, setState] = useState({
        titleIndex: 0,
    });
    const endOfLoop = () => {
        
        if(state.titleIndex >= languages.length - 1){
            setState((state, props) =>{
                return {
                    ...state,
                    titleIndex: 0,
                };
            });
        }else{
            setState((state, props) => {
                return {
                    ...state,
                    titleIndex: state.titleIndex + 1,
                };
            });
        }
    };
    
    const selectingLang = (lang) => ( () => {
        props.changeLang(lang);
        i18n.changeLanguage(lang);
        let langPath = window.location.pathname.split('/');
        if (languages.includes(langPath[1])){
            langPath[1] = lang;
        }else{
            langPath.shift();
            langPath.unshift(lang);
            langPath.unshift('');
        }
        const pathRoute = langPath.join('/');
        history.push(pathRoute);
    });

    return(
        <div className="language-selection-modal">
            <div className="language-selection-modal-content">
                <h1 className="fade-out" onAnimationIteration={endOfLoop} style={{textAlign: "center", height: 60}}>{selectLanguages[state.titleIndex]}</h1>
                <div className="language-selection-modal-holder">
                    <div id="language-selection-modal-row-top" className="language-selection-modal-row" onClick={selectingLang('en')}>English</div>
                    <div className="language-selection-modal-row" onClick={selectingLang('es')}>Español</div>
                    <div className="language-selection-modal-row" onClick={selectingLang('zh')}>中文</div>
                </div>
            </div>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(SelectLang);
