import React from "react";
import PageLayout from "../components/PageLayout";
// import { NavLink } from "react-router-dom";


function PrivacyPolicy() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-slate-900">
            Privacy Policy
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              Introduction
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              At Muskan, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or engage with our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              Information Collection
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              We collect personal information that you provide voluntarily, such as when making a donation or subscribing to our newsletter. This may include your name, email address, phone number, and payment details. We may also collect non-personal information such as browser type, IP address, and website usage data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              Use of Information
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Your personal information is used to process donations, communicate with you about our initiatives, and provide you with updates about Muskan's work. We may also use this information to improve our website and service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              Data Protection
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Muskan is committed to securing your personal information. We employ industry-standard security measures to safeguard your data against unauthorized access or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              Sharing of Information
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              We do not sell, rent, or share your personal information with third parties for marketing purposes. However, we may share your data with trusted partners who help us process donations or communicate our services, provided they comply with our privacy standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              Cookies
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device to remember preferences and analyze site usage. You can choose to disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              Your Rights
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us through the contact details provided on our website.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}

export default PrivacyPolicy;
