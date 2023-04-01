import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner.component';
import CustomButton from '../../components/button/button.component';
import SignIn from '../../routes/signIn/signIn.component';
import Footer from '../../components/footer/footer.component';

import { selectDaysMap } from '../../store/openingHours/openingHours.selector';

import { getOpeningHoursDocuments, editAllOpeningHoursCollection } from "../../utils/firebase";
import { setOpeningHours } from '../../store/openingHours/openingHours.action';

import './editOpeningHours.styles.scss';
import BoxMessage from '../../components/boxMessage/boxMessage.component';


const OpeningHoursField = ({value, name, onChange, label}) => {
    return(
        <div className='edit-opening-hours__input-field'>           
            <input 
                type="text"
                list="hours"
                required
                name={name}
                value={value}
                onChange={onChange}
                className="edit-opening-hours__input"
            />
            <label className='edit-opening-hours__input-label'>
                {label}
            </label>
            <datalist id="hours">
                <option>12AM</option>
                <option>01AM</option>
                <option>02AM</option>
                <option>03AM</option>
                <option>04AM</option>
                <option>05AM</option>
                <option>06AM</option>
                <option>07AM</option>
                <option>08AM</option>
                <option>09AM</option>
                <option>10AM</option>
                <option>11AM</option>
                <option>12PM</option>
                <option>01PM</option>
                <option>02PM</option>
                <option>03PM</option>
                <option>04PM</option>
                <option>05PM</option>
                <option>06PM</option>
                <option>07PM</option>
                <option>08PM</option>
                <option>09PM</option>
                <option>10PM</option>
                <option>11PM</option>
                <option>CLOSED</option>
            </datalist>
        </div>
    );
}


const OpeningHourSet = ({ day, valueOpen, valueClose, nameOpen, nameClose, onChange }) => {
    return(
        <div className='edit-opening-hours__set'>
            <h3>{day}</h3>
            <div className='edit-opening-hours__set-wrapper'>
                <OpeningHoursField 
                    value={valueOpen}
                    name={nameOpen}
                    onChange={onChange}
                    label="Open"
                />
                <OpeningHoursField 
                    value={valueClose}
                    name={nameClose}
                    onChange={onChange}
                    label="Close"
                />
            </div>
        </div>
    );
}



const OpeningHoursDoubleSet = ({day1, day2, valueOpen1, valueOpen2, valueClose1, valueClose2, nameOpen1, nameOpen2, nameClose1, nameClose2, onChange}) => {
    return(
        <div className='edit-opening-hours__double-set'>
            <OpeningHourSet 
                day={day1}
                valueOpen={valueOpen1}
                valueClose={valueClose1}
                nameOpen={nameOpen1}
                nameClose={nameClose1}
                onChange={onChange}
            />
            <OpeningHourSet 
                day={day2}
                valueOpen={valueOpen2}
                valueClose={valueClose2}
                nameOpen={nameOpen2}
                nameClose={nameClose2}
                onChange={onChange}
            />
        </div>
    );
}


const defaultFormFields = {
    mondayFieldOpen: "",
    mondayFieldClose: "",
    tuesdayFieldOpen: "",
    tuesdayFieldClose: "",
    wednesdayFieldOpen: "",
    wednesdayFieldClose: "",
    thursdayFieldOpen: "",
    thursdayFieldClose: "",
    fridayFieldOpen: "",
    fridayFieldClose: "",
    saturdayFieldOpen: "",
    saturdayFieldClose: "",
    sundayFieldOpen: "",
    sundayFieldClose: ""
}


