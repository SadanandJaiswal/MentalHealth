import React from 'react'

const SleepBasics = () => {
    return (
        <div className='basicdiv'>
            <h1>Sleep Basics</h1>
            <p>
                Getting the right amount of sleep is crucial for our overall well-being. The recommended amount of sleep varies depending on age:
            </p>
            <div className='rightdiv'>
                <ul>
                    <li>Newborns (0-3 months): 14-17 hours</li>
                    <li>Infants (4-11 months): 12-15 hours</li>
                    <li>Toddlers (1-2 years): 11-14 hours</li>
                    <li>Preschoolers (3-5 years): 10-13 hours</li>
                    <li>Children (6-13 years): 9-11 hours</li>
                    <li>Teenagers (14-17 years): 8-10 hours</li>
                    <li>Adults (18-64 years): 7-9 hours</li>
                    <li>Older adults (65+ years): 7-8 hours</li>
                </ul>
                <img src='https://img.theweek.in/content/dam/week/magazine/health/quickscan/images/2021/5/26/8-Sleep-duration-matters.jpg' alt='basic-img1' />
            </div>
            
            <p>
                It's important to understand that everyone's sleep needs may vary slightly, and individual factors such as health conditions, 
                lifestyle, and genetics can influence the ideal amount of sleep.
            </p>
            
            <p>Our sleep is divided into cycles consisting of different stages:</p>
            
            <div className='rightdiv'>
                <img src='https://img.theweek.in/content/dam/week/magazine/health/quickscan/images/2021/5/26/8-Sleep-duration-matters.jpg' alt='basic-img1' />
                <ul>
                    <li>Stage 1: Light sleep, which is the transition between wakefulness and sleep.</li>
                    <li>Stage 2: Deeper sleep where brain activity slows down, and the body prepares for deep sleep.</li>
                    <li>Stage 3: Deep sleep, also known as slow-wave sleep, which is essential for physical restoration and growth.</li>
                    <li>REM (Rapid Eye Movement) Sleep: The stage where most dreaming occurs and crucial for cognitive functioning and emotional well-being.</li>
                </ul>
            </div>
            
            <p>These stages repeat throughout the night in cycles of approximately 90 minutes.</p>
            
            <p>
                Understanding the sleep cycle and the importance of each stage can help you recognize the significance of maintaining a regular 
                sleep pattern and obtaining sufficient hours of sleep.
            </p>
        </div>
    )
}

export default SleepBasics