import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faTruck, faExchangeAlt, faHeadset } from '@fortawesome/free-solid-svg-icons';

function Four1() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between p-4 md:p-10">
        {/* Card 1: Certified Seller */}
        <div className="box1 flex items-center justify-between mb-6 md:mb-0 md:mr-6 lg:mr-0 w-full md:w-auto md:max-w-xs rounded-lg lg:w-72 shadow-xl border border-gray-300">
          <div className="box1_card flex items-center justify-center h-20 w-20 text-black">
            <FontAwesomeIcon icon={faAward} size="3x" />
          </div>
          <div className="box1_detail mr-10 text-left">
            <p className="font-semibold text-lg">Certified Seller</p>
            <p className="mt-2 text-sm">Trusted Service</p>
          </div>
        </div>

        {/* Card 2: Rapid Delivery */}
        <div className="box1 flex items-center justify-between mb-6 md:mb-0 md:mr-6 lg:mr-0 w-full md:w-auto md:max-w-xs lg:w-72 rounded-lg shadow-2xl border border-gray-300">
          <div className="box1_card flex items-center justify-center h-20 w-20 text-black">
            <FontAwesomeIcon icon={faTruck} size="3x" />
          </div>
          <div className="box1_detail mr-10 text-left">
            <p className="font-semibold text-lg">Rapid Delivery</p>
            <p className="mt-2 text-sm">Lesser Delivery Time</p>
          </div>
        </div>

        {/* Card 3: Customer Helpline */}
        <div className="box1 flex items-center justify-between mb-6 md:mb-0 md:mr-6 lg:mr-0 w-full md:w-auto md:max-w-xs lg:w-72 rounded-lg shadow-2xl border border-gray-300">
          <div className="box1_card flex items-center justify-center h-20 w-20 text-black">
            <FontAwesomeIcon icon={faHeadset} size="3x" />
          </div>
          <div className="box1_detail mr-10 text-left">
            <p className="font-semibold text-lg">Customer Helpline</p>
            <p className="mt-2 text-sm">Mon-Sun 10:30am - 7pm</p>
          </div>
        </div>

        {/* Card 4: Easy Exchange */}
        <div className="box1 flex items-center justify-between mb-6 md:mb-0 md:mr-6 lg:mr-0 w-full md:w-auto md:max-w-xs rounded-lg lg:w-72 shadow-xl border border-gray-300">
          <div className="box1_card flex items-center justify-center h-20 w-20 text-black">
            <FontAwesomeIcon icon={faExchangeAlt} size="3x" />
          </div>
          <div className="box1_detail mr-10 text-left">
            <p className="font-semibold text-lg">EASY EXCHANGE</p>
            <p className="mt-2 text-sm">Guaranteed Quality</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Four1;
