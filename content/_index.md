---
title: "Parker Ruth - Stanford CS PhD"
---

I'm a Computer Science PhD student at Stanford University. My research lies in the intersection of computing, engineering, and medicine. I'm currently designing sensors and algorithms to measure digital biomarkers. I am fortunate to be advised by [James Landay](https://www.landay.org/) and collaborate with [Scott Delp](https://nmbl.stanford.edu/people/scott-delp/) in biomechanics, [Todd Coleman](https://engineering.stanford.edu/people/todd-coleman) in bioengineering, [Alison Marsden](https://cbcl.stanford.edu/people/alison-marsden) in pediatric cardiology, [Jeremy Dahl](https://med.stanford.edu/profiles/jeremy-dahl) in radiology, and [Emily Fox](https://statistics.stanford.edu/people/emily-b-fox) in statistics.

I earned undergraduate degrees in bioengineering and computer engineering from the University of Washington in Seattle. As a member of the UbiComp Lab advised by [Dr. Shwetak Patel](https://ubicomplab.cs.washington.edu/members/), I explored applications of computing tools to improve the quality and accessibility of healthcare, including mobile health, wearables, and population health.

I'm honored to be named an NSF Graduate Research Fellow, Hertz Fellowship Finalist, and Goldwater Scholar.

I will graduate with my PhD in 2027.

# Research

## Sensing human movement

### Video-based neuromuscular biomarkers

{{< image src="opencap_nmd.svg" class="inline" width="35rem" >}}
TODO - alt text
{{< /image >}}

Assessing human movement is essential for diagnosing and monitoring movement-related conditions.
Timed function tests (TFTs) are among the most widespread assessments due to their speed and simplicity.
However, TFTs cannot capture disease-specific movement patterns.
Recent advances in smartphone video-based biomechanical analysis allow detailed movement quantification with the ease and speed required for clinical settings.
To compare video-based analysis against TFTs, we collected data from 129 individuals: 28 with facioscapulohumeral muscular dystrophy, 58 with myotonic dystrophy, and 43 with typical movement.
Video-based movement recordings took a median time of 16 minutes per participant.
In addition to reproducing TFTs (r > 0.98), video metrics can outperform TFTs at disease classification (p < 0.001).
Video-based analysis also identifies differences in gait kinematics and arm range of motion not evident in TFTs.
We conclude that video-based biomechanical analysis can complement existing functional movement assessments and capture more sensitive, disease-specific outcomes from human movement.

{{< button Preprint "https://doi.org/10.1101/2024.09.26.613967" >}}
{{< button Video "https://youtu.be/tmlzs57l4YI" >}}

### Mobile Sonar Exercise Sensing

{{< image src="sonar_study.svg" class="inline" width="30rem">}}
illustration of ultrasound sonar project: a smartphone on a desk emits sounds towards a seated user, a computer screen displays instructions for the user to perform lunges, a smartphone application lets the user control starting and stopping the recording
{{< /image >}}

Physical inactivity is the fourth leading risk factor for death worldwide, and yet eighty percent of US adults do not meet national exercise recommendations. In collaboration with the [Sports Institute at UW Medicine](https://thesportsinstitute.com/), the UbiComp Lab is designing a smartphone application that can be prescribed to patients at University of Washington Medicine clinics. Physical activity is a vital sign that should be monitored regularly alongside blood pressure and BMI. Our application is designed to assist in goal setting, provide context-aware nudges, and connect exercise data with health care providers. To extend the quantification of physical activity beyond step counting, I evaluated the use of acoustic sonar sensing to classify a wide range of exercises. I mentored two high school interns who are assisted with data collection and analysis.



## Sensing cardiovascular health


<!-- ### Current stealth project -->

I'm currently designing sensors and algorithms for measuring digital biomarkers of cardiovascular health. This work is funded by a Wu Tsai Human Performance Alliance Seed Grant. Some of my prior work is described below


### Earbud Physiological Sensing

{{< image src="earbud_phys.svg" class="right" width="5em" >}}
illustration of earbuds with heart icons
{{< /image >}}

With wireless earbuds becoming increasingly powerful and widely used, we recognize an opportunity to leverage them as a platform for performing continuous physiological measurements. Modern earbuds can contain acoustic, inertial, optical, and proximity sensors that may be re-purposed to track vital signs and perform diagnostics. My contribution to this work includes prototyping signal processing techniques for in-ear physiological sensing, in addition to supporting study design, data collection, data analysis, and paper writing.

{{< button Paper "https://doi.org/10.1109/EMBC53108.2024.10781641" >}}


### Real-time Smartphone Pulse Transit Time Measurement

{{< image src="seismo.jpg" width="20em" >}}
illustration of real time pulse transit time sensing: the camera measures PPG, the accelerometer measures SCG, and the time difference between them is the PTT
{{< /image >}}

Pulse transit time (PTT) is the time differential between the heartbeat and the arrival of the pulse pressure wave at the fingertip. Since PTT is indicative of arterial stiffness, it can provide an early sign of atheroscloerosis and cardiovascular disease. Additionally, PTT is inversely correlated with blood pressure, providing an opportunity to perform noninvasive estimation of of blood pressure using commodity devices. [Prior work](https://ubicomplab.cs.washington.edu/pdfs/seismo.pdf) from my lab proposed the use of smartphones to measure PTT; I built upon this work by implementing a smartphone application that can perform real-time sensing, signal processing, and visualization code for the Android smartphone platform. I presented this work within the Paul G. Allen School of Computer Science & Engineering at an annual technology CEO summit and the 2018 Industry Affiliates Research Day, as well as the 2018 University of Washington Undergraduate Research Symposium.

{{< button Poster "/docs/seismo_poster.pdf" >}}
{{< button Code "https://github.com/ubicomplab/Seismo" >}}


### Multi-Channel Facial Photoplethysmography

{{< image src="facemask.svg" class="right" width="14em" >}}
illustration of pulse sensing face mask: flexible wires attach the four optical sensors to a main controller on the forehead; eyes are shielded behind plastic cups, and the superhero-like mask is made of blue foam
{{< /image >}}

The face provides a very unique opportunity for performing physiological sensing using wearables and camera-based systems. Measuring the vascular network in the face may enable disease diagnosis and continuous monitoring. A common technique for pulse sensing is photoplethysmography (PPG), a non-invasive optical measurement of blood pulses. However, facial PPG remains under-explored in terms of both signal acquisition and analysis. To characterize the timing and morphological features of facial PPG waveforms I designed, built, and tested a multi-channel facial PPG sensing system that can record synchronized pulse waveforms at multiple locations and optical wavelengths. I worked closely with a clinical collaborator from University of Washington Medicine, in addition to mentoring two undergraduate students.

{{< button Paper "https://ieeexplore.ieee.org/document/9176700" >}}







## Ambient Intelligence for Healthcare

TODO



<!-- ### Ubiquitous Non-Invasive Osteoporosis Screening
{{< image src="osteoapp.gif" class="right" width="8rem">}}
illustration of ultrasound sonar project: a smartphone on a desk emits sounds towards a seated user, a computer screen displays instructions for the user to perform lunges, a smartphone application lets the user control starting and stopping the recording
{{< /image >}}

Osteoporosis is characterized by a decrease in bone mass density (BMD) causing millions of fractures annually. The clinical standard for measuring BMD requires radiation, expensive equipment, and trained staff, motivating the need for a low-cost and ubiquitous alternative. I prototyped OsteoApp, a smartphone application that aims to infer bone mass density by measuring resonant frequency in a human tibia using the built-in accelerometer. I tested this system alongside a low-noice accelerometer data collection system I built with patients from local retirement communities as well as a control group of healthy volunteers, and performed signal processing and data analysis in Python. I presented this work at the 2019 University of Washington Undergraduate Research Symposium.

{{< button Poster "/docs/osteoapp_poster.pdf" >}} -->


## Global health

### SARS-CoV-2 Screening in Public Transportation Air Filtration

Motivated by the need for population level monitoring of COVID-19 transmission, the UbiComp Lab partnered with Microsoft Research to develop
protocols for obtaining environmental samples from public transportation air filtration systems to detect the presence of SARS-CoV-2. I supported these efforts by advising on study design, performing literature review, coordinating with collaborators, and participating in paper writing.

{{< button Paper "https://doi.org/10.1016/j.scitotenv.2021.152790" >}}


### Streamlining SARS-CoV-2 Molecular Assays

Detecting and mitigating outbreaks of COVID-19 requires rapid and high throughput testing, disproportionately impacting regions with limited access to reagents, supplies, and trained staff. I worked with bioengineering collaborators to develop and test faster and simpler COVID-19
protocols by performing direct amplification, bypassing the RNA extraction step. I created image processing algorithms for quantifying output fluorescence to reduce time and human error for point-of-care COVID-19 testing applications. This system was deployed for testing at clinical facilities in the US and Zimbabwe.

{{< button Paper "https://doi.org/10.1016/j.ebiom.2021.103236" >}}

### Computer Vision for HIV Drug Resistance Testing

<!-- {{< image src="ola-simple.jpg" width="25em" >}}
illustration of computer vision algorithm: the bands on a lateral flow test are found with peak detection; the pixel regions of each band are compared with adjacent background regions with a t-statistic
{{< /image >}} -->

Testing for drug resistant strains of HIV is necessary for clinicians to effectively treat patients; however, the standard genotyping assays like Sanger sequencing are infeasible in resource-limited settings where drug resistant HIV is increasingly circulating. OLA-Simple is a low-cost paper-based lateral flow strip test and chemistry kit that can be used to amplify and detect low amounts of drug-resistant strains of HIV. Five common drug-resistant mutations can be visualized as colored bands on a paper strip; however, human error limits the sensitivity and specificity of this test when interpreted by eye. I built computer vision code to read flatbed scanner images, isolate paper strips, and measure the band intensities to interpret the test results. I used this code to generate data for major tables and figures in the paper for this project, and performed an evaluation with training and testing datasets that demonstrated over 99% accuracy.

{{< button Paper "https://www.thelancet.com/article/S2352-3964(19)30743-1/fulltext" >}}

{{< button Paper "https://journals.lww.com/aidsonline/Fulltext/2020/07150/Near_point_of_care,_point_mutation_test_to_detect.6.aspx">}}

{{< button Paper "https://doi.org/10.1371/journal.pgph.0000185" >}}


###  Near Point-of-Care Assay for HIV Drug Sensitivity

Abacavir is a nucleoside analog reverse-transcriptase inhibitor used to treat HIV. Although it is generally well tolerated, it triggers dangerous anaphylactic shock in patients with the HLA-B*57:01 genotype. Scientists and engineers from UW Bioengineering and Seattle Children's Hospital developed a colorimetric lateral flow assay to identify patients at risk for drug sensitivity. I supported this work by applying image processing to reduce human error in assay interpretation.

{{< button Paper "https://www.medrxiv.org/content/10.1101/2021.05.26.21257187v1" >}}




# Teaching


## Course Instruction

### Ubiquitous Computing Seminar
During the 2019&ndash;2020 academic year I led the CSE 590 U ubiquitous computing research seminar, which met weekly to discuss academic papers in interaction techniques, wearables, novel sensing, and pervasive computing.

### MATLAB Seminar
In Autumn 2019 I co-instructed the BIOEN 217 MATLAB Fundamentals for Bioengineers seminar, which introduces programming in MATLAB to students from a variety of backgrounds. I developed biomedically relevant examples, prepared and delivered lectures, graded coding assignments, and supported course development.

## Curriculum Development

### Biosignal Processing Textbook

{{< image src="inducktor.jpg" width="30rem">}}
a worked example from the textbook called inDUCKtor: asks the student to derive the gain function for an RL circuit next to a duck wearing a stethoscope
{{< /image >}}

I wrote a 140-page course textbook for BIOEN 316 Signals and Sensors for Bioengineers. Topics include biosignal acquisition, Fourier analysis, digital and analog filtering, and linear systems. All of the document's text, equations, and figures are typeset in pure LaTeX.

{{< button Book "https://parkersruth.com/biosignal-processing" >}}

<!-- ### Python for Chemists

{{< image src="python-for-chemists.jpg" width="30rem">}}
screenshot of worksheet instructions for the Belousov=Zhabotinsky reaction kinetics: a chemical equation, a paper citation, and a list of assumptions and initial conditions
{{< /image >}}

I worked with a University of Washington chemistry professor to create Python programming Jupyter notebook worksheets to accompany homeworks and labs for the CHEM 155 honors general chemistry curriculum. The worksheets and answer keys are freely available to educators. Topics include root finding, reaction kinetics simulations, quantum wavefunction visualizations, and scientific computing.

{{< button Code "https://github.com/parkersruth/python-for-chemists" >}} -->



# Honors

## National Honors

{{< award date="January 2022" title="Hertz Fellowship Finalist" >}}
One of 45 finalists for the most selective graduate STEM fellowship
{{< /award >}}

{{< award date="April 2021" title="Tau Beta Pi Fellowship" >}}
$10,000 graduate research award
{{< /award >}}

{{< award date="March 2021" title="NSF Graduate Research Fellowship" >}}
$138,000 award funding 3 years of graduate research
{{< /award >}}

{{< award date="January 2021" title="CRA Outstanding Undergraduate Research Award Finalist" >}}
Awarded by Computing Research Association for ubiquitous computing research
{{< /award >}}

{{< award date="March 2020" title="Barry Goldwater Scholarship" >}}
National undergraduate research award
{{< /award >}}

{{< award date="January 2020" title="CRA Outstanding Undergraduate Research Award Finalist" >}}
Awarded by Computing Research Association for ubiquitous computing research
{{< /award >}}

{{< award date="August 2016" title="Davidson Fellows Scholarship Honorable Mention" >}}
Awarded for Paper Cup Construction initiative
{{< /award >}}

{{< award date="March 2016" title="National Merit Scholar" >}}
Awarded for academic merit
{{< /award >}}

## University of Washington Honors


{{< award date="June 2021" title="Outstanding Senior Award" >}}
Awarded by the UW Allen School for academics, research, leadership, and citizenship
{{< /award >}}

{{< award date="June 2021" title="Best Senior Thesis Award" >}}
Awarded by the UW Allen School for departmental honors thesis
{{< /award >}}

{{< award date="April 2021" title="College of Engineering Dean's Medal for Academic Excellence" >}}
One of two students recognized by the College of Engineering's highest honor
{{< /award >}}

{{< award date="March 2020" title="Husky 100 Award" >}}
Awarded annually to 100 UW students for making the most of their Husky experiences
{{< /award >}}

{{< award date="January 2020" title="Mary Gates Research Scholarship" >}}
Awarded for work on facial photoplethysmography sensing
{{< /award >}}

{{< award date="October 2019" title="Levinson Emerging Scholars Award" >}}
Awarded for work on facial photoplethysmography sensing
{{< /award >}}

{{< award date="September 2019" title="Microsoft Endowment Scholarship" >}}
Awarded by UW Paul G. Allen School for academic merit
{{< /award >}}

{{< award date="June 2019" title="Patricia G. Lynch and Theodora & Eugene Russell Memorial Scholarship" >}}
Awarded by UW College of Engineering for academic merit and service work
{{< /award >}}

{{< award date="November 2018" title="Tau Beta Pi Engineering Honor Society" >}}
Early induction; top 1/8 of junior class
{{< /award >}}

{{< award date="September 2018" title="Washington Research Foundation Fellowship" >}}
Awarded for work on OsteoApp research
{{< /award >}}

{{< award date="March 2018" title="Mary Gates Research Scholarship" >}}
Awarded for ubiquitous sleep apnea sensing research
{{< /award >}}

{{< award date="March 2018" title="Mary Gates Leadership Scholarship" >}}
Awarded for leadership of BioExplore initiative
{{< /award >}}

{{< award date="May 2017" title="Mary Gates Achievement Scholarship" >}}
Annual award for a rising sophomore in the Interdisciplinary Honors Program
{{< /award >}}

{{< award date="October 2016" title="Lavin Entrepreneurship Honors Program" >}}
Competitive UW program for undergraduate innovators
{{< /award >}}

{{< award date="September 2016" title="Interdisciplinary Honors Program" >}}
Selective community of undergraduate scholars
{{< /award >}}



# Service

## BioExplore

{{< image src="bioexplore.svg" class="right" width="16rem">}}
logo: BioExplore Bioengineering Research Exploration
{{< /image >}}

I launched BioExplore as an initiative to increase support for University of Washington students interested in bioengineering-related research. In its inaugural year, I led the club in coordinating workshops, lab tours, and presentations to provide tools to help undergraduates get involved in research. My work on BioExplore was recognized with a Mary Gates Leadership Scholarship.

<!-- {{< button Website "https://sites.bioe.uw.edu/bioexplore" >}} -->
{{< button Poster "/docs/bioexplore_poster.pdf" >}}


## Bioengineering Journal Club

{{< image src="bjc.jpg" class="right" width="8rem">}}
logo: Bioengineering Journal Club
{{< /image >}}

I launched the Bioengineering Journal Club (BJC) to provide an inclusive venue for University of Washington students to learn about and share their passions for cutting-edge research in bioengineering. Topics included rapid diagnostic tests, biomaterials, nanoengineering, and drug delivery. We held biweekly meetings in which researchers described their work and presented a paper for discussion. In collaboration with faculty and advisors, BJC was re-envisioned as BioExplore after a successful pilot year.
