import { useState } from 'react';
import { Wallet, CreditCard, HandshakeIcon, Building2, GraduationCap, CircleDollarSign } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: CircleDollarSign,
    title: 'Shares Account',
    description: 'To become a member, you must buy individual shares. A share cost 1,000 frs. WiCCUL requires a minimum of 35 shares costing 35,000frs.',
    features: ['Refundable at Account Closure', 'Recieves dividend at year end', 'Not Withdrawable'],
    modalContent: {
      details: [
        'Shares account is a capital contribution account. Members are not allowed to withdraw from this account. Withdrawal is only allowed at account closure.'
      ],
      requirements: ['Valid ID card', 'Proof of address', 'Minimum Share: 35,000 XAF'],
      benefits: ['Refundable at Account Closure', 'Recieves divident at year end', 'No Extra Charges.']
    }
  },
  {
    icon: CreditCard,
    title: 'Individual Savings Account',
    description: 'Money saved in this account is an investment, and therefore earns interest at end of the year.',
    features: ['Require Notification for huge withdrawals.', 'Recieves Interest at end of year', 'Little or No charges'],
    modalContent: {
      details: [
        'Money saved in this account is an investment. Members will definitely recieve interest in this account at the end of the year.'
      ],
      requirements: ['Require Notification for huge withdrawals', 'Valid identification'],
      benefits: ['Recieves Interest at end of year', 'Flexible payments',]
    }
  },
  {
    icon: Building2,
    title: 'Group Savings account',
    description: 'Applies same as individual savings account but for groups like cooperatives, associations etc.',
    features: ['SME focused', 'Njangi Groups', 'Companies & Associations'],
    modalContent: {
      details: [
        'Applies same as individual savings account but for groups like cooperatives, associations etc.'
      ],
      requirements: ['Business registration documents', 'Meeting Minutes', 'Atlease 3 Signatories', 'Shares worth: 25,000 frs'],
      benefits: ['Recieves Interest at end of year', 'Withdrawals without Notification', 'Customized plans']
    }
  },
  {
    icon: GraduationCap,
    title: 'Deposit Account',
    description: 'Here, deposits are made and can be withdrawn at anytime without any notification.',
    features: ['Good for Business People', 'No Notification Required', 'Pay Deposit Fees'],
    modalContent: {
      details: [
        'Here, deposits are made and can be withdrawn at anytime without any notification. This account is suitable for business people who make frequent transactions. And does not recieve interest at end of year.'
      ],
      requirements: ['Admission letter from accredited institution', 'Academic records', 'Parent/guardian co-signer'],
      benefits: ['Payment grace period up to 6 months after graduation', 'Interest-only payments during study period', 'Career counseling services']
    }
  },
  {
    icon: Wallet,
    title: 'Salary account',
    description: 'This account provide you with the opportunity to receive your salary with us at minimal charges.',
    features: ['Recieve your Salary', 'Civil Servants Payment', 'Risk managed'],
    modalContent: {
      details: [
        'This account provide you with the opportunity to receive your salary with us at minimal charges.'
      ],
      requirements: ['Hand Written Application', '02 passport size photograph', 'Attestation of Effective Service'],
      benefits: ['Recieve your salary', 'Obtain Monthly Payslips', 'Tax Advice']
    }
  },
  {
    icon: HandshakeIcon,
    title: 'Loans to members',
    description: 'We offer various loan facilities to our members. all conditions and procedures are well elaborate on our loan policy.',
    features: ['Business Loans', 'Agricultural Loans', 'Consumption Loans'],
    modalContent: {
      details: [
        'We offer various loan facilities to our members. all conditions and procedures are well elaborate on our loan policy.'
      ],
      requirements: ['Loan Application Form', 'Loan application', 'Business Plan (for business loans)'],
      benefits: ['Low Interest rates', 'Priority loan processing', 'Financial literacy training for members']
    }
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Icon = service.icon;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        ref={ref}
        className={`group bg-white rounded-2xl p-8 shadow-md transition-all duration-700 cursor-pointer border border-transparent hover:border-[#2E8B57]/30 hover-lift animate-on-scroll ${isVisible ? 'visible' : ''}`}
        style={{ transitionDelay: `${index * 0.1}s` }}
      >
        <div className="bg-gradient-to-br from-[#1E5F74] to-[#2E8B57] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-[#1E5F74] mb-3 group-hover:text-[#2E8B57] transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-[#333333]/80 mb-6 leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-2 mb-6">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-[#333333]/70">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2E8B78] group-hover:scale-150 transition-transform duration-300"></div>
              {feature}
            </li>
          ))}
        </ul>

        <button 
          onClick={openModal}
          className="text-[#2E8B57] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
        >
          Learn More
          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-[#1E5F74] to-[#2E8B57] w-12 h-12 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E5F74]">{service.title}</h3>
              </div>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Service Details</h4>
                <ul className="space-y-2">
                  {service.modalContent.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2E8B57] mt-2 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Requirements</h4>
                <ul className="space-y-2">
                  {service.modalContent.requirements.map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E5F74] mt-2 flex-shrink-0"></div>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h4>
                <ul className="space-y-2">
                  {service.modalContent.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E5F74] mt-2 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
            
            {/* Modal Footer */}
            <div className="flex justify-end gap-3 p-6 border-t bg-gray-50 rounded-b-xl">
              <button 
                onClick={closeModal}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
              >
                Close
              </button>
             {/* Not Needed for Now.
              <button 
                className="px-6 py-2 bg-[#2E8B57] text-white rounded-lg hover:bg-[#1E5E20] transition-colors font-medium"
              >
                Apply Now
              </button>
             */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-on-scroll ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E5F74] mb-4">
            Our Financial Services
          </h2>
          <p className="text-lg text-[#333333]/80 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to meet your personal and business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}