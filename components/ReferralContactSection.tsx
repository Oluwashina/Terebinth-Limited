'use client';

import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import phoneIcon from '@/assets/icons/call.svg';
import emailIcon from '@/assets/icons/message.svg';
import fileIcon from '@/assets/icons/file.svg';

export default function ReferralContactSection() {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const [formData, setFormData] = useState({
    referralName: '',
    organization: '',
    contactNumber: '',
    email: '',
    proposedCareSetting: '',
    briefOverview: '',
    fileName: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        fileName: file.name,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    console.log('Submitting referral with data:', formData);

    setTimeout(() => {
      console.log('Simulated email sending complete');
      setLoading(false);
      setSubmitted(true);
      setFormData({
        referralName: '',
        organization: '',
        contactNumber: '',
        email: '',
        proposedCareSetting: '',
        briefOverview: '',
        fileName: '',
      });
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
  };

  return (
    <section className="bg-[#F8FAFB] py-10 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">
          {/* Left Side - Direct Referral Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#AD9551] mb-3">
              Urgent Placement
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2933] mb-5">
              Direct Referral Contact
            </h2>
            <p className="text-[#6B7280] font-medium max-w-md text-[15px] mb-12 leading-relaxed">
              For urgent referrals or bed availability queries, contact our admissions team directly. We prioritise rapid response for time-sensitive placements.
            </p>

            {/* Phone */}
            <div className="mb-10">
              <div className="flex items-start gap-4">
                <div className="rounded-full w-10 h-10 bg-[#FAF8F4] flex items-center justify-center shrink-0">
                  <Image src={phoneIcon} alt="Phone Icon" width={18} height={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F2933] mb-2">Phone</h3>
                  <a
                    href="tel:01253341550"
                    className="text-sm text-[#6B7280] hover:text-[#AD9451] transition"
                  >
                    01253 341550
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-start gap-4">
                <div className="rounded-full w-10 h-10 bg-[#FAF8F4] flex items-center justify-center shrink-0">
                  <Image src={emailIcon} alt="Email Icon" width={18} height={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F2933] mb-2">Email</h3>
                  <a
                    href="mailto:enquiries@terebinthltd.com"
                    className="text-sm text-[#6B7280] hover:text-[#AD9451] transition"
                  >
                    enquiries@terebinthltd.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Secure Referral Form */}
          <div className="md:border-[0.8px] md:border-[#E5E7EB] md:p-8 md:rounded-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2933] mb-2">
              Secure Referral Form
            </h3>
            <p className="text-sm text-[#6B7280] mb-8">
              Submit referrals online with all necessary documentation. Attach care plans, assessments, and medical information securely. For sensitive patient identifiable data, please use encrypted email.
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  Thank you for your referral. We'll review it and be in touch shortly!
                </p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Referral Name */}
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">
                  Referral Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="referralName"
                  value={formData.referralName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-[0.8px] placeholder:text-[#1F293380] border-[#E5E7EB] rounded-sm focus:outline-none focus:ring focus:ring-[#AD9451] text-sm"
                  required
                />
              </div>

              {/* Organization/Local Authority */}
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">
                  Organization/Local Authority <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="eg Lancashire County Council"
                  className="w-full px-4 py-3 border-[0.8px] placeholder:text-[#1F293380] border-[#E5E7EB] rounded-sm focus:outline-none focus:ring focus:ring-[#AD9451] text-sm"
                  required
                />
              </div>

              {/* Referral Contact Number */}
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">
                  Referral Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Your contact number"
                  className="w-full px-4 py-3 border-[0.8px] placeholder:text-[#1F293380] border-[#E5E7EB] rounded-sm focus:outline-none focus:ring focus:ring-[#AD9451] text-sm"
                  required
                />
              </div>

              {/* Referral Email Address */}
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">
                  Referral Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border-[0.8px] placeholder:text-[#1F293380] border-[#E5E7EB] rounded-sm focus:outline-none focus:ring focus:ring-[#AD9451] text-sm"
                  required
                />
              </div>

              {/* Proposed Care Setting */}
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">
                  Proposed Care Setting <span className="text-red-500">*</span>
                </label>
                <select
                  name="proposedCareSetting"
                  value={formData.proposedCareSetting}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-[0.8px] placeholder:text-[#1F293380] border-[#E5E7EB] rounded-sm focus:outline-none focus:ring focus:ring-[#AD9451] text-sm"
                  required
                >
                  <option value="">Select a care setting...</option>
                  <option value="redbricks">Redbricks Care Home (Thornton-Cleveleys)</option>
                  <option value="watson">Watson House Rest Home (Blackpool)</option>
                  <option value="mariners">Mariners Court Care Home (Fleetwood)</option>
                  <option value="tbc">To be confirmed</option>
                </select>
              </div>

              {/* Brief Overview of Needs */}
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">
                  Brief Overview of Needs
                </label>
                <textarea
                  name="briefOverview"
                  value={formData.briefOverview}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  rows={4}
                  className="w-full px-4 py-3 border-[0.8px] placeholder:text-[#1F293380] border-[#E5E7EB] rounded-sm focus:outline-none focus:ring focus:ring-[#AD9451] text-sm resize-none"
                  
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">
                  Upload Needs Assessment/Care Plan <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-8 text-center hover:border-[#AD9451] transition">
                  <div className="mb-3 flex justify-center">
                    <Image src={fileIcon} alt="File Upload Icon" width={30} height={30} />
                  </div>
                  <p className="text-sm text-[#6B7280] mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-[13px] text-[#6B7280]">
                    PDF, DOC, DOCX (Max 10MB)
                  </p>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="file-upload"
                    
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    {formData.fileName && (
                      <p className="text-sm text-[#AD9451] mt-3 font-medium">
                        ✓ {formData.fileName}
                      </p>
                    )}
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full text-[15px] bg-[#AD9451] text-white py-4 rounded-full font-medium cursor-pointer hover:bg-[#8B6D3C] transition disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Referral'}
              </button>
            </form>

            {/* <div className="flex justify-center mt-5">
              <p className="text-[11px] md:text-sm text-[#6B7280]">
                Your referral will be handled respectfully and in confidence.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}