import React from "react";
import "./Card1.css";



// const Card = ({ image, title, description, link, theme, descriptionColor, index }) => {
//   const isDarkTheme = theme === 'dark';
//   const isEven = index % 2 === 0;

//   return (
//     <div className="card-view">
//       <div className={`Card ${isDarkTheme ? 'card-dark' : 'card-light'} ${isEven ? 'image-left' : 'image-right'}`}>
//       <img src={image} alt={title} className="card-image" />
//       <div className="card-content">
//         <h3 className="card-title">{title}</h3>
//         <p className="card-description" style={{ color: descriptionColor }}>
//           {description}
//         </p>
//         {link && (
//           <a
//             href={link.url}
//             className={`card-link ${link.color}`}
//             style={{ color: 'var(--link-color-${link.color})' }}
//           >
//             {link.text}
//           </a>
//         )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;





const Card1 = () => {
  return (
    <div className='card1-container'>
      {/* <div className="card-content"> */}
      <div className="card1-text">
        <h2 className="card1-title">Global Accounts</h2>
        <p className="card-description">Open a domestic or foreign currency business account in minutes and start receiving payments immediately.</p>
        <span className="card1-get-started">Get Started <img src="https://cdn1.iconfinder.com/data/icons/material-core/16/arrow-forward-1024.png "/> </span>
      </div>
      <div className="card1-image"> 
        <img className="card-image" src='https://gladefinance.co/images/account_selection.svg' alt='exchanges' />
      </div>
        
      {/* </div> */}
    </div>
  );
};


export default Card1;
