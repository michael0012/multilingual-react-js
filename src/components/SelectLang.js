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
        // setTimeout(()=>{}, 500);
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
    /*
    useEffect(() => {
        let timeoutHolder = setTimeout(() => {
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
        }, 3000)
        return () => {
            clearTimeout(timeoutHolder);
        }
    }, [state]);
    */
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
        <div className="modal">
            <div className="modal-content">
                <h1 className="fade-out" onAnimationIteration={endOfLoop} style={{textAlign: "center", height: 60}}>{selectLanguages[state.titleIndex]}</h1>
                <div className="modal-holder">
                    <div id="modal-row-top" className="modal-row" onClick={selectingLang('en')}>English</div>
                    <div className="modal-row" onClick={selectingLang('es')}>Español</div>
                    <div className="modal-row" onClick={selectingLang('zh')}>中文</div>
                </div>
            </div>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(SelectLang);
