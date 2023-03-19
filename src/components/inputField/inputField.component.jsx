import './inputField.styles.scss';

const InputField = ({label, isTextArea=false, ...otherProps}) => (
    <div className='form__input-field'>
      { isTextArea ?
        (
          <textarea className='form__input textarea' {...otherProps} />
        ) 
      :
        (
          <input className='form__input' {...otherProps} />
        )
      }
      <label className={`${otherProps.value.length ? 'shrink' : ''} form__input-label`}>
        {label}
      </label>
    </div>
  );

  export default InputField