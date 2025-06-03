/** 
  SERVICES DATA CONFIGURATION
  ===========================

  This object contains categorized medical services for a healthcare provider's website.
  Each category represents a medical specialty and contains an array of service offerings.

  Structure:
  - Top-level categories: pulmonaryCareServices, sleepDisorder, behavioralHealth, testing
  - Each service contains complete presentation data including descriptions, images and metadata

  Key Features:
  - HTML-formatted educational content for patients
  - SEO-friendly slugs and metadata
  - Image assets for visual representation
  - Category-based organization for navigation

  Data Structure Details:
  ----------------------
  Each service object contains:
  - title: Service name (displayed in listings)
  - category: Specialty category for filtering
  - description: HTML content explaining:
    * Condition causes
    * Common symptoms
    * Treatment approaches
  - link: Route path for detail page
  - slug: URL-friendly unique identifier
  - headline: Promotional header text
  - imageUrl: Path to service illustration
  - videos: Reserved for future video content
  - RequestButton: Whether to show appointment CTA

  Content Guidelines:
  - Descriptions use <h2> for section headers
  - Lists formatted with <ul>/<li>
  - Medical terminology explained in patient-friendly language
  - Treatment approaches emphasize patient benefits

  Maintenance Notes:
  - Keep imageUrl paths relative to assets folder
  - Ensure slugs are unique within categories
  - Validate HTML structure in descriptions
  - Update categories array when adding new specialties
*/



