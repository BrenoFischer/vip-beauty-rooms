import { FiCheckCircle } from 'react-icons/fi';
import { RxCrossCircled, RxCross2 } from 'react-icons/rx';

import './boxMessage.styles.scss';

const BoxMessage = ({messageError=false, setMessageBox, messageSuccessTitle, messageSuccessText, messageErrorTitle, messageErrorText}) => {
    const handleCloseMessageBox = () => {
        setMessageBox(false);
    }

    return (
        <div className='message-box'>
            <div className='message-box__exit' onClick={handleCloseMessageBox}>
                <RxCross2 />
            </div>
            <div className='message-box__wrap'>
                { !messageError ?
                    (<>
                        <div className='message-box__icon-box'>
                            <FiCheckCircle />
                        </div>
                        <div className='message-box__text-box'>
                            <h2 className='message-box__title'>{messageSuccessTitle}</h2>
                            <p>{messageSuccessText}</p>
                        </div>
                    </>)
                :
                    (<>
                        <div className='message-box__icon-box-error'>
                            <RxCrossCircled />
                        </div>
                        <div className='message-box__text-box'>
                            <h2 className='message-box__title-error'>{messageErrorTitle}</h2>
                            <p>{messageErrorText}</p>
                        </div>
                    </>)
                }    
            </div>
        </div>
    );
}

export default BoxMessage;