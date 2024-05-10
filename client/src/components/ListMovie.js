
import React from 'react';
import { Link } from 'react-router-dom';

const ListMovie = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="d-flex justify-content-start w-25" key={index}>
          <Link to={`/details/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
            <img src={movie.Poster} alt="Movie Poster" />
          </Link>
        </div>
      ))}
    </>
  );
};

export default ListMovie;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const ListMovie = (props) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [playlistSelection, setPlaylistSelection] = useState({});

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   const handlePlaylistSelection = (index, isPublic) => {
//     console.log(isPublic);
//     setPlaylistSelection({ ...playlistSelection, [index]: isPublic });
//     // Perform actual add to playlist action here based on `isPublic` flag
//     // Example:
//     // if (isPublic) {
//     //   // Add to public playlist
//     // } else {
//     //   // Add to private playlist
//     // }
//   };

//   return (
//     <>
//       {props.movies.map((movie, index) => (
//         <div
//           className="d-flex justify-content-start"
//           style={{ width: '25%', position: 'relative', padding: '8px' }}
//           key={index}
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Link to={`/details/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
//             <img
//               src={movie.Poster}
//               alt="Movie Poster"
//               style={{ width: '100%', height: 'auto' }}
//             />
//           </Link>
//           {hoveredIndex === index && (
//             <div
//               className="position-absolute top-100 start-50 translate-middle"
//               style={{
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 padding: '10px',
                
//                 borderRadius: '5px',
//                 display: 'flex',
//                 flexDirection: 'row',
//                 alignItems: 'center'
//               }}
//             >
//               <button
//                 className="btn btn-primary mb-2"
//                 onClick={() => handlePlaylistSelection(index, true)}
//               >
//                 Add to Public Playlist
//               </button>
//               <button
//                 className="btn btn-secondary"
//                 onClick={() => handlePlaylistSelection(index, false)}
//               >
//                 Add to Private Playlist
//               </button>
//             </div>
//           )}
//         </div>
//       ))}
//     </>
//   );
// };

// export default ListMovie;
