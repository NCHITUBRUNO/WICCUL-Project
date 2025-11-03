import { Heart, Target, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const values = [
  {
    icon: Heart,
    title: 'Formulation of a Technical Committee',
    description: 'WICUDA Bamenda branch general meeting of 23rd March 2022 voted for the following into a technical committee with the mandate to formulate policies and procedures for the functioning of the credit union. These were\: Mbanwe Frederick – Chairman, Njeba Festus – President WICUDA Bamenda Branch (Vice Chairman), Barrister Nfor Dieudonne – Legal Adviser, Felix Karngong Nfor – In charge of diaspora connections.',
  },
  {
    icon: Target,
    title: 'List Of committee Members',
    description: 'This list of committee members were again increased with the following appointed by National WICUDA exco into the committee: Mrs Miriam Shey, Mr Taba Eric,Mr Ndzi Ignatius,Their mandates was later withheld as earlier reported. However, the technical committee continued to function until November 2022 when CamCCUL advised that the committee be transformed into a Board of Directors (BOD) in compliance with OHADA Law governing cooperative/microfinance Category 1. ',
  },
  {
    icon: Award,
    title: 'Intention for Network Affiliation & Registration',
    description: 'On 23rd March 2022 WICUDA Bamenda general meeting resolved unanimously for WICCUL to be affiliated to CamCCUL network. The BOD addressed a letter to the General manager - CamCCUL, declaring an intention for WICCUL to be affiliated to CamCCUL network. A prompt action was taken by the manager to appoint a staff, Mr Nkeh Edmond to carry out a feasibility study on the activities of WICCUL.',
  },
  {
    icon: Users,
    title: 'Staff Recruitment',
    description: 'This was programmed to start with a call for applicants. About 20 applications were received for a competitive written examination. Five came victorious in the written examination ready for an interview selection. From the interview the following was selected: Saah Dilane Nahyem – B.SC. Accounting, Ngwarnya Clovis Ringnyu – B.SC Banking, Tanifem Clodette Naweh – B.SC Accounting. After the recruitment, these staff, they were sent for three months training with CamCCUL. Their probation period was later renewed twice.',
  },
];

export default function About() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E5F74]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2E8B57]/5 rounded-full blur-3xl animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={contentRef}
            className={`space-y-8 animate-on-scroll ${contentVisible ? 'visible' : ''}`}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E5F74] mb-6">
                History of Wimbum Cooperative Credit Union (WICCUL)
              </h2>
              <p className="text-lg text-[#333333]/80 leading-relaxed mb-4 text-justify">
                The Wimbum Cooperative Credit Union was conceived in 2021 by Mbanwe Frederick, Felix Karngong Nfor, and Njeba Festus. 
                Their vision was adopted in March 2022 by the Wimbum Cultural and Development Association (WICUDA) Bamenda, with an overwhelming majority vote. 
                A technical committee was formed to lay the foundation for the credit union, aiming for a 2023 launch. Despite subsequent challenges reported to 
                and validated by the general assembly, the project continued to receive strong support from the Wimbum community and well-wishers.
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E5F74] mb-6">
                The Vision And Mission
              </h2>
              <p className="text-lg text-[#333333]/80 leading-relaxed text-justify">
                On the 23rd March 2022, the vision and mission were presented as conceived by Mr. Mbanwe Frederick to the WICUDA Bamenda general meeting as follows:
a) VISION
WICCUL aims to be the leading category 1 microfinance institution (category one) in Mbum land and beyond, providing excellent services and benefits to poor families who are members of the credit union.
b) MISSION

To help in providing access to finance, and provide exceptional value by enhancing sustainable economic opportunities for the members of WICCUL by embracing the following core values:
a) Innovative
b) Equal opportunities
c) Integrity
d) Equitable growth
e) Teamwork
f) Stewardship

              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1E5F74]/5 to-[#2E8B57]/5 rounded-2xl p-8 border-l-4 border-[#2563EB] hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <h3 className="text-xl font-bold text-[#1E5F74] mb-3">Control And Ownership</h3>
              <p className="text-[#333333]/80 leading-relaxed text-justify">
                Initially, WICUDA Bamenda was to oversee the credit union until members could elect a Board, transferring ownership to them per Cameroonian law. 
                The initiative was reported to National WICUDA in August 2023, which endorsed it and resolved to adopt it as a national project. To integrate efforts, 
                National WICUDA moved to co-opt some of its executive members into Bamenda's technical committee. However, these positions were later withheld due to 
                incompatibility with the agreed-upon action plan between the national and Bamenda branches.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '98%', label: 'Member Satisfaction', color: '#1E5F74' },
                { value: 'XAF 50M+', label: 'Loans Disbursed', color: '#2E8B57' }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-[#F8F9FA] rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-3xl font-bold mb-2 hover:scale-110 transition-transform duration-300" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#333333]/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={valuesRef}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`bg-gradient-to-br from-[#1E5F74] to-[#2E8B57] rounded-2xl p-6 text-white cursor-pointer hover-lift animate-on-scroll ${valuesVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-[#2E8B78] p-3 rounded-xl inline-flex items-center justify-center mb-4 hover:rotate-12 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
