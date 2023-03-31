import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner.component';
import CustomButton from '../../components/button/button.component';

import { selectDaysMap } from '../../store/openingHours/openingHours.selector';

import { getOpeningHoursDocuments, editAllOpeningHoursCollection } from "../../utils/firebase";
import { setOpeningHours } from '../../store/openingHours/openingHours.action';

import './editOpeningHours.styles.scss';


const OpeningHoursField = ({value, name, onChange, label}) => {
    return(
        <>           
            <input 
                type="text"
                list="hours"
                required
                name={name}
                value={value}
                onChange={onChange}
            />
            <label>
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
        </>
    );
}


const OpeningHourSet = ({ day, valueOpen, valueClose, nameOpen, nameClose, onChange }) => {
    return(
        <>
            <h3>{day}</h3>
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
        </>
    );
}

const EditOpeningHours = () => {
    const dispatch = useDispatch();

    const openingHours = useSelector(selectDaysMap);

    let defaultFormFields = {
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

        const newOpeningHours = createOpeningHoursObject();

        await editAllOpeningHoursCollection(newOpeningHours);
    }

    console.log("Component Mount");

    return(
        <section>
            <h2>Edit Opening Hours</h2>
            { Object.keys(openingHours).length !== 0 ?
                <ul className='footer__schedule-list'>
                    <li>Monday - {mondayFieldOpen} to {mondayFieldClose}</li>
                    <li>Tuesday - {tuesdayFieldOpen} to {tuesdayFieldClose}</li>
                    <li>Wednesday - {wednesdayFieldOpen} to {wednesdayFieldClose}</li>
                    <li>Thursday - {thursdayFieldOpen} to {thursdayFieldClose}</li>
                    <li>Friday - {fridayFieldOpen} to {fridayFieldClose}</li>
                    <li>Saturday - {saturdayFieldOpen} to {saturdayFieldClose}</li>
                    <li>Sunday - {sundayFieldOpen} to {sundayFieldClose}</li>
                </ul>
            :
                <LoadingSpinner />
            }

            <form onSubmit={editOpeningHours}>
                <OpeningHourSet 
                    day="Monday"
                    valueOpen={mondayFieldOpen}
                    valueClose={mondayFieldClose}
                    nameOpen="mondayFieldOpen"
                    nameClose="mondayFieldClose"
                    onChange={handleInputChange}  
                />
                <OpeningHourSet 
                    day="Tuesday"
                    valueOpen={tuesdayFieldOpen}
                    valueClose={tuesdayFieldClose}
                    nameOpen="tuesdayFieldOpen"
                    nameClose="tuesdayFieldClose"
                    onChange={handleInputChange}  
                />
                <OpeningHourSet 
                    day="Wednesday"
                    valueOpen={wednesdayFieldOpen}
                    valueClose={wednesdayFieldClose}
                    nameOpen="wednesdayFieldOpen"
                    nameClose="wednesdayFieldClose"
                    onChange={handleInputChange}  
                />
                <OpeningHourSet 
                    day="Thursday"
                    valueOpen={thursdayFieldOpen}
                    valueClose={thursdayFieldClose}
                    nameOpen="thursdayFieldOpen"
                    nameClose="thursdayFieldClose"
                    onChange={handleInputChange}  
                />
                <OpeningHourSet 
                    day="Friday"
                    valueOpen={fridayFieldOpen}
                    valueClose={fridayFieldClose}
                    nameOpen="fridayFieldOpen"
                    nameClose="fridayFieldClose"
                    onChange={handleInputChange}  
                />
                <OpeningHourSet 
                    day="Saturday"
                    valueOpen={saturdayFieldOpen}
                    valueClose={saturdayFieldClose}
                    nameOpen="saturdayFieldOpen"
                    nameClose="saturdayFieldClose"
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
                <CustomButton buttonText="Edit Opening Hours" type='submit' />
            </form>
        </section>
    );
}

export default EditOpeningHours;