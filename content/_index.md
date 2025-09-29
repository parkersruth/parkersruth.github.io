---
title: "Parker Ruth - Stanford CS PhD"
---

I'm a Stanford Computer Science PhD student working in the intersection of computing, engineering, and medicine. I'm currently designing sensors and algorithms to measure digital biomarkers of neuromuscular and cardiovascular health.
I am fortunate to be advised by [James Landay](https://www.landay.org/) and collaborate with [Scott Delp](https://nmbl.stanford.edu/people/scott-delp/) in biomechanics, [Todd Coleman](https://engineering.stanford.edu/people/todd-coleman) in bioengineering, [Alison Marsden](https://cbcl.stanford.edu/people/alison-marsden) in cardiology, [Jeremy Dahl](https://med.stanford.edu/profiles/jeremy-dahl) in radiology, and [Emily Fox](https://statistics.stanford.edu/people/emily-b-fox) in statistics.

I earned undergraduate degrees in bioengineering and computer engineering from the University of Washington in Seattle. As a member of the UbiComp Lab advised by [Shwetak Patel](https://ubicomplab.cs.washington.edu/members/), I explored applications of computing tools to improve the quality and accessibility of healthcare, including mobile health, wearables, and population health.

I'm honored to be named an NIH F31 Predoctoral Fellow, NSF Graduate Research Fellow, Hertz Fellowship Finalist, and Goldwater Scholar.

I will graduate with my PhD in 2027.


# Research

## Quantifying Human Movement

Measuring human movement is an essential part of measuring our overall health.
I study how ubiquitous sensors can capture insights about our physical health from the way we move.

{{< image src="opencap_nmd.svg" width="35rem">}}
Illustration showing people being recorded by smartphone cameras. Videos are processed using OpenCap to produce a skeletal model which is then used to generate features for disease classification and biomarker design.
{{< /image >}}


### Video-based neuromuscular biomarkers

{{< image src="opencap.svg" class="inline" class="right" width="7rem">}}
Two smartphones on tripods filming a man running.
{{< /image >}}

Slow-progressing movement disorders are difficult to measure over time. Common movement metrics are not sensitive to disease-specific movement patterns, limiting our ability to measure drug effects and monitor progression.
I aim to close this gap with [OpenCap](https://www.opencap.ai/), a smartphone-based tool for biomechanical analysis developed by the Stanford [NMBL Lab](https://nmbl.stanford.edu/).
By running high-throughput studies and on-site data collections at conferences, community events, and clinics, I collected the largest motion capture dataset for muscular dystrophy.
I showed that video analysis can detect differences in gait kinematics and arm range-of-motion that existing metrics miss.
I'm now designing more sensitive biomarkers of neuromuscular health.

{{< button Paper "https://doi.org/10.1056/AIoa2401137" >}}

{{< button Video "https://youtu.be/80fBkUhcj5Q" >}}

{{< button Data "https://doi.org/10.5281/zenodo.13788592" >}}

{{< button Code "https://github.com/stanfordnmbl/opencap-fshd-dm-analysis" >}}


### Mobile Sonar Exercise Sensing

{{< image src="sonar.svg" class="inline" class="right" width="5rem">}}
illustration of a smartphone on a desk emitting sound waves towards a seated user
{{< /image >}}

Sustained physical activity is among the best predictors of overall health and wellbeing, yet most adults fall short of national exercise recommendations. While working in the [UbiComp Lab](https://ubicomplab.cs.washington.edu/members/), I collaborated with the [Sports Institute at UW Medicine](https://thesportsinstitute.com/), I designed a smartphone application that could be prescribed to patients at University of Washington Medicine clinics. To extend the quantification of physical activity beyond step counting, I tested the use of smartphone-based acoustic sonar sensing to classify home exercises.



## Sensing Cardiovascular Health

Cardiovascular health is among the most important factors for longevity and overall wellbeing.
I envision a future where affordable wearables can measure continuous changes in important parameters of heart and blood vessel function.
I'm currently leading a moonshot project designing novel sensors and algorithms for measuring digital biomarkers of cardiovascular health.
This work is funded by a \$200,000 Wu Tsai Human Performance Alliance Seed Grant and a \$148,000 NIH F31 Fellowship.
While this project remains in stealth mode, my prior work on cardiovascular sensing is described below.

{{< image src="wu_sim.svg" width="20em" >}}
Scatterplots comparing sBP prediction accuracy using existing sensors (RMSE=40.1) versus a proposed sensor (RMSE=4.26). Results are from a simulation.
{{< /image >}}


### Earbud Physiological Sensing

{{< image src="earbud_phys.svg" class="right" width="4rem" >}}
illustration of earbuds with heart icons
{{< /image >}}

The growing adoption of wireless earbuds provides an opportunity for new modalities of continuous physiological sensing.
I developed sensing and signal processing techniques for in-ear physiological sensing.
We showed that in-ear noise-cancelling microphones can be repurposed to recover heart sounds from digital stethoscopes.

{{< button Paper "https://doi.org/10.1109/EMBC53108.2024.10781641" >}}


### Smartphone Pulse Transit Time Measurement

Lowering barriers to regular blood pressure measurement is a grand challenge in health sensing. A common proxy for blood pressure is pulse transit time, the delay between a heartbeat and the arrival of the pulse wave at the fingertip.
[Prior work](https://ubicomplab.cs.washington.edu/pdfs/seismo.pdf) from my lab showed how smartphone cameras and motion sensors can be used to measure pulse transit time. I followed this work by implementing a smarthone app with real-time sensing, signal processing, and visualization. I presented this demo at a Paul G. Allen School technology CEO summit, the 2018 Industry Affiliates Research Day, and the 2018 University of Washington Undergraduate Research Symposium.

{{< button Poster "/docs/seismo_poster.pdf" >}}

{{< button Code "https://github.com/ubicomplab/Seismo" >}}

{{< image src="seismo.jpg" width="20rem">}}
illustration of real time pulse transit time sensing: the camera measures PPG, the accelerometer measures SCG, and the time difference between them is the PTT
{{< /image >}}


### Multi-Channel Facial Pulse Sensing

{{< image src="facemask.svg" class="right" width="12rem" >}}
illustration of pulse sensing face mask: flexible wires attach the four optical sensors to a main controller on the forehead; eyes are shielded behind plastic cups, and the superhero-like mask is made of blue foam
{{< /image >}}

The rise of headsets and head-worn technologies opens a door to measuring physiological signals from the arteries in the face.
To study the physiological patterns of pulse timing in facial arteries, I built a multi-channel facial pulse sensing system to record synchronized photoplethysmogram waveforms at multiple locations and optical wavelengths.

{{< button Paper "https://ieeexplore.ieee.org/document/9176700" >}}


## Ambient Intelligence for Healthcare

I am currently supporting an initiative to study how interactions between older adults and caregivers can be enhanced by privacy-preserving intelligent sensing systems integrated with the built environment.
We have conducted formative deisgn workshops with older adults, personal health aides, and certified nursing assistants. We are now prototyping multimodal health sensing systems in preparation for a field deployment study.

{{< image src="hpds.svg" width="18rem" >}}
Illustration of a small home with sensors (camera, indoor climate sensor, floor sensor, WiFi sensor, door sensor) and smart devices (smartwatch, ambient display, smart speaker, and tablet). There is an older adult inside and a caregiver at the door.
{{< /image >}}


## Population and Global Health

At UW, I worked with the [UbiComp Lab](https://ubicomplab.cs.washington.edu/) in computer science and the [Lutz Lab](https://www.lutzlab.org/) in bioengineering to design technologies to expand access to life-saving healthcare in resource-constrained settings.

### COVID Monitoring in Public Transportation

During the first years of the COVID-19 pandemic, my lab applied our expertise in infrastructure-based sensing to measure community transmission levels.
We collaborated with Microsoft Research to test if air filters and high-contact surfaces in public transportation could be repurposed as SARS-CoV-2 collection devices.
We found that PCR positive cases trended with county case rates.

{{< button Paper "https://doi.org/10.1016/j.scitotenv.2021.152790" >}}

{{< image src="bus_sampling.jpg" width="20rem" >}}
Illustration showing samples taken from air filters and hand rails on busses. Samples are extracted, and processed with RT-qPCR. Proportion of positive tests trends with county daily cases between August 2020 and February 2021.
{{< /image >}}


### Low-Cost SARS-CoV-2 Molecular Assays

Detecting and mitigating outbreaks of COVID-19 requires rapid and high throughput testing, disproportionately impacting regions with limited access to reagents, supplies, and staff.
I worked with bioengineering collaborators to develop and test faster and simpler COVID-19 protocols by performing direct amplification, bypassing the RNA extraction step.
This system was deployed at collaborating clinical facilities in the US and Zimbabwe.

{{< button Paper "https://doi.org/10.1016/j.ebiom.2021.103236" >}}


### Computer Vision for HIV Drug Resistance Testing

Detecting drug-resistant strains of HIV is necessary to prescribe life-saving treatment.
But the standard sequencing methods are infeasible in resource-limited settings where drug-resistant HIV is most threatening. Low-cost paper-based lateral flow tests can dramatically reduce cost barriers; however, human error limits the sensitivity and specificity these tests. I built an image processing pipeline to interpret lateral flow tests for HIV and other global health applications.

{{< button Paper "https://www.thelancet.com/article/S2352-3964(19)30743-1/fulltext" >}}

{{< button Paper "https://journals.lww.com/aidsonline/Fulltext/2020/07150/Near_point_of_care,_point_mutation_test_to_detect.6.aspx">}}

{{< button Paper "https://doi.org/10.1371/journal.pgph.0000185" >}}

{{< button Paper "https://www.medrxiv.org/content/10.1101/2021.05.26.21257187v1" >}}


{{< image src="ola-simple.jpg" width="20rem" >}}
illustration of computer vision algorithm: the bands on a lateral flow test are found with peak detection; the pixel regions of each band are compared with adjacent background regions with a t-statistic
{{< /image >}}




# Teaching

### Human-Computer Interaction: Foundations and Frontiers
In winter 2024 I was a course assistant for Stanford CS 347. I led weekly discussion sections on seminal literature in human-computer interaction. I supported writing quizzes and grading reading reflections. I presented a lecture on HCI+Health.

### Ubiquitous Computing Seminar
During the 2019&ndash;2020 academic year I led the UW CSE 590 U ubiquitous computing research seminar, which met weekly to discuss academic papers in interaction techniques, wearables, novel sensing, and pervasive computing.

### MATLAB Seminar
In Autumn 2019 I co-instructed the UW BIOEN 217 MATLAB Fundamentals for Bioengineers seminar, which introduces programming in MATLAB to students from a variety of backgrounds. I developed biomedically relevant examples, prepared and delivered lectures, graded coding assignments, and supported course development.


### Biosignal Processing Textbook

I wrote a 140-page course textbook for BIOEN 316 Signals and Sensors for Bioengineers. Topics include biosignal acquisition, Fourier analysis, digital and analog filtering, and linear systems. All of the document's text, equations, and figures are typeset in pure LaTeX.

{{< button Book "https://parkersruth.com/biosignal-processing" >}}



# Service

### Undergraduate Researcher Mentorship
I am grateful for the excellent mentorship I have received and enjoy helping to uplift others. I mentor students through the CURIS program for Stanford undergaduates and the LINXS summer outreach program for students at HBCUs and HSIs. If you are an undergraduate interested in getting involved in research, please email me at paru@stanford.edu.

### Stanford Dean's Graduate Student Advisory Council
I represented the Computer Science Department on the Stanford Dean's Graduate Student Advisory Council, which works with the School of Engineering dean and chairs to help engineering graduate students thrive. I led a subcommittee working to institute individual development plans for all engineering PhD students, create the first school-wide student experience feedback survey, and mobilize event funding to foster inter-department social connections.

### Stanford Computer Science PhD Student Admissions Committee
I reviewed applications to the Stanford Computer Science PhD program in 2022 and 2023. I represented the Human Computer Interaction research area and advocated for applicants from both traditional and untraditional pathways.

### UW Bioengineering Department Curriculum Committee
I was selected to represent my undergraduate cohort on department curriculum committee.
We discussed improvements to department curriculum and student programs, collect student feedback, propose solutions to improve the academic experience.




# Awards


## Grants & Fellowship

{{< award date="August 2025" title="NIH F31 Predoctoral Fellowship" >}}
$148,000 national fellowship for cardiovascular health sensing work
{{< /award >}}

{{< award date="December 2024" title="Wu Tsai Human Performance Alliance Seed Grant" >}}
$200,000 internal Stanford grant for cardiovascular health sensing work
{{< /award >}}

{{< award date="April 2021" title="Tau Beta Pi Fellowship" >}}
$10,000 graduate research award
{{< /award >}}

{{< award date="March 2021" title="NSF Graduate Research Fellowship" >}}
$138,000 award funding 3 years of graduate research
{{< /award >}}


## National Honors

{{< award date="January 2022" title="Hertz Fellowship Finalist" >}}
One of 45 finalists for the most selective graduate STEM fellowship
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


## Undergraduate Honors


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
