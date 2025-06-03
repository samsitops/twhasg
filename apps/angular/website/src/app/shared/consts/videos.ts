/** 
  VIDEO COURSES DATA
  ==================

  This array contains structured data for pulmonary medicine educational videos.
  Organized into categories with nested course content for easy navigation and display.

  Structure:
  - Top-level categories with title/description
  - Child courses with full metadata
  - HTML-formatted educational content
  - SEO-friendly slugs for routing

  Key Features:
  - Category-based organization
  - Detailed course descriptions
  - Instructor information
  - Learning outcomes
  - CME credit information
*/


export const videos = [
  {
    title: 'Pulmonary Medicine',
    description: 'Courses on pulmonology',
    slug: 'pulmonology',
    children: [
      {
        title: 'BMP/Chem-7 Results',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/bmp.png',
        slug: 'BMP-Chem-7-Results',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">Interpret Basic Metabolic Panel (CHEM-7) Results with Confidence</h4>
  <p class="mb-4">
    The basic metabolic panel (BMP), also known as the "CHEM-7," is one of the most commonly ordered lab tests by clinicians in the hospital and the outpatient setting.
  </p>
  <p class="mb-4">
    Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians make common interpretation mistakes — and most have not learned to unlock the full and great potential of the BMP.
  </p>
  <p class="mb-4">
    Join renowned professor <strong>Roger Seheult, MD</strong> as he concisely explains the key components of the BMP that you need to know... from managing creatinine problems to clarity on hyponatremia.
  </p>
  <p class="mb-4">
    After this series of short videos and quizzes, you'll be on your way to accurately interpret BMP results and save time in the process.
  </p>
  <h5 class="text-xl font-semibold mt-6 mb-2">Leukopenia Causes and Neutropenia</h5>
  <h5 class="text-xl font-semibold mt-6 mb-2">Who is This Course For?</h5>
  <p class="mb-4">
    Clinicians (<abbr title="Doctor of Medicine">MD</abbr>, <abbr title="Doctor of Osteopathic Medicine">DO</abbr>, <abbr title="Nurse Practitioner">NP</abbr>, <abbr title="Physician Assistant">PA</abbr>, <abbr title="Registered Nurse">RN</abbr>, <abbr title="Respiratory Therapist">RTs</abbr>) and students in a variety of specialties that order BMPs.
  </p>
  <h5 class="text-xl font-semibold mt-6 mb-2">Who is the Instructor?</h5>
  <p>
    Dr. Roger Seheult is trusted by universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized.
  </p>
  <p>
    ...and clear understanding leads to mastery of BMP results interpretation. Learn more about Dr. Seheult.
  </p>
</div>
`,
      },
      {
        title: 'Medical Acid Base + ABGs',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/medicalAcid.png',
        slug: 'medical-acid-base',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">Gain a Clear Understanding of Acid-Base Disorders in Patients</h4>
  <p class="mb-4">
    Acid-base disturbances are common clinical problems. Accurate interpretation of lab tests in patients with acid-base issues is crucial for making a precise diagnosis and providing effective treatment.
  </p>
  <p class="mb-4">
    Immerse yourself in a recently updated series of concise videos, quizzes, and practice problems as you advance toward achieving acid-base mastery!
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">Who is the Instructor?</h5>
  <p class="mb-4">
    Dr. Seheult is trusted by universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...
  </p>
  <p class="mb-4">
    ...and clear understanding leads to mastery of medical acid-base!
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">What You'll Receive from This Course:</h5>
  <ul class="list-disc list-inside mb-4">
    <li>A systematic approach to lab results to spot abnormal acid-base findings and solve acid-base questions</li>
    <li>A clear understanding of the four primary types: metabolic acidosis, respiratory acidosis, metabolic alkalosis, and respiratory alkalosis</li>
    <li>Illustrations of Winter's Formulas, the Anion Gap, Compensation, and the balance involved with Bicarb, Carbon Dioxide, and more</li>
    <li>Hands-on interpretation practice with multiple practice cases. Dr. Seheult will work through these in the video in real-time</li>
    <li>A clinical perspective of acid-base nuances</li>
    <li>A post-course quiz to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>
`,
      },
      {
        title: 'Pneumothorac + Chest Tube',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/pneumothorax.png',
        slug: 'pneumothorax-chest-tube',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">Manage Pneumothoraces and Chest Tubes with Confidence</h4>
  <p class="mb-4">
    A pneumothorax is a critical condition that requires prompt diagnosis and intervention. Chest tube insertion is a life-saving procedure that every clinician should understand.
  </p>
  <p class="mb-4">
    Unfortunately, many healthcare professionals—including physicians, PAs, NPs, and RTs—struggle with the complexities of pneumothorax management and chest tube placement. Proper technique and decision-making are essential but often under-taught.
  </p>
  <p class="mb-4">
    Join renowned professor <strong>Roger Seheult, MD</strong> as he concisely explains the key components of the diagnosis, imaging, and treatment of a pneumothorax and chest tube management.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">Who is This Course For?</h5>
  <p class="mb-4">
    Clinicians (<abbr title="Doctor of Medicine">MD</abbr>, <abbr title="Doctor of Osteopathic Medicine">DO</abbr>, <abbr title="Nurse Practitioner">NP</abbr>, <abbr title="Physician Assistant">PA</abbr>, <abbr title="Registered Nurse">RN</abbr>, <abbr title="Respiratory Therapist">RTs</abbr>) and students in a variety of specialties that deal with pneumothoraces and chest tubes.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">Who is the Instructor?</h5>
  <p class="mb-4">
    Dr. Roger Seheult is trusted by universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...
  </p>
  <p class="mb-4">
    ...and clear understanding leads to mastery of treating a pneumothorax and chest tube management. Learn more about Dr. Seheult.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">What You'll Receive from This Course:</h5>
  <ul class="list-disc list-inside mb-4">
    <li>A clear understanding of the management of a pneumothorax</li>
    <li>How to diagnose a pneumothorax (and the difference between each type of spontaneous and non-spontaneous pneumothorax)</li>
    <li>How to utilize imaging to aid in the diagnosis - including recognizing lung sliding on ultrasound</li>
    <li>How to place and manage a chest tube (including utilization of a 3-container suction chest tube system)</li>
    <li>Quick quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 2.75 CME Credits/MOC Points/CE</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>
`,
      },
      {
        title: 'Sleep Apnea',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/sleepApnea.png',
        slug: 'sleep-apnea',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">
    Understand Sleep Apnea: Symptoms, Diagnosis, and Treatment with Dr. Seheult
  </h4>
  <p class="mb-4">
    We're glad you're here!
  </p>
  <p class="mb-4">
    You may have noticed that some (or all) of the videos in this course are also available on our MedCram YouTube channel... but stick around because all new MedCram videos will be available first here at <strong>MedCram.com</strong> (and publicly posted to YouTube weeks later... if at all).
  </p>
  <p class="mb-4">
    Also, a growing amount of MedCram content (videos, quizzes, review notes) is only available here at <strong>MedCram.com</strong> — and not available on YouTube.
  </p>
  <h5 class="text-xl font-semibold mt-6 mb-4">We've Got You Covered!</h5>
  <p class="mb-4">
    MedCram allows you to cut down on study time and maximize retention and understanding by focusing on what is most important. Dr. Seheult's illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.
  </p>
  <p class="mb-4">
    We think (and certainly hope) you'll find <strong>Sleep Apnea Explained Clearly</strong> very informative, easy to follow, and fun. Enjoy!
  </p>
</div>
`,
      },
      {
        title: 'CBC Results',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/ECG-interpolation.png',
        slug: 'cbc-results',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">
    Interpret CBC Results Quickly & With Confidence
  </h4>
  <p class="mb-4">
    Are Complete Blood Count (CBC) results involved in your medical practice?
  </p>
  <p class="mb-4">
    Looking for clarity on how to quickly interpret and follow CBC results accurately?
  </p>
  <p class="mb-4">
    Join renowned instructor <strong>Dr. Seheult</strong> as he concisely explains the key components of the CBC... from anemia to thrombocytosis.
  </p>
  <p class="mb-4">
    After this series of short videos and quizzes, you'll be on your way to accurately interpret CBC results and save time doing so.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">Who is This Course For?</h5>
  <p class="mb-4">
    Clinicians (<abbr title="Doctor of Medicine">MD</abbr>, <abbr title="Doctor of Osteopathic Medicine">DO</abbr>, <abbr title="Nurse Practitioner">NP</abbr>, <abbr title="Physician Assistant">PA</abbr>, <abbr title="Registered Nurse">RN</abbr>) and students in a variety of specialties that order CBCs.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">Who is the Instructor?</h5>
  <p class="mb-4">
    Dr. Roger Seheult is trusted by universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...
  </p>
  <p class="mb-4">
    ...and clear understanding leads to mastery of CBC results interpretation. <a href="#" class="text-blue-500 underline">Learn more about Dr. Seheult.</a>
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">What You'll Receive from This Course:</h5>
  <ul class="list-disc list-inside mb-4">
    <li>An understanding of each possible CBC result: leukocytosis, anemia, polycythemia, thrombocytopenia, etc.</li>
    <li>Initial management and treatment recommendations based on the CBC result — including blood transfusions and protocols for procedures</li>
    <li>Guidelines for when to order a CBC, the frequency for follow-up labs, and tips for following serial CBCs</li>
    <li>A clinical perspective of CBC nuances, pitfalls, and patterns</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>
`,
      },
      {
        title: 'Asthma',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/asthma.png',
        slug: 'asthma',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">Understand Asthma with Dr. Roger Seheult</h4>
  <p class="mb-4">
    This clear medical lecture by Dr. Roger Seheult includes discussions and illustrations on asthma pathophysiology, signs and symptoms of asthma, diagnosis, triggers (GERD, postnasal drip, down feathers, etc.), flow volume loops, and Samter's Triad.
  </p>
  <p class="mb-4">
    <strong>Video 2</strong> covers a deeper discussion on the diagnosis of asthma, methacholine challenge test, and a stepwise approach for the treatment of asthma (rescue inhaler/beta agonists, corticosteroids, montelukast, etc.).
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">We're Glad You're Here!</h5>
  <p class="mb-4">
    You may have noticed that the videos in this medical course are also available on our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at <strong>MedCram.com</strong> (and publicly posted to YouTube later... if at all).
  </p>
  <p class="mb-4">
    Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at <strong>MedCram.com</strong> — and not available on YouTube.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">We've Got You Covered!</h5>
  <p class="mb-4">
    MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes make learning and reviewing medical topics a breeze.
  </p>
  <p class="mb-4">
    We think (and certainly hope) you'll find <strong>Asthma Explained Clearly</strong> very informative, easy to follow, and fun. Enjoy!
  </p>
</div>
`,
      },
      {
        title: 'Pulmonary Function Test',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/pulmonary.png',
        slug: 'pulmonary-function-test',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">Interpret Pulmonary Function Tests (PFTs) with Confidence</h4>
  <p class="mb-4">
    Pulmonary function tests are essential tools for diagnosing and managing various respiratory diseases. PFTs are among the most common lung-related tests ordered by clinicians.
  </p>
  <p class="mb-4">
    Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians have not learned how to unlock the full potential of PFTs and avoid common interpretation pitfalls.
  </p>
  <p class="mb-4">
    Join renowned professor <strong>Roger Seheult, MD</strong> as he concisely explains the key components of the PFTs that you need to know... from using flow volume loops to diagnose asthma and COPD to the power of the Methacholine challenge test and DLCO.
  </p>
  <p class="mb-4">
    After this series of short videos and quizzes, you'll be on your way to accurately interpreting PFT results and saving time in the process.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">Who is This Course For?</h5>
  <p class="mb-4">
    Clinicians (<abbr title="Doctor of Medicine">MD</abbr>, <abbr title="Doctor of Osteopathic Medicine">DO</abbr>, <abbr title="Nurse Practitioner">NP</abbr>, <abbr title="Physician Assistant">PA</abbr>, <abbr title="Registered Nurse">RN</abbr>, RTs) and students in a variety of specialties that order PFTs.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">Who is the Instructor?</h5>
  <p class="mb-4">
    Dr. Roger Seheult is trusted by universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...
  </p>
  <p class="mb-4">
    ...and clear understanding leads to mastery of PFT results interpretation. <a href="#" class="text-blue-500 underline">Learn more about Dr. Seheult.</a>
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">What You'll Receive From This Course:</h5>
  <ul class="list-disc list-inside mb-4">
    <li>A clear understanding of each pulmonary function test</li>
    <li>How to use PFTs to diagnose a variety of common lung diseases</li>
    <li>Guidelines for when to order PFTs and tips for following serial PFTs</li>
    <li>A clinical perspective of PFT nuances, pitfalls, and patterns</li>
    <li>Quick quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 2.0 CME Credits/MOC Points/CE</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>
`,
      },
      {
        title: 'Ultrasound',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/ultrasound.png',
        slug: 'ultrasound',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">Interested in Making Ultrasound Part of Your Clinical Practice?</h4>
  <p class="mb-4">
    Renowned instructor <strong>Dr. Jacquet</strong> illustrates core ultrasound concepts in a way that you will understand and remember.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">Who is This Course For?</h5>
  <p class="mb-4">
    Students and medical professionals in a variety of medical fields: physicians, NPs, PAs, RTs, nurses, and technicians who seek clinical/point-of-care ultrasound (POCUS) to become a part of their practice.
  </p>
  <p class="mb-4">
    <strong>For those new to ultrasound</strong>, this course provides an excellent foundation prior to participating in hands-on training of specific exam techniques.
  </p>
  <p class="mb-4">
    <strong>For those with prior ultrasound experience</strong>, this course offers a focused review of the core concepts needed to advance skills and understanding.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">What You'll Receive From This Course:</h5>
  <ul class="list-disc list-inside mb-4">
    <li>An overview of ultrasound transducers and their uses</li>
    <li>Key ultrasound terminology, orientation, imaging planes, and biosafety</li>
    <li>Step-by-step illustrations of the knobs, dials, and modes of an ultrasound machine ("knobology")</li>
    <li>Examples of various ultrasound artifacts that impact ultrasound images</li>
    <li>How to handle an ultrasound transducer and set up the machine for your first ultrasound exam</li>
    <li>Quiz questions after each video to reinforce essential concepts</li>
    <li>Includes 4 CME (Category 1), MOC Points, CE Credits</li>
    <li>1 year of unlimited access, so you can review videos as needed (all MedCram courses are mobile/tablet friendly)</li>
  </ul>

  <h5 class="text-xl font-semibold mt-6 mb-2">Learn the Key Elements of Each Ultrasound Probe</h5>
  <p class="mb-4">
    Build a strong foundation in ultrasound concepts and techniques with Dr. Jacquet’s clear and concise instruction.
  </p>
</div>
`,
      },
      {
        title: 'FAST Exam',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/fastExam.png',
        slug: 'fast-exam',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">Confidently Perform & Interpret the FAST Ultrasound Exam</h4>
  <p class="mb-4">
    Need to learn FAST for your job or rotation in the trauma or emergency setting? Looking to improve your FAST technique & efficiency?
  </p>
  <p class="mb-4">
    In <strong>FAST Exam Explained Clearly</strong>, ultrasound expert & ED physician <strong>Joshua Jacquet, MD</strong>, illustrates a straightforward system that will have you performing FAST & Extended FAST (EFAST) Exams efficiently and accurately.
  </p>
  <p class="mb-4">
    The Focused Assessment with Sonography in Trauma (FAST) has become an integral part of a trauma survey, performed immediately after the primary survey of the ATLS protocol…
    <br />
    …and for good reasons: FAST achieves similar results in detecting hemoperitoneum as both CT scans and diagnostic peritoneal lavage, but is faster, cheaper, and avoids radiation or an invasive procedure.
  </p>
  <p class="mb-4">
    Additionally, the <strong>Extended FAST Exam (EFAST)</strong> will detect hemopericardium, hemothorax, and pneumothorax.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">Why EFAST is Crucial:</h5>
  <p class="mb-4">
    Many trauma patients have internal injuries that are not apparent on physical exam. A properly performed EFAST identifies significant bleeding into the peritoneal, pleural, or pericardial spaces and expedites potentially life-saving interventions.
  </p>
  <p class="mb-4">
    Watch this video series now for a clear and enjoyable approach to mastering the FAST & EFAST bedside exams.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">What You'll Receive From This Course:</h5>
  <ul class="list-disc list-inside mb-4">
    <li>Essential background info and indications for the FAST Exam</li>
    <li>A clear & concise method for performing the 4 classic FAST windows (RUQ, LUQ, Pelvic, & Cardiac)</li>
    <li>Steps to effectively perform the EFAST Exam and assess the pleural space and lung sliding</li>
    <li>Tips & nuances for clinical application & additional point-of-care ultrasound uses (POCUS)</li>
    <li>How to assess for hemothorax and pneumothorax with numerous examples</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>5 trauma cases that Dr. Jacquet works through to expand your understanding</li>
    <li>1 year of full unlimited access on up to 3 devices</li>
  </ul>
</div>
`,
      },
      {
        title: 'Lung Ultrasound',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/lungUltrasound (pulmo).png',
        slug: 'lung-ultrasound',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">
    Take Your Clinical Skills to the Next Level - Fast & Accurate Diagnosis at the Bedside that "Practically Feels Like Cheating"
  </h4>
  <p class="mb-4">
    Lung Ultrasound (LUS) is becoming a critical skill for clinicians of all levels. LUS has proven to be useful in a wide variety of acute and chronic conditions. As a result, it is rapidly gaining popularity across many different medical specialties.
  </p>
  <p class="mb-4">
    Lung Ultrasound is relatively easy to learn, quick to perform at the bedside, and outperforms the accuracy of a chest X-ray for most lung conditions. In fact, LUS rivals the accuracy of CT imaging for acute respiratory failure—without the radiation. Therefore, LUS can safely be utilized in all patient populations (including pediatrics and pregnancy), both inpatient and outpatient.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">Lung Ultrasound Clinical Point of Care</h5>
  <p class="mb-4">
    In <strong>Lung Ultrasound Explained Clearly</strong>, you'll enjoy a series of concise videos, quizzes, and case studies as you move toward mastery. It has never been easier to gain clarity with Lung Ultrasound. Start watching now (some videos are "free trial") and have confidence with this exciting and incredibly useful imaging modality!
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">Course Highlights</h5>
  <ul class="list-disc list-inside mb-4">
    <li>Clearly understand lung ultrasound findings in the diagnoses of COPD, asthma, pneumothorax, pulmonary embolism, pulmonary edema, pneumonia, pleural effusion, acute respiratory distress syndrome, and more...</li>
    <li>Approved for <strong>6.25 contact hours Continuing Respiratory Care Education (CRCE)</strong> credit by the American Association for Respiratory Care (Course #184591000).</li>
  </ul>

  <h5 class="text-xl font-semibold mt-6 mb-2">What You'll Receive From This Course:</h5>
  <ul class="list-disc list-inside mb-4">
    <li>A systematic approach to performing a bedside ultrasound and spotting abnormal findings</li>
    <li>Illustrations and examples of all major abnormal LUS findings</li>
    <li>Recognize key patterns on lung ultrasound and their clinical significance</li>
    <li>Learn an evidence-based protocol (the BLUE protocol) for diagnosing causes of acute respiratory failure with 90.5% accuracy!</li>
    <li>Understand how LUS can be used adjunctly in airway and ventilator management</li>
    <li>Reinforcement of key concepts with actual patient cases</li>
    <li>6.25 CRCE Contact Hours included</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>
`,
      },
      {
        title: 'Key Pulmonary Skills & Diseases',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/keyPulmonary.png',
        slug: 'key-pulmonary-skills-diseases',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">
    Efficiently Review the Most Common Pulmonary Diseases and Diagnostic Procedures
  </h4>
  <p class="mb-4">
    This video series is designed for clinicians in primary care, emergency medicine, critical care, pulmonology, and many other medical fields that interact with common diseases of the lungs.
  </p>
  <p class="mb-4">
    Enjoy a high-yield and comprehensive review of: Pulmonary Embolism, Hypoxemia, Pleural Effusion, Pneumonia, Asthma, COPD, Sleep Apnea, Chronic Cough, and Lung Cancer. This course also reviews the use of procedures and interventions such as Pulmonary Function Tests, Chest X-Ray, CT Scan of the Chest, and Mechanical Ventilation.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">What You'll Receive From This Course:</h5>
  <ul class="list-disc list-inside mb-4">
    <li>Concise explanations of the most common and important pulmonary diseases</li>
    <li>Colorful illustrations and images to clarify key concepts</li>
    <li>A clinical perspective of pulmonary disease nuances, scenarios, and treatment recommendations</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>Includes <strong>16 CME credits (category 1), MOC Points, & CE credits</strong></li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>
`,
      },
      {
        title: 'Pulmonology',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/pulmonology.png',
        slug: 'pulmonology',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">
    Review the Most Important Pulmonary Topics in an Engaging Way
  </h4>
  <p class="mb-4">
    Review courses typically involve an instructor reading through slides, overpacked with information... MedCram Reviews are different & bring the material to life. Here's how it works...
  </p>
  <h5 class="text-xl font-semibold mt-6 mb-2">How It Works:</h5>
  <ol class="list-decimal list-inside mb-4">
    <li>
      <strong>Step 1:</strong> Download your exclusive set of detailed course notes & charts that allow you to seamlessly follow along.
      <br />
      Dr. Seheult compiled these notes to use as a backdrop for each video...and then mark them up extensively- with illustrations, highlights, and clarifications.
    </li>
    <li>
      <strong>Step 2:</strong> After viewing the videos corresponding to each page of notes, take a short quiz for instant feedback and reinforcement of key points.
    </li>
    <li>
      <strong>Step 3:</strong> Reap the benefits of a practical and comprehensive review that will tremendously improve your long-term understanding of pulmonary topics, patient care, and test scores.
    </li>
  </ol>
  <p class="mb-4">
    Purchase of this course provides <strong>1-year unlimited access on up to three devices.</strong>
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">Topics Include:</h5>
  <ul class="list-disc list-inside mb-4">
    <li>Asthma</li>
    <li>Pneumonia</li>
    <li>Pulmonary Embolism</li>
    <li>Cough</li>
    <li>Pleural Effusion</li>
    <li>Pneumothorax</li>
    <li>Chest X-ray Findings</li>
    <li>Pulmonary Function Tests</li>
    <li>Spirometry</li>
    <li>Flow Volume Loops</li>
    <li>COPD</li>
    <li>Tuberculosis</li>
    <li>Hypoxemia</li>
    <li>The Delivery of Oxygen to the Tissues</li>
    <li>Oxyhemoglobin Dissociation Curve</li>
    <li>Poisoning (CO, Cyanide, etc.)</li>
    <li>Restrictive Lung Disease</li>
    <li>Obstructive Lung Disease</li>
    <li>Lung Sounds</li>
    <li>Bronchiectasis</li>
    <li>Cystic Fibrosis</li>
    <li>Interstitial Lung Disease</li>
    <li>Asbestosis</li>
    <li>Bronchoscopy</li>
    <li>Silicosis</li>
    <li>Pulmonary Hypertension</li>
    <li>Transudate vs Exudate</li>
    <li>Lung Cancer</li>
    <li>Solitary Lung Nodules</li>
    <li>Hemoptysis</li>
    <li>And many more...</li>
  </ul>
</div>
`,
      },
      {
        title: 'Vent Assoc. Pneumonia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/VentAssocPneumonia.png',
        slug: 'vent-assoc-pneumonia',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">
    Confidently Diagnose and Manage Patients with VAP
  </h4>
  <p class="mb-4">
    Join Dr. Seheult as he illustrates the key concepts of ventilator-associated pneumonia (VAP). Understand the epidemiology, pathophysiology, and ventilator-associated pneumonia treatment guidelines. Learn the difference between diagnosing VAP using clinical vs bacteriological guidelines.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">What You'll Receive From This Course:</h5>
  <ul class="list-disc list-inside mb-4">
    <li>A systematic approach to the diagnosis and treatment of VAP</li>
    <li>Crucial VAP management skills such as breathing trials and antibiotic selection</li>
    <li>Reinforcement of key VAP physiology concepts</li>
    <li>A clinical perspective of ventilator-associated pneumonia nuances and rare findings</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>
`,
      },
      {
        title: 'MRSA Pneumonia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/MRSA.png',

        slug: 'mrsa-pneumonia',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">
    Are You Prepared to Diagnose & Treat MRSA Pneumonia?
  </h4>
  <p class="mb-4">
    Join Dr. Seheult as he concisely explains and illustrates the key concepts of MRSA pneumonia (Methicillin-Resistant Staphylococcus Aureus). Understand the epidemiology, pathophysiology, and MRSA treatment guidelines.
  </p>

  <h5 class="text-xl font-semibold mt-6 mb-2">What You'll Receive From This Course:</h5>
  <ul class="list-disc list-inside mb-4">
    <li>Review of the key differences between MSSA, MRSA, hospital-acquired and community-acquired MRSA</li>
    <li>Understand the key risk factors for MRSA</li>
    <li>Virulence factors that typically make community-acquired MRSA worse than hospital-acquired pneumonia</li>
    <li>CXR (chest x-ray) and CT findings for MRSA pneumonia</li>
    <li>Clinical decision making and diagnosis of MRSA</li>
    <li>Compare Vancomycin and Linezolid for primary treatment options of MRSA pneumonia</li>
    <li>Telavancin pros and cons and how efficacy compares with Vancomycin</li>
    <li>Why a variety of medications may not be ready for primary consideration for MRSA</li>
    <li>Specific treatment considerations for the virulent community-acquired MRSA</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>
`,
      },
      {
        title: 'COPD',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/copd.png',
        slug: 'copd',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">
    Understand COPD Causes, Diagnosis, and Treatment
  </h4>
  <p class="mb-4">
    Understand COPD causes, diagnosis, and treatment with this clear and concise medical lecture by Dr. Seheult.
  </p>

  <p class="mb-4">
    We're glad you're here!
  </p>

  <p class="mb-4">
    You may have noticed that the medical videos in this course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).
  </p>

  <p class="mb-4">
    Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube.
  </p>

  <p class="mb-4">
    We've got you covered!
  </p>

  <p class="mb-4">
    MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find COPD (Emphysema) Explained Clearly very informative, easy to follow, and fun.
  </p>
</div>
`,
      },
      {
        title: 'Coronavirus Pandemic',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/coronavirous.png',
        slug: 'coronavirus-pandemic',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">
    Follow the Key COVID-19 Pandemic Developments with Digestible Video Updates
  </h4>

  <p class="mb-4">
    Note to new visitors: To view the over 100 COVID-19 Updates in this course, you will need to create a free account (it only takes a few seconds).
  </p>

  <p class="mb-4">
    A novel coronavirus was first reported to the World Health Organization on December 31, 2019. The virus appears to have spread from Wuhan, China and has quickly led to a pandemic.
  </p>

  <p class="mb-4">
    Dr. Seheult illustrates key developments about COVID-19 and SARS-CoV-2 pathophysiology, transmission, prevention, treatment options & trials, vaccine advances, data trends, as well as the response from governments, hospitals, and communities.
  </p>

  <p class="mb-4">
    A lot has changed since we recorded our first video on a novel coronavirus outbreak on January 26, 2020. Please note that each update video was produced with the best information we could access at the time of recording. Some videos were recorded well over a month ago and may contain information that has become outdated or replaced by better information or research.
  </p>

  <p class="mb-4">
    That said, we believe each video contains concepts that have enduring value, and reviewing how the response to COVID-19 has progressed over time may be of interest to you as well.
  </p>

  <p class="mb-4">
    COVID-19 Illustrations by Dr. Seheult
  </p>

  <p class="mb-4">
    We're committed to keeping our COVID-19 videos free for all to access. Please share them with friends and colleagues if you find them helpful.
  </p>
</div>
`,
      },
      {
        title: 'COVID-19 Ventilator Course',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/covid-19.png',
        slug: 'covid-19-ventilator-course',
        longDec: `<div class="">
  <h4 class="text-2xl font-bold mb-4">
    Learn Key Mechanical Ventilation Skills with Critical Care Specialist Roger Seheult, MD
  </h4>

  <p class="mb-4">
    From basic ventilator definitions to advanced vent management "pearls," illustrations and clinical examples provide clarity for medical professionals.
  </p>

  <p class="mb-4">
    This course will guide you through the essential concepts of mechanical ventilation and how to apply them in clinical practice. Whether you're new to mechanical ventilation or seeking to expand your knowledge, this course offers valuable insights that will enhance your understanding and improve patient care.
  </p>

  <p class="mb-4">
    Roger Seheult, MD, a critical care specialist, brings his expertise to help you understand the complexities of mechanical ventilation. Learn at your own pace with clear explanations and clinical scenarios.
  </p>
</div>
`,
      },
      {
        title: 'Chest X-Ray Interpretation',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/chestX-ray.png',

        slug: 'covid-19-ventilator-course',
        longDec: ` <h4>Interpret & Review Chest X-rays Systematically</h4>
    <p class="intro">
        Struggling to interpret chest X-rays efficiently? Looking for an efficient step-by-step process that you can utilize to interpret chest X-rays?
        In <strong>Chest X-ray Interpretation Explained Clearly</strong>, renowned instructor Dr. Roger Seheult teaches a streamlined <strong>"A,B,C,D method"</strong> to accurately interpret Chest X-rays.
    </p>

    <h5>The Premier Introductory Chest X-ray Video Series</h5>
    <p>This online course is highly-rated by clinicians (Physicians, NPs, PAs, and Nurses) in a variety of specialties.</p>

    <h5>Who is the Instructor?</h5>
    <p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized. Clear understanding is the foundation for mastery of chest X-ray interpretation.</p>

    <h5>What You'll Receive From This Course:</h5>
    <div class="features">
        <ul>
            <li>A systematic approach to spot abnormal findings</li>
            <li>Illustrations and examples of several abnormal chest X-ray findings</li>
            <li>A concise review and illustrations of key X-ray fundamentals</li>
            <li>Interpretation practice, as Dr. Seheult reviews several abnormal chest X-rays so you can follow along</li>
            <li>A clinical perspective of chest X-ray nuances</li>
            <li>A brief quiz to reinforce core concepts and help you study</li>
        </ul>
    </div>

    <h5>Start Now</h5>
    <p>Start watching now (the first video is a "free trial") and experience confidence with the chest X-ray! This complete course and over 40 hours of CME/CE credits are available with MedCram All-Access.</p>

    <a href="#" class="btn">Get Started Now</a>`,
      },
      {
        title: 'Chronic Cough',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/ChronicCough.png',

        slug: 'covid-19-ventilator-course',
        longDec: `  <h4>Chronic Cough Diagnosis & Treatment Explained Clearly</h4>
    <p class="intro">
        Understand chronic cough diagnosis and treatment with this clear and concise medical lecture by Dr. Roger Seheult.
        We're glad you're here!
    </p>

    <h5>Welcome to MedCram!</h5>
    <p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel...
        but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

    <p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube.</p>

    <h5>Maximize Your Learning with MedCram</h5>
    <p>We've got you covered! MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing on what is most important.
       Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical concepts a breeze.
       We think (and certainly hope) you'll find <strong>Chronic Cough Explained Clearly</strong> very informative, easy to follow, and fun.</p>

    <h5>What You Will Learn:</h5>
    <div class="benefits">
        <ul>
            <li>Comprehensive understanding of chronic cough causes</li>
            <li>Evidence-based diagnostic approaches for chronic cough</li>
            <li>Step-by-step treatment strategies</li>
            <li>Practical tips for managing chronic cough in clinical settings</li>
        </ul>
    </div>

    <h5>Start Learning Today!</h5>
    <div class="cta">
        <p>Don't wait! Start your journey to mastering chronic cough diagnosis and treatment with MedCram. Enjoy clear, concise, and engaging medical content. Start now!</p>
        <a href="#">Get Started Now</a>`,
      },
      {
        title: 'CT Scans',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/ctScan.png',

        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand the Key Differences Between CT Scans and HRCT</h4>
<p class="intro">
    Understand the key differences between CT Scans and high resolution CT (HRCT) with this clear and concise medical lecture by Dr. Roger Seheult.
    We're glad you're here!
</p>

<h5>Welcome to MedCram!</h5>
<p>You may have noticed that this medical video is also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<h5>Maximize Your Learning with MedCram</h5>
<p>We've got you covered! MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important.
   Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.
   We think (and certainly hope) you'll find <strong>CT Scan of the Chest Explained Clearly</strong> very informative, easy to follow, and fun.</p>

<h5>What You Will Learn:</h5>
<div class="benefits">
    <ul>
        <li>Key differences between traditional CT scans and high-resolution CT scans (HRCT)</li>
        <li>Detailed analysis of chest anatomy in both CT and HRCT</li>
        <li>How HRCT improves diagnostic accuracy for lung diseases</li>
        <li>Indications and clinical applications for CT vs HRCT in medical practice</li>
    </ul>
</div>

<h5>Start Learning Now!</h5>
<p>Join Dr. Seheult in this course and enhance your understanding of CT and HRCT scans, with concepts and illustrations designed for effective learning!</p>
`,
      },
      {
        title: 'Eosinophilic Pneumonia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        imageUrl: 'img/course/Eosinophilic.png',

        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Eosinophilic Pneumonia Symptoms, Diagnosis, and Treatment</h4>
<p class="intro">
    Understand Eosinophilic Pneumonia symptoms, diagnosis, and the treatment in this medical course by Dr. Roger Seheult. Includes a breakdown of the differences between acute eosinophilic pneumonia vs. chronic eosinophilic pneumonia. Hypereosinophilic syndrome and EGPA (Churg-Strauss) are also covered.
</p>

<h5>Welcome to MedCram!</h5>
<p>You may have noticed that this medical course is also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (videos, medical quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<h5>Maximize Your Learning with MedCram</h5>
<p>We've got you covered! MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think you'll find <strong>Eosinophilic Pneumonia Explained Clearly</strong> informative, easy to follow, and fun.</p>

<h5>What You Will Learn:</h5>
<div class="benefits">
    <ul>
        <li>Acute eosinophilic pneumonia vs. chronic eosinophilic pneumonia</li>
        <li>Pathophysiology, symptoms, and diagnosis of eosinophilic pneumonia</li>
        <li>Hypereosinophilic syndrome and its relation to eosinophilic pneumonia</li>
        <li>Understanding EGPA (Churg-Strauss syndrome) and its diagnosis</li>
        <li>Treatment strategies for eosinophilic pneumonia</li>
    </ul>
</div>

<h5>Start Learning Now!</h5>
<p>Join Dr. Seheult in this course and enhance your understanding of eosinophilic pneumonia, with key concepts and illustrations designed to help you grasp the condition's complexity!</p>
`,
      },
      {
        title: 'Hypoxemia',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/Hypoxemia.jpg',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Hypoxemia (High Altitude, Pulmonary Diffusion, Hypoventilation, Shunting, VQ Mismatch)</h4>
<p class="intro">
    Understand hypoxemia with these medical videos from Dr. Roger Seheult. Topics include high altitude effects, pulmonary diffusion issues, hypoventilation, shunting, and VQ mismatch.
</p>

<h5>Welcome to MedCram!</h5>
<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio files) is only available here at MedCram.com - and not available on YouTube.</p>

<h5>Maximize Your Learning with MedCram</h5>
<p>We've got you covered! MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think you'll find <strong>Hypoxemia Explained Clearly</strong> informative, easy to follow, and fun.</p>

<h5>What You Will Learn:</h5>
<div class="benefits">
    <ul>
        <li>The physiology of hypoxemia</li>
        <li>High altitude effects and adaptation mechanisms</li>
        <li>Pulmonary diffusion issues in hypoxemia</li>
        <li>Understanding hypoventilation as a cause of hypoxemia</li>
        <li>Shunting and its impact on oxygenation</li>
        <li>VQ mismatch and its role in hypoxemia</li>
    </ul>
</div>

<h5>Start Learning Now!</h5>
<p>Join Dr. Seheult in this course to gain a deep understanding of hypoxemia, its causes, and the mechanisms involved. Maximize your learning experience with clear and concise illustrations, explanations, and quizzes!</p>

<h3>Related Courses & Packages You May Like:</h3>
<!-- List related courses or packages here -->
<ul>
    <li>Course on Pulmonary Pathophysiology</li>
    <li>Package on Respiratory Medicine Fundamentals</li>
    <li>Advanced Ventilator Management Course</li>
</ul>
`,
      },
      {
        title: 'Inhalers (Asthma/COPD)',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/Inhalers.png',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Asthma and COPD Inhalers</h4>
<p class="intro">
    Get a concise overview of the "step-up" inhaler treatment for both asthma and COPD, including the different types of inhalers and their usage.
</p>

<h5>Overview of Inhaler Treatments</h5>
<p>This course includes discussions and illustrations on the naming and usage of different types of inhalers for managing asthma and COPD:</p>

<h3>SABA Inhalers</h3>
<p><strong>SABA</strong> (Short-Acting Beta Agonists) are used for quick relief of asthma and COPD symptoms. The most common example is <strong>Albuterol</strong>, which works rapidly to open the airways.</p>

<h3>LABA Inhalers</h3>
<p><strong>LABA</strong> (Long-Acting Beta Agonists) are used for long-term control and prevention of symptoms. <strong>Salmeterol</strong> is a common LABA, providing sustained bronchodilation.</p>

<h3>ICS Inhalers</h3>
<p><strong>ICS</strong> (Inhaled Corticosteroids) are used to reduce inflammation in the airways, which is particularly helpful in managing asthma. A popular example is <strong>Fluticasone</strong>.</p>

<h3>LAMA Inhalers</h3>
<p><strong>LAMA</strong> (Long-Acting Muscarinic Antagonists) help relax the muscles around the airways and are particularly useful in COPD management. <strong>Tiotropium</strong> is a well-known LAMA.</p>

<h5>Step-Up Treatment Strategy</h5>
<p>The step-up approach involves increasing treatment intensity as symptoms worsen or control is not achieved. This approach may include:</p>
<ul>
    <li>Starting with a SABA for immediate relief</li>
    <li>Introducing a LABA for long-term control</li>
    <li>Adding ICS for better inflammation management in asthma</li>
    <li>Using LAMAs in COPD for sustained bronchodilation</li>
</ul>

<h5>Learn More</h5>
<p>Understand the clinical reasoning behind each inhaler class and how to properly manage asthma and COPD with effective inhaler use. This course includes detailed illustrations and instructions to ensure you master the step-up treatment approach.</p>

<h3>Related Topics You May Like:</h3>
<ul>
    <li>Asthma Management Protocols</li>
    <li>Advanced COPD Treatment Strategies</li>
    <li>Inhaler Technique Mastery</li>
</ul>
`,
      },
      {
        title: 'Lung Cancer',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/LungCancer.png',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Lung Cancer Diagnosis, Staging, Causes, and Treatment</h4>
<p class="intro">
    Learn about Lung Cancer diagnosis, staging, causes, and treatment with these clear and concise medical videos from Dr. Seheult.
</p>

<h5>Welcome to the Course!</h5>
<p>We're glad you're here!</p>
<p>You may have noticed that the medical lectures in this course are also available at our MedCram YouTube channel, but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later, if at all).</p>

<h5>Exclusive Content</h5>
<p>Also, a growing amount of MedCram content (videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube. We've got you covered!</p>

<h5>Maximize Your Learning</h5>
<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing on what's most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>

<h3>Course Highlights:</h3>
<ul>
    <li>Detailed breakdown of Lung Cancer diagnosis</li>
    <li>Understanding staging and the different types of lung cancer</li>
    <li>Exploring the causes and risk factors associated with lung cancer</li>
    <li>Comprehensive treatment options and strategies</li>
</ul>

<h5>Join Us Now!</h5>
<p>We think (and certainly hope) you'll find <strong>Lung Cancer Explained Clearly</strong> very informative, easy to follow, and fun. Dive into the content today and enhance your medical knowledge!</p>
`,
      },
      {
        title: 'Lung Ultrasound in COVID-19',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/lungUltrasound.png',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Point of Care COVID-19 Diagnosis and Monitoring with Lung Ultrasound</h4>
<p>As communities across the world are facing or preparing for increasing numbers of patients in respiratory distress from COVID-19, emergency medicine physician and ultrasound expert, Dr. Jaquet, has recorded this video series for clinicians and hospitals on the frontlines.</p>

<h5>Why Lung Ultrasound?</h5>
<p>Learn why lung ultrasound rivals a CT scan for accurate diagnosis and monitoring of coronavirus infection from the SARS-CoV-2 virus. This concise video series (under one hour in length) will quickly review the core principles of lung ultrasound and progresses to COVID-19 specific findings.</p>

<h3>Course Overview</h3>
<ul>
    <li>Core principles of lung ultrasound</li>
    <li>COVID-19 specific ultrasound findings</li>
    <li>Accurate diagnosis and monitoring of coronavirus infection</li>
</ul>

<h5>Free Course for All</h5>
<p>This course will remain free. Please share it with anyone you think may be interested. We hope you find it helpful, and we welcome feedback.</p>

<h3>Additional Resources</h3>
<p>This course only briefly reviews lung ultrasound principles. For a more comprehensive video series, please see <a href="#">Lung Ultrasound Explained Clearly</a>.</p>
<p>If you are new to point of care ultrasound or want to review the basics, please see <a href="#">Ultrasound Principles & Instrumentation Explained Clearly</a>.</p>

<h5>Thank You!</h5>
<p>We appreciate you—medical professionals, students, and volunteers around the world. We are in this fight together.</p>
`,
      },
      {
        title: 'Mechanical Ventilation',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/mechanical.png',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Mechanical Ventilation, Simplified</h4>
<p><strong>Note:</strong> Due to the COVID-19 pandemic, we've decided to make this course free. We want as many clinicians as possible to have the opportunity to review or learn mechanical ventilation. We've also added the content from this course to a COVID-19 Ventilator Course that is also available free.</p>

<h5>Course Overview</h5>
<p>Enjoy a concise, step-by-step guide to clarity of vent modes and settings. Learn physiology concepts such as the pressure-volume relationship which will lead to a lasting understanding of key concepts.</p>
<p>Enjoy a clinical perspective for managing conditions such as COPD and ARDS with mechanical ventilation. Finish the course strong with a checklist on how to safely liberate a patient from a ventilator.</p>

<h3>Who is the Instructor?</h3>
<p>Roger Seheult is trusted by Universities, clinicians & students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>... and clear understanding leads to mastery of mechanical ventilation. Yes, you can learn mechanical ventilation without information overload!</p>

<h3>How is the Course Laid Out?</h3>
<p>You'll enjoy a series of concise videos and quizzes as you move towards mastery. It has never been easier to get clarity with mechanical ventilation. Start watching now (several videos are "free trial") and take a big step toward confidently managing patients on a ventilator!</p>

<h5>What You'll Receive from This Course:</h5>
<ul>
    <li>An understanding of how each major mode of mechanical ventilation works</li>
    <li>A clear approach to utilizing settings such as plateau pressure and PEEP to manage conditions such as ARDS and COPD</li>
    <li>Reinforcement of key ventilation/physiology concepts including pressure-volume relationships</li>
    <li>A "liberation from the ventilator" checklist</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 1.25 CME (category 1), MOC Points, CE Credits</li>
    <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Vent Pearls',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/ventPearls.png',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Take Your Vent Skills to the Next Level!</h4>
<p><strong>Note:</strong> Due to the COVID-19 pandemic, we've decided to make this course free. We want as many clinicians as possible to have the opportunity to review or learn mechanical ventilation. We've also added the content from this course to a COVID-19 Ventilator Course that is also available free.</p>

<h5>Course Overview</h5>
<p>Work through a variety of clinical scenarios involving mechanical ventilation with Dr. Seheult. This advanced course is meant to build on skills learned in <em>Mechanical Ventilation Explained Clearly</em>.</p>

<h5>What You'll Receive from This Course:</h5>
<ul>
    <li>A variety of mechanical ventilator pearls: common mistakes, nuances, and strategies for optimal patient care</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 2 CME credits (Category 1), MOC Points, CE Credits</li>
    <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Oxygen Hemoglobin Curve',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/oxygen hemoglopen.png',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand the Oxygen Hemoglobin Dissociation Curve</h4>
<p>Learn about the oxygen hemoglobin dissociation curve with this clear and concise medical lecture from Dr. Seheult.</p>

<p><strong>We're glad you're here!</strong></p>
<p>You may have noticed that the medical videos in this course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical lectures, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p><strong>We've got you covered!</strong></p>
<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>
<p>We think (and certainly hope) you'll find <em>Oxygen Hemoglobin Dissociation Curve Explained Clearly</em> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Plerual Effusion',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/PlerualEffusion.png',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Pleural Effusion Diagnosis and Treatment</h4>
<p>Learn about pleural effusion diagnosis and treatment with a clear and concise explanation from Dr. Seheult.</p>

<p><strong>We're glad you're here!</strong></p>
<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical lectures will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical lectures, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p><strong>We've got you covered!</strong></p>
<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>
<p>We think (and certainly hope) you'll find <em>Pleural Effusion Explained Clearly</em> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Pneumonia',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/Pneumonia.png',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Pneumonia Diagnosis and Treatment</h4>
<p>Learn about pneumonia diagnosis and treatment with this clear and concise medical course from Dr. Seheult.</p>

<p><strong>We're glad you're here!</strong></p>
<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical lectures will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical lectures, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p><strong>We've got you covered!</strong></p>
<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>
<p>We think (and certainly hope) you'll find <em>Pneumonia Explained Clearly</em> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Pulmonary Embolism',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/PulmonaryEmbolism.png',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Pulmonary Embolism Diagnosis and Treatment</h4>
<p>Learn about pulmonary embolism diagnosis and treatment with this clear and concise medical course from Dr. Seheult.</p>

<p><strong>We're glad you're here!</strong></p>
<p>You may have noticed that the medical videos in this course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p><strong>We've got you covered!</strong></p>
<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>
<p>We think (and certainly hope) you'll find <em>Pulmonary Embolism Explained Clearly</em> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Pulmonary Hypertension',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/PulmonaryHypertension.png',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Pulmonary Hypertension</h4>
<p>Learn about pulmonary hypertension with this concise medical review course by Dr. Roger Seheult.</p>

<p><strong>We're glad you're here!</strong></p>
<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (videos, medical quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p><strong>We've got you covered!</strong></p>
<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>
<p>We think (and certainly hope) you'll find <em>Pulmonary Hypertension Explained Clearly</em> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Illness from Vaping/E-Cigs',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/illness.png',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `WHAT CLINICIANS NEED TO KNOW ABOUT THE EVOLVING EPIDEMIC
Vaping & E-Cigarette associated illnesses & deaths have resulted in significant media attention.

Dr. Seheult illustrates key points about vaping and E-cigarette associated lung injury and failure.  Learn about the symptoms, diagnosis, imaging results, and treatment options -- that we know about at this time.

More information and studies are needed as vaping deaths and hospitalizations in 2019 continue to rise.`,
      },
    ],
  },
  {
    title: 'Sleep Medicine',
    description: 'Courses on sleep medicine',
    slug: 'sleep-medicine',
    children: [
      {
        title: 'Sleep Apnea',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        imageUrl: 'img/course/sleepApnea.png',
        longDec: `<h4>Understand Sleep Apnea</h4>
<p>Learn about the symptoms, diagnosis, and treatment of sleep apnea with this clear and concise course by Dr. Seheult.</p>

<p><strong>We're glad you're here!</strong></p>
<p>You may have noticed that some (or all) of the videos in this course are also available at our MedCram YouTube channel... but stick around because all new MedCram videos will be available first here at MedCram.com (and publicly posted to YouTube weeks later... if at all).</p>

<p>Also, a growing amount of MedCram content (videos, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p><strong>We've got you covered!</strong></p>
<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>
<p>We think (and certainly hope) you'll find <em>Sleep Apnea Explained Clearly</em> very informative, easy to follow, and fun...enjoy!</p>
`,
      },
      {
        title: 'Insomnia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        imageUrl: 'img/course/Insomnia.png',
        longDec: `<h4>Understand Insomnia</h4>
<p>Learn about the diagnosis and treatment of insomnia with this clear and concise medical lecture from Dr. Seheult.</p>

<p><strong>We're glad you're here!</strong></p>
<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p><strong>We've got you covered!</strong></p>
<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>
<p>We think (and certainly hope) you'll find <em>Insomnia Explained Clearly</em> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Optimal Health & Immunity',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        imageUrl: 'img/course/optimal.png',
        longDec: `<h4>EVIDENCE-BASED TECHNIQUES THAT PROMOTE WELLNESS</h4>
<p>There are countless sources and voices telling us how we can achieve optimal health and immunity.</p>

<p>This course contains a collection of videos that highlight research on wellness and improving our healthspan (disease-free years).</p>

<p>Join renowned Professor Roger Seheult, MD, and Kyle Allred, PA as they highlight peer-reviewed research and interview experts at the top of their game including <strong>Peter Attia, MD</strong>, and <strong>Rhonda Patrick, PhD</strong>.</p>

<p>New videos will be added to this course when they are completed.</p>
`,
      },
    ],
  },
  {
    title: 'COVID-19',
    description: 'Courses related to COVID-19',
    slug: 'covid-19',
    children: [
      {
        title: 'Coronavirus Pandemic',
        description: 'Coronavirus Pandemic courses',
        imageUrl: 'img/course/coronavirous.png',

        longDec: `<div>
  <h4>FOLLOW THE KEY COVID-19 PANDEMIC DEVELOPMENTS WITH DIGESTABLE VIDEO UPDATES</h4>
  <p><strong>Note to new visitors:</strong> To view the over 100 COVID-19 Updates in this course, you will need to create a free account (it only takes a few seconds).</p>

  <p>A novel coronavirus was first reported to the World Health Organization on December 31, 2019. The virus appears to have spread from Wuhan, China and has quickly led to a pandemic.</p>

  <p>Dr. Seheult illustrates key developments about COVID-19 and SARS-CoV-2 pathophysiology, transmission, prevention, treatment options & trials, vaccine advances, data trends, as well as the response from governments, hospitals, and communities.</p>

  <p>A lot has changed since we recorded our first video on a novel coronavirus outbreak on January 26, 2020. Please note that each update video was produced with the best information we could access at the time of recording. Some videos were recorded well over a month ago and may contain information that has become outdated or replaced by better information or research.</p>

  <p>That said, we believe each video contains concepts that have enduring value, and reviewing how the response to COVID-19 has progressed over time may be of interest to you as well.</p>

  <h3>COVID-19 Illustrations by Dr. Seheult</h3>

  <p>We're committed to keeping our COVID-19 videos free for all to access. Please share them with friends and colleagues if you find them helpful.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'COVID-19 Ventilator Course',
        description: 'COVID-19 Ventilator courses',
        imageUrl: 'img/course/covid-19.png',

        londDec: `<div>
  <p>Learn key mechanical ventilation skills with critical care specialist Roger Seheult, MD. From basic ventilator definitions to advanced vent management "pearls," illustrations and clinical examples provide clarity for medical professionals.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Lung Ultrasound in COVID-19',
        description: 'Lung Ultrasound in COVID-19 courses',
        imageUrl: 'img/course/lungUltrasound.png',

        longDec: `<div>
  <h4>POINT OF CARE COVID-19 DIAGNOSIS AND MONITORING WITH LUNG ULTRASOUND</h4>
  <p>As communities across the world are facing or preparing for increasing numbers of patients in respiratory distress from COVID-19, emergency medicine physician and ultrasound expert, Dr. Jaquet has recorded this video series for clinicians and hospitals on the frontlines.</p>

  <p>Learn why lung ultrasound rivals a CT scan for accurate diagnosis and monitoring of coronavirus infection from the SARS-CoV-2 virus. This concise video series (under one hour in length) will quickly review the core principles of lung ultrasound and progresses to COVID-19 specific findings.</p>

  <p>This course will remain free, please share it with anyone you think may be interested. We hope you find it helpful, and we welcome feedback.</p>

  <p>This course only briefly reviews lung ultrasound principles. For a more comprehensive video series please see <em>Lung Ultrasound Explained Clearly</em>.</p>

  <p>If you are new to point of care ultrasound or want to review the basics, please see <em>Ultrasound Principles & Instrumentation Explained Clearly</em>.</p>

  <p>We appreciate you - medical professionals, students, and volunteers around the world. We are in this fight together.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
    ],
  },
  {
    title: 'CME Courses',
    description: 'Continuing Medical Education courses',
    slug: 'covid-19-ventilator-course',
    children: [
      {
        title: 'ECG Interpretation',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/ECG-interpolation.png',
        longDex: `
        <div>
    <h5>CONFIDENTLY INTERPRET EKGs/ECGs IN A SYSTEMATIC WAY</h5>

    <p>Struggling to interpret EKGs efficiently?</p>

    <p>Are you looking for just the right amount of information & physiology so you remember a simple, step by step approach to EKG interpretation?</p>

    <p>In <em>ECG/EKG Interpretation Explained Clearly</em>, renowned Professor Roger Seheult, MD teaches a streamlined "system" to accurately interpret ECGs.</p>

    <h5>THE PREMIER ONLINE ECG COURSE FOR PHYSICIANS, NPs, PAs, AND MORE</h5>

    <p>This course is highly-rated by clinicians (Physicians, NPs, and PAs) in a variety of specialties including primary care and emergency medicine. Additionally, nurses (particularly those working in emergency and critical care) have given excellent reviews.</p>
</div>
<div>
    <h4>WHO IS THE INSTRUCTOR?</h4>

    <p>Professor Roger Seheult, MD is trusted by universities, clinicians, and students for his ability to <em>illustrate</em> key concepts so they are <em>understood</em>, not memorized...</p>

    <p>... and clear understanding leads to mastery of key ECG skills. Yes, you can avoid those dreaded feelings of ECG information overload!</p>

    <h4>HOW IS THE COURSE LAID OUT?</h4>

    <p>You'll enjoy a series of concise videos, quizzes, and practice ECGs as you move towards mastery. It has never been easier to get clarity with ECG interpretation.</p>

    <p>Start watching now (several videos are "free trial") and achieve confidence with ECG!</p>
</div>
<div>
    <h4>WHAT YOU WILL RECEIVE FROM THIS ECG/EKG COURSE:</h4>

    <ul>
        <li>✔ An understanding of the heart's electrical activity</li>
        <li>✔ Illustrations and examples of all major abnormal EKG findings</li>
        <li>✔ A systematic approach to spotting abnormal findings</li>
        <li>✔ Hands-on EKG interpretation practice with 11 blank practice EKGs. Dr. Seheult will interpret these EKGs in the video so you can check your work</li>
        <li>✔ Reinforcement of key cardiac physiology concepts</li>
        <li>✔ A clinical perspective on how to read an EKG, electrocardiogram nuances, scenarios, and rare findings</li>
        <li>✔ Quiz questions to reinforce core concepts and help you study</li>
        <li>✔ 10 CME (category 1), MOC Points, CE Credits included</li>
        <li>✔ 1 year of unlimited access on up to 3 devices</li>
    </ul>
</div>
        `,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'BMP/Chem-7 Results',
        description: 'BMP/Chem-7 results courses',
        longDec: `
                <div>
    <h4>INTERPRET BASIC METABOLIC PANEL (CHEM-7) RESULTS WITH CONFIDENCE</h4>

    <p>The basic metabolic panel (BMP), also known as the "CHEM-7," is one of the most commonly ordered lab tests by clinicians in the hospital and the outpatient setting.</p>

    <p>Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians make common interpretation mistakes - and most have not learned to unlock the full and great potential of the BMP.</p>

    <p>Join renowned professor Roger Seheult, MD as he concisely explains the key components of the BMP that you need to know... from managing creatinine problems to clarity on hyponatremia.</p>

    <p>After this series of short videos and quizzes, you'll be on your way to accurately interpret BMP results and save time in the process.</p>
</div>
<div>
    <h4>WHO IS THIS COURSE FOR?</h4>

    <p>Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that order BMPs.</p>

    <h4>WHO IS THE INSTRUCTOR?</h4>

    <p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>

    <p>...and clear understanding leads to mastery of BMP results interpretation. Learn more about Dr. Seheult.</p>

    <h4>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h4>

    <ul>
        <li>✔ A clear understanding of each possible BMP result: hyper and hyponatremia, hyper and hypokalemia, chloride and bicarbonate problems, BUN and creatinine problems, and hyper and hypoglycemia</li>
        <li>✔ Initial management and treatment recommendations based on the BMP result</li>
        <li>✔ Guidelines for when to order a BMP, and tips for following serial BMPs</li>
        <li>✔ A clinical perspective of BMP nuances, pitfalls, and patterns</li>
        <li>✔ Quick quiz questions to reinforce core concepts and help you study</li>
        <li>✔ Includes 7 CME Credits/MOC Points/CE</li>
        <li>✔ 1 year of unlimited access on up to 3 devices</li>
    </ul>
</div>
                `,
        imageUrl: 'img/course/bmp.png',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Medical Acid Base + ABGs',
        description: 'Medical Acid Base + ABGs courses',
        longDec: `
                <div>
  <h4>GAIN A CLEAR UNDERSTANDING OF ACID-BASE DISORDERS IN PATIENTS</h4>
  <p>
    Acid-base disturbances are common clinical problems. Accurate interpretation of lab tests in patients with acid-base issues is crucial for making a precise diagnosis and providing effective treatment. Immerse yourself in a recently updated series of concise videos, quizzes, and practice problems as you advance toward achieving acid-base mastery!
  </p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>
    Dr. Seheult is trusted by Universities, clinicians & students for his ability to illustrate key concepts so they are understood, not memorized...
  </p>
  <p>
    ... and clear understanding leads to mastery of medical acid-base!
  </p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>A systematic approach to lab results to spot abnormal acid-base findings and solve acid-base questions</li>
    <li>A clear understanding of the four primary types: metabolic acidosis, respiratory acidosis, metabolic alkalosis, and respiratory alkalosis</li>
    <li>Illustrations of Winter's Formulas, the Anion Gap, Compensation, and the balance involved with Bicarb, Carbon Dioxide, and more</li>
    <li>Hands-on interpretation practice with multiple practice cases. Dr. Seheult will work through these in the video in real-time</li>
    <li>A clinical perspective of acid-base nuances</li>
    <li>A post-course quiz to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>
                `,
        imageUrl: 'img/course/medicalAcid.png',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'pneumothorax + Chest Tube',
        description: 'Pneumothorac + Chest Tube courses',
        longDec: `
                <div>
  <h4>MANAGE PNEUMOTHORACES AND CHEST TUBES WITH CONFIDENCE</h4>
  <p>
    A pneumothorax is a critical condition that requires prompt diagnosis and intervention. Chest tube insertion is a life-saving procedure that every clinician should understand.
  </p>
  <p>
    Unfortunately, many healthcare professionals—including physicians, PAs, NPs, and RTs—struggle with the complexities of pneumothorax management and chest tube placement. Proper technique and decision-making are essential but often under-taught.
  </p>
  <p>
    Join renowned professor Roger Seheult, MD as he concisely explains the key components of the diagnosis, imaging, and treatment of a pneumothorax and chest tube management.
  </p>

  <h5>WHO IS THIS COURSE FOR?</h5>
  <p>
    Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that deal with pneumothoraces and chest tubes.
  </p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>
    Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...
  </p>
  <p>
    ...and clear understanding leads to mastery of treating a pneumothorax and chest tube management. <a href="#">Learn more about Dr. Seheult.</a>
  </p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>A clear understanding of the management of a pneumothorax</li>
    <li>How to diagnose a pneumothorax (and the difference between each type of spontaneous and non-spontaneous pneumothorax)</li>
    <li>How to utilize imaging to aid in the diagnosis - including recognizing lung sliding on ultrasound</li>
    <li>How to place and manage a chest tube (including utilization of a 3-container suction chest tube system)</li>
    <li>Quick quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 2.75 CME Credits/MOC Points/CE</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>

  <p>
    <strong>Start watching now</strong> (the first video is free and at the top of this page) and move towards mastery of Pneumothoraces and chest tubes!
  </p>
</div>
                `,
        imageUrl: 'img/course/pneumothorax.png',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Sleep Apnea',
        description: 'Sleep Apnea courses',
        longDec: `<div>
  <h4>Understand Sleep Apnea Symptoms, Diagnosis, and Treatment with This Clear and Concise Course by Dr. Seheult</h4>
  <p>
    We're glad you're here!
  </p>
  <p>
    You may have noticed that some (or all) of the videos in this course are also available at our MedCram YouTube channel... but stick around because all new MedCram videos will be available first here at MedCram.com (and publicly posted to YouTube weeks later... if at all).
  </p>
  <p>
    Also, a growing amount of MedCram content (videos, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.
  </p>
  <p>
    <strong>We've got you covered!</strong>
  </p>
  <p>
    MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Sleep Apnea Explained Clearly</strong> very informative, easy to follow, and fun... enjoy!
  </p>
</div>`,
        imageUrl: 'img/course/pneumothorax.png',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'CBC Results',
        description: 'CBC Results courses',
        imageUrl: 'img/course/cbcResult.png',
        longDec: `
                <div>
  <h4>INTERPRET CBC RESULTS QUICKLY & WITH CONFIDENCE</h4>
  <p>
    Are Complete Blood Count (CBC) results involved in your medical practice?
  </p>
  <p>
    Looking for clarity on how to quickly interpret and follow CBC results accurately?
  </p>
  <p>
    Join renowned instructor Dr. Seheult as he concisely explains the key components of the CBC... from anemia to thrombocytosis.
  </p>
  <p>
    After this series of short videos and quizzes, you'll be on your way to accurately interpret CBC results and save time doing so.
  </p>

  <h5>WHO IS THIS COURSE FOR?</h5>
  <p>
    Clinicians (MD, DO, NP, PA, RNs) and students in a variety of specialties that order CBCs.
  </p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>
    Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...
  </p>
  <p>
    ...and clear understanding leads to mastery of CBC results interpretation. <a href="#">Learn more about Dr. Seheult.</a>
  </p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>An understanding of each possible CBC result: leukocytosis, anemia, polycythemia, thrombocytopenia, etc.</li>
    <li>Initial management and treatment recommendations based on the CBC result - including blood transfusions and protocols for procedures</li>
    <li>Guidelines for when to order a CBC, the frequency to use for follow-up labs, and tips for following serial CBCs</li>
    <li>A clinical perspective of CBC nuances, pitfalls, and patterns</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>

  <p>
    <strong>Start watching now</strong> (the first video is free and at the top of this page) and move towards mastery of the CBC!
  </p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },

      {
        title: 'Vasopressors',
        description: 'Vasopressors courses',
        imageUrl: 'img/course/vasopressors.png',
        longDec: `
                <div>
  <h4>GAIN A CLEAR & LASTING UNDERSTANDING OF HOW TO USE VASOPRESSORS EFFECTIVELY</h4>
  <p>
    Having trouble keeping all the vasopressors & inotropes straight?
  </p>
  <p>
    Looking for an easy-to-follow method for determining which vasopressor to use (and in what order)?
  </p>
  <p>
    In <strong>Vasopressors Explained Clearly</strong>, renowned instructor Dr. Roger Seheult illustrates a concise way to understand vasopressors & inotropes, and how to systematically manage patients with hypotension & septic shock.
  </p>

  <h5>WHO IS THIS COURSE FOR?</h5>
  <p>
    Clinicians in emergency medicine, critical care, and ICU settings. Physicians, nurse practitioners, physician assistants, & nurses who seek to better understand the use of vasopressors & inotropes.
  </p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>
    Dr. Seheult is trusted by Universities, students, and medical professionals for his ability to illustrate key concepts so they are understood, not memorized...
  </p>
  <p>
    ...and clear understanding leads to competence and avoiding those dreaded feelings of information overload!
  </p>
  <p>
    It has never been easier to understand vasopressors, inotropes, & septic shock management. <strong>Watch this video series now</strong> to master this crucial emergency medicine & ICU skill.
  </p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>Key physiology of endogenous vs. exogenous vasopressors</li>
    <li>Illustrations of the receptors involved in mediating blood pressure</li>
    <li>A thorough comparison of each vasopressor + key differences</li>
    <li>A systematic approach to managing hypotension and septic shock</li>
    <li>Central line vs. alternative options for administration</li>
    <li>A clinical perspective of tips, nuances, & practice scenarios</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1.75 CME (Category 1), MOC Points, CE Credits Included</li>
    <li>1 year of full unlimited access on up to 3 devices</li>
  </ul>
</div>
                `,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Hyponatremia',
        description: 'Hyponatremia courses',
        imageUrl: 'img/course/hyponatremia.png',
        longDec: `<div>
  <h4>ENJOY A CLEAR & LASTING UNDERSTANDING OF HYPONATREMIA DIAGNOSIS & TREATMENT</h4>
  <p>
    Hyponatremia is the most common electrolyte disorder that clinicians encounter. Hyponatremia is also complex and often treated incorrectly.
  </p>
  <p>
    Get clarity on hyponatremia with renowned instructor Dr. Seheult. Master the key clinical concepts... from hypotonic to hypertonic hyponatremia, and everything in between.
  </p>

  <h5>WHO IS THIS FOR?</h5>
  <p>
    Clinicians (MD, DO, NP, PA, RNs) and students in a variety of specialties that encounter hyponatremia.
  </p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>
    Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...
  </p>
  <p>
    ...and clear understanding leads to mastery of hyponatremia. <a href="#">Learn more about Dr. Seheult.</a>
  </p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>An understanding of each type of hyponatremia from hypertonic to hypovolemic.</li>
    <li>Initial management and treatment recommendations based on the type and cause of hyponatremia</li>
    <li>A review of important concepts for understanding hyponatremia such as osmolality, tonicity, ADH, and aldosterone</li>
    <li>A clinical perspective of fluid balance</li>
    <li>Includes 1.25 CME Credits / MOC Points / CE</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>

  <p>
    <strong>Start watching now</strong> (the first video is free and at the top of this page). This complete course and CME / CE credits are available with MedCram All-Access.
  </p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Urinalysis',
        description: 'Urinalysis courses',
        longDec: `<div>
  <h4>CLEARLY UNDERSTAND & INTERPRET URINALYSIS RESULTS</h4>
  <p>
    From a simple urine dipstick test to microscopic examination, the urinalysis is among the most common and useful tests available.
  </p>
  <p>
    Looking for clarity on how to interpret urinalysis results?
  </p>
  <p>
    Are you brushing past some results because you don't understand their clinical significance?
  </p>
  <p>
    In <strong>Urinalysis Explained Clearly</strong>, renowned instructor Dr. Roger Seheult illustrates each urinalysis finding in a series of digestible videos, quizzes, and case studies.
  </p>

  <h5>WHO IS THIS COURSE FOR?</h5>
  <p>
    Clinicians and students in emergency medicine, critical care, and ICU settings. Physicians, nurse practitioners, physician assistants, & nurses who seek clarity with urinalysis interpretation.
  </p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>
    Dr. Seheult is trusted by Universities, students, and medical professionals for his ability to illustrate key concepts so they are understood, not memorized...
  </p>
  <p>
    ...and clear understanding leads to competence and avoiding those dreaded feelings of information overload!
  </p>
  <p>
    It has never been easier to understand urinalysis. <strong>Watch this video series now</strong> to achieve clarity - resulting in better patient care and exam scores.
  </p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>The pros and cons of each urine collection method</li>
    <li>A breakdown of what each urinalysis result means (protein, nitrites, blood, etc.)</li>
    <li>The difference between bilirubin and urobilinogen</li>
    <li>A review of urine electrolytes</li>
    <li>How to perform a gross assessment of urine</li>
    <li>Illustrations of the key urine crystals and casts</li>
    <li>Helpful ways to utilize equations such as FENa, FEUrea, TTKG, and Urinary anion gap</li>
    <li>Quiz questions and case studies to reinforce core concepts and help you study</li>
    <li>Includes 3 CME (Category 1), MOC Points, CE Credits</li>
    <li>1 year of full unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        imageUrl: 'img/course/urinalysis.png',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Acute Abdominal Pain',
        description: 'Acute Abdominal Pain courses',
        imageUrl: 'img/course/acute abdominal.png',
        longDec: `<div>
  <h4>EVALUATE & MANAGE ABDOMINAL PAIN SYSTEMATICALLY</h4>
  <p>
    Acute abdominal pain is one of the most common and feared symptoms in the hospital, emergency, and clinic settings. Join renowned instructor Dr. Seheult for a concise review and clear system to use when managing abdominal pain.
  </p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>A straightforward 4-step approach for evaluating acute abdominal pain in an adult and asking the right questions (useful for clinic, emergency, and hospital settings).</li>
    <li>An overview of many of the most common and life-threatening causes of acute abdominal pain — and the best imaging choice to evaluate them.</li>
    <li>Practical strategies to narrow an abdominal pain differential diagnosis based on associated symptoms.</li>
    <li>Interesting case studies for decision-making practice and quizzes to reinforce what you've learned.</li>
    <li>Includes 1.5 CME (Category 1), MOC Points, CE Credits</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>

  <h5>WHAT TOPICS ARE COVERED?</h5>
  <p>
    Appendicitis, RUQ pain, LLQ pain, RLQ pain, LUQ pain, epigastric pain, suprapubic pain, extra-abdominal causes of abdominal pain, periumbilical pain, DKA, MI, diffuse abdominal pain, hepatitis, cholecystitis, cholangitis, ultrasound, McBurney's Point, inguinal hernia, nephrolithiasis, IBS, mesenteric adenitis, diverticulitis, free air under the diaphragm, pancreatitis, gastritis pain, splenic abscess, gastric ulcer, urinary tract infection, intermittent abdominal pain, porphyria, shock, peritonitis, BRBPR, ruptured aortic aneurysm, intussusception, hyperactive bowel sounds, jaundice, PID, rebound tenderness, nausea and vomiting, & many others...
  </p>

  <h5>IS THIS COURSE COMPREHENSIVE?</h5>
  <p>
    No (that would take a long time). Dr. Seheult provides a straightforward approach to evaluate abdominal pain and valuable clinical perspective of important causes of abdominal pain. Learn a framework of acute abdominal pain that will make adding new information and skills easier.
  </p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Antibiotics Review',
        description: 'Antibiotics Review courses',
        longDec: `<div>
  <h4>UNDERSTAND THE KEY MEDICATIONS & CONCEPTS FROM ALL THE MAJOR ANTIBIOTIC CLASSES</h4>
  <p>
    Includes coverage, efficacy, differences between generations, important side effects, and more for the following classes:
  </p>
  <ul>
    <li>Penicillins</li>
    <li>Cephalosporins</li>
    <li>Fluoroquinolones</li>
    <li>Macrolides</li>
    <li>Tetracyclines</li>
    <li>Aminoglycosides</li>
    <li>Monobactams and Carbapenems</li>
    <li>Vancomycin</li>
    <li>Trimethoprim/sulfamethoxazole (Bactrim, Septra)</li>
    <li>Clindamycin</li>
  </ul>

  <h5>Mini-quizzes reinforce understanding of key concepts.</h5>
  <p>
    1 Year of Unlimited Access on up to 3 devices<br>
    Includes 3 CME / MOC Points / CE Credits<br>
    Includes mp3 files of each video for listening on the go
  </p>
</div>`,
        imageUrl: 'img/course/Antibiotic.png',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Asthma',
        description: 'Asthma courses',
        imageUrl: 'img/course/asthma.png',
        longDec: `<div>
  <p>Understand asthma with this clear medical lecture by Dr. Roger Seheult. Includes discussion and illustrations on asthma pathophysiology, signs and symptoms of asthma, diagnosis, triggers (GERD, postnasal drip, down feathers, etc.), flow volume loops, Samter's Triad. Video 2 covers a further discussion on the diagnosis of asthma, methacholine challenge test, and stepwise approach for the treatment of asthma (rescue inhaler / beta agonists, corticosteroids, montelukast etc.).</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Asthma Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Pulmonary Function Test ',
        description: 'Pulmonary Function Test courses',
        imageUrl: 'img/course/pulmonary.png',

        longDec: `<div>
  <h4>INTERPRET PULMONARY FUNCTION TESTS (PFTs) WITH CONFIDENCE</h4>
  <p>Pulmonary function tests are essential tools for diagnosing and managing various respiratory diseases. PFTs are among the most common lung-related tests ordered by clinicians.</p>

  <p>Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians have not learned how to unlock the full potential of PFTs and avoid common interpretation pitfalls.</p>

  <p>Join renowned professor Roger Seheult, MD as he concisely explains the key components of the PFTs that you need to know... from using flow volume loops to diagnose asthma and COPD to the power of the Methacholine challenge test and DLCO.</p>

  <p>After this series of short videos and quizzes, you'll be on your way to accurately interpreting PFT results, and save time in the process.</p>

  <h5>Leukopenia causes and neutropenia</h5>

  <h3>WHO IS THIS COURSE FOR?</h3>
  <p>Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that order PFTs.</p>

  <h3>WHO IS THE INSTRUCTOR?</h3>
  <p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
  <p>...and clear understanding leads to mastery of PFT results interpretation. <a href="#">Learn more about Dr. Seheult</a>.</p>

  <h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
  <ul>
    <li>A clear understanding of each pulmonary function test</li>
    <li>How to use PFTs to diagnose a variety of common lung diseases</li>
    <li>Guidelines for when to order PFTs, and tips for following serial PFTs</li>
    <li>A clinical perspective of PFT nuances, pitfalls, and patterns</li>
    <li>Quick quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 2.0 CME Credits/MOC Points/CE</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>

  <p><strong>Start watching now</strong> (the first video is free and at the top of this page) and move towards mastery of PFTs!</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Ultrasound ',
        description: 'Ultrasound courses',
        imageUrl: 'img/course/ultrasound.png',

        longDec: `<div>
  <h4>INTERESTED IN MAKING ULTRASOUND PART OF YOUR CLINICAL PRACTICE?</h4>
  <p>Renowned instructor Dr. Jacquet illustrates core ultrasound concepts in a way that you will understand and remember.</p>

  <h3>WHO IS THIS COURSE FOR?</h3>
  <p>Students and medical professionals in a variety of medical fields. Physicians, NPs, PAs, RTs, nurses, & technicians who seek clinical/ point-of-care ultrasound (POCUS) to become a part of their practice.</p>

  <p>For those new to ultrasound, this course provides an excellent foundation prior to participating in hands-on training of specific exam techniques.</p>

  <p>For those with prior ultrasound experience, this course provides a focused review of the core concepts needed to advance skills and understanding.</p>

  <h3>Learn the key elements of each ultrasound probe</h3>

  <h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
  <ul>
    <li>An overview of ultrasound transducers and what they're used for</li>
    <li>Key ultrasound terminology, orientation, imaging planes, and biosafety</li>
    <li>Step by step illustrations of the nobs, dials, and modes of an ultrasound machine ("knobology")</li>
    <li>Examples of various ultrasound artifacts that impact ultrasound images</li>
    <li>How to handle an ultrasound transducer and set up the machine for your first ultrasound exam</li>
    <li>Quiz questions after each video to reinforce essential concepts</li>
    <li>Includes 4 CME (category 1), MOC Points, CE Credits</li>
    <li>1 year of unlimited access, so you can review videos as needed (all MedCram courses are mobile/tablet friendly)</li>
  </ul>

  <p><strong>Start watching now</strong> (the first video & quiz is free). This complete course and CME /CE credits are available with MedCram All-Access.</p>

  <h3>INTERVIEW WITH DR. JACQUET ON THE BENEFITS OF POINT OF CARE ULTRASOUND:</h3>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Key Pulmonary Skills & Diseases ',
        description: 'Key Pulmonary Skills & Diseases courses',
        imageUrl: 'img/course/keyPulmonary.png',

        longDec: `<div>
  <h4>EFFICIENTLY REVIEW THE MOST COMMON PULMONARY DISEASES AND DIAGNOSTIC PROCEDURES</h4>
  <p>This video series is designed for clinicians in primary care, emergency medicine, critical care, pulmonology, and many other medical fields that interact with common diseases of the lungs.</p>

  <p>Enjoy a high-yield and comprehensive review of: <strong>Pulmonary Embolism, Hypoxemia, Pleural Effusion, Pneumonia, Asthma, COPD, Sleep Apnea, Chronic Cough, and Lung Cancer</strong>. This course also reviews the use of procedures and interventions such as <strong>Pulmonary Function Tests, Chest X-Ray, CT Scan of the Chest, and Mechanical Ventilation</strong>.</p>

  <h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
  <ul>
    <li>Concise explanations of the most common and important pulmonary diseases</li>
    <li>Colorful illustrations and images to clarify key concepts</li>
    <li>A clinical perspective of pulmonary disease nuances, scenarios, and treatment recommendations</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 16 CME credits (category 1), MOC Points, & CE credits</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Mechanical Ventilation',
        description: 'Mechanical Ventilation courses',
        imageUrl: 'img/course/mechanical.png',

        longDec: `<div>
  <h4>MECHANICAL VENTILATION, SIMPLIFIED</h4>
  <p><strong>Note:</strong> Due to the COVID-19 pandemic, we've decided to make this course free. We want as many clinicians as possible to have the opportunity to review or learn mechanical ventilation. We've also added the content from this course to a COVID-19 Ventilator Course that is also available free.</p>

  <p>Enjoy a concise, step-by-step guide to clarity of vent modes and settings. Learn physiology concepts such as the pressure-volume relationship which will lead to a lasting understanding of key concepts.</p>

  <p>Enjoy a clinical perspective for managing conditions such as COPD and ARDS with mechanical ventilation. Finish the course strong with a checklist on how to safely liberate a patient from a ventilator.</p>

  <h3>WHO IS THE INSTRUCTOR?</h3>
  <p>Roger Seheult is trusted by Universities, clinicians & students for his ability to illustrate key concepts so they are understood, not memorized...</p>
  <p>... and clear understanding leads to mastery of mechanical ventilation. Yes, you can learn mechanical ventilation without information overload!</p>

  <h3>HOW IS THE COURSE LAID OUT?</h3>
  <p>You'll enjoy a series of concise videos and quizzes as you move towards mastery. It has never been easier to get clarity with mechanical ventilation. Start watching now (several videos are "free trial") and take a big step toward confidently managing patients on a ventilator!</p>

  <h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
  <ul>
    <li>An understanding of how each major mode of mechanical ventilation works</li>
    <li>A clear approach to utilizing settings such as plateau pressure and PEEP to manage conditions such as ARDS and COPD</li>
    <li>Reinforcement of key ventilation/physiology concepts including pressure-volume relationships</li>
    <li>A "liberation from the ventilator" checklist</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 1.25 CME (category 1), MOC Points, CE Credits</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Vent Pearls ',
        description: 'Vent Pearls courses',
        imageUrl: 'img/course/ventPearls.png',

        longDec: `<div>
  <h4>TAKE YOUR VENT SKILLS TO THE NEXT LEVEL!</h4>
  <p><strong>Note:</strong> Due to the COVID-19 pandemic, we've decided to make this course free. We want as many clinicians as possible to have the opportunity to review or learn mechanical ventilation. We've also added the content from this course to a COVID-19 Ventilator Course that is also available free.</p>

  <p>Work through a variety of clinical scenarios involving mechanical ventilation with Dr. Seheult. This advanced course is meant to build on skills learned in <em>Mechanical Ventilation Explained Clearly</em>.</p>

  <h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
  <ul>
    <li>A variety of mechanical ventilator pearls: common mistakes, nuances, and strategies for optimal patient care</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 2 CME credits (Category 1), MOC Points, CE Credits</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Mpox Virus ',
        description: 'Mpox Virus courses',
        longDec: `<div>
  <h4>Mpox Update Explained Clearly</h4>
  <p><em>Mpox Update Explained Clearly</em> is an online course designed to enhance primary care clinicians' knowledge and skills regarding mpox (formerly known as Monkeypox). This course provides an in-depth review of the mpox virus, including its transmission, clinical manifestations, treatment options, and available vaccines. Through a blend of video presentations and discussions of clinical scenarios and practice cases, participants will gain a clear and practical understanding of mpox and its management. This updated CME course focuses on the new variant strain (clade) of mpox, highlighting its distinct characteristics and clinical implications.</p>

  <p>The sessions included in this course take a departure from the traditional slide presentation style lecture. Instead, the course is comprised of a video lecture aided by real-time instructor-led chalkboard visuals. This method of learning allows for the subject matter to be broken down to the basics and is designed to increase learning and retention.</p>
</div>`,
        imageUrl: 'img/course/mpox.png',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
    ],
  },
  {
    title: 'Critical Care',
    description: 'Courses on critical care',
    slug: 'critical-care',
    children: [
      {
        title: 'ECG Interpretation',
        imageUrl: 'img/course/ECG-interpolation.png',

        description: 'ECG interpretation courses',
        longDec: `<div>
  <h4>CONFIDENTLY INTERPRET EKG/ECGs IN A SYSTEMATIC WAY</h4>
  <p>Struggling to interpret EKGs efficiently?</p>
  <p>Are you looking for just the right amount of information & physiology so you remember a simple, step-by-step approach to EKG interpretation?</p>
  <p>In <em>ECG/EKG Interpretation Explained Clearly</em>, renowned Professor Roger Seheult, MD teaches a streamlined "system" to accurately interpret ECGs.</p>

  <h5>THE PREMIER ONLINE ECG COURSE FOR PHYSICIANS, NPs, PAs, AND MORE</h5>
  <p>This course is highly-rated by clinicians (Physicians, NPs, and PAs) in a variety of specialties including primary care and emergency medicine. Additionally, nurses (particularly those working in emergency and critical care), have given excellent reviews.</p>

  <h3>ECG Interpretation Illustrations Examples</h3>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>Professor Roger Seheult, MD is trusted by universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
  <p>... and clear understanding leads to mastery of key ECG skills. Yes, you can avoid those dreaded feelings of ECG information overload!</p>

  <h5>HOW IS THE COURSE LAID OUT?</h5>
  <p>You'll enjoy a series of concise videos, quizzes, and practice ECGs as you move towards mastery. It has never been easier to get clarity with ECG interpretation.</p>
  <p>Start watching now (several videos are "free trial") and achieve confidence with ECG!</p>

  <h3>System for Reading an ECG and P waves</h3>

  <h5>WHAT YOU WILL RECEIVE FROM THIS ECG/EKG COURSE:</h5>
  <ul>
    <li>An understanding of the heart's electrical activity</li>
    <li>Illustrations and examples of all major abnormal EKG findings</li>
    <li>A systematic approach to spotting abnormal findings</li>
    <li>Hands-on EKG interpretation practice with 11 blank practice EKGs. Dr. Seheult will interpret these EKGs in the video so you can check your work</li>
    <li>Reinforcement of key cardiac physiology concepts</li>
    <li>A clinical perspective on how to read an EKG, electrocardiogram nuances, scenarios, and rare findings</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>10 CME (category 1), MOC Points, CE Credits included</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'BMP/Chem-7 Results',
        imageUrl: 'img/course/bmp.png',

        description: 'BMP/Chem-7 results courses',
        longDec: `<div>
  <h4>INTERPRET BASIC METABOLIC PANEL (CHEM-7) RESULTS WITH CONFIDENCE</h4>
  <p>The basic metabolic panel (BMP), also known as the "CHEM-7," is one of the most commonly ordered lab tests by clinicians in the hospital and the outpatient setting.</p>

  <p>Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians make common interpretation mistakes - and most have not learned to unlock the full and great potential of the BMP.</p>

  <p>Join renowned professor Roger Seheult, MD as he concisely explains the key components of the BMP that you need to know... from managing creatinine problems to clarity on hyponatremia.</p>

  <p>After this series of short videos and quizzes, you'll be on your way to accurately interpret BMP results and save time in the process.</p>

  <h3>Leukopenia causes and neutropenia</h3>

  <h5>WHO IS THIS COURSE FOR?</h5>
  <p>Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that order BMPs.</p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
  <p>...and clear understanding leads to mastery of BMP results interpretation. <a href="#">Learn more about Dr. Seheult</a>.</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>A clear understanding of each possible BMP result: hyper and hyponatremia, hyper and hypokalemia, chloride and bicarbonate problems, BUN and creatinine problems, and hyper and hypoglycemia</li>
    <li>Initial management and treatment recommendations based on the BMP result</li>
    <li>Guidelines for when to order a BMP, and tips for following serial BMPs</li>
    <li>A clinical perspective of BMP nuances, pitfalls, and patterns</li>
    <li>Quick quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 7 CME Credits/MOC Points/CE</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>

  <h3>Blood transfusion levels based on hematocrit and smears</h3>

  <p><strong>Start watching now</strong> (the first video is free and at the top of this page) and move towards mastery of the BMP!</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Medical Acid Base + ABGs',
        imageUrl: 'img/course/medicalAcid.png',

        description: 'Medical Acid Base + ABGs courses',
        longDec: `<div>
  <h4>GAIN A CLEAR UNDERSTANDING OF ACID-BASE DISORDERS IN PATIENTS</h4>
  <p>Acid-base disturbances are common clinical problems. Accurate interpretation of lab tests in patients with acid-base issues is crucial for making a precise diagnosis and providing effective treatment. Immerse yourself in a recently updated series of concise videos, quizzes, and practice problems as you advance toward achieving acid-base mastery!</p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>Dr. Seheult is trusted by Universities, clinicians & students for his ability to illustrate key concepts so they are understood, not memorized...</p>
  <p>... and clear understanding leads to mastery of medical acid-base!</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>A systematic approach to lab results to spot abnormal acid-base findings and solve acid-base questions</li>
    <li>A clear understanding of the four primary types: metabolic acidosis, respiratory acidosis, metabolic alkalosis, and respiratory alkalosis</li>
    <li>Illustrations of Winter's Formulas, the Anion Gap, Compensation, and the balance involved with Bicarb, Carbon Dioxide, and more</li>
    <li>Hands-on interpretation practice with multiple practice cases. Dr. Seheult will work through these in the video in real-time</li>
    <li>A clinical perspective of acid-base nuances</li>
    <li>A post-course quiz to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'pneumothorax + Chest Tube',
        imageUrl: 'img/course/pneumothorax.png',

        description: 'Pneumothorac + Chest Tube courses',
        longDec: `<div>
  <h4>MANAGE PNEUMOTHORACES AND CHEST TUBES WITH CONFIDENCE</h4>
  <p>A pneumothorax is a critical condition that requires prompt diagnosis and intervention. Chest tube insertion is a life-saving procedure that every clinician should understand.</p>

  <p>Unfortunately, many healthcare professionals—including physicians, PAs, NPs, and RTs—struggle with the complexities of pneumothorax management and chest tube placement. Proper technique and decision-making are essential but often under-taught.</p>

  <p>Join renowned professor Roger Seheult, MD as he concisely explains the key components of the diagnosis, imaging, and treatment of a pneumothorax and chest tube management.</p>

  <h3>Leukopenia causes and neutropenia</h3>

  <h5>WHO IS THIS COURSE FOR?</h5>
  <p>Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that deal with pneumothoraces and chest tubes.</p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
  <p>...and clear understanding leads to mastery of treating a pneumothorax and chest tube management. <a href="#">Learn more about Dr. Seheult</a>.</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>A clear understanding of the management of a pneumothorax</li>
    <li>How to diagnose a pneumothorax (and the difference between each type of spontaneous and non-spontaneous pneumothorax)</li>
    <li>How to utilize imaging to aid in the diagnosis - including recognizing lung sliding on ultrasound</li>
    <li>How to place and manage a chest tube (including utilization of a 3-container suction chest tube system)</li>
    <li>Quick quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 2.75 CME Credits/MOC Points/CE</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>

  <h3>Blood transfusion levels based on hematocrit and smears</h3>

  <p><strong>Start watching now</strong> (the first video is free and at the top of this page) and move towards mastery of Pneumothoraces and chest tubes!</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Acute Renal Failure',
        imageUrl: 'img/course/acuteRentalFalture.png',

        description: 'Acute Renal Failure courses',
        longDec: `<div>
  <p>Understand acute renal failure (acute kidney injury) diagnosis and treatment with this clear medical education course by Dr. Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram allows you to cut down on study time and maximize medical retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Acute Renal Failure Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'CBC Results',
        imageUrl: 'img/course/cbcResult.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>INTERPRET CBC RESULTS QUICKLY & WITH CONFIDENCE</h4>
  <p>Are Complete Blood Count (CBC) results involved in your medical practice?</p>
  <p>Looking for clarity on how to quickly interpret and follow CBC results accurately?</p>
  <p>Join renowned instructor Dr. Seheult as he concisely explains the key components of the CBC... from anemia to thrombocytosis.</p>
  <p>After this series of short videos and quizzes, you'll be on your way to accurately interpret CBC results and save time doing so.</p>

  <h3>Leukopenia causes and neutropenia</h3>

  <h5>WHO IS THIS COURSE FOR?</h5>
  <p>Clinicians (MD, DO, NP, PA, RNs) and students in a variety of specialties that order CBCs.</p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
  <p>...and clear understanding leads to mastery of CBC results interpretation. <a href="#">Learn more about Dr. Seheult</a>.</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>An understanding of each possible CBC result: leukocytosis, anemia, polycythemia, thrombocytopenia, etc.</li>
    <li>Initial management and treatment recommendations based on the CBC result - including blood transfusions and protocols for procedures</li>
    <li>Guidelines for when to order a CBC, the frequency to use for follow up labs, and tips for following serial CBCs</li>
    <li>A clinical perspective of CBC nuances, pitfalls, and patterns</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>

  <h3>Blood transfusion levels based on hematocrit and smears</h3>

  <p><strong>Start watching now</strong> (the first video is free and at the top of this page) and move towards mastery of the CBC!</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Vasopressors',
        imageUrl: 'img/course/vasopressors.png',

        description: 'Vasopressors courses',
        longDec: `<div>
  <h4>GAIN A CLEAR & LASTING UNDERSTANDING OF HOW TO USE VASOPRESSORS EFFECTIVELY</h4>
  <p>Having trouble keeping all the vasopressors & inotropes straight?</p>
  <p>Looking for an easy-to-follow method for determining which vasopressor to use (and in what order)?</p>
  <p>In <em>Vasopressors Explained Clearly</em>, renowned instructor Dr. Roger Seheult illustrates a concise way to understand vasopressors & inotropes, and how to systematically manage patients with hypotension & septic shock.</p>

  <h5>WHO IS THIS COURSE FOR?</h5>
  <p>Clinicians in emergency medicine, critical care, and ICU settings. Physicians, nurse practitioners, physician assistants, & nurses who seek to better understand the use of vasopressors & inotropes.</p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>Dr. Seheult is trusted by Universities, students, and medical professionals, for his ability to illustrate key concepts so they are understood, not memorized...</p>
  <p>... and clear understanding leads to competence and avoiding those dreaded feelings of information overload!</p>
  <p>It has never been easier to understand vasopressors, inotropes, & septic shock management. Watch this video series now to master this crucial emergency medicine & ICU skill.</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>Key physiology of endogenous vs. exogenous vasopressors</li>
    <li>Illustrations of the receptors involved in mediating blood pressure</li>
    <li>A thorough comparison of each vasopressor + key differences</li>
    <li>A systematic approach to managing hypotension and septic shock.</li>
    <li>Central line vs. alternative options for administration.</li>
    <li>A clinical perspective of tips, nuances, & practice scenarios.</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1.75 CME (Category 1), MOC Points, CE Credits Included</li>
    <li>1 year of full unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Hyponatremia',
        imageUrl: 'img/course/hyponatremia.png',

        description: 'Hyponatremia courses',
        longDec: `<div>
  <h4>ENJOY A CLEAR & LASTING UNDERSTANDING OF HYPONATREMIA DIAGNOSIS & TREATMENT</h4>
  <p>Hyponatremia is the most common electrolyte disorder that clinicians encounter. Hyponatremia is also complex and often treated incorrectly.</p>
  <p>Get clarity on hyponatremia with renowned instructor Dr. Seheult. Master the key clinical concepts... from hypotonic to hypertonic hyponatremia, and everything in between.</p>

  <h5>WHO IS THIS FOR?</h5>
  <p>Clinicians (MD, DO, NP, PA, RNs) and students in a variety of specialties that encounter hyponatremia.</p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
  <p>...and clear understanding leads to mastery of hyponatremia. <a href="#">Learn more about Dr. Seheult</a>.</p>

  <h3>Dr. Seheult illustrating different hyponatremia types</h3>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>An understanding of each type of hyponatremia from hypertonic to hypovolemic.</li>
    <li>Initial management and treatment recommendations based on the type and cause of hyponatremia</li>
    <li>A review of important concepts for understanding hyponatremia such as osmolality, tonicity, ADH, and aldosterone</li>
    <li>A clinical perspective of fluid balance</li>
    <li>Includes 1.25 CME Credits / MOC Points / CE</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>

  <p><strong>Start watching now</strong> (the first video is free and at the top of this page). This complete course and CME /CE credits are available with MedCram All-Access.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Urinalysis',
        imageUrl: 'img/course/urinalysis.png',

        description: 'Urinalysis courses',
        longDec: `<div>
  <h4>CLEARLY UNDERSTAND & INTERPRET URINALYSIS RESULTS</h4>
  <p>From a simple urine dipstick test to microscopic examination, the urinalysis is among the most common and useful tests available.</p>
  <p>Looking for clarity on how to interpret urinalysis results?</p>
  <p>Are you brushing past some results because you don't understand their clinical significance?</p>
  <p>In <em>Urinalysis Explained Clearly</em>, renowned instructor Dr. Roger Seheult illustrates each urinalysis finding in a series of digestible videos, quizzes, and case studies.</p>

  <h5>WHO IS THIS COURSE FOR?</h5>
  <p>Clinicians and students in emergency medicine, critical care, and ICU settings. Physicians, nurse practitioners, physician assistants, & nurses who seek clarity with urinalysis interpretation.</p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>Dr. Seheult is trusted by Universities, students, and medical professionals, for his ability to illustrate key concepts so they are understood, not memorized...</p>
  <p>... and clear understanding leads to competence and avoiding those dreaded feelings of information overload!</p>
  <p>It has never been easier to understand urinalysis. Watch this video series now to achieve clarity - resulting in better patient care and exam scores.</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>The pros and cons of each urine collection method</li>
    <li>A breakdown of what each urinalysis result means (protein, nitrites, blood, etc.)</li>
    <li>The difference between bilirubin and urobilinogen</li>
    <li>A review of urine electrolytes</li>
    <li>How to perform a gross assessment of urine</li>
    <li>Illustrations of the key urine crystals and casts</li>
    <li>Helpful ways to utilize equations such as FENa, FEUrea, TTKG, and Urinary anion gap</li>
    <li>Quiz questions and case studies to reinforce core concepts and help you study</li>
    <li>Includes 3 CME (Category 1), MOC Points, CE Credits</li>
    <li>1 year of full unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Hypertensive Crisis',
        imageUrl: 'img/course/HypertensiveCrisis.png',

        description: 'Urinalysis courses',
        longDec: `<div>
  <h4>RECOGNIZE AND TREAT HYPERTENSIVE URGENCIES AND EMERGENCIES WITH CONFIDENCE</h4>
  <p>An elevated blood pressure can be an "urgency" or true emergency. What are the initial steps and how does a clinician differentiate between the two? What treatment steps should be taken (and over what amount of time)? This high-yield course will break down the essentials of hypertensive crises in classic MedCram fashion.</p>

  <p>Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians make common interpretation mistakes - and do not understand the nuances of how to recognize and treat hypertensive crises.</p>

  <p>Join renowned professor Roger Seheult, MD as he concisely explains the key components of the hypertensive crisis that you need to know... from managing hypertension effectively in the clinic to the ICU setting.</p>

  <p>After this series of short videos and quizzes, you'll be on your way to effectively managing hypertensive crises and save time in the process.</p>

  <h3>Leukopenia causes and neutropenia</h3>

  <h5>WHO IS THIS COURSE FOR?</h5>
  <p>Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that treat hypertension.</p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
  <p>...and clear understanding leads to mastery of hypertensive urgencies and emergencies. <a href="#">Learn more about Dr. Seheult</a>.</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>A clear understanding of how to efficiently recognize hypertensive urgencies and emergencies</li>
    <li>How to manage and treat hypertensive crises, and what level of treatment the patient should receive (clinic vs. hospital vs. ICU)</li>
    <li>A clinical perspective of hypertensive crises nuances, pitfalls, and patterns</li>
    <li>Quick quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>

  <p><strong>Start watching now</strong> (the first video is free and at the top of this page) and move towards mastery of hypertensive crises!</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Acute Abdominal Pain',
        imageUrl: 'img/course/acute abdominal.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>EVALUATE & MANAGE ABDOMINAL PAIN SYSTEMATICALLY</h4>
  <p>Acute abdominal pain is one of the most common and feared symptoms in the hospital, emergency, and clinic settings. Join renowned instructor Dr. Seheult for a concise review and clear system to use when managing abdominal pain.</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>A straightforward 4-step approach for evaluating acute abdominal pain in an adult and asking the right questions (useful for clinic, emergency, and hospital settings).</li>
    <li>An overview of many of the most common and life-threatening causes of acute abdominal pain — and the best imaging choice to evaluate them.</li>
    <li>Practical strategies to narrow an abdominal pain differential diagnosis based on associated symptoms.</li>
    <li>Interesting case studies for decision-making practice and quizzes to reinforce what you've learned.</li>
    <li>Includes 1.5 CME (category 1), MOC Points, CE Credits</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>

  <h5>WHAT TOPICS ARE COVERED?</h5>
  <p>Appendicitis, RUQ pain, LLQ pain, RLQ pain, LUQ pain, epigastric pain, suprapubic pain, extra-abdominal causes of abdominal pain, periumbilical pain, DKA, MI, diffuse abdominal pain, hepatitis, cholecystitis, cholangitis, ultrasound, McBurney's Point, inguinal hernia, nephrolithiasis, IBS, mesenteric adenitis, diverticulitis, free air under the diaphragm, pancreatitis, gastritis pain, splenic abscess, gastric ulcer, urinary tract infection, intermittent abdominal pain, porphyria, shock, peritonitis, BRBPR, ruptured aortic aneurysm, intussusception, hyperactive bowel sounds, jaundice, PID, rebound tenderness, nausea and vomiting, & and many others...</p>

  <h5>IS THIS COURSE COMPREHENSIVE?</h5>
  <p>No (that would take a long time). Dr. Seheult provides a straightforward approach to evaluate abdominal pain and valuable clinical perspective of important causes of abdominal pain. Learn a framework of acute abdominal pain that will make adding new information and skills easier.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Antibiotics Review',
        imageUrl: 'img/course/Antibiotic.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>UNDERSTAND THE KEY MEDICATIONS & CONCEPTS FROM ALL THE MAJOR ANTIBIOTIC CLASSES</h4>
  <p>Includes coverage, efficacy, differences between generations, important side effects, and more for the following classes:</p>

  <ul>
    <li>Penicillins</li>
    <li>Cephalosporins</li>
    <li>Fluoroquinolones</li>
    <li>Macrolides</li>
    <li>Tetracyclines</li>
    <li>Aminoglycosides</li>
    <li>Monobactams and Carbapenems</li>
    <li>Vancomycin</li>
    <li>Trimethoprim/sulfamethoxazole (Bactrim, Septra)</li>
    <li>Clindamycin</li>
  </ul>

  <p>Mini-quizzes reinforce understanding of key concepts.</p>
  <p>1 Year of Unlimited Access on up to 3 devices</p>
  <p>Includes 3 CME / MOC Points / CE Credits</p>
  <p>Includes mp3 files of each video for listening on the go</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Ultrasound',
        imageUrl: 'img/course/ultrasound.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>INTERESTED IN MAKING ULTRASOUND PART OF YOUR CLINICAL PRACTICE?</h4>
  <p>Renowned instructor Dr. Jacquet illustrates core ultrasound concepts in a way that you will understand and remember.</p>

  <h5>WHO IS THIS COURSE FOR?</h5>
  <p>Students and medical professionals in a variety of medical fields. Physicians, NPs, PAs, RTs, nurses, & technicians who seek clinical/ point-of-care ultrasound (POCUS) to become a part of their practice.</p>

  <p>For those new to ultrasound, this course provides an excellent foundation prior to participating in hands-on training of specific exam techniques.</p>

  <p>For those with prior ultrasound experience, this course provides a focused review of the core concepts needed to advance skills and understanding.</p>

  <h3>Learn the key elements of each ultrasound probe</h3>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>An overview of ultrasound transducers and what they're used for</li>
    <li>Key ultrasound terminology, orientation, imaging planes, and biosafety</li>
    <li>Step-by-step illustrations of the knobs, dials, and modes of an ultrasound machine ("knobology")</li>
    <li>Examples of various ultrasound artifacts that impact ultrasound images</li>
    <li>How to handle an ultrasound transducer and set up the machine for your first ultrasound exam</li>
    <li>Quiz questions after each video to reinforce essential concepts</li>
    <li>Includes 4 CME (category 1), MOC Points, CE Credits</li>
    <li>1 year of unlimited access, so you can review videos as needed (all MedCram courses are mobile/tablet friendly)</li>
  </ul>

  <p><strong>Start watching now</strong> (the first video & quiz is free). This complete course and CME /CE credits are available with MedCram All-Access.</p>

  <h3>INTERVIEW WITH DR. JACQUET ON THE BENEFITS OF POINT OF CARE ULTRASOUND:</h3>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'FAST Exam fastExam.png',
        description: 'CBC Results courses',
        imageUrl: 'img/course/fastExam.png',

        longDec: `<div>
  <h4>CONFIDENTLY PERFORM & INTERPRET THE FAST ULTRASOUND EXAM</h4>
  <p>Need to learn FAST for your job or rotation in the trauma or emergency setting? Looking to improve your FAST technique & efficiency?</p>

  <p>In <em>FAST Exam Explained Clearly</em>, ultrasound expert & ED physician Joshua Jacquet, MD illustrates a straightforward system that will have you performing FAST & Extended FAST Exams efficiently and accurately.</p>

  <p>The Focused Assessment with Sonography in Trauma (FAST) has become an integral part of a trauma survey, and is performed immediately after the primary survey of the ATLS protocol…</p>

  <p>… and for good reasons: FAST achieves similar results in detecting hemoperitoneum as both CT scan and diagnostic peritoneal lavage, but is faster, cheaper, and avoids radiation or an invasive procedure.</p>

  <p>Additionally, the Extended FAST Exam (EFAST) will detect hemopericardium, hemothorax, & pneumothorax.</p>

  <p>Many trauma patients have internal injuries that are not apparent on physical exam. A properly performed EFAST identifies significant bleeding into the peritoneal, pleural, or pericardial spaces and expedites a potentially life-saving intervention.</p>

  <p>Watch this video series now for a clear and enjoyable approach to mastering the FAST & EFAST bedside Exams.</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>Essential background info and indications for the FAST Exam</li>
    <li>A clear & concise method for performing the 4 classic FAST windows (RUQ, LUQ, Pelvic, & Cardiac)</li>
    <li>Steps to effectively perform the EFAST Exam and assess the pleural space and lung sliding</li>
    <li>Tips & nuances for clinical application & additional point-of-care ultrasound uses (POCUS)</li>
    <li>How to assess for hemothorax and pneumothorax with numerous examples of each</li>
    <li>Quiz questions to reinforce core concepts and help you study.</li>
    <li>5 trauma cases that Dr. Jacquet works through to expand your understanding</li>
    <li>1 year of full unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Lung Ultrasound',
        imageUrl: 'img/course/lungUltrasound (pulmo).png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>TAKE YOUR CLINICAL SKILLS TO THE NEXT LEVEL - FAST & ACCURATE DIAGNOSIS AT THE BEDSIDE THAT "PRACTICALLY FEELS LIKE CHEATING."</h4>
  <p>Lung Ultrasound (LUS) is becoming a critical skill for clinicians of all levels. LUS has proven to be useful in a wide variety of acute and chronic conditions. As a result, it is rapidly gaining popularity across many different medical specialties.</p>

  <p>Lung Ultrasound is relatively easy to learn, quick to perform at the bedside, and outperforms the accuracy of a chest X-ray for most lung conditions…</p>

  <p>In fact, LUS rivals the accuracy of CT imaging for acute respiratory failure - without the radiation. Therefore, LUS can safely be utilized in all patient populations (including pediatrics and pregnancy), both inpatient and outpatient.</p>

  <h3>Lung Ultrasound Clinical Point of Care</h3>

  <p>In <em>Lung Ultrasound Explained Clearly</em>, you'll enjoy a series of concise videos, quizzes, and case studies as you move towards mastery. It has never been easier to get clarity with Lung Ultrasound. Start watching now (some videos are "free trial") and have confidence with this exciting and incredibly useful imaging modality!</p>

  <p>Clearly understand lung ultrasound findings in the diagnoses of COPD, asthma, pneumothorax, pulmonary embolism, pulmonary edema, pneumonia, pleural effusion, acute respiratory distress syndrome, and more...</p>

  <p>This non-traditional program has been approved for 6.25 contact hours Continuing Respiratory Care Education (CRCE) credit by the American Association for Respiratory Care. Course #184591000.</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>A systematic approach to performing a bedside ultrasound and spotting abnormal findings</li>
    <li>Illustrations and examples of all major abnormal LUS findings</li>
    <li>Recognize key patterns on lung ultrasound and what they mean clinically</li>
    <li>Learn an evidence-based protocol (the BLUE protocol) for diagnosing causes of acute respiratory failure with a 90.5% accuracy!</li>
    <li>Understand how LUS can be used adjunctly in airway and ventilator management</li>
    <li>Reinforcement of key concepts with actual patient cases</li>
    <li>6.25 CRCE Contact Hours included</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Key Pulmonary Skills & Diseases',
        imageUrl: 'img/course/keyPulmonary.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>EFFICIENTLY REVIEW THE MOST COMMON PULMONARY DISEASES AND DIAGNOSTIC PROCEDURES</h4>
  <p>This video series is designed for clinicians in primary care, emergency medicine, critical care, pulmonology, and many other medical fields that interact with common diseases of the lungs.</p>

  <p>Enjoy a high-yield and comprehensive review of: <strong>Pulmonary Embolism, Hypoxemia, Pleural Effusion, Pneumonia, Asthma, COPD, Sleep Apnea, Chronic Cough, and Lung Cancer</strong>. This course also reviews the use of procedures and interventions such as <strong>Pulmonary Function Tests, Chest X-Ray, CT Scan of the Chest, and Mechanical Ventilation</strong>.</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>Concise explanations of the most common and important pulmonary diseases</li>
    <li>Colorful illustrations and images to clarify key concepts</li>
    <li>A clinical perspective of pulmonary disease nuances, scenarios, and treatment recommendations</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 16 CME credits (category 1), MOC Points, & CE credits</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Pulmonology',
        imageUrl: 'img/course/pulmonology.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>REVIEW THE MOST IMPORTANT PULMONARY TOPICS IN AN ENGAGING WAY</h4>
  <p>Review courses typically involve an instructor reading through slides, overpacked with information... MedCram Reviews are different & bring the material to life. Here's how it works...</p>

  <h3>Step 1:</h3>
  <p>Download your exclusive set of detailed course notes & charts that allow you to seamlessly follow along.</p>
  <p>Dr. Seheult compiled these notes to use as a backdrop for each video...and then mark them up extensively - with illustrations, highlights, and clarifications.</p>
  <p>With the completed notes in your hand, you'll be freed up for maximum retention and understanding.</p>

  <h3>Step 2:</h3>
  <p>After viewing the videos corresponding to each page of notes, take a short quiz for instant feedback and reinforcement of key points.</p>

  <h3>Step 3:</h3>
  <p>Reap the benefits of a practical and comprehensive review that will tremendously improve your long-term understanding of pulmonary topics, patient care, and test scores.</p>
  <p>Purchase of this course provides 1-year unlimited access on up to three devices.</p>

  <h5>TOPICS INCLUDE:</h5>
  <p>Asthma, pneumonia, pulmonary embolism, cough, pleural effusion, pneumothorax, chest x-ray findings, pulmonary function tests, spirometry, flow volume loops, COPD, tuberculosis, hypoxemia, the delivery of oxygen to the tissues, oxyhemoglobin dissociation curve, poisoning (CO, cyanide, etc), restrictive lung disease, obstructive lung disease, lung sounds, bronchiectasis, cystic fibrosis, interstitial lung disease, asbestosis, bronchoscopy, silicosis, pulmonary hypertension, transudate vs exudate, lung cancer, solitary lung nodules, hemoptysis, and many more.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Cardiology',
        imageUrl: 'img/course/Cardiology.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>A HIGH-YIELD & CONCISE REVIEW OF THE MOST IMPORTANT CARDIOLOGY TOPICS</h4>
  <p>Review courses typically involve an instructor reading through slides, overpacked with information... MedCram Reviews are different & bring the material to life. Here's how it works:</p>

  <h3>Step 1:</h3>
  <p>Download your exclusive set of detailed course notes & illustrations that allow you to seamlessly follow along with the short & digestible videos.</p>
  <p>Dr. Seheult compiled these notes to use as a backdrop for each video...and then mark them up extensively - with illustrations, highlights, and clarifications.</p>
  <p>With the completed notes in your hand, you'll be freed up for maximum retention and understanding.</p>

  <h3>Step 2:</h3>
  <p>After viewing the videos corresponding to each page of notes, take a short quiz for instant feedback and reinforcement of key points.</p>

  <h3>Step 3:</h3>
  <p>Reap the benefits of a practical and comprehensive review that will tremendously improve your long-term cardiology understanding, patient care, and test scores.</p>
  <p>Purchase of this course provides 1-year unlimited access on up to three devices.</p>

  <h3>Cardiology Rendered Graphic</h3>

  <h5>TOPICS COVERED IN THIS COURSE INCLUDE:</h5>
  <p>Heart sounds, murmurs, hypertension, aortic stenosis, aortic regurgitation, mitral regurgitation, mitral stenosis, mitral valve prolapse, rheumatic fever, EKG / ECG, cardiac catheterization, JVP, malignant hypertension, ischemic heart disease, angina, coronary artery disease, diuretics, ace inhibitors, CABG, angioplasty, nitrates, beta blockers, calcium channel blockers, oxygen therapy, myocardial infarction, tachycardia, bradycardia, arrhythmias, thrombolytic therapy, pacemakers, myocardial rupture, secondary prevention of MI, heart failure, CHF, chest X-ray (CXR), echocardiograms, digoxin, cardiac maneuvers, spironolactone, cardiomyopathy, HOCM, pericardial disease, cardiac tamponade, pericarditis, atrial fibrillation, atrial flutter, multifocal atrial tachycardia, SVT, VT, PVCs, atrioventricular block - heart block, and many more cardiology-related medical education topics.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Hematology',
        imageUrl: 'img/course/Hematology.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>A CONCISE & EFFECTIVE REVIEW OF THE MOST IMPORTANT HEMATOLOGY CONCEPTS</h4>
  <p>Review courses typically involve an instructor reading through slides, overpacked with information... MedCram Reviews are different & bring the material to life. Here's how it works...</p>

  <h3>Step 1:</h3>
  <p>Download your exclusive set of detailed course notes, charts, & illustrations that allow you to seamlessly follow along with the short and digestible videos.</p>
  <p>Dr. Seheult compiled these notes to use as a backdrop for each video...and then mark them up extensively - with illustrations, highlights, and clarifications.</p>
  <p>With the completed notes in your hand, you'll be freed up for maximum retention and understanding.</p>

  <h3>Step 2:</h3>
  <p>After viewing the videos corresponding to each page of notes, take a short quiz for instant feedback and reinforcement of key points.</p>

  <h3>Step 3:</h3>
  <p>Reap the benefits of a practical and comprehensive review that will tremendously improve your long-term hematology understanding, patient care, and test scores.</p>
  <p>Purchase of this course provides 1-year unlimited access on up to three devices.</p>

  <h5>TOPICS COVERED IN THIS COURSE INCLUDE:</h5>
  <p>Hemostasis, coagulation disorders, platelet disorders, splenic sequestration, ITP, HUS, hemophilia, von Willebrand disease, anemias, vitamin deficiencies, hemolytic anemias, hemoglobinopathies, sickle cell disease, thalassemias, lymphoma, leukemias, polycythemia vera, plasma cell disorders, multiple myeloma, amyloidosis, MGUS, macroglobulinemia.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Infectious Disease',
        imageUrl: 'img/course/InfectiousDisease.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>A RAPID & ENGAGING REVIEW OF KEY INFECTIOUS DISEASE CONCEPTS</h4>
  <p>Review courses typically involve an instructor reading through slides, overpacked with information... MedCram Reviews are different & bring the material to life. Here's how it works:</p>

  <h3>Step 1:</h3>
  <p>Download your exclusive set of detailed course notes, charts, & illustrations that allow you to seamlessly follow along with the short & digestible videos.</p>
  <p>Dr. Seheult compiled these notes to use as a backdrop for each video...and then mark them up extensively - with illustrations, highlights, and clarifications.</p>
  <p>With the completed notes in your hand, you'll be freed up for maximum retention and understanding.</p>

  <h3>Step 2:</h3>
  <p>After viewing the videos corresponding to each page of notes, take a short quiz for instant feedback and reinforcement of key points.</p>

  <h3>Step 3:</h3>
  <p>Reap the benefits of a practical and comprehensive review that will tremendously improve your long-term infectious disease understanding, patient care, and test scores.</p>
  <p>Purchase of this course provides 1-year unlimited access on up to three devices.</p>

  <h5>TOPICS COVERED IN THIS COURSE INCLUDE:</h5>
  <p>Diabetic infections, endocarditis, HIV, cellulitis, prosthetic devices, immunizations and vaccines, spontaneous bacterial peritonitis, granulocytopenia, immunosuppression, nosocomial infections, MRSA, Pseudomonas, VRE, Enterococcus, procedure prophylaxis, osteomyelitis, vascular infections, CNS infections, meningitis, encephalitis, abscess, STD/STIs, herpes, syphilis, LGV, urethritis, trichomoniasis, toxic shock syndrome, vaginosis, chlamydia, gonorrhea, and many more infectious disease medical education topics.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Vent Assoc. Pneumonia',
        imageUrl: 'img/course/VentAssocPneumonia.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>CONFIDENTLY DIAGNOSE AND MANAGE PATIENTS WITH VAP</h4>
  <p>Join Dr. Seheult as he illustrates the key concepts of ventilator-associated pneumonia (VAP). Understand the epidemiology, pathophysiology, and ventilator-associated pneumonia treatment guidelines. Learn the difference between diagnosing VAP using clinical vs bacteriological guidelines.</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>A systematic approach to the diagnosis and treatment of VAP</li>
    <li>Crucial VAP management skills such as breathing trials and antibiotic selection</li>
    <li>Reinforcement of key VAP physiology concepts</li>
    <li>A clinical perspective of ventilator-associated pneumonia nuances and rare findings</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'MRSA Pneumonia',
        imageUrl: 'img/course/MRSA.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>ARE YOU PREPARED TO DIAGNOSE & TREAT MRSA PNEUMONIA?</h4>
  <p>Join Dr. Seheult as he concisely explains and illustrates the key concepts of MRSA pneumonia (Methicillin-Resistant Staphylococcus Aureus). Understand the epidemiology, pathophysiology, and MRSA treatment guidelines.</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>Review of the key differences between MSSA, MRSA, hospital-acquired and community-acquired MRSA</li>
    <li>Understand the key risk factors for MRSA</li>
    <li>Virulence factors that typically make community-acquired MRSA worse than hospital-acquired pneumonia</li>
    <li>CXR (chest x-ray) and CT findings for MRSA pneumonia</li>
    <li>Clinical decision making and diagnosis of MRSA</li>
    <li>Compare Vancomycin and Linezolid for primary treatment options of MRSA pneumonia</li>
    <li>Telavancin pros and cons and how efficacy compares with Vancomycin</li>
    <li>Why a variety of medications may not be ready for primary consideration for MRSA</li>
    <li>Specific treatment considerations for the virulent community-acquired MRSA</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Emergency / Critical Care',
        imageUrl: 'img/course/EmergencyCriticalCare.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>THE BEST MEDCRAM CRITICAL CARE/EMERGENCY MEDICINE VIDEOS ACCREDITED FOR 10 NURSING CEs</h4>
  <p>Whether you are a recent graduate or a seasoned RN, this "survival course" will efficiently get you up to speed on key fundamentals and updates in several important topics including:</p>
  <p>Shock and sepsis, DKA, pneumonia, pulmonary embolism, pleural effusion, hyponatremia, hypernatremia, hyperkalemia, mechanical ventilation, LFTs, liver diseases, heart failure, and acute renal failure.</p>

  <h5>WHO IS THIS COURSE FOR?</h5>
  <p>Nursing professionals, particularly those working in the emergency department, critical care, and inpatient hospital setting.</p>

  <h5>COURSE 
  DESCRIPTION</h5>
  <p>Dr. Roger Seheult examines several of the most common and important problems encountered by nurses in the emergency department, critical care, and inpatient hospital setting. A series of videos (each no longer than 20 minutes) full of illustrations explain key elements and updates for shock and sepsis, DKA, pneumonia, pulmonary embolism, pleural effusion, hyponatremia, hypernatremia, hyperkalemia, mechanical ventilation, LFTs, liver diseases, heart failure, and acute renal failure. Quizzes after each section will test your understanding.</p>

  <h5>LEARNING OBJECTIVES:</h5>
  <p>As a result of this course, students will be able to:</p>
  <ul>
    <li>Define the pathophysiology, diagnostic modalities, and key signs of symptoms for the three main types of shock.</li>
    <li>Understand key treatment principles of shock in addition to important monitoring considerations.</li>
    <li>Understand the "why" behind DKA management, monitoring, and treatment principles.</li>
    <li>Define the differences between the major types of pneumonia with regards to presentation, monitoring, and treatment principles.</li>
    <li>Understand the magnitude of pulmonary embolism problems and apply key prevention strategies.</li>
    <li>Identify the major types of pleural effusion and the differences in management.</li>
    <li>Understand the relevant pathophysiology of hyponatremia and hypernatremia to delineate the different types and the optimum monitoring and treatment strategies.</li>
    <li>Define the different causes of hyperkalemia, and understand key treatment and monitoring principles.</li>
    <li>Understand each of the different modes of mechanical ventilation and why each one is used differently.</li>
    <li>Understand essential liver physiology to give context to the liver function tests (LFT) and key monitoring principles.</li>
    <li>Define the key signs and symptoms for diseases specific to the biliary tract.</li>
    <li>Understand how the different types of heart failure differ in their presentation, treatment, and monitoring principles.</li>
    <li>Apply understanding of the underlying pathophysiology of acute renal failure to anticipate sequelae after initial patient treatment.</li>
  </ul>

  <h5>COURSE COMPLETION CERTIFICATE</h5>
  <p>Upon completion of the course and a brief survey, your CE certificate will be provided immediately.</p>
  <p>Course access is provided for one year from the date of purchase.</p>
  <p>Roger Seheult M.D. is approved by the California Board of Registered Nursing, Provider # CEP16824, for 10 contact hours.</p>
  <p>Other states typically recognize contact hours accredited through the California Board of Registered Nursing, but please check requirements in your state.</p>

  <h3>Cancellation policy:</h3>
  <p>We are happy to provide a full refund for cancellations requested within the first 24 hours after purchasing the course.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Coronavirus Pandemic',
        imageUrl: 'img/course/coronavirous.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>FOLLOW THE KEY COVID-19 PANDEMIC DEVELOPMENTS WITH DIGESTABLE VIDEO UPDATES</h4>
  <p><strong>Note to new visitors:</strong> To view the over 100 COVID-19 Updates in this course, you will need to create a free account (it only takes a few seconds).</p>

  <p>A novel coronavirus was first reported to the World Health Organization on December 31, 2019. The virus appears to have spread from Wuhan, China and has quickly led to a pandemic.</p>

  <p>Dr. Seheult illustrates key developments about COVID-19 and SARS-CoV-2 pathophysiology, transmission, prevention, treatment options & trials, vaccine advances, data trends, as well as the response from governments, hospitals, and communities.</p>

  <p>A lot has changed since we recorded our first video on a novel coronavirus outbreak on January 26, 2020. Please note that each update video was produced with the best information we could access at the time of recording. Some videos were recorded well over a month ago and may contain information that has become outdated or replaced by better information or research.</p>

  <p>That said, we believe each video contains concepts that have enduring value, and reviewing how the response to COVID-19 has progressed over time may be of interest to you as well.</p>

  <h3>COVID-19 Illustrations by Dr. Seheult</h3>

  <p>We're committed to keeping our COVID-19 videos free for all to access. Please share them with friends and colleagues if you find them helpful.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'COVID-19 Ventilator Course ',
        description: 'CBC Results courses',
        imageUrl: 'img/course/coronavirous.png',

        longDec: `<div>
  <p>Learn key mechanical ventilation skills with critical care specialist Roger Seheult, MD. From basic ventilator definitions to advanced vent management "pearls," illustrations and clinical examples provide clarity for medical professionals.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Chest X-Ray Interpretation',
        imageUrl: 'img/course/chestX-ray.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>INTERPRET & REVIEW CHEST X-RAYS SYSTEMATICALLY</h4>
  <p>Struggling to interpret chest X-rays efficiently?</p>
  <p>Are you looking for an efficient step-by-step process that you can utilize to interpret chest X-rays?</p>
  <p>In <em>Chest X-ray Interpretation Explained Clearly</em>, renowned instructor Dr. Roger Seheult teaches a streamlined "A,B,C,D method" to accurately interpret Chest X-rays.</p>

  <h5>THE PREMIER INTRODUCTORY CHEST X-RAY VIDEO SERIES FOR PHYSICIANS, NPs, PAs, STUDENTS, AND MORE</h5>
  <p>This online course is highly-rated by clinicians (Physicians, NPs, PAs, and Nurses) in a variety of specialties.</p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>Dr. Seheult is trusted by Universities, clinicians & students for his ability to illustrate key concepts so they are understood, not memorized...</p>
  <p>... and clear understanding is the foundation for mastery of chest X-ray interpretation.</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>A systematic approach to spot abnormal findings</li>
    <li>Illustrations and examples of several abnormal chest X-ray findings</li>
    <li>A concise review and illustrations of key X-ray fundamentals</li>
    <li>Interpretation practice. Dr. Seheult reviews several abnormal chest X-rays so you can follow along</li>
    <li>A clinical perspective of chest X-ray nuances</li>
    <li>A brief quiz to reinforce core concepts and help you study</li>
  </ul>

  <p><strong>Start watching now</strong> (the first video is a "free trial") and experience confidence with the chest X-ray! This complete course and over 40 hours of CME /CE credits are available with MedCram All-Access.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'CT Scans',
        imageUrl: 'img/course/ctScan.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand the key differences between CT Scans and high-resolution CT (HRCT) with this clear and concise medical lecture by Dr. Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that this medical video is also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>CT Scan of the Chest Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'DKA',
        imageUrl: 'img/course/dka.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand Diabetic Ketoacidosis (DKA) diagnosis and treatment with this high-yield medical course by Dr. Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, and audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Diabetic Ketoacidosis (DKA) Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'DNR Code Status',
        imageUrl: 'img/course/dne code.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>UNDERSTAND DNR CODE STATUS & PALLIATIVE CARE IN THE ICU SETTING</h4>
  <h5>What you'll receive from this course:</h5>
  <ul>
    <li>The key aspects of full code status (CPR, ACLS, shock, intubation, vasopressors)</li>
    <li>Potential complications of full code procedures vs palliative care</li>
    <li>DNR/DNI (Do not resuscitate / Do not intubate)</li>
    <li>Tips for presenting advance directive options to patients and family members</li>
    <li>Terminal weaning & palliative care in the ICU</li>
  </ul>

  <h5>Who is this course for?</h5>
  <p>Students and medical professionals in a variety of medical fields. Physicians, nurse practitioners, physician assistants, nurses, & technicians who seek to better understand DNR status and palliative care in the ICU.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Eosinophilic Pneumonia',
        imageUrl: 'img/course/Eosinophilic.png.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand Eosinophilic Pneumonia symptoms, diagnosis, and treatment in this medical course by Dr. Seheult. Includes a breakdown of the differences between acute eosinophilic pneumonia vs. chronic eosinophilic pneumonia. Hypereosinophilic syndrome and EGPA (Churg-Strauss) is also covered.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that this medical course is also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (videos, medical quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think you'll find <em>Eosinophilic Pneumonia Explained Clearly</em> informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Heart Failure',
        imageUrl: 'img/course/heartFaliture.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand Heart Failure diagnosis and treatment with these clear and concise medical lectures from Dr. Roger Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Heart Failure Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Hyperkalemia',
        imageUrl: 'img/course/Hyperkalemia(care).png',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand Hyperkalemia diagnosis and treatment with this clear and concise medical lecture from Dr. Roger Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Hyperkalemia Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Hypernatremia',
        imageUrl: 'img/course/Hypernatremia (care).png',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand hypernatremia diagnosis and treatment with this clear and concise medical lecture by Dr. Roger Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed this medical video is also available at our MedCram YouTube channel... but stick around because all new MedCram videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Hypernatremia Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Hypoxemia',
        imageUrl: 'img/course/Hypoxemia(care).jpg',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand hypoxemia (high altitude, pulmonary diffusion, hypoventilation, shunting, VQ mismatch) with these medical videos from Dr. Roger Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio files) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Hypoxemia Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Jugular Venous Pulse',
        imageUrl: 'img/course/Jugular Venous Pulse.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand Jugular Venous Pulse (JVP) assessment and interpretation with this efficient medical course from Dr. Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical videos, quizzes, medical audio lectures, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Jugular Venous Pulse (JVP) Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Liver Pathophysiology',
        imageUrl: 'img/course/Liver Pathophysiology.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand liver diseases and treatment, liver function tests, and cholestatic disease with this high-yield medical course from Dr. Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that some of the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical videos, quizzes, audio lectures, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>The Liver Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Lung Ultrasound in COVID-19',
        imageUrl: 'img/course/lungUltrasound.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>POINT OF CARE COVID-19 DIAGNOSIS AND MONITORING WITH LUNG ULTRASOUND</h4>
  <p>As communities across the world are facing or preparing for increasing numbers of patients in respiratory distress from COVID-19, emergency medicine physician and ultrasound expert, Dr. Jaquet has recorded this video series for clinicians and hospitals on the frontlines.</p>

  <p>Learn why lung ultrasound rivals a CT scan for accurate diagnosis and monitoring of coronavirus infection from the SARS-CoV-2 virus. This concise video series (under one hour in length) will quickly review the core principles of lung ultrasound and progresses to COVID-19 specific findings.</p>

  <p>This course will remain free, please share it with anyone you think may be interested. We hope you find it helpful, and we welcome feedback.</p>

  <p>This course only briefly reviews lung ultrasound principles. For a more comprehensive video series please see <em>Lung Ultrasound Explained Clearly</em>.</p>

  <p>If you are new to point-of-care ultrasound or want to review the basics, please see <em>Ultrasound Principles & Instrumentation Explained Clearly</em>.</p>

  <p>We appreciate you - medical professionals, students, and volunteers around the world. We are in this fight together.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Mechanical Ventilation',
        imageUrl: 'img/course/mechanical.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <h4>MECHANICAL VENTILATION, SIMPLIFIED</h4>
  <p><strong>Note:</strong> Due to the COVID-19 pandemic, we've decided to make this course free. We want as many clinicians as possible to have the opportunity to review or learn mechanical ventilation. We've also added the content from this course to a COVID-19 Ventilator Course that is also available free.</p>

  <p>Enjoy a concise, step-by-step guide to clarity of vent modes and settings. Learn physiology concepts such as the pressure-volume relationship which will lead to a lasting understanding of key concepts.</p>

  <p>Enjoy a clinical perspective for managing conditions such as COPD and ARDS with mechanical ventilation. Finish the course strong with a checklist on how to safely liberate a patient from a ventilator.</p>

  <h5>WHO IS THE INSTRUCTOR?</h5>
  <p>Roger Seheult is trusted by Universities, clinicians & students for his ability to illustrate key concepts so they are understood, not memorized...</p>
  <p>... and clear understanding leads to mastery of mechanical ventilation. Yes, you can learn mechanical ventilation without information overload!</p>

  <h5>HOW IS THE COURSE LAID OUT?</h5>
  <p>You'll enjoy a series of concise videos and quizzes as you move towards mastery. It has never been easier to get clarity with mechanical ventilation. Start watching now (several videos are "free trial") and take a big step toward confidently managing patients on a ventilator!</p>

  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>An understanding of how each major mode of mechanical ventilation works</li>
    <li>A clear approach to utilizing settings such as plateau pressure and PEEP to manage conditions such as ARDS and COPD</li>
    <li>Reinforcement of key ventilation/physiology concepts including pressure-volume relationships</li>
    <li>A "liberation from the ventilator" checklist</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 1.25 CME (category 1), MOC Points, CE Credits</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Vent Pearls',
        imageUrl: 'img/course/ventPearls.png',

        description: 'CBC Results courses',
        longDec: `  <h4>TAKE YOUR VENT SKILLS TO THE NEXT LEVEL!</h4>
  <p><strong>Note:</strong> Due to the COVID-19 pandemic, we've decided to make this course free. We want as many clinicians as possible to have the opportunity to review or learn mechanical ventilation. We've also added the content from this course to a COVID-19 Ventilator Course that is also available free.</p>
  <p>Work through a variety of clinical scenarios involving mechanical ventilation with Dr. Seheult. This advanced course is meant to build on skills learned in <em>Mechanical Ventilation Explained Clearly</em>.</p>
  <h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
  <ul>
    <li>A variety of mechanical ventilator pearls: common mistakes, nuances, and strategies for optimal patient care</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 2 CME credits (Category 1) MOC Points, CE Credits</li>
    <li>1 year of unlimited access on up to 3 devices</li>
  </ul>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Nephrotic vs. Nephritic',
        imageUrl: 'img/course/Nephrotic vs. Nephritic.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand the key differences between Nephrotic and Nephritic Syndromes with this clear and concise medical video from Dr. Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that this medical video is also available at our MedCram YouTube channel... but stick around because all new MedCram medical lectures will be available first here at MedCram.com (and publicly posted to YouTube weeks later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical lectures, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Nephrotic vs Nephritic Syndrome Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Oxygen Hemoglobin Curve',
        imageUrl: 'img/course/oxygen hemoglopen.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand the oxygen hemoglobin dissociation curve with this clear and concise medical lecture from Dr. Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that the medical videos in this course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical lectures, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Oxygen Hemoglobin Dissociation Curve Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Pleural Effusion',
        imageUrl: 'img/course/PlerualEffusion.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand Pleural Effusion diagnosis and treatment with a clear and concise explanation from Dr. Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical lectures will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical lectures, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Pleural Effusion Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Pneumonia',
        imageUrl: 'img/course/Pneumonia.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand Pneumonia diagnosis and treatment with this clear and concise medical course from Dr. Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical lectures will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical lectures, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Pneumonia Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Pulmonary Embolism',
        imageUrl: 'img/course/PulmonaryEmbolism.png',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand Pulmonary Embolism diagnosis and treatment with this clear and concise medical course from Dr. Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that the medical videos in this course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

  <p>Also, a growing amount of MedCram content (medical videos, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Pulmonary Embolism Explained Clearly</em> very informative, easy to follow, and fun.</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Shock & Sepsis',
        imageUrl: 'img/course/ShockSepsis.jpg',

        description: 'CBC Results courses',
        longDec: `<div>
  <p>Understand Shock and Sepsis causes, diagnosis, and treatment with this easy-to-follow medical review by Dr. Seheult.</p>

  <p><strong>We're glad you're here!</strong></p>

  <p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram videos will be available first here at MedCram.com (and publicly posted to our YouTube medical channel weeks later... if at all).</p>

  <p>Also, a growing amount of MedCram medical content (videos, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

  <p><strong>We've got you covered!</strong></p>

  <p>MedCram allows you to cut down on study time and maximize retention and understanding of key medical concepts by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <em>Shock and Sepsis Explained Clearly</em> very informative, easy to follow, and fun...enjoy!</p>
</div>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
      {
        title: 'Illness from Vaping/E-Cigs',
        imageUrl: 'img/course/illness.png',

        description: 'CBC Results courses',
        longDec: ` <h4>WHAT CLINICIANS NEED TO KNOW ABOUT THE EVOLVING EPIDEMIC</h4>
  <p><strong>Vaping & E-Cigarette associated illnesses & deaths</strong> have resulted in significant media attention.</p>
  <p>Dr. Seheult illustrates key points about vaping and E-cigarette associated lung injury and failure. Learn about the symptoms, diagnosis, imaging results, and treatment options -- that we know about at this time.</p>
  <p>More information and studies are needed as vaping deaths and hospitalizations in 2019 continue to rise.</p>`,
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
      },
    ],
  },
  {
    title: 'ECG / Cardiology',
    description: 'Courses on ECG and cardiology',
    slug: 'ecg-cardiology',
    children: [
      {
        title: 'ECG Interpretation',
        description: 'ECG interpretation courses',
        imageUrl: 'img/course/ECG-interpolation.png',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>CONFIDENTLY INTERPRET EKG/ECGs IN A SYSTEMATIC WAY</h4>
<p>Struggling to interpret EKGs efficiently?</p>

<p>Are you looking for just the right amount of information & physiology so you remember a simple, step by step approach to EKG interpretation?</p>

<p>In ECG/EKG Interpretation Explained Clearly, renowned Professor Roger Seheult, MD teaches a streamlined "system" to accurately interpret ECGs.</p>

<h5>THE PREMIER ONLINE ECG COURSE FOR PHYSICIANS, NPs, PAs, AND MORE</h5>
<p>This course is highly-rated by clinicians (Physicians, NPs, and PAs) in a variety of specialties including primary care and emergency medicine. Additionally, nurses (particularly those working in emergency and critical care), have given excellent reviews.</p>

<h3>ECG Interpretation Illustrations Examples</h3>

<h5>WHO IS THE INSTRUCTOR?</h5>
<p>Professor Roger Seheult, MD is trusted by universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>... and clear understanding leads to mastery of key ECG skills. Yes, you can avoid those dreaded feelings of ECG information overload!</p>

<h5>HOW IS THE COURSE LAID OUT?</h5>
<p>You'll enjoy a series of concise videos, quizzes, and practice ECGs as you move towards mastery. It has never been easier to get clarity with ECG interpretation.</p>
<p>Start watching now (several videos are "free trial") and achieve confidence with ECG!</p>

<h3>System for Reading an ECG and P waves</h3>

<h5>WHAT YOU WILL RECEIVE FROM THIS ECG/EKG COURSE:</h5>
<ul>
    <li>An understanding of the heart's electrical activity</li>
    <li>Illustrations and examples of all major abnormal EKG findings</li>
    <li>A systematic approach to spotting abnormal findings</li>
    <li>Hands-on EKG interpretation practice with 11 blank practice EKGs. Dr. Seheult will interpret these EKGs in the video so you can check your work</li>
    <li>Reinforcement of key cardiac physiology concepts</li>
    <li>A clinical perspective on how to read an EKG, electrocardiogram nuances, scenarios, and rare findings</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>10 CME (category 1), MOC Points, CE Credits included</li>
    <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'BMP/Chem-7 Results',
        description: 'BMP/Chem-7 results courses',
        imageUrl: 'img/course/bmp.png',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>INTERPRET BASIC METABOLIC PANEL (CHEM-7) RESULTS WITH CONFIDENCE</h4>
<p>The basic metabolic panel (BMP), also known as the "CHEM-7," is one of the most commonly ordered lab tests by clinicians in the hospital and the outpatient setting.</p>

<p>Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians make common interpretation mistakes - and most have not learned to unlock the full and great potential of the BMP.</p>

<p>Join renowned professor Roger Seheult, MD as he concisely explains the key components of the BMP that you need to know... from managing creatinine problems to clarity on hyponatremia.</p>

<p>After this series of short videos and quizzes, you'll be on your way to accurately interpret BMP results and save time in the process.</p>

<h3>Leukopenia causes and neutropenia</h3>

<h5>WHO IS THIS COURSE FOR?</h5>
<p>Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that order BMPs.</p>

<h5>WHO IS THE INSTRUCTOR?</h5>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>...and clear understanding leads to mastery of BMP results interpretation. <a href="#">Learn more about Dr. Seheult.</a></p>

<h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
<ul>
    <li>A clear understanding of each possible BMP result: hyper and hyponatremia, hyper and hypokalemia, chloride and bicarbonate problems, BUN and creatinine problems, and hyper and hypoglycemia</li>
    <li>Initial management and treatment recommendations based on the BMP result</li>
    <li>Guidelines for when to order a BMP, and tips for following serial BMPs</li>
    <li>A clinical perspective of BMP nuances, pitfalls, and patterns</li>
    <li>Quick quiz questions to reinforce core concepts and help you study</li>
    <li>Includes 7 CME Credits/MOC Points/CE</li>
    <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'CBC Results',
        imageUrl: 'img/course/cbcResult.png',

        description: 'CBC Results courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>INTERPRET CBC RESULTS QUICKLY & WITH CONFIDENCE</h4>
<p>Are Complete Blood Count (CBC) results involved in your medical practice?</p>

<p>Looking for clarity on how to quickly interpret and follow CBC results accurately?</p>

<p>Join renowned instructor Dr. Seheult as he concisely explains the key components of the CBC... from anemia to thrombocytosis.</p>

<p>After this series of short videos and quizzes, you'll be on your way to accurately interpret CBC results and save time doing so.</p>

<h3>Leukopenia causes and neutropenia</h3>

<h5>WHO IS THIS COURSE FOR?</h5>
<p>Clinicians (MD, DO, NP, PA, RNs) and students in a variety of specialties that order CBCs.</p>

<h5>WHO IS THE INSTRUCTOR?</h5>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>...and clear understanding leads to mastery of CBC results interpretation. <a href="#">Learn more about Dr. Seheult.</a></p>

<h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
<ul>
    <li>An understanding of each possible CBC result: leukocytosis, anemia, polycythemia, thrombocytopenia, etc.</li>
    <li>Initial management and treatment recommendations based on the CBC result - including blood transfusions and protocols for procedures</li>
    <li>Guidelines for when to order a CBC, the frequency to use for follow up labs, and tips for following serial CBCs</li>
    <li>A clinical perspective of CBC nuances, pitfalls, and patterns</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Vasopressors',
        imageUrl: 'img/course/vasopressors.png',

        description: 'CBC Results courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>GAIN A CLEAR & LASTING UNDERSTANDING OF HOW TO USE VASOPRESSORS EFFECTIVELY</h4>
<p>Having trouble keeping all the vasopressors & inotropes straight?</p>

<p>Looking for an easy-to-follow method for determining which vasopressor to use (and in what order)?</p>

<p>In <strong>Vasopressors Explained Clearly</strong>, renowned instructor Dr. Roger Seheult illustrates a concise way to understand vasopressors & inotropes, and how to systematically manage patients with hypotension & septic shock.</p>

<h5>WHO IS THIS COURSE FOR?</h5>
<p>Clinicians in emergency medicine, critical care, and ICU settings. Physicians, nurse practitioners, physician assistants, & nurses who seek to better understand the use of vasopressors & inotropes.</p>

<h5>WHO IS THE INSTRUCTOR?</h5>
<p>Dr. Seheult is trusted by Universities, students, and medical professionals, for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>... and clear understanding leads to competence and avoiding those dreaded feelings of information overload!</p>
<p>It has never been easier to understand vasopressors, inotropes, & septic shock management. Watch this video series now to master this crucial emergency medicine & ICU skill.</p>

<h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
<ul>
    <li>Key physiology of endogenous vs. exogenous vasopressors</li>
    <li>Illustrations of the receptors involved in mediating blood pressure</li>
    <li>A thorough comparison of each vasopressor + key differences</li>
    <li>A systematic approach to managing hypotension and septic shock.</li>
    <li>Central line vs. alternative options for administration.</li>
    <li>A clinical perspective of tips, nuances, & practice scenarios.</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1.75 CME (Category 1), MOC Points, CE Credits Included</li>
    <li>1 year of full unlimited access on up to 3 devices.</li>
</ul>
`,
      },
      {
        title: 'Hypertenstive Crisis   ',
        imageUrl: 'img/course/HypertensiveCrisis.png',

        description: 'CBC Results courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>RECOGNIZE AND TREAT HYPERTENSIVE URGENCIES AND EMERGENCIES WITH CONFIDENCE</h4>
<p>An elevated blood pressure can be an "urgency" or true emergency. What are the initial steps and how does a clinician differentiate between the two? What treatment steps should be taken (and over what amount of time)? This high yield course will break down the essentials of hypertensive crises in classic MedCram fashion.</p>

<p>Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians make common interpretation mistakes - and do not understand the nuances of how to recognize and treat hypertensive crises.</p>

<p>Join renowned professor Roger Seheult, MD as he concisely explains the key components of the hypertensive crisis that you need to know... from managing hypertension effectively in the clinic to the ICU setting.</p>

<p>After this series of short videos and quizzes, you'll be on your way to effectively managing hypertensive crises and save time in the process.</p>

<h5>WHO IS THIS COURSE FOR?</h5>
<p>Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that treat hypertension.</p>

<h5>WHO IS THE INSTRUCTOR?</h5>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>... and clear understanding leads to mastery of hypertensive urgencies and emergencies. Learn more about Dr. Seheult.</p>

<h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
<ul>
    <li>A clear understanding of how to efficiently recognize hypertensive urgencies and emergencies</li>
    <li>How to manage and treat hypertensive crises, and what level of treatment the patient should receive (clinic vs. hospital vs. ICU)</li>
    <li>A clinical perspective of hypertensive crises nuances, pitfalls, and patterns</li>
    <li>Quick quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Ultrasound ',
        imageUrl: 'img/course/ultrasound.png',

        description: 'CBC Results courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>INTERESTED IN MAKING ULTRASOUND PART OF YOUR CLINICAL PRACTICE?</h4>
<p>Renowned instructor Dr. Jacquet illustrates core ultrasound concepts in a way that you will understand and remember.</p>

<h5>WHO IS THIS COURSE FOR?</h5>
<p>Students and medical professionals in a variety of medical fields. Physicians, NPs, PAs, RTs, nurses, & technicians who seek clinical/point-of-care ultrasound (POCUS) to become a part of their practice.</p>
<p>For those new to ultrasound, this course provides an excellent foundation prior to participating in hands-on training of specific exam techniques.</p>
<p>For those with prior ultrasound experience, this course provides a focused review of the core concepts needed to advance skills and understanding.</p>

<h5>Learn the key elements of each ultrasound probe</h5>

<h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
<ul>
    <li>An overview of ultrasound transducers and what they're used for</li>
    <li>Key ultrasound terminology, orientation, imaging planes, and biosafety</li>
    <li>Step by step illustrations of the knobs, dials, and modes of an ultrasound machine ("knobology")</li>
    <li>Examples of various ultrasound artifacts that impact ultrasound images</li>
    <li>How to handle an ultrasound transducer and set up the machine for your first ultrasound exam</li>
    <li>Quiz questions after each video to reinforce essential concepts</li>
    <li>Includes 4 CME (category 1), MOC Points, CE Credits</li>
    <li>1 year of unlimited access, so you can review videos as needed (all MedCram courses are mobile/tablet friendly)</li>
</ul>
`,
      },
      {
        title: 'Cardiology ',
        imageUrl: 'img/course/Cardiology.png',

        description: 'CBC Results courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>A HIGH-YIELD & CONCISE REVIEW OF THE MOST IMPORTANT CARDIOLOGY TOPICS</h4>
<p>Review courses typically involve an instructor reading through slides, overpacked with information... MedCram Reviews are different & bring the material to life. Here's how it works:</p>

<h5>Step 1:</h5>
<p>Download your exclusive set of detailed course notes & illustrations that allow you to seamlessly follow along with the short & digestible videos.</p>
<p>Dr. Seheult compiled these notes to use as a backdrop for each video...and then mark them up extensively- with illustrations, highlights, and clarifications.</p>
<p>With the completed notes in your hand, you'll be freed up for maximum retention and understanding.</p>

<h5>Step 2:</h5>
<p>After viewing the videos corresponding to each page of notes, take a short quiz for instant feedback and reinforcement of key points.</p>

<h5>Step 3:</h5>
<p>Reap the benefits of a practical and comprehensive review that will tremendously improve your long-term cardiology understanding, patient care, and test scores.</p>

<p>Purchase of this course provides 1-year unlimited access on up to three devices.</p>

<img src="Cardiology-Rendered-Graphic.jpg" alt="Cardiology Rendered Graphic" />

<h5>TOPICS COVERED IN THIS COURSE INCLUDE:</h5>
<ul>
    <li>Heart sounds, murmurs, hypertension, aortic stenosis, aortic regurgitation</li>
    <li>Mitral regurgitation, mitral stenosis, mitral valve prolapse, rheumatic fever</li>
    <li>EKG / ECG, cardiac catheterization, JVP, malignant hypertension</li>
    <li>Ischemic heart disease, angina, coronary artery disease, diuretics, ace inhibitors</li>
    <li>CABG, angioplasty, nitrates, beta blockers, calcium channel blockers, oxygen therapy</li>
    <li>Myocardial infarction, tachycardia, bradycardia, arrhythmias, thrombolytic therapy</li>
    <li>Pacemakers, myocardial rupture, secondary prevention of MI, heart failure, CHF</li>
    <li>Chest X-ray (CXR), echocardiograms, digoxin, cardiac maneuvers, spironolactone</li>
    <li>Cardiomyopathy, HOCM, pericardial disease, cardiac tamponade, pericarditis</li>
    <li>Atrial fibrillation, atrial flutter, multifocal atrial tachycardia, SVT, VT</li>
    <li>PVCs, atrioventricular block - heart block, and many more cardiology related medical education topics.</li>
</ul>
`,
      },
      {
        title: 'Aortic Regurgitation',
        imageUrl: 'img/course/AorticRegurgitation.png',

        description: 'CBC Results courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Aortic Regurgitation (Insufficiency) Causes, Diagnosis, and Treatment</h4>
<p>Includes discussion on the causes, pathophysiology, clinical features and murmur, diagnosis, treatment, and indications for valve replacement.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that this medical video is also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find Aortic Regurgitation (Insufficiency) Explained Clearly very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: ' Aortic Stenosis',
        imageUrl: 'img/course/AorticStenosis.png',

        description: 'CBC Results courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Aortic Stenosis Causes, Diagnosis, and Treatment</h4>
<p>Includes: heart anatomy, pathophysiology, heart sounds and murmurs, valves, symptoms, atrial fibrillation, cardiac output, LVH, pulse pressure, paradoxical splitting of the second heart sound, and treatment of aortic stenosis.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the medical video in this course is also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find Aortic Stenosis Explained Clearly very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Chest X-Ray Interpretation',
        imageUrl: 'img/course/chestX-ray.png',

        description: 'CBC Results courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Interpret & Review Chest X-rays Systematically</h4>
<p>Struggling to interpret chest X-rays efficiently?</p>

<p>Are you looking for an efficient step-by-step process that you can utilize to interpret chest X-rays?</p>

<p>In <strong>Chest X-ray Interpretation Explained Clearly</strong>, renowned instructor Dr. Roger Seheult teaches a streamlined "A,B,C,D method" to accurately interpret Chest X-rays.</p>

<h5>The Premier Introductory Chest X-ray Video Series for Physicians, NPs, PAs, Students, and More</h5>
<p>This online course is highly-rated by clinicians (Physicians, NPs, PAs, and Nurses) in a variety of specialties.</p>

<h3>Who is the Instructor?</h3>
<p>Dr. Seheult is trusted by universities, clinicians & students for his ability to illustrate key concepts so they are understood, not memorized...</p>

<p>...and clear understanding is the foundation for mastery of chest X-ray interpretation.</p>

<h3>What You’ll Receive from This Course:</h3>
<ul>
  <li>A systematic approach to spot abnormal findings</li>
  <li>Illustrations and examples of several abnormal chest x-ray findings</li>
  <li>A concise review and illustrations of key X-ray fundamentals</li>
  <li>Interpretation practice. Dr. Seheult reviews several abnormal chest X-rays so you can follow along</li>
  <li>A clinical perspective of chest X-ray nuances</li>
  <li>A brief quiz to reinforce core concepts and help you study</li>
</ul>
`,
      },
      {
        title: 'Heart Failure',
        imageUrl: 'img/course/heartFaliture.png',

        description: 'CBC Results courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Heart Failure Diagnosis and Treatment</h4>
<p>With these clear and concise medical lectures from Dr. Roger Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Heart Failure Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Hypertension',
        imageUrl: 'img/course/Hypertension.png',

        description: 'CBC Results courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Hypertension Causes, Diagnosis, and Treatment</h4>
<p>With this clear and concise medical course by Dr. Roger Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the lectures in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Hypertension Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Jugular Venous Pulse',
        imageUrl: 'img/course/Jugular Venous Pulse.png',

        description: 'CBC Results courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Jugular Venous Pulse (JVP) Assessment and Interpretation</h4>
<p>With this efficient medical course from Dr. Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical audio lectures, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Jugular Venous Pulse (JVP) Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Mitral Valve Stenosis',
        imageUrl: 'img/course/MitralValveStenosis.png',

        description: 'CBC Results courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Mitral Valve Stenosis Symptoms, Diagnosis, and Treatment</h4>
<p>With this medical lecture from Dr. Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the video in this medical course is also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Mitral Valve Stenosis Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Shock & Sepsis',
        description: 'CBC Results courses',
        imageUrl: 'img/course/ShockSepsis.jpg',

        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Shock and Sepsis Causes, Diagnosis, and Treatment</h4>
<p>With this easy to follow medical review by Dr. Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram videos will be available first here at MedCram.com (and publicly posted to our YouTube medical channel weeks later... if at all).</p>

<p>Also, a growing amount of MedCram medical content (videos, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding of key medical concepts by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Shock and Sepsis Explained Clearly</strong> very informative, easy to follow, and fun...enjoy!</p>
`,
      },
    ],
  },
  {
    title: 'Endocrinology',
    description: 'Courses on endocrinology',
    slug: 'endocrinology',
    children: [
      {
        title: 'Acute Renal Failure',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Acute Renal Failure (Acute Kidney Injury) Diagnosis and Treatment</h4>
<p>With this clear medical education course by Dr. Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize medical retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Acute Renal Failure Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Hyponatremia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Enjoy a Clear & Lasting Understanding of Hyponatremia Diagnosis & Treatment</h4>
<p>Hyponatremia is the most common electrolyte disorder that clinicians encounter. It is also complex and often treated incorrectly.</p>

<p>Get clarity on hyponatremia with renowned instructor Dr. Seheult. Master the key clinical concepts... from hypotonic to hypertonic hyponatremia, and everything in between.</p>

<h5>WHO IS THIS FOR?</h5>
<p>Clinicians (MD, DO, NP, PA, RNs) and students in a variety of specialties that encounter hyponatremia.</p>

<h5>WHO IS THE INSTRUCTOR?</h5>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>...and clear understanding leads to mastery of hyponatremia. Learn more about Dr. Seheult.</p>

<h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
<ul>
    <li>An understanding of each type of hyponatremia from hypertonic to hypovolemic.</li>
    <li>Initial management and treatment recommendations based on the type and cause of hyponatremia.</li>
    <li>A review of important concepts for understanding hyponatremia such as osmolality, tonicity, ADH, and aldosterone.</li>
    <li>A clinical perspective of fluid balance.</li>
    <li>Includes 1.25 CME Credits / MOC Points / CE.</li>
    <li>Quiz questions to reinforce core concepts and help you study.</li>
    <li>1 year of unlimited access on up to 3 devices.</li>
</ul>
`,
      },
      {
        title: 'The Adrenal Gland',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand the Adrenal Cortex with this Clear Medical Explanation from Dr. Roger Seheult</h4>
<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize medical retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and medical quizzes will make learning and reviewing medical topics a breeze.</p>

<p>We think (and certainly hope) you'll find <strong>Adrenal Gland Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Cell Cycle & Signaling',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand the Cell Cycle, Cell Signaling, and Disease</h4>
<p>Understand the Cell Cycle, how cells signal with each other (cell signaling pathways), and how problems with these processes can result in diseases such as cancer, asthma, idiopathic pulmonary fibrosis, COPD, and many others in this medical course.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important.</p>

<p>Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Cell Cycle, Cell Signaling, and Disease Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'DKA',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Diabetic Ketoacidosis (DKA) Diagnosis and Treatment</h4>
<p>Understand Diabetic Ketoacidosis (DKA) diagnosis and treatment with this high yield medical course by Dr. Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, and audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important.</p>

<p>Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Diabetic Ketoacidosis (DKA) Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Hyperkalemia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Hyperkalemia Diagnosis and Treatment</h4>
<p>Understand Hyperkalemia diagnosis and treatment with this clear and concise medical lecture from Dr. Roger Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important.</p>

<p>Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Hyperkalemia Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Hypernatremia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Hypernatremia Diagnosis and Treatment</h4>
<p>Understand hypernatremia diagnosis and treatment with this clear and concise medical lecture by Dr. Roger Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed this medical video is also available at our MedCram YouTube channel... but stick around because all new MedCram videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important.</p>

<p>Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Hypernatremia Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Insonmia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Insomnia Diagnosis and Treatment</h4>
<p>Understand Insomnia diagnosis and treatment with this clear and concise medical lecture from Dr. Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important.</p>

<p>Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Insomnia Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
    ],
  },
  {
    title: 'Gastroenterology',
    description: 'Courses on gastroenterology',
    slug: 'gastroenterology',
    children: [
      {
        title: 'BMP/Chem-7 Results',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>INTERPRET BASIC METABOLIC PANEL (CHEM-7) RESULTS WITH CONFIDENCE</h4>
<p>The basic metabolic panel (BMP), also known as the "CHEM-7," is one of the most commonly ordered lab tests by clinicians in the hospital and the outpatient setting.</p>

<p>Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians make common interpretation mistakes - and most have not learned to unlock the full and great potential of the BMP.</p>

<p>Join renowned professor Roger Seheult, MD as he concisely explains the key components of the BMP that you need to know... from managing creatinine problems to clarity on hyponatremia.</p>

<p>After this series of short videos and quizzes, you'll be on your way to accurately interpret BMP results and save time in the process.</p>

<h5>Leukopenia causes and neutropenia</h5>

<h3>WHO IS THIS COURSE FOR?</h3>
<p>Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that order BMPs.</p>

<h3>WHO IS THE INSTRUCTOR?</h3>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>...and clear understanding leads to mastery of BMP results interpretation. Learn more about Dr. Seheult.</p>

<h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
<ul>
  <li>A clear understanding of each possible BMP result: hyper and hyponatremia, hyper and hypokalemia, chloride and bicarbonate problems, BUN and creatinine problems, and hyper and hypoglycemia</li>
  <li>Initial management and treatment recommendations based on the BMP result</li>
  <li>Guidelines for when to order a BMP, and tips for following serial BMPs</li>
  <li>A clinical perspective of BMP nuances, pitfalls, and patterns</li>
  <li>Quick quiz questions to reinforce core concepts and help you study</li>
  <li>Includes 7 CME Credits/MOC Points/CE</li>
  <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'CBC Results',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>INTERPRET CBC RESULTS QUICKLY & WITH CONFIDENCE</h4>
<p>Are Complete Blood Count (CBC) results involved in your medical practice?</p>

<p>Looking for clarity on how to quickly interpret and follow CBC results accurately?</p>

<p>Join renowned instructor Dr. Seheult as he concisely explains the key components of the CBC... from anemia to thrombocytosis.</p>

<p>After this series of short videos and quizzes, you'll be on your way to accurately interpret CBC results and save time doing so.</p>

<h5>Leukopenia causes and neutropenia</h5>

<h3>WHO IS THIS COURSE FOR?</h3>
<p>Clinicians (MD, DO, NP, PA, RNs) and students in a variety of specialties that order CBCs.</p>

<h3>WHO IS THE INSTRUCTOR?</h3>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>...and clear understanding leads to mastery of CBC results interpretation. Learn more about Dr. Seheult.</p>

<h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
<ul>
  <li>An understanding of each possible CBC result: leukocytosis, anemia, polycythemia, thrombocytopenia, etc.</li>
  <li>Initial management and treatment recommendations based on the CBC result - including blood transfusions and protocols for procedures</li>
  <li>Guidelines for when to order a CBC, the frequency to use for follow up labs, and tips for following serial CBCs</li>
  <li>A clinical perspective of CBC nuances, pitfalls, and patterns</li>
  <li>Quiz questions to reinforce core concepts and help you study</li>
  <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Acute Abdominal Pain',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>EVALUATE & MANAGE ABDOMINAL PAIN SYSTEMATICALLY</h4>
<p>Acute abdominal pain is one of the most common and feared symptoms in the hospital, emergency, and clinic settings. Join renowned instructor Dr. Seheult for a concise review and clear system to use when managing abdominal pain.</p>

<h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
<ul>
  <li>A straightforward 4-step approach for evaluating acute abdominal pain in an adult and asking the right questions (useful for clinic, emergency, and hospital settings).</li>
  <li>An overview of many of the most common and life-threatening causes of acute abdominal pain — and the best imaging choice to evaluate them.</li>
  <li>Practical strategies to narrow an abdominal pain differential diagnosis based on associated symptoms.</li>
  <li>Interesting case studies for decision-making practice and quizzes to reinforce what you've learned.</li>
  <li>Includes 1.5 CME (category 1), MOC Points, CE Credits</li>
  <li>1 year of unlimited access on up to 3 devices</li>
</ul>

<h3>WHAT TOPICS ARE COVERED?</h3>
<ul>
  <li>Appendicitis, RUQ pain, LLQ pain, RLQ pain, LUQ pain, epigastric pain, suprapubic pain, extra-abdominal causes of abdominal pain, periumbilical pain, DKA, MI, diffuse abdominal pain, hepatitis, cholecystitis, cholangitis, ultrasound, McBurney's Point, inguinal hernia, nephrolithiasis, IBS, mesenteric adenitis, diverticulitis, free air under the diaphragm, pancreatitis, gastritis pain, splenic abscess, gastric ulcer, urinary tract infection, intermittent abdominal pain, porphyria, shock, peritonitis, BRBPR, ruptured aortic aneurysm, intussusception, hyperactive bowel sounds, jaundice, PID, rebound tenderness, nausea and vomiting, & many others...</li>
</ul>

<h3>IS THIS COURSE COMPREHENSIVE?</h3>
<p>No (that would take a long time). Dr. Seheult provides a straightforward approach to evaluate abdominal pain and valuable clinical perspective of important causes of abdominal pain. Learn a framework of acute abdominal pain that will make adding new information and skills easier.</p>
`,
      },
      {
        title: 'Ultrasound',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>INTERESTED IN MAKING ULTRASOUND PART OF YOUR CLINICAL PRACTICE?</h4>
<p>Renowned instructor Dr. Jacquet illustrates core ultrasound concepts in a way that you will understand and remember.</p>

<h3>WHO IS THIS COURSE FOR?</h3>
<p>Students and medical professionals in a variety of medical fields. Physicians, NPs, PAs, RTs, nurses, & technicians who seek clinical/point-of-care ultrasound (POCUS) to become a part of their practice.</p>
<p>For those new to ultrasound, this course provides an excellent foundation prior to participating in hands-on training of specific exam techniques.</p>
<p>For those with prior ultrasound experience, this course provides a focused review of the core concepts needed to advance skills and understanding.</p>

<h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
<ul>
  <li>An overview of ultrasound transducers and what they're used for</li>
  <li>Key ultrasound terminology, orientation, imaging planes, and biosafety</li>
  <li>Step-by-step illustrations of the knobs, dials, and modes of an ultrasound machine ("knobology")</li>
  <li>Examples of various ultrasound artifacts that impact ultrasound images</li>
  <li>How to handle an ultrasound transducer and set up the machine for your first ultrasound exam</li>
  <li>Quiz questions after each video to reinforce essential concepts</li>
  <li>Includes 4 CME (category 1), MOC Points, CE Credits</li>
  <li>1 year of unlimited access, so you can review videos as needed (all MedCram courses are mobile/tablet friendly)</li>
</ul>
`,
      },
      {
        title: 'DKA',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Diabetic Ketoacidosis (DKA) Diagnosis and Treatment</h4>
<p>Learn about DKA with this high-yield medical course by Dr. Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, and audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Diabetic Ketoacidosis (DKA) Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Liver Pathophysiology',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Liver Diseases and Treatment</h4>
<p>Learn about liver diseases, liver function tests, and cholestatic diseases with this high-yield medical course from Dr. Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that some of the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, audio lectures, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>The Liver Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
    ],
  },
  {
    title: 'Hematology',
    description: 'Courses on hematology',
    slug: 'hematology',
    children: [
      {
        title: 'BM/Chem-7 Results',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Interpret Basic Metabolic Panel (CHEM-7) Results with Confidence</h4>
<p>The basic metabolic panel (BMP), also known as the "CHEM-7," is one of the most commonly ordered lab tests by clinicians in the hospital and outpatient setting.</p>

<p>Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians make common interpretation mistakes - and most have not learned to unlock the full and great potential of the BMP.</p>

<p>Join renowned professor Roger Seheult, MD as he concisely explains the key components of the BMP that you need to know... from managing creatinine problems to clarity on hyponatremia.</p>

<p>After this series of short videos and quizzes, you'll be on your way to accurately interpret BMP results and save time in the process.</p>

<h5>Who is this Course for?</h5>
<p>Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that order BMPs.</p>

<h5>Who is the Instructor?</h5>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>

<p>...and clear understanding leads to mastery of BMP results interpretation. Learn more about Dr. Seheult.</p>

<h5>What You'll Receive from This Course:</h5>
<ul>
  <li>A clear understanding of each possible BMP result: hyper and hyponatremia, hyper and hypokalemia, chloride and bicarbonate problems, BUN and creatinine problems, and hyper and hypoglycemia</li>
  <li>Initial management and treatment recommendations based on the BMP result</li>
  <li>Guidelines for when to order a BMP, and tips for following serial BMPs</li>
  <li>A clinical perspective of BMP nuances, pitfalls, and patterns</li>
  <li>Quick quiz questions to reinforce core concepts and help you study</li>
  <li>Includes 7 CME Credits/MOC Points/CE</li>
  <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Medical Acid Base + ABGs',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Gain a Clear Understanding of Acid-Base Disorders in Patients</h4>
<p>Acid-base disturbances are common clinical problems. Accurate interpretation of lab tests in patients with acid-base issues is crucial for making a precise diagnosis and providing effective treatment. Immerse yourself in a recently updated series of concise videos, quizzes, and practice problems as you advance toward achieving acid-base mastery!</p>

<h5>Who is the Instructor?</h5>
<p>Dr. Seheult is trusted by Universities, clinicians & students for his ability to illustrate key concepts so they are understood, not memorized...</p>

<p>... and clear understanding leads to mastery of medical acid-base!</p>

<h5>What You'll Receive from This Course:</h5>
<ul>
  <li>A systematic approach to lab results to spot abnormal acid-base findings and solve acid-base questions</li>
  <li>A clear understanding of the four primary types: metabolic acidosis, respiratory acidosis, metabolic alkalosis, and respiratory alkalosis</li>
  <li>Illustrations of Winter's Formulas, the Anion Gap, Compensation, and the balance involved with Bicarb, Carbon Dioxide, and more</li>
  <li>Hands-on interpretation practice with multiple practice cases. Dr. Seheult will work through these in the video in real-time</li>
  <li>A clinical perspective of acid-base nuances</li>
  <li>A post-course quiz to reinforce core concepts and help you study</li>
  <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'CBC Results',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Interpret CBC Results Quickly & With Confidence</h4>
<p>Are Complete Blood Count (CBC) results involved in your medical practice? Looking for clarity on how to quickly interpret and follow CBC results accurately?</p>

<p>Join renowned instructor Dr. Seheult as he concisely explains the key components of the CBC... from anemia to thrombocytosis.</p>

<p>After this series of short videos and quizzes, you'll be on your way to accurately interpret CBC results and save time doing so.</p>

<h5>Who is This Course For?</h5>
<p>Clinicians (MD, DO, NP, PA, RNs) and students in a variety of specialties that order CBCs.</p>

<h5>Who is the Instructor?</h5>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>

<p>... and clear understanding leads to mastery of CBC results interpretation. Learn more about Dr. Seheult.</p>

<h5>What You'll Receive From This Course:</h5>
<ul>
  <li>An understanding of each possible CBC result: leukocytosis, anemia, polycythemia, thrombocytopenia, etc.</li>
  <li>Initial management and treatment recommendations based on the CBC result - including blood transfusions and protocols for procedures</li>
  <li>Guidelines for when to order a CBC, the frequency to use for follow-up labs, and tips for following serial CBCs</li>
  <li>A clinical perspective of CBC nuances, pitfalls, and patterns</li>
  <li>Quiz questions to reinforce core concepts and help you study</li>
  <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Vasopressors',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Gain a Clear & Lasting Understanding of How to Use Vasopressors Effectively</h4>
<p>Having trouble keeping all the vasopressors & inotropes straight? Looking for an easy-to-follow method for determining which vasopressor to use (and in what order)?</p>

<p>In <strong>Vasopressors Explained Clearly</strong>, renowned instructor Dr. Roger Seheult illustrates a concise way to understand vasopressors & inotropes, and how to systematically manage patients with hypotension & septic shock.</p>

<h5>Who is This Course For?</h5>
<p>Clinicians in emergency medicine, critical care, and ICU settings. Physicians, nurse practitioners, physician assistants, & nurses who seek to better understand the use of vasopressors & inotropes.</p>

<h5>Who is the Instructor?</h5>
<p>Dr. Seheult is trusted by Universities, students, and medical professionals, for his ability to illustrate key concepts so they are understood, not memorized...</p>

<p>... and clear understanding leads to competence and avoiding those dreaded feelings of information overload!</p>

<p>It has never been easier to understand vasopressors, inotropes, & septic shock management. Watch this video series now to master this crucial emergency medicine & ICU skill.</p>

<h5>What You'll Receive From This Course:</h5>
<ul>
  <li>Key physiology of endogenous vs. exogenous vasopressors</li>
  <li>Illustrations of the receptors involved in mediating blood pressure</li>
  <li>A thorough comparison of each vasopressor + key differences</li>
  <li>A systematic approach to managing hypotension and septic shock</li>
  <li>Central line vs. alternative options for administration</li>
  <li>A clinical perspective of tips, nuances, & practice scenarios</li>
  <li>Quiz questions to reinforce core concepts and help you study</li>
  <li>1.75 CME (Category 1), MOC Points, CE Credits Included</li>
  <li>1 year of full unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Hyponatremia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Enjoy a Clear & Lasting Understanding of Hyponatremia Diagnosis & Treatment</h4>
<p>Hyponatremia is the most common electrolyte disorder that clinicians encounter. Hyponatremia is also complex and often treated incorrectly.</p>

<p>Get clarity on hyponatremia with renowned instructor Dr. Seheult. Master the key clinical concepts... from hypotonic to hypertonic hyponatremia, and everything in between.</p>

<h5>Who is This For?</h5>
<p>Clinicians (MD, DO, NP, PA, RNs) and students in a variety of specialties that encounter hyponatremia.</p>

<h5>Who is the Instructor?</h5>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>

<p>... and clear understanding leads to mastery of hyponatremia. Learn more about Dr. Seheult.</p>

<p><em>Dr. Seheult illustrating different hyponatremia types</em></p>

<h5>What You'll Receive From This Course:</h5>
<ul>
  <li>An understanding of each type of hyponatremia from hypertonic to hypovolemic.</li>
  <li>Initial management and treatment recommendations based on the type and cause of hyponatremia.</li>
  <li>A review of important concepts for understanding hyponatremia such as osmolality, tonicity, ADH, and aldosterone.</li>
  <li>A clinical perspective of fluid balance.</li>
  <li>Includes 1.25 CME Credits / MOC Points / CE.</li>
  <li>Quiz questions to reinforce core concepts and help you study.</li>
  <li>1 year of unlimited access on up to 3 devices.</li>
</ul>
`,
      },
      {
        title: 'Hematology',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>A Concise & Effective Review of the Most Important Hematology Concepts</h4>
<p>Review courses typically involve an instructor reading through slides, overpacked with information... MedCram Reviews are different & bring the material to life. Here's how it works...</p>

<h5>Step 1:</h5>
<p>Download your exclusive set of detailed course notes, charts, & illustrations that allow you to seamlessly follow along with the short and digestible videos.</p>
<p>Dr. Seheult compiled these notes to use as a backdrop for each video...and then mark them up extensively- with illustrations, highlights, and clarifications.</p>
<p>With the completed notes in your hand, you'll be freed up for maximum retention and understanding.</p>

<h5>Step 2:</h5>
<p>After viewing the videos corresponding to each page of notes, take a short quiz for instant feedback and reinforcement of key points.</p>

<h5>Step 3:</h5>
<p>Reap the benefits of a practical and comprehensive review that will tremendously improve your long-term hematology understanding, patient care, and test scores.</p>

<p>Purchase of this course provides 1-year unlimited access on up to three devices.</p>

<h5>Topics Covered in This Course Include:</h5>
<ul>
  <li>Hemostasis, coagulation disorders, platelet disorders, splenic sequestration, ITP, HUS, hemophilia, von Willebrand disease.</li>
  <li>Anemias, vitamin deficiencies, hemolytic anemias, hemoglobinopathies, sickle cell disease, thalassemias.</li>
  <li>Lymphoma, leukemias, polycythemia vera, plasma cell disorders, multiple myeloma, amyloidosis, MGUS, macroglobulinemia.</li>
</ul>
`,
      },
      {
        title: 'Hyperkalemia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Hyperkalemia Diagnosis and Treatment</h4>
<p>Learn from a clear and concise medical lecture by Dr. Roger Seheult on the diagnosis and treatment of hyperkalemia.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available on our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>

<p>We think (and certainly hope) you'll find <strong>Hyperkalemia Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Hypernatremia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Hypernatremia Diagnosis and Treatment</h4>
<p>Learn from a clear and concise medical lecture by Dr. Roger Seheult on the diagnosis and treatment of hypernatremia.</p>

<p>We're glad you're here!</p>

<p>You may have noticed this medical video is also available on our MedCram YouTube channel... but stick around because all new MedCram videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>

<p>We think (and certainly hope) you'll find <strong>Hypernatremia Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Lymphoma',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Lymphoma Diagnosis and Treatment</h4>
<p>Learn from a clear and concise medical lecture by Dr. Seheult on the diagnosis and treatment of lymphoma.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the medical videos in this course are also available on our MedCram YouTube channel... but stick around because all new MedCram medical lectures will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical tutorials, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>

<p>We think (and certainly hope) you'll find <strong>Lymphoma Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Oxygen Hemoglobin Curve',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand the Oxygen Hemoglobin Dissociation Curve</h4>
<p>Learn from a clear and concise medical lecture by Dr. Seheult on the oxygen hemoglobin dissociation curve.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the medical videos in this course are also available on our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical lectures, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>

<p>We think (and certainly hope) you'll find <strong>Oxygen Hemoglobin Dissociation Curve Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Pulmonary Embolism',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Pulmonary Embolism Diagnosis and Treatment</h4>
<p>Learn from a clear and concise medical course by Dr. Seheult on Pulmonary Embolism diagnosis and treatment.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the medical videos in this course are also available on our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>

<p>We think (and certainly hope) you'll find <strong>Pulmonary Embolism Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Shock & Sepsis',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Shock and Sepsis Causes, Diagnosis, and Treatment</h4>
<p>Learn from an easy-to-follow medical review by Dr. Seheult on the causes, diagnosis, and treatment of Shock and Sepsis.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available on our MedCram YouTube channel... but stick around because all new MedCram videos will be available first here at MedCram.com (and publicly posted to our YouTube medical channel weeks later... if at all).</p>

<p>Also, a growing amount of MedCram medical content (videos, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding of key medical concepts by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze.</p>

<p>We think (and certainly hope) you'll find <strong>Shock and Sepsis Explained Clearly</strong> very informative, easy to follow, and fun... enjoy!</p>
`,
      },
    ],
  },
  {
    title: 'Infectious Disease',
    description: 'Courses on infectious diseases',
    slug: 'infectious-disease',
    children: [
      {
        title: 'BMP/Chem-7 Results',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>INTERPRET BASIC METABOLIC PANEL (CHEM-7) RESULTS WITH CONFIDENCE</h4>

<p>The basic metabolic panel (BMP), also known as the "CHEM-7," is one of the most commonly ordered lab tests by clinicians in the hospital and outpatient settings.</p>

<p>Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians make common interpretation mistakes - and most have not learned to unlock the full and great potential of the BMP.</p>

<p>Join renowned professor Roger Seheult, MD, as he concisely explains the key components of the BMP that you need to know... from managing creatinine problems to clarity on hyponatremia.</p>

<p>After this series of short videos and quizzes, you'll be on your way to accurately interpret BMP results and save time in the process.</p>

<h5>Leukopenia Causes and Neutropenia</h5>

<h3>WHO IS THIS COURSE FOR?</h3>
<p>Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that order BMPs.</p>

<h3>WHO IS THE INSTRUCTOR?</h3>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>...and clear understanding leads to mastery of BMP results interpretation. <a href="#">Learn more about Dr. Seheult.</a></p>

<h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
<ul>
    <li>A clear understanding of each possible BMP result: hyper and hyponatremia, hyper and hypokalemia, chloride and bicarbonate problems, BUN and creatinine problems, and hyper and hypoglycemia.</li>
    <li>Initial management and treatment recommendations based on the BMP result.</li>
    <li>Guidelines for when to order a BMP, and tips for following serial BMPs.</li>
    <li>A clinical perspective of BMP nuances, pitfalls, and patterns.</li>
    <li>Quick quiz questions to reinforce core concepts and help you study.</li>
    <li>Includes 7 CME Credits/MOC Points/CE.</li>
    <li>1 year of unlimited access on up to 3 devices.</li>
</ul>
`,
      },
      {
        title: 'CBC Results',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>INTERPRET CBC RESULTS QUICKLY & WITH CONFIDENCE</h4>

<p>Are Complete Blood Count (CBC) results involved in your medical practice?</p>

<p>Looking for clarity on how to quickly interpret and follow CBC results accurately?</p>

<p>Join renowned instructor Dr. Seheult as he concisely explains the key components of the CBC... from anemia to thrombocytosis.</p>

<p>After this series of short videos and quizzes, you'll be on your way to accurately interpret CBC results and save time doing so.</p>

<h5>Leukopenia Causes and Neutropenia</h5>

<h3>WHO IS THIS COURSE FOR?</h3>
<p>Clinicians (MD, DO, NP, PA, RNs) and students in a variety of specialties that order CBCs.</p>

<h3>WHO IS THE INSTRUCTOR?</h3>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>...and clear understanding leads to mastery of CBC results interpretation. <a href="#">Learn more about Dr. Seheult.</a></p>

<h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
<ul>
    <li>An understanding of each possible CBC result: leukocytosis, anemia, polycythemia, thrombocytopenia, etc.</li>
    <li>Initial management and treatment recommendations based on the CBC result - including blood transfusions and protocols for procedures.</li>
    <li>Guidelines for when to order a CBC, the frequency to use for follow-up labs, and tips for following serial CBCs.</li>
    <li>A clinical perspective of CBC nuances, pitfalls, and patterns.</li>
    <li>Quiz questions to reinforce core concepts and help you study.</li>
    <li>1 year of unlimited access on up to 3 devices.</li>
</ul>
`,
      },
      {
        title: 'Urinalysis',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `CLEARLY UNDERSTAND & INTERPRET URINALYSIS RESULTS
From a simple urine dipstick test to microscopic examination, the urinalysis is among the most common and useful tests available.

Looking for clarity on how to interpret urinalysis results?

Are you brushing past some results because you don't understand their clinical significance?

In Urinalysis Explained Clearly, renowned instructor Dr. Roger Seheult illustrates each urinalysis finding in a series of digestible videos, quizzes, and case studies.







WHO IS THIS COURSE FOR?
Clinicians and students in emergency medicine, critical care, and ICU settings. Physicians, nurse practitioners, physician assistants, & nurses who seek clarity with urinalysis interpretation.



WHO IS THE INSTRUCTOR?
Dr. Seheult is trusted by Universities, students, and medical professionals, for his ability to illustrate key concepts so they are understood, not memorized...

... and clear understanding leads to competence and avoiding those dreaded feelings of information overload!

It has never been easier to understand urinalysis.  Watch this video series now to achieve clarity - resulting in better patient care and exam scores.



WHAT YOU'll RECEIVE FROM THIS COURSE:
The pros and cons of each urine collection method
A breakdown of what each urinalysis result means (protein, nitrites, blood, etc.)
The difference between bilirubin and urobilinogen
A review of urine electrolytes
How to perform a gross assessment of urine
Illustrations of the key urine crystals and casts
Helpful ways to utilize equations such as FENa, FEUrea, TTKG, and Urinary anion gap
Quiz questions and case studies to reinforce core concepts and help you study
Includes 3 CME (Category 1), MOC Points, CE Credits
1 year of full unlimited access on up to 3 devices`,
      },
      {
        title: 'Acute Abdominal Pain',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>EVALUATE & MANAGE ABDOMINAL PAIN SYSTEMATICALLY</h4>

<p>Acute abdominal pain is one of the most common and feared symptoms in the hospital, emergency, and clinic settings. Join renowned instructor Dr. Seheult for a concise review and clear system to use when managing abdominal pain.</p>

<h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
<ul>
    <li>A straightforward 4-step approach for evaluating acute abdominal pain in an adult and asking the right questions (useful for clinic, emergency, and hospital settings).</li>
    <li>An overview of many of the most common and life-threatening causes of acute abdominal pain — and the best imaging choice to evaluate them.</li>
    <li>Practical strategies to narrow an abdominal pain differential diagnosis based on associated symptoms.</li>
    <li>Interesting case studies for decision-making practice and quizzes to reinforce what you've learned.</li>
    <li>Includes 1.5 CME (Category 1), MOC Points, CE Credits.</li>
    <li>1 year of unlimited access on up to 3 devices.</li>
</ul>

<h3>WHAT TOPICS ARE COVERED?</h3>
<p>Appendicitis, RUQ pain, LLQ pain, RLQ pain, LUQ pain, epigastric pain, suprapubic pain, extra-abdominal causes of abdominal pain, periumbilical pain, DKA, MI, diffuse abdominal pain, hepatitis, cholecystitis, cholangitis, ultrasound, McBurney's Point, inguinal hernia, nephrolithiasis, IBS, mesenteric adenitis, diverticulitis, free air under the diaphragm, pancreatitis, gastritis pain, splenic abscess, gastric ulcer, urinary tract infection, intermittent abdominal pain, porphyria, shock, peritonitis, BRBPR, ruptured aortic aneurysm, intussusception, hyperactive bowel sounds, jaundice, PID, rebound tenderness, nausea and vomiting, and many others...</p>

<h3>IS THIS COURSE COMPREHENSIVE?</h3>
<p>No (that would take a long time). Dr. Seheult provides a straightforward approach to evaluate abdominal pain and valuable clinical perspective of important causes of abdominal pain. Learn a framework of acute abdominal pain that will make adding new information and skills easier.</p>
`,
      },
      {
        title: 'Infecious Disease',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>A RAPID & ENGAGING REVIEW OF KEY INFECTIOUS DISEASE CONCEPTS</h4>

<p>Review courses typically involve an instructor reading through slides, overpacked with information... MedCram Reviews are different & bring the material to life. Here's how it works:</p>

<h5>Step 1:</h5>
<p>Download your exclusive set of detailed course notes, charts, & illustrations that allow you to seamlessly follow along with the short & digestible videos.</p>
<p>Dr. Seheult compiled these notes to use as a backdrop for each video...and then mark them up extensively- with illustrations, highlights, and clarifications.</p>
<p>With the completed notes in your hand, you'll be freed up for maximum retention and understanding.</p>

<h5>Step 2:</h5>
<p>After viewing the videos corresponding to each page of notes, take a short quiz for instant feedback and reinforcement of key points.</p>

<h5>Step 3:</h5>
<p>Reap the benefits of a practical and comprehensive review that will tremendously improve your long-term infectious disease understanding, patient care, and test scores.</p>
<p>Purchase of this course provides 1-year unlimited access on up to three devices.</p>

<h3>TOPICS COVERED IN THIS COURSE INCLUDE:</h3>
<ul>
    <li>Diabetic infections</li>
    <li>Endocarditis</li>
    <li>HIV</li>
    <li>Cellulitis</li>
    <li>Prosthetic devices</li>
    <li>Immunizations and vaccines</li>
    <li>Spontaneous bacterial peritonitis</li>
    <li>Granulocytopenia</li>
    <li>Immunosuppression</li>
    <li>Nosocomial infections</li>
    <li>MRSA</li>
    <li>Pseudomonas</li>
    <li>VRE</li>
    <li>Enterococcus</li>
    <li>Procedure prophylaxis</li>
    <li>Osteomyelitis</li>
    <li>Vascular infections</li>
    <li>CNS infections</li>
    <li>Meningitis</li>
    <li>Encephalitis</li>
    <li>Abscess</li>
    <li>STD/STIs</li>
    <li>Herpes</li>
    <li>Syphilis</li>
    <li>LGV</li>
    <li>Urethritis</li>
    <li>Trichomoniasis</li>
    <li>Toxic shock syndrome</li>
    <li>Vaginosis</li>
    <li>Chlamydia</li>
    <li>Gonorrhea</li>
    <li>And many more infectious disease medical education topics.</li>
</ul>
`,
      },
      {
        title: 'Vent Assoc. Pneumonia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>CONFIDENTLY DIAGNOSE AND MANAGE PATIENTS WITH VAP</h4>

<p>Join Dr. Seheult as he illustrates the key concepts of ventilator-associated pneumonia (VAP). Understand the epidemiology, pathophysiology, and ventilator-associated pneumonia treatment guidelines. Learn the difference between diagnosing VAP using clinical vs bacteriological guidelines.</p>

<h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
<ul>
    <li>A systematic approach to the diagnosis and treatment of VAP</li>
    <li>Crucial VAP management skills such as breathing trials and antibiotic selection</li>
    <li>Reinforcement of key VAP physiology concepts</li>
    <li>A clinical perspective of ventilator-associated pneumonia nuances and rare findings</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'MRSA Pneumonia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>ARE YOU PREPARED TO DIAGNOSE & TREAT MRSA PNEUMONIA?</h4>

<p>Join Dr. Seheult as he concisely explains and illustrates the key concepts of MRSA pneumonia (Methicillin-Resistant Staphylococcus Aureus). Understand the epidemiology, pathophysiology, and MRSA treatment guidelines.</p>

<h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
<ul>
    <li>Review of the key differences between MSSA, MRSA, hospital-acquired and community-acquired MRSA</li>
    <li>Understand the key risk factors for MRSA</li>
    <li>Virulence factors that typically make community-acquired MRSA worse than hospital-acquired pneumonia</li>
    <li>CXR (chest x-ray) and CT findings for MRSA pneumonia</li>
    <li>Clinical decision making and diagnosis of MRSA</li>
    <li>Compare Vancomycin and Linezolid for primary treatment options of MRSA pneumonia</li>
    <li>Telavancin pros and cons and how efficacy compares with Vancomycin</li>
    <li>Why a variety of medications may not be ready for primary consideration for MRSA</li>
    <li>Specific treatment considerations for the virulent community-acquired MRSA</li>
    <li>Quiz questions to reinforce core concepts and help you study</li>
    <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Cell Cycle & Signaling',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand the Cell Cycle, Cell Signaling, and Disease</h4>

<p>Learn about the cell cycle, how cells signal with each other through signaling pathways, and how problems in these processes can result in diseases such as cancer, asthma, idiopathic pulmonary fibrosis, COPD, and many others in this medical course.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Cell Cycle, Cell Signaling, and Disease Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Coronavirus Pandemic',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Follow the Key COVID-19 Pandemic Developments with Digestible Video Updates</h4>

<p><strong>Note to new visitors:</strong> To view the over 100 COVID-19 Updates in this course, you will need to create a free account (it only takes a few seconds).</p>

<p>A novel coronavirus was first reported to the World Health Organization on December 31, 2019. The virus appears to have spread from Wuhan, China, and has quickly led to a pandemic.</p>

<p>Dr. Seheult illustrates key developments about COVID-19 and SARS-CoV-2 pathophysiology, transmission, prevention, treatment options & trials, vaccine advances, data trends, as well as the response from governments, hospitals, and communities.</p>

<p>A lot has changed since we recorded our first video on a novel coronavirus outbreak on January 26, 2020. Please note that each update video was produced with the best information we could access at the time of recording. Some videos were recorded well over a month ago and may contain information that has become outdated or replaced by better information or research.</p>

<p>That said, we believe each video contains concepts that have enduring value, and reviewing how the response to COVID-19 has progressed over time may be of interest to you as well.</p>

<h5>COVID-19 Illustrations by Dr. Seheult</h5>

<p>We're committed to keeping our COVID-19 videos free for all to access. Please share them with friends and colleagues if you find them helpful.</p>
`,
      },
      {
        title: 'Chest X-Ray Interpretation',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Interpret & Review Chest X-rays Systematically</h4>

<p><strong>Struggling to interpret chest X-rays efficiently?</strong></p>

<p>Are you looking for an efficient step-by-step process that you can utilize to interpret chest X-rays?</p>

<p>In <em>Chest X-ray Interpretation Explained Clearly</em>, renowned instructor Dr. Roger Seheult teaches a streamlined "A,B,C,D method" to accurately interpret Chest X-rays.</p>

<h5>The Premier Introductory Chest X-ray Video Series for Physicians, NPs, PAs, Students, and More</h5>
<p>This online course is highly-rated by clinicians (Physicians, NPs, PAs, and Nurses) in a variety of specialties.</p>

<h3>Who is the Instructor?</h3>
<p>Dr. Seheult is trusted by Universities, clinicians & students for his ability to illustrate key concepts so they are understood, not memorized...</p>

<p>... and clear understanding is the foundation for mastery of chest X-ray interpretation.</p>

<h3>What You'll Receive from This Course:</h3>
<ul>
  <li>A systematic approach to spot abnormal findings</li>
  <li>Illustrations and examples of several abnormal chest X-ray findings</li>
  <li>A concise review and illustrations of key X-ray fundamentals</li>
  <li>Interpretation practice. Dr. Seheult reviews several abnormal chest X-rays so you can follow along</li>
  <li>A clinical perspective of chest X-ray nuances</li>
  <li>A brief quiz to reinforce core concepts and help you study</li>
</ul>
`,
      },
      {
        title: 'Chronic Cough',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Chronic Cough Diagnosis and Treatment</h4>

<p><strong>With this clear and concise medical lecture by Dr. Seheult.</strong></p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical Illustrations, charts, memory aids, and quizzes will make learning and reviewing medical concepts a breeze. We think (and certainly hope) you'll find <em>Chronic Cough Explained Clearly</em> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Eosinophilic Pneumonia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Eosinophilic Pneumonia Symptoms, Diagnosis, and Treatment</h4>

<p><strong>In this medical course by Dr. Seheult. Includes a breakdown of the differences between acute eosinophilic pneumonia vs. chronic eosinophilic pneumonia. Hypereosinophilic syndrome and EGPA (Churg-Strauss) are also covered.</strong></p>

<p>We're glad you're here!</p>

<p>You may have noticed that this medical course is also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (videos, medical quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think you'll find <em>Eosinophilic Pneumonia Explained Clearly</em> informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Influenza',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>A Quick Overview of the Most Important Aspects of Influenza</h4>

<p><strong>Dr. Seheult illustrates the types, diagnosis, vaccines, & compares the treatment options.</strong></p>

<h5>What You'll Receive from This Course:</h5>
<ul>
  <li>An understanding of the main types of flu (A, B, & C)</li>
  <li>An overview of typical signs and symptoms</li>
  <li>An explanation of what's in the annual vaccine</li>
  <li>Methods for diagnosing Influenza</li>
  <li>A comparison of treatment options: oseltamivir, zanamivir, & peramivir</li>
  <li>A post-video quiz to reinforce essential concepts</li>
</ul>
`,
      },
      {
        title: 'Lung Ultrasound in COVID-19',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Point of Care COVID-19 Diagnosis and Monitoring with Lung Ultrasound</h4>

<p>As communities across the world are facing or preparing for increasing numbers of patients in respiratory distress from COVID-19, emergency medicine physician and ultrasound expert, Dr. Jaquet has recorded this video series for clinicians and hospitals on the frontlines.</p>

<p>Learn why lung ultrasound rivals a CT scan for accurate diagnosis and monitoring of coronavirus infection from the SARS-CoV-2 virus. This concise video series (under one hour in length) will quickly review the core principles of lung ultrasound and progresses to COVID-19 specific findings.</p>

<h5>Course Highlights:</h5>
<ul>
  <li>Review of core principles of lung ultrasound</li>
  <li>Understanding COVID-19 specific findings using lung ultrasound</li>
  <li>Why lung ultrasound is a valuable tool for diagnosis and monitoring of SARS-CoV-2</li>
</ul>

<p>This course will remain free, please share it with anyone you think may be interested. We hope you find it helpful, and we welcome feedback.</p>

<p>This course only briefly reviews lung ultrasound principles. For a more comprehensive video series please see <strong>Lung Ultrasound Explained Clearly</strong>.</p>

<p>If you are new to point of care ultrasound or want to review the basics, please see <strong>Ultrasound Principles & Instrumentation Explained Clearly</strong>.</p>

<p>We appreciate you - medical professionals, students, and volunteers around the world. We are in this fight together.</p>
`,
      },
      {
        title: 'Measles',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Measles (Rubeola) Diagnosis and Treatment with a Clear and Concise Medical Lecture from Dr. Seheult</h4>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical lectures, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Measles (Rubeola) Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Mpox Virus',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Mpox Update Explained Clearly</h4>

<p>Mpox Update Explained Clearly is an online course designed to enhance primary care clinicians' knowledge and skills regarding mpox (formerly known as Monkeypox). This course provides an in-depth review of the mpox virus, including its transmission, clinical manifestations, treatment options, and available vaccines. Through a blend of video presentations and discussions of clinical scenarios and practice cases, participants will gain a clear and practical understanding of mpox and its management. This updated CME course focuses on the new variant strain (clade) of mpox, highlighting its distinct characteristics and clinical implications.</p>

<p>The sessions included in this course take a departure from the traditional slide presentation style lecture. Instead, the course is comprised of a video lecture aided by real-time instructor-led chalkboard visuals. This method of learning allows for the subject matter to be broken down to the basics and is designed to increase learning and retention.</p>
`,
      },
      {
        title: 'Pneumonia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Pneumonia Explained Clearly</h4>

<p>Understand Pneumonia diagnosis and treatment with this clear and concise medical course from Dr. Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical lectures will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical lectures, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical Illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find Pneumonia Explained Clearly very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Shock & Sepsis',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Shock and Sepsis Explained Clearly</h4>

<p>Understand Shock and Sepsis causes, diagnosis, and treatment with this easy to follow medical review by Dr. Seheult.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram videos will be available first here at MedCram.com (and publicly posted to our YouTube medical channel weeks later... if at all).</p>

<p>Also, a growing amount of MedCram medical content (videos, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding of key medical concepts by focusing in on what is most important. Dr. Seheult's medical Illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find Shock and Sepsis Explained Clearly very informative, easy to follow, and fun...enjoy!</p>
`,
      },
      {
        title: 'Illness from Vaping/E-Cigs',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>What Clinicians Need to Know About the Evolving Epidemic</h4>

<p>Vaping & E-Cigarette associated illnesses & deaths have resulted in significant media attention.</p>

<p>Dr. Seheult illustrates key points about vaping and E-cigarette associated lung injury and failure. Learn about the symptoms, diagnosis, imaging results, and treatment options -- that we know about at this time.</p>

<p>More information and studies are needed as vaping deaths and hospitalizations in 2019 continue to rise.</p>
`,
      },
      {
        title: 'Zika Virus',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Zika Virus Explained Clearly</h4>

<p>Understand Zika Virus symptoms, diagnosis, pregnancy complications, background, spread, and the treatment of Zika virus.</p>

<p>We're glad you're here!</p>

<p>You may have noticed that this medical video is also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube weeks later... if at all).</p>

<p>Also, a growing amount of MedCram content (videos, medical quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical Illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think you'll find Zika Virus Explained Clearly informative, easy to follow, and fun.</p>
`,
      },
    ],
  },
  {
    title: 'Nephrology',
    description: 'Courses on nephrology',
    slug: 'nephrology',
    children: [
      {
        title: 'BMP/Chem-7 Results',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Interpret Basic Metabolic Panel (CHEM-7) Results with Confidence</h4>

<p>The basic metabolic panel (BMP), also known as the "CHEM-7," is one of the most commonly ordered lab tests by clinicians in the hospital and the outpatient setting.</p>

<p>Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians make common interpretation mistakes - and most have not learned to unlock the full and great potential of the BMP.</p>

<p>Join renowned professor Roger Seheult, MD as he concisely explains the key components of the BMP that you need to know... from managing creatinine problems to clarity on hyponatremia.</p>

<p>After this series of short videos and quizzes, you'll be on your way to accurately interpret BMP results and save time in the process.</p>

<h3>Leukopenia causes and neutropenia</h3>

<h4>WHO IS THIS COURSE FOR?</h4>
<p>Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that order BMPs.</p>

<h4>WHO IS THE INSTRUCTOR?</h4>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>

<p>...and clear understanding leads to mastery of BMP results interpretation. <a href="#">Learn more about Dr. Seheult</a>.</p>

<h4>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h4>
<ul>
  <li>A clear understanding of each possible BMP result: hyper and hyponatremia, hyper and hypokalemia, chloride and bicarbonate problems, BUN and creatinine problems, and hyper and hypoglycemia.</li>
  <li>Initial management and treatment recommendations based on the BMP result.</li>
  <li>Guidelines for when to order a BMP, and tips for following serial BMPs.</li>
  <li>A clinical perspective of BMP nuances, pitfalls, and patterns.</li>
  <li>Quick quiz questions to reinforce core concepts and help you study.</li>
  <li>Includes 7 CME Credits/MOC Points/CE.</li>
  <li>1 year of unlimited access on up to 3 devices.</li>
</ul>
`,
      },
      {
        title: 'Medical Acid Base + ABGs',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Gain a Clear Understanding of Acid-Base Disorders in Patients</h4>

<p>Acid-base disturbances are common clinical problems. Accurate interpretation of lab tests in patients with acid-base issues is crucial for making a precise diagnosis and providing effective treatment. Immerse yourself in a recently updated series of concise videos, quizzes, and practice problems as you advance toward achieving acid-base mastery!</p>

<h3>WHO IS THE INSTRUCTOR?</h3>
<p>Dr. Seheult is trusted by Universities, clinicians & students for his ability to illustrate key concepts so they are understood, not memorized...</p>

<p>... and clear understanding leads to mastery of medical acid-base!</p>

<h3>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h3>
<ul>
  <li>A systematic approach to lab results to spot abnormal acid-base findings and solve acid-base questions.</li>
  <li>A clear understanding of the four primary types: metabolic acidosis, respiratory acidosis, metabolic alkalosis, and respiratory alkalosis.</li>
  <li>Illustrations of Winter's Formulas, the Anion Gap, Compensation, and the balance involved with Bicarb, Carbon Dioxide, and more.</li>
  <li>Hands-on interpretation practice with multiple practice cases. Dr. Seheult will work through these in the video in real-time.</li>
  <li>A clinical perspective of acid-base nuances.</li>
  <li>A post-course quiz to reinforce core concepts and help you study.</li>
  <li>1 year of unlimited access on up to 3 devices.</li>
</ul>
`,
      },
      {
        title: 'Acute Renal Failure',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Acute Renal Failure (Acute Kidney Injury) Diagnosis and Treatment</h4>

<p>We’re glad you’re here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We’ve got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize medical retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Acute Renal Failure Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'CBC Results',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Interpret CBC Results Quickly & With Confidence</h4>

<p>Are Complete Blood Count (CBC) results involved in your medical practice?</p>

<p>Looking for clarity on how to quickly interpret and follow CBC results accurately?</p>

<p>Join renowned instructor Dr. Seheult as he concisely explains the key components of the CBC... from anemia to thrombocytosis.</p>

<p>After this series of short videos and quizzes, you'll be on your way to accurately interpret CBC results and save time doing so.</p>

<p><strong>Leukopenia causes and neutropenia</strong></p>

<h3>Who is this course for?</h3>
<p>Clinicians (MD, DO, NP, PA, RNs) and students in a variety of specialties that order CBCs.</p>

<h3>Who is the instructor?</h3>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>...and clear understanding leads to mastery of CBC results interpretation. <a href="link_to_dr_seheult_bio">Learn more about Dr. Seheult</a>.</p>

<h3>What you'll receive from this course:</h3>
<ul>
  <li>An understanding of each possible CBC result: leukocytosis, anemia, polycythemia, thrombocytopenia, etc.</li>
  <li>Initial management and treatment recommendations based on the CBC result - including blood transfusions and protocols for procedures</li>
  <li>Guidelines for when to order a CBC, the frequency to use for follow-up labs, and tips for following serial CBCs</li>
  <li>A clinical perspective of CBC nuances, pitfalls, and patterns</li>
  <li>Quiz questions to reinforce core concepts and help you study</li>
</ul>

<p>1 year of unlimited access on up to 3 devices</p>
`,
      },
      {
        title: 'Hyponatremia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Enjoy a Clear & Lasting Understanding of Hyponatremia Diagnosis & Treatment</h4>

<p>Hyponatremia is the most common electrolyte disorder that clinicians encounter. Hyponatremia is also complex and often treated incorrectly.</p>

<p>Get clarity on hyponatremia with renowned instructor Dr. Seheult. Master the key clinical concepts... from hypotonic to hypertonic hyponatremia, and everything in between.</p>

<h3>Who is this for?</h3>
<p>Clinicians (MD, DO, NP, PA, RNs) and students in a variety of specialties that encounter hyponatremia.</p>

<h3>Who is the instructor?</h3>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>...and clear understanding leads to mastery of hyponatremia. <a href="link_to_dr_seheult_bio">Learn more about Dr. Seheult</a>.</p>

<h3>What you'll receive from this course:</h3>
<ul>
  <li>An understanding of each type of hyponatremia from hypertonic to hypovolemic.</li>
  <li>Initial management and treatment recommendations based on the type and cause of hyponatremia.</li>
  <li>A review of important concepts for understanding hyponatremia such as osmolality, tonicity, ADH, and aldosterone.</li>
  <li>A clinical perspective of fluid balance.</li>
  <li>Includes 1.25 CME Credits / MOC Points / CE.</li>
  <li>Quiz questions to reinforce core concepts and help you study.</li>
</ul>

<p>1 year of unlimited access on up to 3 devices</p>
`,
      },
      {
        title: 'Urinalysis',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Clearly Understand & Interpret Urinalysis Results</h4>

<p>From a simple urine dipstick test to microscopic examination, the urinalysis is among the most common and useful tests available.</p>

<p>Looking for clarity on how to interpret urinalysis results? </p>

<p>Are you brushing past some results because you don't understand their clinical significance?</p>

<p>In Urinalysis Explained Clearly, renowned instructor Dr. Roger Seheult illustrates each urinalysis finding in a series of digestible videos, quizzes, and case studies.</p>

<h3>Who is this course for?</h3>
<p>Clinicians and students in emergency medicine, critical care, and ICU settings. Physicians, nurse practitioners, physician assistants, & nurses who seek clarity with urinalysis interpretation.</p>

<h3>Who is the instructor?</h3>
<p>Dr. Seheult is trusted by Universities, students, and medical professionals, for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>...and clear understanding leads to competence and avoiding those dreaded feelings of information overload!</p>
<p>It has never been easier to understand urinalysis. Watch this video series now to achieve clarity - resulting in better patient care and exam scores.</p>

<h3>What you'll receive from this course:</h3>
<ul>
  <li>The pros and cons of each urine collection method.</li>
  <li>A breakdown of what each urinalysis result means (protein, nitrites, blood, etc.).</li>
  <li>The difference between bilirubin and urobilinogen.</li>
  <li>A review of urine electrolytes.</li>
  <li>How to perform a gross assessment of urine.</li>
  <li>Illustrations of the key urine crystals and casts.</li>
  <li>Helpful ways to utilize equations such as FENa, FEUrea, TTKG, and Urinary anion gap.</li>
  <li>Quiz questions and case studies to reinforce core concepts and help you study.</li>
  <li>Includes 3 CME (Category 1), MOC Points, CE Credits.</li>
</ul>

<p>1 year of full unlimited access on up to 3 devices</p>
`,
      },
      {
        title: 'The Adrenal Gland',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand the Adrenal Cortex with This Clear Medical Explanation from Dr. Roger Seheult</h4>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize medical retention and understanding by focusing in on what is most important. Dr. Seheult's medical Illustrations, charts, memory aids, and medical quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Adrenal Gland Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'DKA',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Diabetic Ketoacidosis (DKA) Diagnosis and Treatment with This High Yield Medical Course by Dr. Seheult</h4>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, and audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical Illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Diabetic Ketoacidosis (DKA) Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Hyperkalemia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Hyperkalemia Diagnosis and Treatment with This Clear and Concise Medical Lecture from Dr. Roger Seheult</h4>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Hyperkalemia Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Hypernatremia',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Hypernatremia Diagnosis and Treatment with This Clear and Concise Medical Lecture by Dr. Roger Seheult</h4>

<p>We're glad you're here!</p>

<p>You may have noticed this medical video is also available at our MedCram YouTube channel... but stick around because all new MedCram videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes, audio lectures) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Hypernatremia Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Hypertension',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Hypertension Causes, Diagnosis, and Treatment with This Clear and Concise Medical Course by Dr. Roger Seheult</h4>

<p>We're glad you're here!</p>

<p>You may have noticed that the lectures in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram medical videos will be available first here at MedCram.com (and publicly posted to YouTube later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical videos, quizzes, medical review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram medical videos allow you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Hypertension Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Neprhotic vs. Nephritic',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand the Key Differences Between Nephrotic and Nephritic Syndromes with This Clear and Concise Medical Video from Dr. Seheult</h4>

<p>We're glad you're here!</p>

<p>You may have noticed that this medical video is also available at our MedCram YouTube channel... but stick around because all new MedCram medical lectures will be available first here at MedCram.com (and publicly posted to YouTube weeks later... if at all).</p>

<p>Also, a growing amount of MedCram content (medical lectures, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Nephrotic vs Nephritic Syndrome Explained Clearly</strong> very informative, easy to follow, and fun.</p>
`,
      },
      {
        title: 'Shock & Sepsis',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Shock and Sepsis Causes, Diagnosis, and Treatment with This Easy to Follow Medical Review by Dr. Seheult</h4>

<p>We're glad you're here!</p>

<p>You may have noticed that the videos in this medical course are also available at our MedCram YouTube channel... but stick around because all new MedCram videos will be available first here at MedCram.com (and publicly posted to our YouTube medical channel weeks later... if at all).</p>

<p>Also, a growing amount of MedCram medical content (videos, quizzes, review notes) is only available here at MedCram.com - and not available on YouTube.</p>

<p>We've got you covered!</p>

<p>MedCram allows you to cut down on study time and maximize retention and understanding of key medical concepts by focusing in on what is most important. Dr. Seheult's medical illustrations, charts, memory aids, and quizzes will make learning and reviewing medical topics a breeze. We think (and certainly hope) you'll find <strong>Shock and Sepsis Explained Clearly</strong> very informative, easy to follow, and fun...enjoy!</p>
`,
      },
    ],
  },
  {
    title: 'Pharmacology',
    description: 'Courses on pharmacology',
    slug: 'pharmacology',
    children: [
      {
        title: 'BMP/Chem-7 Results',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Interpret Basic Metabolic Panel (CHEM-7) Results with Confidence</h4>

<p>The basic metabolic panel (BMP), also known as the "CHEM-7," is one of the most commonly ordered lab tests by clinicians in the hospital and the outpatient setting.</p>

<p>Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians make common interpretation mistakes - and most have not learned to unlock the full and great potential of the BMP.</p>

<p>Join renowned professor Roger Seheult, MD as he concisely explains the key components of the BMP that you need to know... from managing creatinine problems to clarity on hyponatremia.</p>

<p>After this series of short videos and quizzes, you'll be on your way to accurately interpret BMP results and save time in the process.</p>

<h3>Leukopenia Causes and Neutropenia</h3>

<h5>WHO IS THIS COURSE FOR?</h5>
<p>Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that order BMPs.</p>

<h5>WHO IS THE INSTRUCTOR?</h5>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>...and clear understanding leads to mastery of BMP results interpretation. <a href="#">Learn more about Dr. Seheult.</a></p>

<h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
<ul>
  <li>A clear understanding of each possible BMP result: hyper and hyponatremia, hyper and hypokalemia, chloride and bicarbonate problems, BUN and creatinine problems, and hyper and hypoglycemia</li>
  <li>Initial management and treatment recommendations based on the BMP result</li>
  <li>Guidelines for when to order a BMP, and tips for following serial BMPs</li>
  <li>A clinical perspective of BMP nuances, pitfalls, and patterns</li>
  <li>Quick quiz questions to reinforce core concepts and help you study</li>
  <li>Includes 7 CME Credits/MOC Points/CE</li>
  <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Vasopressors',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Gain a Clear & Lasting Understanding of How to Use Vasopressors Effectively</h4>

<p>Having trouble keeping all the vasopressors & inotropes straight?</p>

<p>Looking for an easy-to-follow method for determining which vasopressor to use (and in what order)?</p>

<p>In <strong>Vasopressors Explained Clearly</strong>, renowned instructor Dr. Roger Seheult illustrates a concise way to understand vasopressors & inotropes, and how to systematically manage patients with hypotension & septic shock.</p>

<h5>WHO IS THIS COURSE FOR?</h5>
<p>Clinicians in emergency medicine, critical care, and ICU settings. Physicians, nurse practitioners, physician assistants, & nurses who seek to better understand the use of vasopressors & inotropes.</p>

<h5>WHO IS THE INSTRUCTOR?</h5>
<p>Dr. Seheult is trusted by Universities, students, and medical professionals, for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>...and clear understanding leads to competence and avoiding those dreaded feelings of information overload!</p>

<p>It has never been easier to understand vasopressors, inotropes, & septic shock management. Watch this video series now to master this crucial emergency medicine & ICU skill.</p>

<h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
<ul>
  <li>Key physiology of endogenous vs. exogenous vasopressors</li>
  <li>Illustrations of the receptors involved in mediating blood pressure</li>
  <li>A thorough comparison of each vasopressor + key differences</li>
  <li>A systematic approach to managing hypotension and septic shock</li>
  <li>Central line vs. alternative options for administration</li>
  <li>A clinical perspective of tips, nuances, & practice scenarios</li>
  <li>Quiz questions to reinforce core concepts and help you study</li>
  <li>1.75 CME (Category 1), MOC Points, CE Credits Included</li>
  <li>1 year of full unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Hypertenstive Crisis',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Recognize and Treat Hypertensive Urgencies and Emergencies with Confidence</h4>

<p>An elevated blood pressure can be an "urgency" or true emergency. What are the initial steps and how does a clinician differentiate between the two? What treatment steps should be taken (and over what amount of time)? This high yield course will break down the essentials of hypertensive crises in classic MedCram fashion.</p>

<p>Unfortunately, many physicians, PAs, NPs, RTs, and other clinicians make common interpretation mistakes - and do not understand the nuances of how to recognize and treat hypertensive crises.</p>

<p>Join renowned professor Roger Seheult, MD as he concisely explains the key components of the hypertensive crisis that you need to know... from managing hypertension effectively in the clinic to the ICU setting.</p>

<p>After this series of short videos and quizzes, you'll be on your way to effectively managing hypertensive crises and save time in the process.</p>

<h5>WHO IS THIS COURSE FOR?</h5>
<p>Clinicians (MD, DO, NP, PA, RN, RTs) and students in a variety of specialties that treat hypertension.</p>

<h5>WHO IS THE INSTRUCTOR?</h5>
<p>Dr. Roger Seheult is trusted by Universities, clinicians, and students for his ability to illustrate key concepts so they are understood, not memorized...</p>
<p>...and clear understanding leads to mastery of hypertensive urgencies and emergencies.</p>

<h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
<ul>
  <li>A clear understanding of how to efficiently recognize hypertensive urgencies and emergencies</li>
  <li>How to manage and treat hypertensive crises, and what level of treatment the patient should receive (clinic vs. hospital vs. ICU)</li>
  <li>A clinical perspective of hypertensive crises nuances, pitfalls, and patterns</li>
  <li>Quick quiz questions to reinforce core concepts and help you study</li>
  <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Antibiotics Review',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand the Key Medications & Concepts from All the Major Antibiotic Classes</h4>

<p>This course includes coverage, efficacy, differences between generations, important side effects, and more for the following classes of antibiotics:</p>

<ul>
  <li>Penicillins</li>
  <li>Cephalosporins</li>
  <li>Fluoroquinolones</li>
  <li>Macrolides</li>
  <li>Tetracyclines</li>
  <li>Aminoglycosides</li>
  <li>Monobactams and Carbapenems</li>
  <li>Vancomycin</li>
  <li>Trimethoprim/sulfamethoxazole (Bactrim, Septra)</li>
  <li>Clindamycin</li>
</ul>

<p>Mini-quizzes reinforce understanding of key concepts.</p>

<h5>WHAT YOU'LL RECEIVE FROM THIS COURSE:</h5>
<ul>
  <li>1 Year of Unlimited Access on up to 3 devices</li>
  <li>Includes 3 CME / MOC Points / CE Credits</li>
  <li>Includes mp3 files of each video for listening on the go</li>
</ul>
`,
      },
      {
        title: 'Inhalers (Asthma/COPD)',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Understand Asthma and COPD Inhalers</h4>

<p>This concise overview covers the "step-up" inhaler treatment for both asthma and COPD. It includes discussion and illustrations on the following inhaler types:</p>

<ul>
  <li><strong>SABA Inhalers</strong> (Short Acting Beta Agonists - Albuterol, etc.)</li>
  <li><strong>LABA Inhalers</strong> (Long Acting Beta Agonists - Salmeterol, etc.)</li>
  <li><strong>ICS</strong> (Inhaled Corticosteroids - Fluticasone, etc.)</li>
  <li><strong>LAMAs</strong> (Long Acting Muscarinic Receptor Antagonists - Tiotropium, etc.)</li>
</ul>

<p>Includes detailed illustrations to help with understanding the naming and usage of these inhalers for optimal asthma and COPD management.</p>
`,
      },
    ],
  },
  {
    title: 'Ultrasound',
    description: 'Courses on Ultrasound',
    slug: 'ultrasound',
    children: [
      {
        title: 'Ultrasound',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `INTERESTED IN MAKING ULTRASOUND PART OF YOUR CLINICAL PRACTICE?
Renowned instructor Dr. Jacquet illustrates core ultrasound concepts in a way that you will understand and remember.

WHO IS THIS COURSE FOR?
Students and medical professionals in a variety of medical fields. Physicians, NPs, PAs, RTs, nurses, & technicians who seek clinical/ point-of-care ultrasound (POCUS) to become a part of their practice.

For those new to ultrasound, this course provides an excellent foundation prior to participating in hands-on training of specific exam techniques.

For those with prior ultrasound experience, this course provides a focused review of the core concepts needed to advance skills and understanding.



Learn the key elements of each ultrasound probe



WHAT YOU'll RECEIVE FROM THIS COURSE:
An overview of ultrasound transducers and what they're used for
Key ultrasound terminology, orientation, imaging planes, and biosafety
Step by step illustrations of the nobs, dials, and modes of an ultrasound machine ("knobology")
Examples of various ultrasound artifacts that impact ultrasound images
How to handle an ultrasound transducer and set up the machine for your first ultrasound exam
Quiz questions after each video to reinforce essential concepts
Includes 4 CME (category 1), MOC Points, CE Credits
1 year of unlimited access, so you can review videos as needed (all MedCram courses are mobile/tablet friendly)`,
      },
      {
        title: 'FAST Exam',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Confidently Perform & Interpret the FAST Ultrasound Exam</h4>

<p>Need to learn FAST for your job or rotation in the trauma or emergency setting? Looking to improve your FAST technique and efficiency?</p>

<p>In <strong>FAST Exam Explained Clearly</strong>, ultrasound expert & ED physician <strong>Joshua Jacquet, MD</strong> illustrates a straightforward system that will have you performing FAST & Extended FAST Exams efficiently and accurately.</p>

<p>The Focused Assessment with Sonography in Trauma (FAST) has become an integral part of a trauma survey, performed immediately after the primary survey of the ATLS protocol. FAST detects hemoperitoneum similarly to CT scan and diagnostic peritoneal lavage, but is faster, cheaper, and avoids radiation or an invasive procedure.</p>

<p>The Extended FAST Exam (EFAST) detects hemopericardium, hemothorax, & pneumothorax, enabling faster and more accurate diagnosis and life-saving interventions for trauma patients.</p>

<p>Watch this video series for a clear and enjoyable approach to mastering the FAST & EFAST bedside exams.</p>

<h5>What You’ll Receive from This Course:</h5>
<ul>
  <li>Essential background information and indications for the FAST Exam</li>
  <li>A clear & concise method for performing the 4 classic FAST windows (RUQ, LUQ, Pelvic, & Cardiac)</li>
  <li>Steps to effectively perform the EFAST Exam and assess the pleural space and lung sliding</li>
  <li>Tips & nuances for clinical application & additional point-of-care ultrasound uses (POCUS)</li>
  <li>How to assess for hemothorax and pneumothorax with numerous examples</li>
  <li>Quiz questions to reinforce core concepts and help you study</li>
  <li>5 trauma cases worked through by Dr. Jacquet to expand your understanding</li>
  <li>1 year of full unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Lung Ultrasound',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Take Your Clinical Skills to the Next Level - Fast & Accurate Diagnosis at the Bedside that "Practically Feels Like Cheating"</h4>

<p>Lung Ultrasound (LUS) is becoming a critical skill for clinicians of all levels. LUS has proven to be useful in a wide variety of acute and chronic conditions, and it is rapidly gaining popularity across many medical specialties.</p>

<p>Lung Ultrasound is relatively easy to learn, quick to perform at the bedside, and outperforms the accuracy of a chest X-ray for most lung conditions.</p>

<p>In fact, LUS rivals the accuracy of CT imaging for acute respiratory failure—without the radiation. Therefore, LUS can be safely utilized in all patient populations (including pediatrics and pregnancy), both inpatient and outpatient.</p>

<p>In <strong>Lung Ultrasound Explained Clearly</strong>, you'll enjoy a series of concise videos, quizzes, and case studies as you move towards mastery. It has never been easier to get clarity with Lung Ultrasound. Start watching now (some videos are "free trial") and have confidence with this exciting and incredibly useful imaging modality!</p>

<p>Clearly understand lung ultrasound findings in the diagnoses of COPD, asthma, pneumothorax, pulmonary embolism, pulmonary edema, pneumonia, pleural effusion, acute respiratory distress syndrome, and more.</p>

<p>This non-traditional program has been approved for <strong>6.25 contact hours Continuing Respiratory Care Education (CRCE)</strong> credit by the American Association for Respiratory Care. Course #184591000.</p>

<h5>What You’ll Receive from This Course:</h5>
<ul>
  <li>A systematic approach to performing a bedside ultrasound and spotting abnormal findings</li>
  <li>Illustrations and examples of all major abnormal LUS findings</li>
  <li>Recognition of key patterns on lung ultrasound and their clinical meanings</li>
  <li>Learn the evidence-based BLUE protocol for diagnosing causes of acute respiratory failure with 90.5% accuracy</li>
  <li>Understand how LUS can be used adjunctly in airway and ventilator management</li>
  <li>Reinforcement of key concepts with actual patient cases</li>
  <li><strong>6.25 CRCE Contact Hours</strong> included</li>
  <li>Quiz questions to reinforce core concepts and help you study</li>
  <li>1 year of unlimited access on up to 3 devices</li>
</ul>
`,
      },
      {
        title: 'Lung Ultrasound in COVID-19',
        description: 'ECG interpretation courses',
        link: '/video-details',
        slug: 'covid-19-ventilator-course',
        longDec: `<h4>Point of Care COVID-19 Diagnosis and Monitoring with Lung Ultrasound</h4>

<p>As communities across the world are facing or preparing for increasing numbers of patients in respiratory distress from COVID-19, emergency medicine physician and ultrasound expert, Dr. Jaquet, has recorded this video series for clinicians and hospitals on the frontlines.</p>

<p>Learn why lung ultrasound rivals a CT scan for accurate diagnosis and monitoring of coronavirus infection from the SARS-CoV-2 virus. This concise video series (under one hour in length) will quickly review the core principles of lung ultrasound and progress to COVID-19 specific findings.</p>

<p><strong>This course will remain free, please share it with anyone you think may be interested. We hope you find it helpful, and we welcome feedback.</strong></p>

<p>This course only briefly reviews lung ultrasound principles. For a more comprehensive video series, please see <a href="Lung_Ultrasound_Explained_Clearly_Link" target="_blank"><strong>Lung Ultrasound Explained Clearly</strong></a>.</p>

<p>If you are new to point of care ultrasound or want to review the basics, please see <a href="Ultrasound_Principles_Explained_Clearly_Link" target="_blank"><strong>Ultrasound Principles & Instrumentation Explained Clearly</strong></a>.</p>

<p>We appreciate you – medical professionals, students, and volunteers around the world. We are in this fight together.</p>
`,
      },
    ],
  },
];
