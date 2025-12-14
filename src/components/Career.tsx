function Career() {
  return (
    <div className="grid grid-cols-1 gap-6 mt-8  w-4/5 mx-auto justify-center">
      <div className="p-6 rounded-xl border-white/10 border hover:bg-white/5 hover:-translate-y-1 transition-all">
        <h2 className="text-4xl font-bold mb-2 text-start px-2">Career</h2>
        <ul className="space-y-6 text-gray-400">
          <li className="p-4 rounded-xl border-b border-white/10 pb-6 mb-2 last:border-b-0 last:pb-0 last:mb-0 hover:-translate-y-1 transition-all ">
            <h4 className="font-bold tracking-tighter text-gray-600">
              PT. Trinova Digital Inovasi (Trinova Inovasi) - Software Engineer
              Programmer
            </h4>
            <p className="text-sm text-gray-400 mb-2">Agustus 2025 - Now</p>
            <ul className="list-disc list-inside ml-4 space-y-1 tracking-tighter">
              <li>
                Developed a Warehouse Management System apps integrated with the
                Transport Management System module through API & ensuring stable
                server operations.
              </li>
              <li>
                Built a CRM Sales module for lead and customer management.
              </li>
              <li>
                Finance API modules for Account Payable (AP) and Account
                Receivable (AR) processes.
              </li>
            </ul>
          </li>

          <li className="p-4 rounded-xl border-b border-white/10 pb-6 mb-2 last:border-b-0 last:pb-0 last:mb-0 hover:-translate-y-1 transition-all">
            <h4 className="font-bold tracking-tighter text-gray-600">
              PT. Sinergi Amanah Hamasah (PaketinXpress) - IT Programmer
              Supervisor
            </h4>
            <p className="text-sm text-gray-400 mb-2">
              November 2024 - Juli 2025
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 tracking-tighter">
              <li>
                Led internal development team to build and maintain the
                Transport Management System module.
              </li>
              <li>
                Developed API integrations Courier Systems and the internal ERP
                platform to optimize operational efficiency.
              </li>
            </ul>
          </li>

          <li className="p-4 rounded-xl border-b border-white/10 pb-6 mb-2 last:border-b-0 last:pb-0 last:mb-0 hover:-translate-y-1 transition-all">
            <h4 className="font-bold tracking-tighter text-gray-600">
              PT. Mabrur Cahaya Nusantara (Ongkir Express) - IT Programmer
              Supervisor
            </h4>
            <p className="text-sm text-gray-400 mb-2">
              Juni 2022 - November 2024
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 tracking-tighter">
              <li>
                Developed Transport Management System & Fleet Management
                Applications for delivery & vehicle management.
              </li>
            </ul>
          </li>

          <li className="p-4 rounded-xl border-b border-white/10 pb-6 mb-2 last:border-b-0 last:pb-0 last:mb-0 hover:-translate-y-1 transition-all">
            <h4 className="font-bold tracking-tighter text-gray-600">
              PT. Satria Antaran Prima (SAP Express) - IT Programmer
            </h4>
            <p className="text-sm text-gray-400 mb-2">Juni 2020 - Juni 2022</p>
            <ul className="list-disc list-inside ml-4 space-y-1 tracking-tighter">
              <li>
                Led coordination of API integrations between vendor and client
                to enable real-time logistics data synchronization.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Career;
