import React from "react";
import PageLayout from "../components/PageLayout";

function NoRefundPolicy() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-slate-900">
            No Refund Policy
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              Donations
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Muskan is a non-profit organization, and all donations made to us are final. Due to the nature of our work, we do not offer refunds for any monetary contributions. If you believe there was an error in the donation process, please contact us at{" "}
              <strong>team@ngomuskan.com / +91 9870221738</strong>, and we will investigate your request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              Event Cancellations
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              If you have registered for an event organized by Muskan and need to cancel your participation, we kindly ask that you notify us at least 7 days before the event date. Unfortunately, we are unable to offer refunds or alternative arrangements after these 7 days due to logistical considerations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              Changes to the Policy
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Muskan reserves the right to modify or update this No Refund and Cancellation Policy at any time. Any changes will be reflected on this page.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}

export default NoRefundPolicy;
