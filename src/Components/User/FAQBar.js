import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

const FAQBar = (props) => {
    const question = props.question;
    const answer = props.answer;
    const [active, setActive] = useState(false);
    
    const arrowOnClick = () => {
        setActive(!active);
    }
    
    return (
        <div className="w-full border-b-2 border-primary-600 px-3 py-2">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-xl font-semibold">{question}</p>
                    {active && <p className="mt-3">{answer}</p>}
                </div>
                {active ? <div className="cursor-pointer">
                            <FontAwesomeIcon icon={faAngleUp} size="lg" color="#FFFFFF" onClick={arrowOnClick} fixedWidth/>
                        </div> :
                        <div className="cursor-pointer">
                            <FontAwesomeIcon icon={faAngleDown} size="lg" color="#FFFFFF" onClick={arrowOnClick} fixedWidth/>
                        </div>
                }
            </div>
        </div>
    );
}
 
export default FAQBar;