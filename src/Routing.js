import React from "react";
import { connect } from 'react-redux';
import { Route } from "react-router-dom";
import i18n, { languages } from './i18n'; // correct import statement for i18n
import SelectLang from './components/SelectLang';
import { SET_LANG } from './reducers/language';
import Welcome from './screens/Welcome';
import Otherpage from './screens/Otherpage';



const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      setLang: (lang) =>  dispatch({
          type: SET_LANG,
          language: lang,
      }),
  };
}


let Routing = (props) => {
    const lang = window.location.pathname.split('/')[1];
    // TODO: add modual for choosing languages
    let selectingLang = false;
    console.log({language: props.language, selected: props.selected});
    if(!languages.includes(lang) || !props.selected){
      selectingLang = true;
    }
    if( languages.includes(lang) && props.language !== lang ){
        props.setLang(lang);
    }
    if( languages.includes(lang) && i18n.language !== lang ){
        i18n.changeLanguage(lang);
    }
  
    return (
      <React.Fragment>
        {selectingLang && <SelectLang/>}
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/:lang([a-z]{2})/" component={Welcome}/>
        {
            // the two routes above should have the same component
        }
        <Route exact path="/:lang([a-z]{2})/otherthing" component={Otherpage} />
      </React.Fragment>
    );
    
  };
  const mapStateToProps = state => ({ language: state.language.language, selected: state.language.selected })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Routing);

  //export default Routing;