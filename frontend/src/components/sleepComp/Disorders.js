import React from 'react'

const Disorders = () => {
    return (
        <div className='disorders'>
            <h1>Common Sleep Disorders</h1>
            <p>
                Sleep disorders can significantly impact sleep quality and overall mental well-being. Here are some of the most common sleep disorders:
            </p>

            <div className='myCard'>
                <img src='https://c.files.bbci.co.uk/2446/production/_104368290_insomnia976.jpg' alt='Insomnia' />
                <div className='content'>
                    <h2>Insomnia</h2>
                    <p>
                        Insomnia is characterized by difficulty falling asleep, staying asleep, or experiencing non-restorative sleep. It can be caused by 
                        various factors such as stress, anxiety, depression, medical conditions, or certain medications.
                    </p>
                </div>
            </div>

            <div className='myCard'>
                <div className='content'>
                    <h2>Sleep Apnea</h2>
                    <p>
                        Sleep apnea is a disorder where breathing repeatedly stops and starts during sleep. It can result in loud snoring, gasping or choking 
                        sensations, and daytime sleepiness. Obstructive sleep apnea (OSA) is the most common type, often caused by airway blockages.
                    </p>
                </div>
                <img src='https://images.squarespace-cdn.com/content/v1/5beb00a47e3c3abd688e43b4/1624608111625-8NLUCVY8QD7F93WS8D49/How+Can+You+Treat+Obstructive+Sleep+Apnea.jpg' alt='Sleep Apnea' />
            </div>

            <div className='myCard'>
                <img src='https://www.medicoverhospitals.in/images/diseases/restless-leg-syndrome.webp' alt='Sleep Apnea' />
                <div className='content'>
                    <h2>Restless Leg Syndrome (RLS)</h2>
                    <p> 
                        Restless leg syndrome causes uncomfortable sensations in the legs, leading to an irresistible urge to move them. Symptoms are usually 
                        more pronounced during periods of inactivity or at night, which can disrupt sleep and cause daytime fatigue.
                    </p>
                </div>
            </div>

            <div className='myCard'>
                <div className='content'>
                    <h2>Narcolepsy</h2>
                    <p>
                        Narcolepsy is a neurological disorder that affects the brain's ability to regulate sleep-wake cycles. It causes excessive daytime 
                        sleepiness, sudden and uncontrollable sleep attacks, and sometimes involves a loss of muscle tone (cataplexy) triggered by strong emotions.
                    </p>
                </div>
                <img src='https://www.verywellhealth.com/thmb/1FJ5IpGD82dfFUa7QnMHJMJE2S0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/narcolepsy-symptoms-5111881_Final-86832b1d82564a39a4de1682ff57a1c0.jpg' alt='Sleep Apnea' />
            </div>

            <p>
                If you suspect you may have one of these sleep disorders or any other sleep-related concerns, it is important to consult with a 
                healthcare professional or a sleep specialist. They can provide a proper diagnosis and recommend appropriate treatment options to 
                improve your sleep quality and overall well-being.
            </p>
        </div>
    )
}

export default Disorders