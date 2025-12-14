import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";
function Work() {
  return (
    <motion.div
      className="container mx-auto px-4"
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
    >
      <h2 className="text-4xl font-bold mb-2 text-start mt-10 text-gray-600">
        Work
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-center">
        <div className="flex flex-col py-4 px-4">
          <img
            src="/bg-tms.jpg"
            className="w-full object-cover rounded-3xl shadow"
            alt=""
          />
          <div className="mt-2">
            <h3 className="text-xl font-bold">TMS </h3>
            <p className="font-medium text-gray-600 text-md">
              A Transport Management System (TMS) dashboard with complete
              features, including modul finance, courier, and shipment.
            </p>
          </div>
        </div>
        <div className="flex flex-col py-4 px-4">
          <img
            src="/bg-wms.jpg"
            className="w-full object-cover rounded-3xl shadow"
            alt=""
          />
          <div className="mt-2">
            <h3 className="text-xl font-bold">WMS</h3>
            <p className="font-medium text-gray-600 text-md">
              Warehouse Management System (WMS) dashboard with complete
              features, including modul inbound, outbound, and stock opname.
            </p>
          </div>
        </div>
        <div className="flex flex-col py-4 px-4">
          <img
            src="/bg-finance-ar.jpg"
            className="w-full object-cover rounded-3xl shadow"
            alt=""
          />
          <div className="mt-2">
            <h3 className="text-xl font-bold">Finance | Invoice</h3>
            <p className="font-medium text-gray-600 text-md">
              A finance module that creates invoices and manages accounts
              receivable with dashboard,due date, and reporting features.
            </p>
          </div>
        </div>
        <div className="flex flex-col py-4 px-4">
          <img
            src="/bg-crm.jpg"
            className="w-full object-cover rounded-3xl shadow"
            alt=""
          />
          <div className="mt-2">
            <h3 className="text-xl font-bold">CRM | Prospect & Lead</h3>
            <p className="font-medium text-gray-600 text-md">
              Web app for sales prospect management with dashboard, prospect
              kanban, activity, and reporting features.
            </p>
          </div>
        </div>
      </div>
     
    </motion.div>
  );
}

export default Work;
