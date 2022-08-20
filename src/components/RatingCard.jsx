import React, { useState } from 'react';
import starIcon from '../images/icon-star.svg';
import mobileSvg from '../images/illustration-thank-you.svg';

const RatingCard = () => {
    const [rate, setRate] = useState(0)
    const [checked, setChecked] = useState([])
    function handleSubmit() {
        const ratingPage = document.getElementById('ratepage');
        const thankingPage = document.getElementById('thankpage')
        ratingPage.classList.add('hidden')
        thankingPage.classList.remove('hidden')
    }
    function handleClick(e) {
        setChecked([e])
        setRate(e.target.innerText)
        e.target.classList.remove('hover:bg-MediumGrey')
        e.target.classList.remove('text-LightGrey')
        e.target.classList.add('bg-Orange')
        e.target.classList.add('text-white')
        let index = -1;
        index += 1;
        checked[index]?.target.classList.remove('bg-Orange');
    }

    return (
        <div className='bg-DarkBlue rounded-2xl'>
            <div id='ratepage' className='container p-4 flex flex-col'>
                <img src={starIcon} alt="star" className='bg-VeryDarkBlue w-10 h-10 m-4 rounded-full p-2' />
                <h1 className='mx-4 text-white text-2xl'>How did we do?</h1>
                <p className='mx-4 text-MediumGrey text-md '>Please let us know how we did with your <br /> support request. All feedback is appreciated <br /> to help us improve our offering!</p>
                <div className='m-4 flex space-x-4'>
                    <span onClick={handleClick} className='flex hover:bg-MediumGrey hover:text-white items-center cursor-pointer justify-center rounded-full text-LightGrey w-14 h-14 bg-VeryDarkBlue'>1</span>
                    <span onClick={handleClick} className='flex hover:bg-MediumGrey hover:text-white items-center cursor-pointer justify-center rounded-full text-LightGrey w-14 h-14 bg-VeryDarkBlue'>2</span>
                    <span onClick={handleClick} className='flex hover:bg-MediumGrey hover:text-white items-center cursor-pointer justify-center rounded-full text-LightGrey w-14 h-14 bg-VeryDarkBlue'>3</span>
                    <span onClick={handleClick} className='flex hover:bg-MediumGrey hover:text-white items-center cursor-pointer justify-center rounded-full text-LightGrey w-14 h-14 bg-VeryDarkBlue'>4</span>
                    <span onClick={handleClick} className='flex hover:bg-MediumGrey hover:text-white items-center cursor-pointer justify-center rounded-full text-LightGrey w-14 h-14 bg-VeryDarkBlue'>5</span>
                </div>
                <button className='m-4 bg-Orange py-3 rounded-full text-white uppercase hover:bg-white hover:text-Orange hover:uppercase hover:font-bold' onClick={handleSubmit}>submit</button>
            </div>
            <div id='thankpage' className='container p-6 flex flex-col items-center hidden'>
                <img src={mobileSvg} alt="thankyou" className='w-36 my-4' />
                <p className='text-Orange bg-VeryDarkBlue px-4 py-2 my-4 rounded-full'>You selected {rate} out of 5</p>
                <h1 className='text-white text-2xl my-2'>Thank you!</h1>
                <p className='my-1 text-MediumGrey text-md text-center'>We appericiate you taking the time to give a <br /> rating. If you ever need more support, dont't <br /> hesitate to get in touch!</p>
            </div>
        </div>
    )
}

export default RatingCard