export const services = {
  pulmonaryCareServices: [
    {
      title: 'Asthma',
      category: 'pulmonaryCareServices',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>Asthma is a chronic condition where your airways become inflamed, making it hard to breathe. It can be triggered by allergens, exercise, or even stress.</p>

  <h2>Symptoms:</h2>
  <ul>
    <li style="list-style: disc">Wheezing</li>
    <li>Shortness of breath</li>
    <li>Chest tightness</li>
    <li>Persistent coughing</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>Our specialists develop personalized asthma management plans, including:</p>
  <ul>
    <li>Identifying and avoiding triggers.</li>
    <li>Prescribing fast-acting and long-term medications.</li>
    <li>Educating you on breathing techniques and lifestyle changes.</li>
  </ul>
</div>`,
      link: '/service-details',
      slug: 'asthma',
      headline: 'Breathing Easier with Expert Asthma Care',
      imageUrl: 'img/serviceFile/Asthma.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'COPD',
      category: 'pulmonaryCareServices',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>COPD often results from long-term exposure to irritants like cigarette smoke or air pollution. It leads to blocked airflow, making everyday activities difficult.</p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Chronic cough</li>
    <li>Excess mucus</li>
    <li>Breathlessness</li>
    <li>Fatigue</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>We focus on improving your lung function and quality of life through:</p>
  <ul>
    <li>Smoking cessation support.</li>
    <li>Pulmonary rehabilitation programs.</li>
    <li>Medications to open airways and reduce inflammation.</li>
    <li>Oxygen therapy for advanced cases.</li>
  </ul>

</div>`,
      link: '/service-details',
      slug: 'copd',
      headline: 'Managing COPD for Better Quality of Life',
      imageUrl: 'img/serviceFile/COPD.jpg',
      videos: [],
      RequestButton: '',
    },
    {
      title: 'Pneumonia',
      category: 'pulmonaryCareServices',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>Pneumonia is a lung infection caused by bacteria, viruses, or fungi. It inflames the air sacs in your lungs, leading to symptoms that can range from mild to severe.</p>

  <h2>Symptoms:</h2>
  <ul>
    <li>High fever</li>
    <li>Chills</li>
    <li>Cough with phlegm</li>
    <li>Difficulty breathing</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>We ensure timely and accurate diagnosis with advanced imaging and lab tests. Our personalized care plans include:</p>
  <ul>
    <li>Antibiotics or antiviral medications.</li>
    <li>Supportive therapies to ease breathing.</li>
    <li>Vaccinations to prevent future infections.</li>
  </ul>

</div>`,
      link: '/service-details',
      slug: 'pneumonia',
      headline: 'Fast, Effective Care for Pneumonia',
      imageUrl: 'img/serviceFile/Pneumonia.jpg',
      videos: [],
      RequestButton: '',
    },
    {
      title: 'Pulmonary Fibrosis',
      category: 'pulmonaryCareServices',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>Pulmonary fibrosis occurs when lung tissue becomes scarred, often from unknown causes or due to long-term exposure to irritants. This reduces the lung's ability to expand and contract.</p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Shortness of breath</li>
    <li>Dry cough</li>
    <li>Fatigue</li>
    <li>Unexplained weight loss</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>We focus on slowing disease progression and improving quality of life by offering:</p>
  <ul>
    <li>Anti-fibrotic medications.</li>
    <li>Oxygen therapy.</li>
    <li>Pulmonary rehabilitation programs.</li>
    <li>Advanced diagnostic tools for early detection.</li>
  </ul>

</div>`,
      link: '/service-details',
      slug: 'pulmonary-fibrosis',
      headline: 'Specialized Care for Pulmonary Fibrosis',
      imageUrl: 'img/serviceFile/Pulmonary Fibrosis.jpg',
      videos: [],
      RequestButton: '',
    },
    {
      title: 'Sleep Apnea',
      category: 'pulmonaryCareServices',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>Sleep apnea causes your breathing to stop and start repeatedly during sleep. It’s often linked to obesity, age, or anatomical factors like throat structure.</p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Loud snoring</li>
    <li>Fatigue despite sleeping</li>
    <li>Morning headaches</li>
    <li>Gasping or choking during sleep</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>Our sleep specialists provide comprehensive care, including:</p>
  <ul>
    <li>Diagnostic sleep studies (home or in-lab).</li>
    <li>CPAP/BiPAP therapy.</li>
    <li>Lifestyle counseling to address contributing factors.</li>
  </ul>

</div>`,
      link: '/service-details',
      slug: 'sleep-apnea',
      headline: 'Rest Easy with Expert Sleep Apnea Care',
      imageUrl: 'img/serviceFile/Sleep Apnea.jpg',
      videos: [],
      RequestButton: '',
    },
    {
      title: 'Other Lung Problems',
      category: 'pulmonaryCareServices',
      description: `<div>
  <h2>Why It’s Happening</h2>
  <p>"Influenza is a highly contagious viral infection that affects the respiratory system. While most people recover within a week or two, the flu can lead to serious complications such as pneumonia, worsening of asthma, or chronic lung disease in high-risk individuals."</p>

  <h2>Common Symptoms</h2>
  <ul>
    <li>Fever and chills</li>
    <li>Persistent cough</li>
    <li>Shortness of breath</li>
    <li>Fatigue and body aches</li>
    <li>Chest discomfort</li>
  </ul>

  <h2>Our Treatment Approach</h2>
  <ul>
    <li><strong>Early Diagnosis:</strong> Rapid flu tests and symptom assessments to provide timely treatment.</li>
    <li><strong>Antiviral Medications:</strong> Prescription antiviral drugs to reduce the severity and duration of symptoms.</li>
    <li><strong>Lung Protection:</strong> Monitoring high-risk patients (e.g., those with asthma or COPD) to prevent flu-related complications.</li>
    <li><strong>Preventative Care:</strong> Flu vaccines and education on reducing transmission risk.</li>
  </ul>
</div>`,
      description2: `<div>
  <h2>Why It’s Important</h2>
  <p>"Inhalers are a critical tool for managing respiratory conditions like asthma and COPD. However, improper use can reduce their effectiveness, leading to poor symptom control and frequent flare-ups."</p>

  <h2>When You Might Need an Inhaler Review</h2>
  <ul>
    <li>You use your rescue inhaler more than twice a week.</li>
    <li>Your symptoms aren’t improving despite regular inhaler use.</li>
    <li>You experience frequent wheezing or breathlessness.</li>
    <li>You’re unsure if you’re using your inhaler correctly.</li>
  </ul>

  <h2>Our Treatment Approach</h2>
  <ul>
    <li><strong>Inhaler Training:</strong> One-on-one guidance to ensure proper technique for maximum benefit.</li>
    <li><strong>Device Selection:</strong> Matching you with the right type of inhaler based on your condition and lifestyle.</li>
    <li><strong>Symptom Tracking:</strong> Ongoing assessments to adjust medication as needed.</li>
    <li><strong>Preventative Care:</strong> Strategies to reduce flare-ups and improve lung function.</li>
  </ul>
</div>`,
      description3: `<div>
  <h2>Why It’s Happening</h2>
  <p>"Eosinophilic lung diseases occur when an excess of eosinophils (a type of white blood cell) causes lung inflammation. These conditions can result in chronic respiratory problems, often linked to asthma or allergic reactions."</p>

  <h2>Common Symptoms</h2>
  <ul>
    <li>Persistent cough</li>
    <li>Wheezing and shortness of breath</li>
    <li>Frequent lung infections</li>
    <li>Chest tightness and discomfort</li>
  </ul>

  <h2>Our Treatment Approach</h2>
  <ul>
    <li><strong>Advanced Blood & Sputum Tests:</strong> Identifying high eosinophil counts to confirm diagnosis.</li>
    <li><strong>Targeted Medications:</strong> Use of biologic therapies and corticosteroids to reduce lung inflammation.</li>
    <li><strong>Allergy & Immune System Evaluation:</strong> Determining underlying triggers for better long-term management.</li>
    <li><strong>Personalized Treatment Plans:</strong> A multi-disciplinary approach to improve lung function and overall health.</li>
  </ul>
</div>`,
      link: '/service-details',
      slug: 'lung-problem',
      headline: 'Influenza (Flu) & Lung Health',
      headline2: 'Inhaler Use & Management',
      headline3: 'Eosinophilic Lung Diseases',
      imageUrl: 'img/serviceFile/otherLung1.jpg',
      imageUrl2: 'img/serviceFile/otherLung2.jpg',
      imageUrl3: 'img/serviceFile/otherLung3.jpg',
      videos: [],
      RequestButton: '',
    },
    {
      title: 'Lung Cancer',
      category: 'pulmonaryCareServices',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>Lung cancer often develops due to long-term smoking, exposure to carcinogens, or genetic factors. Early detection is crucial for effective treatment.</p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Persistent cough</li>
    <li>Chest pain</li>
    <li>Coughing up blood</li>
    <li>Unexplained weight loss</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>Our multidisciplinary team provides personalized treatment plans, including:</p>
  <ul>
    <li>Low-dose CT scans for early detection.</li>
    <li>Collaboration with oncologists for chemotherapy and targeted therapy.</li>
    <li>Pulmonary support to manage symptoms and improve quality of life.</li>
  </ul>

</div>`,
      link: '/service-details',
      slug: 'lung-cancer',
      headline: 'Compassionate, Cutting-Edge Care for Lung Cancer',
      imageUrl: 'img/serviceFile/Lung Cancer.jpg',
      videos: [],
      RequestButton: '',
    },
    {
      title: 'Chronic cough',
      category: 'pulmonaryCareServices',
      description: `<div>
  <h2>Why It’s Happening</h2>
  <p>
    "A chronic cough is more than just a nuisance—it can signal an underlying health condition. 
    If your cough has lasted more than eight weeks (or four weeks in children), 
    it may be due to allergies, asthma, acid reflux, or even an undiagnosed lung condition."
  </p>

  <h2>Common Symptoms</h2>
  <ul>
    <li>Cough lasting more than eight weeks (adults) or four weeks (children)</li>
    <li>A tickling or scratchy sensation in the throat</li>
    <li>Coughing fits that interrupt sleep</li>
    <li>Shortness of breath, wheezing, or chest discomfort</li>
    <li>Coughing up mucus or phlegm</li>
  </ul>

  <h2>Our Treatment Approach</h2>
  <p>At TeamWork Health, we take a comprehensive and personalized approach to diagnosing and treating chronic cough:</p>

  <h3>Advanced Diagnostics:</h3>
  <ul>
    <li>Pulmonary Function Tests (PFT) to assess lung function.</li>
    <li>Allergy and reflux testing to identify potential triggers.</li>
    <li>Imaging (X-ray or CT scan) to rule out lung disease.</li>
  </ul>

  <h3>Targeted Treatment Plan:</h3>
  <ul>
    <li>Prescription inhalers or steroids for asthma-related coughs.</li>
    <li>Acid reflux management for GERD-induced coughs.</li>
    <li>Postnasal drip treatment, including antihistamines and nasal sprays.</li>
    <li>Lifestyle adjustments, including smoking cessation and environmental triggers.</li>
  </ul>

  <h3>Ongoing Monitoring:</h3>
  <ul>
    <li>Follow-up care to assess progress and adjust treatment if needed.</li>
    <li>Education on avoiding triggers and improving lung health.</li>
  </ul>
</div>
`,
      link: '/service-details',
      slug: 'chronic-cough',
      headline: 'Persistent Cough? Get Answers and Relief',
      imageUrl: 'img/serviceFile/chronic-cough.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'Tuberculosis (TB)',
      category: 'pulmonaryCareServices',
      description: `<div>
    <h2>Why It Happens:</h2>
    <p>TB is a contagious bacterial infection that primarily affects the lungs. It spreads through airborne particles from an infected person.</p>

    <h2>Symptoms:</h2>
    <ul>
        <li>Persistent cough lasting over three weeks</li>
        <li>Fever and night sweats</li>
        <li>Chest pain</li>
        <li>Unexplained weight loss</li>
    </ul>

    <h2>Our Treatment Approach:</h2>
    <p>We provide timely diagnosis and treatment to prevent complications, including:</p>
    <ul>
        <li>Comprehensive testing, including chest X-rays and lab work.</li>
        <li>Antibiotic therapy tailored to your specific TB strain.</li>
        <li>Monitoring and follow-ups to ensure effective treatment.</li>
    </ul>

    <p>Learn more by watching this video:</p>

</div>`,
      link: '/service-details',
      slug: 'tuberculosis',
      headline: 'Comprehensive Diagnosis and Treatment for TB',
      imageUrl: 'img/serviceFile/Tuberculosis (TB).jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'Pulmonary Hypertension',
      category: 'pulmonaryCareServices',
      description: `<div>
    <h2>Why It Happens:</h2>
    <p>Pulmonary hypertension is high blood pressure in the arteries of the lungs, often linked to heart or lung conditions, autoimmune diseases, or genetics.</p>

    <h2>Symptoms:</h2>
    <ul>
        <li>Shortness of breath</li>
        <li>Dizziness or fainting</li>
        <li>Chest pain</li>
        <li>Swelling in the legs or ankles</li>
    </ul>

    <h2>Our Treatment Approach:</h2>
    <p>We develop individualized care plans to improve heart and lung function, including:</p>
    <ul>
        <li>Medications to reduce pressure in the pulmonary arteries.</li>
        <li>Oxygen therapy to ensure adequate oxygen levels.</li>
        <li>Lifestyle modifications and pulmonary rehabilitation to enhance daily living.</li>
    </ul>

    <p>Learn more by watching this video:</p>
</div>`,
      link: '/service-details',
      slug: 'pulmonary-hypertension',
      headline: 'Managing Pulmonary Hypertension with Expertise',
      imageUrl: 'img/serviceFile/Pulmonary Hypertension.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'COVID-19 Complications',
      category: 'pulmonaryCareServices',
      description: `<div class="covid-recovery-info">
    <h2>Why It Happens:</h2>
    <p>COVID-19 can cause lasting damage to the lungs, leading to conditions like scarring, chronic shortness of breath, or decreased lung function.</p>

    <h2>Symptoms:</h2>
    <ul>
        <li>Persistent cough</li>
        <li>Fatigue</li>
        <li>Difficulty breathing</li>
        <li>Chest pain</li>
    </ul>

    <h2>Our Treatment Approach:</h2>
    <p>We help patients recover and regain respiratory function through:</p>
    <ul>
        <li>Pulmonary rehabilitation programs tailored to post-COVID needs.</li>
        <li>Anti-inflammatory therapies to manage lung damage.</li>
        <li>Ongoing monitoring and testing to track recovery progress.</li>
    </ul>

    <p>Learn more by watching this video:</p>
</div>`,
      link: '/service-details',
      slug: 'covid-19',
      headline: 'Comprehensive Care for Post-COVID Respiratory Issues',
      imageUrl: 'img/serviceFile/COVID-19 Complications.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'Oxygen Therapy',
      category: 'pulmonaryCareServices',
      description: `<div class="oxygen-therapy-info">
    <h2>Why It Happens:</h2>
    <p>Oxygen therapy is used for patients with chronic respiratory conditions where oxygen levels are low due to lung damage or disease.</p>

    <h2>Symptoms:</h2>
    <ul>
        <li>Persistent fatigue</li>
        <li>Difficulty breathing during activity</li>
        <li>Cyanosis (bluish skin tone)</li>
        <li>Confusion or dizziness</li>
    </ul>

    <h2>Our Treatment Approach:</h2>
    <p>We customize oxygen therapy plans to fit your lifestyle and needs, including:</p>
    <ul>
        <li>Portable oxygen concentrators for mobility.</li>
        <li>Nighttime oxygen therapy to ensure proper rest.</li>
        <li>Continuous monitoring to adjust therapy as needed.</li>
    </ul>

    <p>Learn more by watching this video:</p>
</div>`,
      link: '/service-details',
      slug: 'O2Hypoxemia',
      headline: 'Enhancing Life with Oxygen Therapy',
      imageUrl: 'img/serviceFile/Oxygen Therapy.jpg',
      videos: [],
      RequestButton: false,
    },
  ], // end of PulmonaryCareServices
  sleepDisorder: [
    {
      title: 'Home Sleep Studies',
      category: 'sleepDisorder',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>Sleep disorders like sleep apnea often require diagnostic tests to evaluate your breathing patterns during sleep. Home sleep testing provides a comfortable, at-home alternative to in-lab studies.</p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Loud snoring</li>
    <li>Daytime fatigue</li>
    <li>Gasping or choking during sleep</li>
    <li>Poor concentration</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>Our team makes it easy to diagnose sleep disorders from the comfort of your home by providing:</p>
  <ul>
    <li>Lightweight, easy-to-use sleep testing devices.</li>
    <li>Clear instructions and support for setup.</li>
    <li>Fast results uploaded to your patient chart for interpretation by our sleep specialist.</li>
  </ul>

</div>`,
      link: 'services-details',
      slug: 'home-sleep-studies',
      headline: 'Convenient and Accurate Home Sleep Testing',
      imageUrl: 'img/serviceFile/Home-sleep-testing.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'In-Lab Sleep Studies',
      category: 'sleepDisorder',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>In-lab sleep studies provide a controlled environment to monitor complex sleep disorders that may not be fully detected at home.</p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Severe snoring or choking during sleep</li>
    <li>Suspected narcolepsy or parasomnia</li>
    <li>Poor response to home sleep tests or CPAP therapy</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>Our state-of-the-art sleep labs offer:</p>
  <ul>
    <li>A comfortable, quiet environment for overnight studies.</li>
    <li>Advanced monitoring equipment for detailed results.</li>
    <li>Personalized attention from experienced sleep technicians.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: 'in-lab-sleep-studies',
      headline: 'Comprehensive Diagnostic Testing in Our Sleep Labs',
      imageUrl: 'img/serviceFile/In lab sleep testing.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'CPAP/BiPAP Therapy',
      category: 'sleepDisorder',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>CPAP (Continuous Positive Airway Pressure) and BiPAP (Bilevel Positive Airway Pressure) are the most effective treatments for sleep apnea, ensuring you breathe freely through the night.</p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Interrupted breathing during sleep</li>
    <li>Morning headaches</li>
    <li>Excessive daytime sleepiness</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>We ensure optimal therapy through:</p>
  <ul>
    <li>In-lab CPAP/BiPAP titration studies to find the right pressure levels.</li>
    <li>Personalized device setup and education for home use.</li>
    <li>Ongoing support to ensure comfort and compliance.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: 'cpap-bipap-therapy',
      headline: 'Effective Therapy for Sleep Apnea',
      imageUrl: 'img/serviceFile/CPAP.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'Insomnia Treatment',
      category: 'sleepDisorder',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>Insomnia, or difficulty falling or staying asleep, can result from stress, medical conditions, or lifestyle factors, impacting your overall health.</p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Trouble falling asleep</li>
    <li>Waking up frequently during the night</li>
    <li>Feeling unrefreshed in the morning</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>Our specialists use proven methods to help you regain restful sleep, including:</p>
  <ul>
    <li>Cognitive-behavioral therapy for insomnia (CBT-I).</li>
    <li>Relaxation techniques and sleep hygiene education.</li>
    <li>Identifying and addressing underlying medical issues.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: 'insomnia-treatment',
      headline: 'Rest Easy with Expert Insomnia Care',
      imageUrl: 'img/serviceFile/portrait-adult-man.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'Narcolepsy Management',
      category: 'sleepDisorder',
      description: `<div>
  <h1>Comprehensive Care for Complex Sleep Disorders</h1>

  <h2>Why It Happens:</h2>
  <p>
    Narcolepsy is a neurological disorder that disrupts your sleep-wake cycle, while parasomnias are abnormal behaviors during sleep, like sleepwalking or night terrors.
  </p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Sudden sleep attacks during the day (narcolepsy)</li>
    <li>Abnormal movements, talking, or behaviors during sleep (parasomnia)</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>
    We provide advanced diagnostic and treatment options, including:
  </p>
  <ul>
    <li>Multiple Sleep Latency Tests (MSLT) for narcolepsy.</li>
    <li>Polysomnography for parasomnia diagnosis.</li>
    <li>Medications and behavioral interventions tailored to your condition.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: 'narcolepsy-management',
      headline: 'Narcolepsy and Parasomnia Evaluation',
      imageUrl: 'img/serviceFile/Narcolepsy.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'Maintenance of Wakefulness Test (MWT)',
      category: 'sleepDisorder',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>
    MWT is used to assess alertness during the day, often required for patients in safety-sensitive jobs or those being treated for sleep apnea or narcolepsy.
  </p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Difficulty staying awake in critical situations</li>
    <li>Persistent daytime drowsiness despite treatment</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>
    Our MWT services include:
  </p>
  <ul>
    <li>Controlled testing in a distraction-free environment.</li>
    <li>Expert interpretation of results to guide your care plan.</li>
    <li>Collaboration with your employer or licensing body if needed.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: 'mwt',
      headline: 'Evaluating Your Ability to Stay Awake',
      imageUrl: 'img/serviceFile/Maintenance.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'Multiple Sleep Latency Test (MSLT)',
      category: 'sleepDisorder',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>
    MSLT is a specialized test used to diagnose narcolepsy and excessive daytime sleepiness by measuring how quickly you fall asleep during scheduled naps.
  </p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Uncontrollable sleep attacks</li>
    <li>Extreme daytime drowsiness</li>
    <li>Difficulty staying awake during normal activities</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>
    We conduct detailed MSLT evaluations that include:
  </p>
  <ul>
    <li>A full-night sleep study before the MSLT for accurate baseline results.</li>
    <li>Multiple scheduled naps in a controlled sleep lab environment.</li>
    <li>Comprehensive analysis to guide the best treatment options.</li>
  </ul>

</div>`,
      link: 'services-details',
      slug: 'mslt',
      headline:
        'Comprehensive Testing for Daytime Sleepiness & Narcolepsy',
      imageUrl: 'img/serviceFile/In lab sleep testing.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'Sleep Apnea Screening and Follow-Up',
      category: 'sleepDisorder',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>
    Untreated sleep apnea can lead to serious health complications, including heart disease, high blood pressure, and daytime fatigue.
  </p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Loud snoring</li>
    <li>Waking up gasping for air</li>
    <li>Excessive daytime sleepiness</li>
    <li>Morning headaches</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>
    We offer a structured process for sleep apnea screening and ongoing management:
  </p>
  <ul>
    <li>Quick and easy screening questionnaires.</li>
    <li>Home or in-lab diagnostic testing for confirmed cases.</li>
    <li>Long-term follow-up care, including CPAP therapy adjustments and lifestyle interventions.</li>
  </ul>

</div>`,
      link: 'services-details',
      slug: 'sleep-apnea-screening-and-follow-up',
      headline: 'Early Detection and Long-Term Management of Sleep Apnea',
      imageUrl: 'img/serviceFile/GettyImages-1062905388.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'Behavioral Therapy for Sleep Disorders',
      category: 'sleepDisorder',
      description: `<div>
  <h2>Why It’s Done:</h2>
  <p>Behavioral Therapy for Sleep Disorders is a non-medication approach that helps identify and change behaviors, habits, and thoughts that interfere with healthy sleep. It’s highly effective for conditions like insomnia, nightmares, and anxiety-related sleep disturbances.</p>

  <h2>Symptoms It Can Help With:</h2>
  <ul>
    <li>Difficulty falling or staying asleep</li>
    <li>Waking up feeling unrefreshed</li>
    <li>Nightmares or restless sleep</li>
    <li>Anxiety around bedtime or sleep routines</li>
    <li>Daytime fatigue despite sufficient time in bed</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>Our sleep specialists use evidence-based techniques to improve sleep quality without solely relying on medication. Our approach includes:</p>
  <ul>
    <li><strong>Cognitive Behavioral Therapy for Insomnia (CBT-I):</strong> The gold-standard treatment to address negative sleep patterns and thoughts.</li>
    <li><strong>Sleep Hygiene Education:</strong> Guidance on healthy sleep habits, bedtime routines, and environmental changes.</li>
    <li><strong>Relaxation Techniques:</strong> Mindfulness, breathing exercises, and progressive muscle relaxation to reduce stress and anxiety.</li>
    <li><strong>Stimulus Control Therapy:</strong> Techniques to strengthen the connection between bed and sleep, reducing time spent awake in bed.</li>
  </ul>

  <h2>How We’re Different:</h2>
  <ul>
    <li>Integrated with medical sleep evaluations for a holistic approach.</li>
    <li>Personalized therapy plans tailored to your unique sleep challenges.</li>
    <li>In-person and telehealth options for convenient access.</li>
    <li>Support for sleep disorders related to anxiety, depression, and PTSD.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: 'behavioral-therapy-for-sleep-disorders',
      headline: 'Restful Sleep Starts with the Right Mindset',
      imageUrl: 'img/serviceFile/Behavioral-Therapy.jpg',
      videos: [],
      RequestButton: false,
    },
  ], // end of SleepDisorder
  behavioralHealth: [
    {
      category: 'behavioralHealth',
      title: 'Medication Management',
      description: `<div>
  <h2>Why It Matters:</h2>
  <p>
    Medication can be an essential part of managing mental health conditions, but finding the right balance is key. Our experts ensure you receive the safest and most effective treatment tailored to your needs.
  </p>

  <h2>When You Might Need It:</h2>
  <ul>
    <li>Struggling with ongoing symptoms despite therapy.</li>
    <li>Need for adjustments in medication due to side effects.</li>
    <li>Transitioning off or onto new medications.</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>
    We take a careful, patient-first approach to medication management by:
  </p>
  <ul>
    <li>Conducting thorough evaluations to find the best medication for you.</li>
    <li>Monitoring side effects and making adjustments as needed.</li>
    <li>Combining medication with therapy for a holistic approach to mental wellness.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: 'medication-management',
      headline: 'Personalized Medication Plans for Mental Wellness',
      imageUrl: 'img/serviceFile/Medication.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      category: 'behavioralHealth',
      title: 'Depression Care',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>
    Depression is more than just feeling sad—it’s a serious condition that affects daily life, energy levels, and motivation. It can be caused by chemical imbalances, past trauma, stress, or medical conditions.
  </p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Persistent feelings of sadness or hopelessness.</li>
    <li>Loss of interest in activities once enjoyed.</li>
    <li>Changes in sleep or appetite.</li>
    <li>Difficulty concentrating or making decisions.</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>
    We develop personalized care plans that may include:
  </p>
  <ul>
    <li>Cognitive Behavioral Therapy (CBT) to change negative thought patterns.</li>
    <li>Medication options for those who need additional support.</li>
    <li>Lifestyle adjustments to improve overall well-being.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: 'depression-care',
      headline: 'Overcoming Depression with Comprehensive Support',
      imageUrl: 'img/serviceFile/Depression-Care.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      category: 'behavioralHealth',
      title: 'Anxiety Treatment',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>
    Anxiety disorders cause excessive fear, worry, or nervousness that can interfere with daily activities. It may be triggered by life stressors, genetics, or an imbalance in brain chemistry.
  </p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Constant worry or nervousness.</li>
    <li>Panic attacks or difficulty breathing.</li>
    <li>Trouble sleeping due to racing thoughts.</li>
    <li>Avoidance of social situations.</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>
    We use evidence-based techniques to help manage anxiety, including:
  </p>
  <ul>
    <li>Cognitive Behavioral Therapy (CBT) to reshape anxious thinking.</li>
    <li>Relaxation and mindfulness techniques to promote calmness.</li>
    <li>Medication options for moderate to severe anxiety cases.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: 'anxiety-treatment',
      headline: 'Helping You Find Peace of Mind',
      imageUrl: 'img/serviceFile/Anxiety-Treatment.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      category: 'behavioralHealth',
      title: 'Bipolar Disorder Management',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>
    Bipolar disorder causes extreme mood swings, shifting between depressive lows and manic highs. It can affect relationships, work, and overall stability.
  </p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Periods of extreme energy or euphoria (mania).</li>
    <li>Episodes of deep depression.</li>
    <li>Rapid mood changes.</li>
    <li>Difficulty maintaining relationships or daily routines.</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>
    We help individuals regain stability with:
  </p>
  <ul>
    <li>Mood-stabilizing medications tailored to each patient.</li>
    <li>Therapy to manage emotions and behaviors effectively.</li>
    <li>Lifestyle guidance to reduce triggers and maintain balance.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: 'bipolar-disorder-management',
      headline: 'Stabilizing Mood Swings for a Balanced Life',
      imageUrl: 'img/serviceFile/Bipolar-Disorder-Management.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      category: 'behavioralHealth',
      title: 'Support for Anger Issues',
      description: `<div>
  <h2>Why It Happens:</h2>
  <p>
    Uncontrolled anger can stem from stress, frustration, past trauma, or underlying mental health conditions. If left unmanaged, it can harm relationships, work, and overall well-being.
  </p>

  <h2>Symptoms:</h2>
  <ul>
    <li>Difficulty controlling outbursts.</li>
    <li>Frequent frustration over minor inconveniences.</li>
    <li>Physical symptoms like increased heart rate or tension.</li>
    <li>Regret after anger episodes.</li>
  </ul>

  <h2>Our Treatment Approach:</h2>
  <p>
    Our specialists provide structured anger management strategies, including:
  </p>
  <ul>
    <li>Identifying triggers and learning to respond calmly.</li>
    <li>Developing coping skills to diffuse anger before escalation.</li>
    <li>Cognitive techniques to reframe situations positively.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: 'support-for-anger-issues',
      headline: 'Healthy Ways to Control and Express Emotions',
      imageUrl: 'img/serviceFile/Anger-Management.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      category: 'behavioralHealth',
      title: 'Women’s Behavioral Health',
      description: `<div>
            <h2>Why It Matters:</h2>
            <p>
              Women face unique mental health challenges, including hormonal changes, pregnancy-related mood disorders, and societal pressures. Our specialists provide compassionate care tailored to these needs.
            </p>
          
            <h2>Common Issues We Address:</h2>
            <ul>
              <li>Postpartum depression and anxiety.</li>
              <li>Menopause-related mood changes.</li>
              <li>Stress from caregiving or work-life balance.</li>
              <li>Trauma and PTSD.</li>
            </ul>
          
            <h2>Our Treatment Approach:</h2>
            <p>
              We offer specialized support for women’s mental wellness, including:
            </p>
            <ul>
              <li>Therapy to address stress, trauma, and hormonal changes.</li>
              <li>Medication options when needed for symptom management.</li>
              <li>Holistic approaches like mindfulness and lifestyle adjustments.</li>
            </ul>
          </div>`,
      link: 'services-details',
      slug: 'womens-behavioral-health',
      headline: 'Comprehensive Mental Health Support for Women',
      imageUrl: 'img/serviceFile/Womens-Behavioral-Health.jpg',
      videos: [],
      RequestButton: false,
    },
  ],
  testing: [
    {
      category: 'testing',
      title: 'PFT',
      description: `<div>
  <h2>Why It’s Done:</h2>
  <p>PFTs measure how well your lungs work by evaluating airflow, lung volume, and gas exchange. They help diagnose conditions like asthma, COPD, and other lung diseases.</p>

  <h2>When You Might Need It:</h2>
  <ul>
    <li>Persistent shortness of breath</li>
    <li>Chronic cough</li>
    <li>Diagnosing asthma or COPD</li>
    <li>Monitoring lung disease progression</li>
  </ul>

  <h2>Our Testing Approach:</h2>
  <p>Our PFT process includes:</p>
  <ul>
    <li><strong>Spirometry:</strong> Measures airflow in and out of your lungs.</li>
    <li><strong>Lung Volume Measurement:</strong> Assesses how much air your lungs can hold.</li>
    <li><strong>Diffusion Capacity Test:</strong> Evaluates how well oxygen passes from your lungs into your bloodstream.</li>
  </ul>
  <p>Results interpreted by specialists to guide your treatment plan.</p>
</div>`,
      link: 'services-details',
      slug: 'pft',
      headline: 'Assessing Lung Health with Pulmonary Function Tests',
      imageUrl: 'img/serviceFile/PFT.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'CPET',
      category: 'testing',
      description: `<div>
  <h2>Why It’s Done:</h2>
  <p>CPET measures how your heart, lungs, and muscles respond to exercise. It helps identify the cause of unexplained shortness of breath and evaluates exercise capacity in patients with heart or lung conditions.</p>

  <h2>When You Might Need It:</h2>
  <ul>
    <li>Unexplained fatigue or breathlessness during activity</li>
    <li>Pre-surgical evaluation for heart or lung procedures</li>
    <li>Monitoring response to treatment for cardiac or pulmonary conditions</li>
  </ul>

  <h2>Our Testing Approach:</h2>
  <p>Our CPET process includes:</p>
  <ul>
    <li>Controlled exercise on a stationary bike or treadmill while monitoring heart rate, oxygen levels, and breathing patterns.</li>
    <li>Real-time data analysis to detect abnormalities in oxygen delivery and utilization.</li>
    <li>Personalized interpretation by specialists to develop targeted treatment strategies.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: 'cpet',
      headline: 'Understanding Heart and Lung Function with CPET',
      imageUrl: 'img/serviceFile/CPET.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: 'ABG',
      category: 'testing',
      description: `<div>
  <h2>Why It’s Done:</h2>
  <p>An ABG test measures the levels of oxygen, carbon dioxide, and the pH of your blood. It’s essential for assessing lung function, especially in patients with respiratory or metabolic conditions.</p>

  <h2>When You Might Need It:</h2>
  <ul>
    <li>Difficulty breathing or unexplained shortness of breath</li>
    <li>Monitoring oxygen therapy effectiveness</li>
    <li>Evaluating acid-base imbalances in critical care settings</li>
  </ul>

  <h2>Our Testing Approach:</h2>
  <p>Our ABG process includes:</p>
  <ul>
    <li>A quick, minimally invasive blood sample from an artery, usually in the wrist.</li>
    <li>Immediate analysis to assess respiratory efficiency and oxygenation.</li>
    <li>Rapid results for timely adjustments to your treatment plan if needed.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: 'ABG',
      headline:
        'Measuring Oxygen and Carbon Dioxide Levels with ABG Testing',
      imageUrl: 'img/serviceFile/ABG.jpg',
      videos: [],
      RequestButton: false,
    },
    {
      title: '6 Minute Walk',
      category: 'testing',
      description: `<div>
  <h2>Why It’s Done:</h2>
  <p>The 6MWT measures how far you can walk in six minutes while monitoring your heart rate, oxygen levels, and breathing. It helps assess functional capacity and the severity of lung or heart conditions.</p>

  <h2>When You Might Need It:</h2>
  <ul>
    <li>Monitoring progression of chronic lung diseases like pulmonary fibrosis or COPD</li>
    <li>Evaluating the need for supplemental oxygen</li>
    <li>Pre- and post-treatment comparisons to measure therapy effectiveness</li>
  </ul>

  <h2>Our Testing Approach:</h2>
  <p>Our 6MWT process includes:</p>
  <ul>
    <li>Walking on a flat surface for six minutes at your own pace.</li>
    <li>Continuous monitoring of oxygen saturation, heart rate, and perceived exertion.</li>
    <li>Results used to tailor treatment plans, oxygen therapy, or rehabilitation programs.</li>
  </ul>
</div>`,
      link: 'services-details',
      slug: '6-minute-walk',
      headline:
        'Evaluating Endurance and Oxygen Levels with the 6-Minute Walk Test',
      imageUrl: 'img/serviceFile/6MWT.jpg',
      videos: [],
      RequestButton: false,
    },
  ],
};
