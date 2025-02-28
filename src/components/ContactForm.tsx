import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, ExclamationCircleIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { COLORS, SHADOWS, ANIMATIONS } from '@/constants/design-system';
import axios from 'axios';

interface FormData {
  lastName: string;
  firstName: string;
  phone: string;
  subject: string;
  message: string;
}

const inputClasses = `
  mt-1 block w-full rounded-lg border-gray-200 bg-white
  shadow-sm transition-all duration-300 text-sm px-4 py-3
  focus:border-transparent focus:ring-2 focus:ring-primary/30 focus:shadow-lg
  hover:border-gray-300 hover:bg-white
`;

const labelClasses = "block text-sm font-medium text-gray-600 flex items-center gap-2";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    lastName: '',
    firstName: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send form data to API route
      const response = await axios.post('/api/send-email', formData);
      
      if (response.status === 200) {
        setFormData({
          lastName: '',
          firstName: '',
          phone: '',
          subject: '',
          message: ''
        });
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={ANIMATIONS.spring.gentle}
      className="w-full relative"
    >
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <div className="absolute inset-0" style={{
            background: `radial-gradient(circle at 70% 30%, ${COLORS.gradients.primary.start}, transparent)`
          }} />
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: `radial-gradient(circle at 70% 30%, ${COLORS.gradients.primary.start}, transparent)`
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={ANIMATIONS.spring.bouncy}
          className="flex items-center gap-3 mb-6"
        >
          <div className="p-2 rounded-lg" style={{
            background: `linear-gradient(135deg, ${COLORS.gradients.primary.start}, ${COLORS.gradients.secondary.end})`
          }}>
            <PhoneIcon className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold" style={{ 
            background: `linear-gradient(135deg, ${COLORS.gradients.primary.start}, ${COLORS.gradients.secondary.end})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Formulaire de contact
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={ANIMATIONS.spring.gentle}
              className={`mb-4 p-3 rounded-lg flex items-center gap-2 text-sm ${
                submitStatus === 'success' 
                  ? 'bg-green-50/80 text-green-700 border border-green-200' 
                  : 'bg-red-50/80 text-red-700 border border-red-200'
              }`}
            >
              {submitStatus === 'success' ? (
                <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
              ) : (
                <ExclamationCircleIcon className="w-4 h-4 flex-shrink-0" />
              )}
              <span className="font-medium">
                {submitStatus === 'success'
                  ? 'Message envoyé avec succès !'
                  : 'Une erreur est survenue. Veuillez réessayer.'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              whileTap={{ scale: 0.995 }}
              animate={{ 
                scale: focusedField === 'lastName' ? 1.02 : 1,
                boxShadow: focusedField === 'lastName' ? SHADOWS.colored.primary : 'none'
              }}
              transition={ANIMATIONS.spring.gentle}
              className="relative"
            >
              <label htmlFor="lastName" className={labelClasses}>
                Nom*
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                onFocus={() => setFocusedField('lastName')}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClasses}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: formData.lastName ? 1 : 0 }}
                style={{
                  background: `linear-gradient(to right, ${COLORS.gradients.primary.start}, ${COLORS.gradients.primary.end})`
                }}
              />
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.995 }}
              animate={{ 
                scale: focusedField === 'firstName' ? 1.02 : 1,
                boxShadow: focusedField === 'firstName' ? SHADOWS.colored.primary : 'none'
              }}
              transition={ANIMATIONS.spring.gentle}
              className="relative"
            >
              <label htmlFor="firstName" className={labelClasses}>
                Prénom*
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                onFocus={() => setFocusedField('firstName')}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClasses}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: formData.firstName ? 1 : 0 }}
                style={{
                  background: `linear-gradient(to right, ${COLORS.gradients.primary.start}, ${COLORS.gradients.primary.end})`
                }}
              />
            </motion.div>
          </div>

          <motion.div
            whileTap={{ scale: 0.995 }}
            animate={{ 
              scale: focusedField === 'phone' ? 1.02 : 1,
              boxShadow: focusedField === 'phone' ? SHADOWS.colored.primary : 'none'
            }}
            transition={ANIMATIONS.spring.gentle}
            className="relative"
          >
            <label htmlFor="phone" className={labelClasses}>
              <PhoneIcon className="w-4 h-4" />
              Numéro de téléphone*
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              required
              className={inputClasses}
              placeholder="Ex: +33 6 12 34 56 78"
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: formData.phone ? 1 : 0 }}
              style={{
                background: `linear-gradient(to right, ${COLORS.gradients.primary.start}, ${COLORS.gradients.primary.end})`
              }}
            />
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.995 }}
            animate={{ 
              scale: focusedField === 'subject' ? 1.02 : 1,
              boxShadow: focusedField === 'subject' ? SHADOWS.colored.primary : 'none'
            }}
            transition={ANIMATIONS.spring.gentle}
            className="relative"
          >
            <label htmlFor="subject" className={labelClasses}>
              Sujet de contact*
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
              onFocus={() => setFocusedField('subject')}
              onBlur={() => setFocusedField(null)}
              required
              className={inputClasses}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: formData.subject ? 1 : 0 }}
              style={{
                background: `linear-gradient(to right, ${COLORS.gradients.primary.start}, ${COLORS.gradients.primary.end})`
              }}
            />
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.995 }}
            animate={{ 
              scale: focusedField === 'message' ? 1.02 : 1,
              boxShadow: focusedField === 'message' ? SHADOWS.colored.primary : 'none'
            }}
            transition={ANIMATIONS.spring.gentle}
            className="relative"
          >
            <label htmlFor="message" className={labelClasses}>
              Message*
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              rows={3}
              required
              className={inputClasses}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: formData.message ? 1 : 0 }}
              style={{
                background: `linear-gradient(to right, ${COLORS.gradients.primary.start}, ${COLORS.gradients.primary.end})`
              }}
            />
          </motion.div>

          <div className="flex justify-end pt-2">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={ANIMATIONS.hover}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2.5 text-white text-sm font-medium rounded-lg overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, ${COLORS.gradients.primary.start}, ${COLORS.gradients.secondary.end})`,
                boxShadow: SHADOWS.colored.primary
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </>
                )}
              </span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                initial={false}
                animate={{ 
                  scale: isSubmitting ? 1.5 : 1,
                  rotate: isSubmitting ? 360 : 0
                }}
                transition={{ 
                  duration: 0.6, 
                  repeat: isSubmitting ? Infinity : 0,
                  ease: "linear"
                }}
              />
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
} 