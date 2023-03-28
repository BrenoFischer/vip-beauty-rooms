import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner.component';

import { selectDaysMap } from '../../store/openingHours/openingHours.selector';

import { getOpeningHoursDocuments } from "../../utils/firebase";
import { setOpeningHours } from '../../store/openingHours/openingHours.action';

import './editOpeningHours.styles.scss';
import InputField from '../../components/inputField/inputField.component';

const EditOpeningHours = () => {
    const dispatch = useDispatch();

    const openingHours = useSelector(selectDaysMap);
    const {saturday, sunday, monday, tuesday, wednesday, thursday, friday} = openingHours;

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
            mondayFieldOpen: monday.open,
            mondayFieldClose: monday.close,
            tuesdayFieldOpen: tuesday.open,
            tuesdayFieldClose: tuesday.close,
            wednesdayFieldOpen: wednesday.open,
            wednesdayFieldClose: wednesday.close,
            thursdayFieldOpen: thursday.open,
            thursdayFieldClose: thursday.close,
            fridayFieldOpen: friday.open,
            fridayFieldClose: friday.close,
            saturdayFieldOpen: saturday.open,
            saturdayFieldClose: saturday.close,
            sundayFieldOpen: sunday.open,
            sundayFieldClose: sunday.close
        });
    }, [openingHours]);


    console.log("Component Mount");

    return(
        <section>
            <h2>Edit Opening Hours</h2>
            { Object.keys(openingHours).length !== 0 ?
                <ul className='footer__schedule-list'>
                    <li>Monday - {monday.open} to {monday.close}</li>
                    <li>Tuesday - {tuesday.open} to {tuesday.close}</li>
                    <li>Wednesday - {wednesday.open} to {wednesday.close}</li>
                    <li>Thursday - {thursday.open} to {thursday.close}</li>
                    <li>Friday - {friday.open} to {friday.close}</li>
                    <li>Saturday - {saturday.open} to {saturday.close}</li>
                    <li>Sunday - {sunday.open} to {sunday.close}</li>
                </ul>
            :
                <LoadingSpinner />
            }
            <InputField 
                required
                name="mondayFieldOpen"
                label="Open"
                onChange={() => {}}
                value={mondayFieldOpen}
                type="text"
            />
        </section>
    );
}

export default EditOpeningHours;