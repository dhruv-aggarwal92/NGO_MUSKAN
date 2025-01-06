import React from "react";
import PageLayout from "../components/PageLayout";
import ContactUs from "../components/ContactUs";
import Mens1 from "../images/mens1.jpg";
import Testi1 from "../images/Sahdan.jpg";
import Testi2 from "../images/Aarushi.jpg";
import Testi3 from "../images/Saumya.jpg";
// import Testi4 from "../images/Testimonials/testi4.jpg";
import Testi5 from "../images/Testimonials/User1.png";
import { NavLink } from "react-router-dom";

const Volunteering = () => {
  return (
    <PageLayout>
      <div className="px-5 sm:px-10 lg:px-20">
        {/* SHARE STRUGGLES SECTION STARTS HERE */}
        <div className="flex flex-col lg:flex-row items-center justify-center py-10">
          {/* Text section Starts Here */}
          <div className="lg:w-1/2 lg:mr-10 mb-10 lg:mb-0 lg:text-left px-10 sm:px-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold mb-5 lg:mb-10 text-headingPink font-montserrat  leading-10">
              Join our community of passionate volunteers and make a lasting
              impact
            </h1>
            <div className="">
              <p className="text-lg lg:text-xl mb-5 font-roboto text-slate-900 sm:text-balance">
                Welcome to the heartbeat of change! At MUSKAN, we're on a
                mission to transform the narrative around menstruation. Ready to
                join us in breaking down barriers and empowering communities
                worldwide?
              </p>
            </div>
            <NavLink to="https://forms.gle/rGynsPkZMftZeHhG8">
              <button className="inline-block text-white font-bold py-3 px-5 rounded-full bg-gradient-to-r from-gradientStart to-gradientEnd border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out">
                Join Muskan
              </button>
            </NavLink>
          </div>
          {/* Text section Ends Here */}

          {/* Image section */}
          <div className="lg:w-1/2">
            <img
              src={Mens1}
              alt="StruggleWoman"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* TESTIMONIAL SECTION STARTS HERE */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold font-montserrat text-slate-900 uppercase">
              Testimonials
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Testimonial 01 */}
            <div className="flex flex-col items-center">
              <img
                className="w-80 h-80 object-cover rounded-full shadow-md mb-5"
                src={Testi1}
                alt="Sadhan Singla"
              />
              <h3 className="text-base sm:text-xl font-semibold mb-2 font-montserrat">
                Sadhan Singla, Chief Executive Officer
              </h3>
              <p className="text-center text-gray-700 font-roboto">
                Volunteering here has been an incredibly rewarding experience.
                I've had the opportunity to connect with so many amazing
                individuals and make a tangible impact in our community. The
                sense of fulfillment I get from seeing the positive changes
                we've made together is indescribable.
              </p>
            </div>
            {/* Testimonial 02 */}
            <div className="flex flex-col items-center">
              <img
                className="w-80 h-80 object-cover rounded-full shadow-md mb-5"
                src={Testi2}
                alt="Aarushi Juneja"
              />
              <h3 className="text-base sm:text-xl font-semibold mb-2 font-montserrat">
                Aarushi Juneja, Chief Operating Officer
              </h3>
              <p className="text-center text-gray-700 font-roboto">
                Being part of this volunteer program has been one of the best
                decisions of my life. Organizing events that bring people
                together and support those in need has been both challenging and
                immensely satisfying. The camaraderie among volunteers and the
                appreciation from the community make it all worthwhile.
              </p>
            </div>
            {/* Testimonial 03 */}
            <div className="flex flex-col items-center">
              <img
                className="w-80 h-80 object-cover rounded-full shadow-md mb-5"
                src={Testi3}
                alt="Saumya Katiyar"
              />
              <h3 className="text-base sm:text-xl font-semibold mb-2 font-montserrat">
                Saumya Katiyar, Media Head
              </h3>
              <p className="text-center text-gray-700 font-roboto">
                As a volunteer administrative assistant, I've gained valuable
                skills and experiences that I wouldn't have found anywhere else.
                The supportive environment and the passion of my fellow
                volunteers have been truly inspiring. I feel proud to contribute
                to such meaningful work every day.
              </p>
            </div>
            {/* Testimonial 04 */}
            <div className="flex flex-col items-center">
              <img
                className="w-80 h-80 object-cover rounded-full shadow-md mb-5"
                src={Testi5}
                alt="Michael Brown"
              />
              <h3 className="text-base sm:text-xl font-semibold mb-2 font-montserrat">
                XYZ, Volunteer Mentor
              </h3>
              <p className="text-center text-gray-700 font-roboto">
                Mentoring new volunteers and guiding them through their journey
                has been a highlight of my volunteering experience. Seeing their
                growth and enthusiasm reminds me of why I started volunteering
                in the first place. This program has given me a sense of purpose
                and a community that feels like family.
              </p>
            </div>
          </div>
        </div>
        {/* TESTIMONIAL SECTION ENDS HERE */}

        {/* OPPORTUNITIES SECTION STARTS HERE */}
        <div className="mt-10 sm:mt-16">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="uppercase text-4xl font-bold text-slate-900 font-montserrat">
              Volunteer Opportunities
            </h2>
          </div>
          <div className="space-y-10">
            {/* Opportunity 01 */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 font-roboto text-slate-800">
                Educational Outreach
              </h3>
              <p className="mb-2 font-roboto text-slate-800">
                Help educate communities about menstrual health and hygiene,
                breaking stigma, and promoting access to menstrual products.
              </p>
              <p className="text-gray-600">
                <strong>Requirements:</strong> Good organizational skills,
                experience in event planning is a plus.
              </p>
            </div>
            {/* Opportunity 02 */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 font-roboto text-slate-900">
                Workshops and Events
              </h3>
              <p className="mb-2 text font-roboto text-slate-800">
                Assist in organizing workshops, seminars, and events to raise
                awareness and provide support for menstruators.
              </p>
              <p className="text-gray-600">
                <strong>Requirements:</strong> Excellent communication skills, a
                passion for community service.
              </p>
            </div>
            {/* Opportunity 03 */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 font-roboto text-slate-800">
                Fundraising and Grant Writing
              </h3>
              <p className="mb-2 font-roboto text-slate-800">
                Contribute your expertise in fundraising or grant writing to
                secure resources for our initiatives. 4.Content Creation: Write
                articles, blog posts, or create social media content to spread
                awareness and share informative resources.
              </p>
              <p className="text-gray-600">
                <strong>Requirements:</strong> Excellent communication skills, a
                passion for community service.
              </p>
            </div>
            {/* Opportunity 04 */}
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 font-roboto text-slate-800">
                Mentorship Programs
              </h3>
              <p className="mb-2 font-roboto text-slate-800">
                Guide and support new volunteers, helping them integrate and
                thrive in their roles.
              </p>
              <p className="text-gray-600">
                <strong>Requirements:</strong> Experience in a similar role,
                strong leadership and interpersonal skills.
              </p>
            </div>
          </div>
        </div>
        {/* OPPORTUNITIES SECTION ENDS HERE */}

        {/* HOW TO GET STARTED SECTION STARTS HERE */}
        <div className="mt-10 sm:mt-16">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="uppercase text-4xl font-bold text-slate-900 font-montserrat">
              How to Get Started
            </h2>
          </div>
          <div className="space-y-10">
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 font-roboto text-slate-800">
                1. Explore Opportunities
              </h3>
              <p className="mb-2 font-roboto text-slate-800">
                Visit our volunteering portal to view current opportunities and
                learn more about each role. 
              </p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 font-roboto text-slate-800">
                2. Apply
              </h3>
              <p className="mb-2 font-roboto text-slate-800">
                Complete our simple online application form. Tell us about
                yourself, your interests, and why you want to volunteer with
                us. 
              </p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2 font-roboto text-slate-800">
                3. Training and Support
              </h3>
              <p className="mb-2 font-roboto text-slate-800">
                Once accepted, you'll receive training and ongoing support to
                ensure you're equipped for your role.
              </p>
            </div>
          </div>
        </div>
        {/* HOW TO GET STARTED SECTION ENDS HERE */}

        {/* contact us or become a volunteer sections starts here */}
        <div>
          <div className="text-center mt-20">
            <h2 className="text-4xl font-bold font-montserrat text-slate-900 uppercase">
              Connect With Us
            </h2>
          </div>
          <ContactUs></ContactUs>
        </div>
        {/* contact us or become a volunteer sections ends here */}
      </div>
    </PageLayout>
  );
};

export default Volunteering;
