'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import locationIcon from '@/assets/icons/map.svg';
import phoneIcon from '@/assets/icons/call.svg';
import emailIcon from '@/assets/icons/message.svg';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    homeOfInterest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here (API call, email, etc.)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      homeOfInterest: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-[#F8FAFB] py-10 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">
          {/* Left Side - Contact Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9551] mb-3">
              Contact Information
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2933] mb-5">
              Get in Touch
            </h2>
            <p className="text-[#6B7280] font-medium max-w-md text-[15px] mb-12 leading-relaxed">
              We're here to answer your questions and help you find the right care solution. Contact us by phone, email or use the form to send us a message.
            </p>

            {/* Address */}
            <div className="mb-10">
              <div className="flex items-start gap-6">
                <div className="border-[0.8px] border-[#E5E7EB] rounded-lg w-14 h-14 bg-[#F8FAFB] flex items-center justify-center shrink-0">
                    <Image src={locationIcon} alt="Location Icon" width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F2933] mb-2">Address</h3>
                  <p className="text-sm text-[#6B7280]">
                    Terebinth Limited<br />
                    50 Station Road<br />
                    Blackpool<br />
                    FY4 1EU
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-10">
              <div className="flex items-start gap-4">
                <div className="border-[0.8px] border-[#E5E7EB] rounded-lg w-14 h-14 bg-[#F8FAFB] flex items-center justify-center shrink-0">
                    <Image src={phoneIcon} alt="Phone Icon" width={24} height={24} />
                </div>                
                <div>
                  <h3 className="font-semibold text-[#1F1F1F] mb-2">Phone</h3>
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
                <div className="border-[0.8px] border-[#E5E7EB] rounded-lg w-14 h-14 bg-[#F8FAFB] flex items-center justify-center shrink-0">
                    <Image src={emailIcon} alt="Email Icon" width={24} height={24} />
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

          {/* Right Side - Contact Form */}
        <div className='border-[0.8px] border-[#E5E7EB] p-6 md:p-8 rounded-lg'>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2933] mb-8">
              Send Us a Message
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  Thank you for your enquiry. We'll be in touch shortly!
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-[0.8px] placeholder:text-[#1F293380] border-[#E5E7EB] rounded-sm focus:outline-none focus:ring focus:ring-[#AD9451] text-sm"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border-[0.8px] placeholder:text-[#1F293380] border-[#E5E7EB] rounded-sm focus:outline-none focus:ring focus:ring-[#AD9451] text-sm"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border-[0.8px] placeholder:text-[#1F293380] border-[#E5E7EB] rounded-sm focus:outline-none focus:ring focus:ring-[#AD9451] text-sm"
                  required
                />
              </div>

              {/* Home of Interest */}
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">
                  Home of Interest
                </label>
                <select
                  name="homeOfInterest"
                  value={formData.homeOfInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-[0.8px] placeholder:text-[#1F293380] border-[#E5E7EB] rounded-sm focus:outline-none focus:ring focus:ring-[#AD9451] text-sm"
                >
                  <option value="">Select a home...</option>
                  <option value="redbricks">Redbricks Care Home (Thornton-Cleveleys)</option>
                  <option value="watson">Watson House Rest Home (Blackpool)</option>
                  <option value="mariners">Mariners Court Care Home (Fleetwood)</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#1F2933] mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your enquiry..."
                  rows={6}
                  className="w-full px-4 py-3 border-[0.8px] placeholder:text-[#1F293380] border-[#E5E7EB] rounded-sm focus:outline-none focus:ring focus:ring-[#AD9451] text-sm resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-[15px] bg-[#AD9451] text-white py-4 rounded-full font-medium cursor-pointer hover:bg-[#8B6D3C] transition"
              >
                Send Enquiry
              </button>
            </form>

            <div className='flex justify-center mt-5'>
                <p className='text-[11px] md:text-sm text-[#6B7280]'>Your enquiry will be handled respectfully and in confidence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}