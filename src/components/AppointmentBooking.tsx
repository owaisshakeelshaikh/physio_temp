import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const treatments = [
  { id: 'sports', name: 'Sports Injury Rehabilitation', price: '$120', duration: '60 min' },
  { id: 'orthopedic', name: 'Orthopedic Physiotherapy', price: '$110', duration: '45-60 min' },
  { id: 'neurological', name: 'Neurological Physiotherapy', price: '$130', duration: '60 min' },
  { id: 'pediatric', name: 'Pediatric Physiotherapy', price: '$100', duration: '45 min' },
  { id: 'geriatric', name: 'Geriatric Physiotherapy', price: '$95', duration: '45-60 min' },
  { id: 'chronic', name: 'Chronic Pain Management', price: '$115', duration: '60 min' },
  { id: 'womens', name: "Women's Health Physiotherapy", price: '$120', duration: '60 min' },
  { id: 'workplace', name: 'Workplace Injury Rehab', price: '$110', duration: '60 min' },
];

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
];

const AppointmentBooking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { ref: sectionRef, isIntersecting: sectionVisible } = useScrollAnimation();

  const currentTreatment = treatments.find(t => t.id === selectedTreatment);

  const handleConfirm = () => {
    const treatmentName = currentTreatment?.name || '';
    const message = encodeURIComponent(
      `Hi! I'd like to book an appointment at RestoreFlex Physiotherapy.\n\n` +
      `Name: ${name}\nPhone: ${phone}\n` +
      `Treatment: ${treatmentName}\n` +
      `Date: ${selectedDate}\nTime: ${selectedTime}\n\n` +
      `Please confirm my booking. Thank you!`
    );
    window.open(`https://wa.me/+1234567890?text=${message}`, '_blank');
  };

  const canProceed = () => {
    switch (step) {
      case 1: return !!selectedTreatment;
      case 2: return !!selectedDate;
      case 3: return !!selectedTime;
      case 4: return !!name && !!phone;
      default: return false;
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`py-24 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-gray-900 dark:to-gray-800 ${sectionVisible ? 'animate-fadeIn' : 'scroll-animate'}`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-12 ${sectionVisible ? 'animate-fadeInDown' : ''}`}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-primary mr-4"></div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Quick Booking</span>
            <div className="w-12 h-0.5 bg-primary ml-4"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Simple 4-step booking — confirm via WhatsApp instantly
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3, 4].map((s, i) => (
            <React.Fragment key={s}>
              <button
                onClick={() => { if (s < step) setStep(s); }}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  step >= s
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}
              >
                {step > s ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : s}
              </button>
              {i < 3 && (
                <div className={`w-16 md:w-24 h-1 mx-1 rounded transition-all duration-300 ${
                  step > s ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                }`}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step labels */}
        <div className="flex justify-between mb-8 max-w-md mx-auto">
          {['Treatment', 'Date', 'Time', 'Confirm'].map((label, i) => (
            <span key={label} className={`text-xs font-medium ${step === i + 1 ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}>
              {label}
            </span>
          ))}
        </div>

        {/* Step content */}
        <div className="bg-white dark:bg-darkCard rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-darkBorder">
          {/* Step 1: Select Treatment */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Select a Treatment</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {treatments.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTreatment(t.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                      selectedTreatment === t.id
                        ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-md'
                        : 'border-gray-200 dark:border-darkBorder hover:border-primary/50'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</div>
                    <div className="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-400">
                      <span className="text-primary font-bold">{t.price}</span>
                      <span className="mx-2">·</span>
                      <span>{t.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Date */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Choose a Date</h3>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full md:w-1/2 px-4 py-3 border-2 border-gray-200 dark:border-darkBorder dark:bg-gray-800 dark:text-white rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-lg"
              />
              {selectedDate && (
                <p className="mt-4 text-primary font-medium">
                  Selected: {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              )}
            </div>
          )}

          {/* Step 3: Select Time */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Pick a Time Slot</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 px-4 rounded-xl border-2 font-medium text-sm transition-all duration-300 ${
                      selectedTime === time
                        ? 'border-primary bg-primary text-white shadow-md'
                        : 'border-gray-200 dark:border-darkBorder text-gray-700 dark:text-gray-300 hover:border-primary/50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Confirm */}
          {step === 4 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Confirm Your Booking</h3>

              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-darkBorder dark:bg-gray-800 dark:text-white rounded-xl focus:border-primary outline-none transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-darkBorder dark:bg-gray-800 dark:text-white rounded-xl focus:border-primary outline-none transition-all duration-300"
                />
              </div>

              {/* Summary */}
              <div className="bg-softBg dark:bg-gray-800 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Booking Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Treatment</span>
                    <span className="font-medium text-gray-900 dark:text-white">{currentTreatment?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Date</span>
                    <span className="font-medium text-gray-900 dark:text-white">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Time</span>
                    <span className="font-medium text-gray-900 dark:text-white">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 dark:border-darkBorder pt-2 mt-2">
                    <span className="text-gray-500 dark:text-gray-400">Price</span>
                    <span className="font-bold text-primary">{currentTreatment?.price}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleConfirm}
                disabled={!canProceed()}
                className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Confirm via WhatsApp</span>
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-100 dark:border-darkBorder">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition-colors duration-300"
              >
                Back
              </button>
            ) : <div></div>}

            {step < 4 && (
              <button
                onClick={() => canProceed() && setStep(step + 1)}
                disabled={!canProceed()}
                className="bg-primary disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-primary/90 disabled:cursor-not-allowed"
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;