const EditOpeningHours = () => {
    const dispatch = useDispatch();

    const openingHours = useSelector(selectDaysMap);
    const currentUser = useSelector((state) => state.user.currentUser);

    const [ messageBox, setMessageBox ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { 
        mondayFieldOpen,
        mondayFieldClose,
        tuesdayFieldOpen,
        tuesdayFieldClose,
        wednesdayFieldOpen,
        wednesdayFieldClose,
        thursdayFieldOpen,
        thursdayFieldClose,
        fridayFieldOpen,
        fridayFieldClose,
        saturdayFieldOpen,
        saturdayFieldClose,
        sundayFieldOpen,
        sundayFieldClose 
    } = formFields;

    useEffect(() => {
        async function getOpeningHours() {
            const currentOpeningHours = await getOpeningHoursDocuments();
    
            dispatch(setOpeningHours(currentOpeningHours));
        };
        
        getOpeningHours();
        }, [dispatch]
    );


    useEffect(() => {
        if(Object.keys(openingHours).length === 0) return

        setFormFields({
            mondayFieldOpen: openingHours.monday.open,
            mondayFieldClose: openingHours.monday.close,
            tuesdayFieldOpen: openingHours.tuesday.open,
            tuesdayFieldClose: openingHours.tuesday.close,
            wednesdayFieldOpen: openingHours.wednesday.open,
            wednesdayFieldClose: openingHours.wednesday.close,
            thursdayFieldOpen: openingHours.thursday.open,
            thursdayFieldClose: openingHours.thursday.close,
            fridayFieldOpen: openingHours.friday.open,
            fridayFieldClose: openingHours.friday.close,
            saturdayFieldOpen: openingHours.saturday.open,
            saturdayFieldClose: openingHours.saturday.close,
            sundayFieldOpen: openingHours.sunday.open,
            sundayFieldClose: openingHours.sunday.close
        });
    }, [openingHours]);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({...formFields, [name]: value});
    }

    const createOpeningHoursObject = () => {
        return {
            monday: { open: mondayFieldOpen, close: mondayFieldClose },
            tuesday: { open: tuesdayFieldOpen, close: tuesdayFieldClose },
            wednesday: { open: wednesdayFieldOpen, close: wednesdayFieldClose },
            thursday: { open: thursdayFieldOpen, close: thursdayFieldClose },
            friday: { open: fridayFieldOpen, close: fridayFieldClose },
            saturday: { open: saturdayFieldOpen, close: saturdayFieldClose },
            sunday: { open: sundayFieldOpen, close: sundayFieldClose },
        }
    }

    const editOpeningHours = async (event) => {
        event.preventDefault();
        setLoading(true);

        const newOpeningHours = createOpeningHoursObject();

        await editAllOpeningHoursCollection(newOpeningHours);
        
        setLoading(false);
        setMessageBox(true);
        setTimeout(() => setMessageBox(false), 10000);
    }

    console.log("Component Mount");

    return(
        <section>
            { currentUser ?
                <div className='edit-opening-hours'>
                    <div className='edit-opening-hours__title--wrapper'>
                        <h2 className='edit-opening-hours__title'>Edit Opening Hours</h2>
                    </div>
                    <div className='edit-opening-hours__wrapper'>                       
                        <form onSubmit={editOpeningHours}>
                            <OpeningHoursDoubleSet 
                                    day1="Monday"
                                    valueOpen1={mondayFieldOpen}
                                    valueClose1={mondayFieldClose}
                                    nameOpen1="mondayFieldOpen"
                                    nameClose1="mondayFieldClose"
                                    day2="Tuesday"
                                    valueOpen2={tuesdayFieldOpen}
                                    valueClose2={tuesdayFieldClose}
                                    nameOpen2="tuesdayFieldOpen"
                                    nameClose2="tuesdayFieldClose"
                                    onChange={handleInputChange}  
                            />
                            <OpeningHoursDoubleSet 
                                    day1="Wednesday"
                                    valueOpen1={wednesdayFieldOpen}
                                    valueClose1={wednesdayFieldClose}
                                    nameOpen1="wednesdayFieldOpen"
                                    nameClose1="wednesdayFieldClose"
                                    day2="Thursday"
                                    valueOpen2={thursdayFieldOpen}
                                    valueClose2={thursdayFieldClose}
                                    nameOpen2="thursdayFieldOpen"
                                    nameClose2="thursdayFieldClose"
                                    onChange={handleInputChange}  
                            />
                            <OpeningHoursDoubleSet 
                                day1="Friday"
                                valueOpen1={fridayFieldOpen}
                                valueClose1={fridayFieldClose}
                                nameOpen1="fridayFieldOpen"
                                nameClose1="fridayFieldClose"
                                day2="Saturday"
                                valueOpen2={saturdayFieldOpen}
                                valueClose2={saturdayFieldClose}
                                nameOpen2="saturdayFieldOpen"
                                nameClose2="saturdayFieldClose"
                                onChange={handleInputChange}  
                            />
                            <OpeningHourSet 
                                day="Sunday"
                                valueOpen={sundayFieldOpen}
                                valueClose={sundayFieldClose}
                                nameOpen="sundayFieldOpen"
                                nameClose="sundayFieldClose"
                                onChange={handleInputChange}  
                            />
                            <div className='edit-opening-hours__button-wrapper'>
                                <CustomButton buttonText="Edit Opening Hours" type='submit' />
                                { loading &&
                                    <LoadingSpinner />
                                }
                            </div>
      
                            { messageBox &&
                                <BoxMessage 
                                    setMessageBox={setMessageBox}
                                    messageSuccessTitle="Opening Hours modified"
                                    messageSuccessText="The Opening hours were edited with success"
                                    messageErrorTitle="Error!"
                                    messageErrorText="An error has ocurred while editing the Opening Hours"
                                />
                            }
                        </form>

                        { Object.keys(openingHours).length !== 0 ?
                            <div className='edit-opening-hours__preview'>
                            <h3 className='edit-opening-hours__preview-title'>Opening hours preview</h3>
                                <ul className='edit-opening-hours__preview-list'>
                                    <li><span>Monday</span> - {mondayFieldOpen} to {mondayFieldClose}</li>
                                    <li><span>Tuesday</span> - {tuesdayFieldOpen} to {tuesdayFieldClose}</li>
                                    <li><span>Wednesday</span> - {wednesdayFieldOpen} to {wednesdayFieldClose}</li>
                                    <li><span>Thursday</span> - {thursdayFieldOpen} to {thursdayFieldClose}</li>
                                    <li><span>Friday</span> - {fridayFieldOpen} to {fridayFieldClose}</li>
                                    <li><span>Saturday</span> - {saturdayFieldOpen} to {saturdayFieldClose}</li>
                                    <li><span>Sunday</span> - {sundayFieldOpen} to {sundayFieldClose}</li>
                                </ul>
                            </div>
                        :
                            <LoadingSpinner />
                        }
                    </div>      
                    <Footer />          
                </div>
            :
                <SignIn />
            }
        </section>
    );
}

export default EditOpeningHours;