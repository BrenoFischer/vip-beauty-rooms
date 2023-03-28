import './loadingSpinner.styles.scss';

const LoadingSpinner = ({alternativeStyle=false}) => {
    return(
        <div className="spinner-container">
            { alternativeStyle ? 
                <div className="loading-spinner-alternative">
                </div>
            :
                <div className="loading-spinner">
                </div>
            }
        </div>
    );
}

export default LoadingSpinner;