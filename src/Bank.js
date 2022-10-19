import { Routes, Route, NavLink } from 'react-router-dom';

import WholeSaleBankOne from './FinalForm';
import WholeSaleBankTwo from './FinalForm';
import WholeSaleBankThree from './FinalForm';
import CentralBank from './CentralBank';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './Bank.css';

function Bank() {
  return (
    <div>
      <dash className="flex">
        <NavLink
          to="/centralBank"
          className="col-12 md:col-6 lg:col-3 no-underline"
        >
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="p-3 m-1 flex align-items-center justify-content-center">
              <div>
                <div className="text-900 font-medium text-xl">
                  Go to Central Bank Go to Central Bank Go to Central Bank Go to
                  Central Bank
                </div>
              </div>
            </div>
            <div className="p-3 m-1 flex align-items-center justify-content-center">
              <div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: '2.5rem', height: '2.5rem' }}
                >
                  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/centralBank"
          className="col-12 md:col-6 lg:col-3 no-underline"
        >
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="p-3 m-1 flex align-items-center justify-content-center">
              <div>
                <div className="text-900 font-medium text-xl">
                  Go to Wholesale Bank one
                </div>
              </div>
            </div>
            <div className="p-3 m-1 flex align-items-center justify-content-center">
              <div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: '2.5rem', height: '2.5rem' }}
                >
                  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/centralBank"
          className="col-12 md:col-6 lg:col-3 no-underline"
        >
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="p-3 m-1 flex align-items-center justify-content-center">
              <div>
                <div className="text-900 font-medium text-xl">
                  Go to Wholesale Bank Two
                </div>
              </div>
            </div>
            <div className="p-3 m-1 flex align-items-center justify-content-center">
              <div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: '2.5rem', height: '2.5rem' }}
                >
                  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/centralBank"
          className="col-12 md:col-6 lg:col-3 no-underline"
        >
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="p-3 m-1 flex align-items-center justify-content-center">
              <div>
                <div className="text-900 font-medium text-xl">
                  Go to Wholesale Bank Three
                </div>
              </div>
            </div>
            <div className="p-3 m-1 flex align-items-center justify-content-center">
              <div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: '2.5rem', height: '2.5rem' }}
                >
                  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </dash>
      <div className="p-5">
        <Routes>
          <Route path="centralBank" element={<CentralBank />} />
          <Route path="wholeSaleBankOne" element={<WholeSaleBankOne />} />
          <Route path="hookform" element={<WholeSaleBankTwo />} />
          <Route path="wholeSaleBankTwo" element={<WholeSaleBankThree />} />
          <Route path="wholeSaleBankThree" element={<CentralBank />} />
        </Routes>
      </div>
    </div>
  );
}

export default Bank;
