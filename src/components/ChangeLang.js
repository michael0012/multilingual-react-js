import React from 'react';
import { connect } from 'react-redux';
//import i18n, { languages } from '../i18n';
import IconButton from '@material-ui/core/IconButton';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import { CHANGE_LANG } from '../reducers/language';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeLang: () =>  dispatch({
            type: CHANGE_LANG,
        }),
    };
}

let ChangeLang = (props) => {
    if(!props.selected)
        return null;
    return (
        <div style={{right: '10px', bottom: '10px', position: 'fixed', zIndex: '1', }}>
            <IconButton style={{display: 'block'}} onClick={props.changeLang}>
                <LanguageOutlinedIcon fontSize="large"/>
            </IconButton>
        </div>
    );
}

const mapStateToProps = state => ({ selected: state.language.selected })

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLang); 