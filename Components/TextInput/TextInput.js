import React from 'react'
import { TextInput } from 'react-native';
import PropTypes from 'prop-types'

export default SimpleInput = ({text, onChangeText, returnKeyType, placeHolder, onSubmitEditing}) => (
    <TextInput
        value={text}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        spellCheck={false}
        placeholder={placeHolder}
        onSubmitEditing={onSubmitEditing}/>
)

SimpleInput.propTypes = {
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onTextChanged: PropTypes.func,
  placeHolder: PropTypes.string,
  returnKeyType: PropTypes.string,
  text: PropTypes.string
};

SimpleInput.defaultProps = {
    returnKeyType: 'done',
    placeHolder: '',
    onSubmitEditing: () => {console.log("Submit Editing")},
    onTextChanged: ()=> {console.log("Text Changed")},
    onChangeText: (text) => {console.log(text)}
};