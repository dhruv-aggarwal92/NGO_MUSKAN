import React from "react";
import PageLayout from "../components/PageLayout";
// import { NavLink } from "react-router-dom";

function TermsAndConditions() {
    return (
      <PageLayout>
        <div className="min-h-screen bg-gray-100 py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center text-slate-900">
              Terms and Conditions
            </h1>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                Introduction
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                Welcome to Muskan! These terms and conditions govern your use of our website and services. By using our website, you agree to comply with and be bound by these terms. If you do not agree to these terms, please refrain from using our website.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                Use of Website
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                Muskan provides a platform for information and engagement with our charitable initiatives. You agree to use our website in a manner consistent with all applicable laws and regulations. Any misuse of the website, including but not limited to disrupting the functionality, engaging in unlawful activities, or violating intellectual property rights, will not be tolerated.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                Donations
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                All donations made through the Muskan website are voluntary contributions to our non-profit initiatives. By making a donation, you agree to provide accurate information, including payment details, and ensure the transaction is legitimate.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                Intellectual Property
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                All content on this website, including text, images, and logos, is owned by Muskan and protected by copyright laws. You may not use or reproduce any content from our site without our prior written consent.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                Limitation of Liability
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                Muskan is not liable for any direct, indirect, incidental, or consequential damages that may arise from the use of our website or the donation process. We strive to ensure the accuracy and security of the information provided but cannot guarantee it.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                Changes to Terms
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                Muskan reserves the right to modify these terms and conditions at any time. Any changes will be reflected on this page with the updated date. Please review this page periodically to stay informed of any updates.
              </p>
            </section>
          </div>
        </div>
      </PageLayout>
    );
  }
  
export default TermsAndConditions;
