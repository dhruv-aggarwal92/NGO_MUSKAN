import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "../components/PageLayout";

// Import cause images (update these paths with your own images)
import donatePadsImg from "../images/pads.jpg";
import feedDogsImg from "../images/dog2.jpg";
import plantTreesImg from "../images/tree.jpg";
import NGOMuskanQR from "../images/NGOMuskanQR.jpg";

function DonationOptionsPage() {
  // State for preset and custom inputs for each cause
  // Pads
  const [padSelect, setPadSelect] = useState(0);
  const [padCustom, setPadCustom] = useState("");
  // Dogs
  const [dogSelect, setDogSelect] = useState(0);
  const [dogCustom, setDogCustom] = useState("");
  // Trees
  const [treeSelect, setTreeSelect] = useState(0);
  const [treeCustom, setTreeCustom] = useState("");

  // Whether to show the QR code section
  const [showQRCode, setShowQRCode] = useState(false);

  // Cost per unit for each cause
  const ratePad = 50;   // e.g., Rs.50 per pad donation
  const rateDog = 100;  // e.g., Rs.100 per dog feeding
  const rateTree = 200; // e.g., Rs.200 per tree planting

  // Determine the effective donation count for each cause:
  // Use the custom value if a positive number is entered; otherwise use the preset value.
  const effectivePadCount =
    padCustom !== "" && parseInt(padCustom, 10) > 0
      ? parseInt(padCustom, 10)
      : padSelect;
  const effectiveDogCount =
    dogCustom !== "" && parseInt(dogCustom, 10) > 0
      ? parseInt(dogCustom, 10)
      : dogSelect;
  const effectiveTreeCount =
    treeCustom !== "" && parseInt(treeCustom, 10) > 0
      ? parseInt(treeCustom, 10)
      : treeSelect;

  // Calculate subtotals and total donation amount
  const padSubtotal = effectivePadCount * ratePad;
  const dogSubtotal = effectiveDogCount * rateDog;
  const treeSubtotal = effectiveTreeCount * rateTree;
  const totalAmount = padSubtotal + dogSubtotal + treeSubtotal;

  // Ref for the QR code section so that we can scroll into view
  const qrRef = useRef(null);
  useEffect(() => {
    if (showQRCode && qrRef.current) {
      qrRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showQRCode]);

  // Proceed button handler: show QR code if there's a donation amount
  const handleProceed = () => {
    if (totalAmount > 0) {
      setShowQRCode(true);
    } else {
      alert("Please select at least one donation option.");
    }
  };

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for the QR code section
  const qrVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-slate-900 font-montserrat">
          Support Our Causes
        </h1>

        {/* Donation Cause Cards Container */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Donate Pads Card */}
          <motion.div
            className="bg-white rounded-lg shadow w-72"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {/* Cause Image */}
            <img
              src={donatePadsImg}
              alt="Donate Pads"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-slate-900 font-roboto">
                Donate Pads
              </h2>
              <p className="mb-2 text-gray-700">
                Each pad donation costs Rs. {ratePad}.
              </p>
              <select
                value={padSelect}
                onChange={(e) =>
                  setPadSelect(parseInt(e.target.value, 10))
                }
                className="w-full px-3 py-2 border rounded mb-2"
              >
                <option value="0">Select preset donation</option>
                <option value="10">10 Pads</option>
                <option value="20">20 Pads</option>
                <option value="30">30 Pads</option>
                <option value="50">50 Pads</option>
                <option value="75">75 Pads</option>
                <option value="100">100 Pads</option>

              </select>
              <p className="text-sm text-gray-600 mb-1">
                Or enter a custom number:
              </p>
              <input
                type="number"
                min="0"
                value={padCustom}
                onChange={(e) => setPadCustom(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Custom input"
              />
              <p className="mt-2 text-gray-700">
                Subtotal: Rs. {padSubtotal}
              </p>
            </div>
          </motion.div>

          {/* Feed Dogs Card */}
          <motion.div
            className="bg-white rounded-lg shadow w-72"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            {/* Cause Image */}
            <img
              src={feedDogsImg}
              alt="Feed Dogs"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-slate-900 font-roboto">
                Feed Dogs
              </h2>
              <p className="mb-2 text-gray-700">
                Each dog feeding costs Rs. {rateDog}.
              </p>
              <select
                value={dogSelect}
                onChange={(e) =>
                  setDogSelect(parseInt(e.target.value, 10))
                }
                className="w-full px-3 py-2 border rounded mb-2"
              >
                <option value="0">Select preset donation</option>
                <option value="5">5 Dogs</option>
                <option value="10">10 Dogs</option>
                <option value="15">15 Dogs</option>
                <option value="20">20 Dogs</option>
                <option value="25">25 Dogs</option>
                <option value="30">30 Dogs</option>

              </select>
              <p className="text-sm text-gray-600 mb-1">
                Or enter a custom number:
              </p>
              <input
                type="number"
                min="0"
                value={dogCustom}
                onChange={(e) => setDogCustom(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Custom input"
              />
              <p className="mt-2 text-gray-700">
                Subtotal: Rs. {dogSubtotal}
              </p>
            </div>
          </motion.div>

          {/* Plant Trees Card */}
          <motion.div
            className="bg-white rounded-lg shadow w-72"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            {/* Cause Image */}
            <img
              src={plantTreesImg}
              alt="Plant Trees"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-slate-900 font-roboto">
                Plant Trees
              </h2>
              <p className="mb-2 text-gray-700">
                Each tree planting costs Rs. {rateTree}.
              </p>
              <select
                value={treeSelect}
                onChange={(e) =>
                  setTreeSelect(parseInt(e.target.value, 10))
                }
                className="w-full px-3 py-2 border rounded mb-2"
              >
                <option value="0">Select preset donation</option>
                <option value="5">5 Trees</option>
                <option value="10">10 Trees</option>
                <option value="15">15 Trees</option>
                <option value="20">20 Trees</option>
                <option value="25">25 Trees</option>
                <option value="30">30 Trees</option>
              </select>
              <p className="text-sm text-gray-600 mb-1">
                Or enter a custom number:
              </p>
              <input
                type="number"
                min="0"
                value={treeCustom}
                onChange={(e) => setTreeCustom(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Custom input"
              />
              <p className="mt-2 text-gray-700">
                Subtotal: Rs. {treeSubtotal}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Total Donation & Proceed Button */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow text-center mt-8 max-w-md mx-auto"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 font-roboto">
            Total Donation
          </h2>
          <p className="text-xl mb-4">Rs. {totalAmount}</p>
          <motion.button
            onClick={handleProceed}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Proceed to Payment
          </motion.button>
        </motion.div>

        {/* QR Code Section (Animated & Auto-Scroll) */}
        <AnimatePresence>
          {showQRCode && (
            <motion.div
              ref={qrRef}
              className="bg-white p-6 rounded-lg shadow text-center mt-8 max-w-md mx-auto"
              variants={qrVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-slate-900 font-roboto">
                Scan to Donate
              </h2>
              <img
                src={NGOMuskanQR}
                alt="Donation QR Code"
                className="mx-auto w-full max-w-sm rounded-lg"
              />
              <p className="mt-2 text-gray-700">
                Please scan the QR code above to complete your donation of Rs.{" "}
                {totalAmount}.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  );
}

export default DonationOptionsPage;
