import React from 'react';
import SessionCheck from './components/sessionCheck';
import CustomNavbar from './components/CustomNavbar';

const cards = [
  {
    id: 1,
    image: 'https://penji.co/wp-content/uploads/2020/12/22-Best-Healthcare-Ads-To-Inspire-You-With-Analysis.jpg',
    text: 'Card 1',
  },
  {
    id: 2,
    image: 'https://ppdsgmt.my/wp-content/uploads/2023/02/dan-gold-4_jhDO54BYg-unsplash.jpg',
    text: 'Card 2',
  },
  {
    id: 3,
    image: 'https://www.axaglobalhealthcare.com/globalassets/world-of-wellbeing/global-access/virtual-doctor.jpg?width=1280&mode=crop&heightratio=0.5625&quality=80',
    text: 'Card 3',
  },
];

const ResponsivePage = () => {
  return (
    <>
    <SessionCheck/>
    <CustomNavbar/>
    <div className="flex bg-gradient-to-r from-yellow-100 to-green-300 flex-col justify-center">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-full sm:w-full p-4 "
        >
          <div className="bg-gradient-to-r from-pink-800 to-red-500 rounded-lg overflow-hidden shadow-lg hover:shadow-xl  transition duration-300 ease-in-out">
            <div className="flex">
              <div className="w-1/2">
                <div className="h-60">
                  <img
                    className="w-full h-full object-cover"
                    src={card.image}
                    alt={card.text}
                  />
                </div>
              </div>
              <div className="w-1/2 p-4">
                <h3 className="text-xl font-bold mb-2">{card.text}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ResponsivePage;
