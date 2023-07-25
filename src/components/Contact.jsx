import React from 'react'

const ContactButton = () => {
    const handleScrollToForm = () => {
        const formSection = document.getElementById('formSection');
        if(formSection) {
            formSection.scrollIntoView({behavior: 'smooth'});
        }
    }
    return <div className="flex flex-row pt-2 lg:pt-5 lg:justify-evenly">
        <button className="btn btn-outline" onClick={handleScrollToForm}>Contact</button>
    </div>
};

export default ContactButton;