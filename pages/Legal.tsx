import React from 'react';
import { COMPANY_INFO } from '../data';

export const PrivacyPolicy = () => (
  <div className="max-w-3xl mx-auto px-4 py-16">
    <h1 className="text-3xl font-black mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
    <div className="prose dark:prose-invert">
      <p className="mb-4">Last Updated: October 26, 2023</p>
      <p className="mb-6">{COMPANY_INFO.name} ("we", "our", "us") respects your privacy and is committed to protecting your personal information.</p>
      
      <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Name, email, phone number</li>
        <li>Business details</li>
        <li>Browsing and analytics data</li>
        <li>Messages you send us</li>
        <li>Cookies and device information</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">How We Use Your Information</h2>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Deliver and improve our services</li>
        <li>Respond to inquiries</li>
        <li>Provide project updates</li>
        <li>Send marketing messages (with consent)</li>
        <li>Analyze performance and optimize website experience</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">Contact</h2>
      <p>Email: {COMPANY_INFO.email}</p>
      <p>Dhaka, Bangladesh</p>
    </div>
  </div>
);

export const Terms = () => (
  <div className="max-w-3xl mx-auto px-4 py-16">
    <h1 className="text-3xl font-black mb-8 text-gray-900 dark:text-white">Terms & Conditions</h1>
    <div className="prose dark:prose-invert">
      <h2 className="text-xl font-bold mb-2">1. Introduction</h2>
      <p className="mb-6">These Terms & Conditions govern your use of {COMPANY_INFO.name}'s services.</p>

      <h2 className="text-xl font-bold mb-2">2. Services Provided</h2>
      <p className="mb-6">Digital marketing, SEO, web design, social media, branding, paid ads.</p>

      <h2 className="text-xl font-bold mb-2">3. Payments</h2>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Payments must follow agreed pricing</li>
        <li>No refunds after project initiation unless stated</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">4. Intellectual Property</h2>
      <p className="mb-6">Completed projects belong to the client after full payment.</p>
    </div>
  </div>
);