import React from 'react';
import MainImage from '../assets/mainimage.jpg';
import card1Image from '../assets/card1.jpg'; 
import card2Image from '../assets/card2.jpg';
import card3Image from '../assets/card3.jpg'; 
import card4Image from '../assets/card4.jpg';
import card5Image from '../assets/card5.jpg'; 
import mapImage from '../assets/map.jpg'; 
import profileImage from '../assets/tovino-pic.jpg';


const cardData = [ 
  {
    image: card1Image,
    labels: ["TOWNHOUSES", "VILLAS"],
    title: "DAMAC",
    text: [
      "Bliss - Arabian Ranches lllBliss-Arabian Rnches lll",
      "Bliss -  Arabian Ranches lll Dubai",
      "From AED 1,840,000"
    ].join('<br/>'), 
  },
  {
    image: card2Image,
    labels: ["VILLAS", "TOWNHOUSES"],
    title: "EMAAR",
    text: [
      "VIDA Residences @ Creek Beach",
      "Creek Beach, Dubai Creek Harbour Dubai",
      "From AED 1,730,000"
    ].join('<br/>'), // Join with <br /> tags
  },
  {
    image: card3Image,
    labels: ["TOWNHOUSES", "PENTHOUSE"],
    title: "MERAAS",
    text: [
      "CHIC Tower",
      "Business Bay Dubai",
      "From AED 1,822,000"
    ].join('<br/>'), // Join with <br /> tags
  },
  {
    image: card1Image,
    labels: ["TOWNHOUSES", "VILLAS"],
    title: "DAMAC",
    text: [
      "Bliss - Arabian Ranches lllBliss-Arabian Rnches lll",
      "Bliss -  Arabian Ranches lll Dubai",
      "From AED 1,840,000"
    ].join('<br/>'), // Join with <br /> tags
  },
  {
    image: card2Image,
    labels: ["VILLAS", "TOWNHOUSES"],
    title: "EMAAR",
    text: [
      "VIDA Residences @ Creek Beach",
      "Creek Beach, Dubai Creek Harbour Dubai",
      "From AED 1,730,000"
    ].join('<br/>'), 
  },
  {
    image: card3Image,
    labels: ["TOWNHOUSES", "PENTHOUSE"],
    title: "MERAAS",
    text: [
      "CHIC Tower",
      "Business Bay Dubai",
      "From AED 1,822,000"
    ].join('<br/>'), 
  },
];

const cardData1 = [ 
  {
    image: card1Image,
    labels: ["TOWNHOUSES", "VILLAS"],
    title: "DAMAC",
    text: [
      "Bliss - Arabian Ranches lllBliss-Arabian Rnches lll",
      "Bliss -  Arabian Ranches lll Dubai",
      "From AED 1,840,000"
    ].join('<br/>'), 
  },
  {
    image: card2Image,
    labels: ["VILLAS", "TOWNHOUSES"],
    title: "EMAAR",
    text: [
      "VIDA Residences @ Creek Beach",
      "Creek Beach, Dubai Creek Harbour Dubai",
      "From AED 1,730,000"
    ].join('<br/>'), 
  },
  {
    image: card3Image,
    labels: ["TOWNHOUSES", "PENTHOUSE"],
    title: "MERAAS",
    text: [
      "CHIC Tower",
      "Business Bay Dubai",
      "From AED 1,822,000"
    ].join('<br/>'), 
  },
  {
    image: card1Image,
    labels: ["TOWNHOUSES", "VILLAS"],
    title: "DAMAC",
    text: [
      "Bliss - Arabian Ranches lllBliss-Arabian Rnches lll",
      "Bliss -  Arabian Ranches lll Dubai",
      "From AED 1,840,000"
    ].join('<br/>'), 
  },
  {
    image: card2Image,
    labels: ["VILLAS", "TOWNHOUSES"],
    title: "EMAAR",
    text: [
      "VIDA Residences @ Creek Beach",
      "Creek Beach, Dubai Creek Harbour Dubai",
      "From AED 1,730,000"
    ].join('<br/>'), // Join with <br /> tags
  },
  {
    image: card3Image,
    labels: ["TOWNHOUSES", "PENTHOUSE"],
    title: "MERAAS",
    text: [
      "CHIC Tower",
      "Business Bay Dubai",
      "From AED 1,822,000"
    ].join('<br/>'), // Join with <br /> tags
  },
  {
    image: card4Image,
    labels: ["TOWNHOUSES", "VILLAS"],
    title: "OMNIYATH",
    text: [
      "Bliss - Arabian Ranches lllBliss-Arabian Rnches lll",
      "Bliss -  Arabian Ranches lll Dubai",
      "From AED 1,840,000"
    ].join('<br/>'), // Join with <br /> tags
  },
  {
    image: card5Image,
    labels: ["TOWNHOUSES", "VILLAS"],
    title: "SHOBHA",
    text: [
      "Bliss - Arabian Ranches lllBliss-Arabian Rnches lll",
      "Bliss -  Arabian Ranches lll Dubai",
      "From AED 1,840,000"
    ].join('<br/>'), // Join with <br /> tags
  },
];

const cardData3 = [ 
  {
    image: card2Image,
    labels: ["INSIGHTS"],
    title: "Lorem ipsum dolor sit amet",
    text: [
      "20 November 2022",
      "lorem ipsum dolor sit amet, counseler adipolising",
      "pellentistise pellentise solladase purus"
    ].join('<br/>'), // Join with <br /> tags
  },
  {
    image: card2Image,
    labels: [ "INSIGHTS"],
    title: "Lorem ipsum dolor sit amet",
    text: [
      "20 November 2022",
      "lorem ipsum dolor sit amet, counseler adipolising",
      "pellentistise pellentise solladase purus"
    ].join('<br/>'), // Join with <br /> tags
  },
  {
    image: card2Image,
    labels: [ "INSIGHTS"],
    title: "Lorem ipsum dolor sit amet",
    text: [
      "20 November 2022",
      "lorem ipsum dolor sit amet, counseler adipolising",
      "pellentistise pellentise solladase purus"
    ].join('<br/>'), // Join with <br /> tags
  },
]

function Navbar() {
 

  return (  
    <>
    {/* header section /navbar*/}
    
    <div className='background-container'>
        <nav className='navbar'>
          <div className='navbar-container'>
            <h1 className='demo-title'>DEMO</h1> {/* Adding the Demo text */}
          </div>
          <div className='navlef-rightwrap'>
          <ul className='navbar-left'>
            <li>Listing</li>
            <li>Developers</li>
            <li>About </li>
          </ul>
          <ul className='navbar-right'>
            <li>Insights</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
          </div>
          <div className='writings-nav'>
    <p>Once you engage with us, you </p>
    <p>won't want to engage with </p>
    <p>anyone else.</p>
  </div>

  {/* <div className='enquiry-dub'>Bliss - Arabian Ranches III
    <p>Dubai, UAE</p>
    <span> Enquire this property</span>
    </div> */}

        </nav>
        <img src={MainImage} alt='Background Image' className='background-image'></img>
        <div className="card-main">
  <div className="card-header">
    <h5>Buy Off-Plan Property</h5>
    <h5>Buy a Property</h5>
    <h5>Properties for Rent</h5>
  </div>
  <div className="form-section">
    <div className="dropdown-row">
      <select className="dropdown-field">
        <option>Penthouses</option>
        <option>Option 2</option>
      </select>
      <select className="dropdown-field">
        <option>Dubai</option>
        <option>Option 2</option>
      </select>
    </div>
    <div className="dropdown-row">
      <select className="dropdown-field">
        <option>All Developer</option>
        <option>Option 2</option>
      </select>
      <select className="dropdown-field">
        <option>All Lifestyle Types</option>
        <option>Option 2</option>
      </select>
      <select className="dropdown-field">
        <option>AED 200,000</option>
        <option>Option 2</option>
      </select>
      <select className="dropdown-field">
        <option>AED 500,000</option>
        <option>Option 2</option>
      </select>
    </div>
    <div className="search-section">
      <input type="text" className="search-box" placeholder="Search..."/>
      <button className="search-button">Properties</button>
    </div>
  </div>
</div>


      </div>
 
  <div className='cards-firstsec'><h1>Off-Plan Properties for Sale</h1>
  <h3>lorem ipsum dolor sit amet, consectetur adipisingelit.<br/>
  pallentesque pallentesque soladales purus
  </h3>

  <div className='card-container'>
      {cardData.map((card, index) => (
        <div className='card' key={index}>
          <div className='card-image'>
            <img src={card.image} alt={`Card ${index + 1}`}/>
            <div className='label-wrapper'>
              <span className='label label1'>{card.labels[0]}</span>
              <span className='label label2'>{card.labels[1]}</span>
            </div>
          </div>
          <div className='card-text'>
        <h4>{card.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: card.text }}></p> {/* Render HTML */}
      </div>
        </div>
      ))}
    </div>
  </div>

<div className='card-3map'>
  <h1>Explore Properties on Map</h1>
  <div className='map-main'><img src={mapImage} alt="Map" style={{ width: '100%', height: '400px', borderRadius: '10px' }} /></div>
</div>
<br/><br/>


<div className='featured-listing'><h1>Featured Listings</h1><h4>lorem ipsum dolor sit amet, consectetur adipisingelit<br/>
lorem ipsum dolor sit amet, consectetur adipisingelit</h4></div>

<div className='button-container'>
    <button>Villa</button>
    <button>Apartments</button>
    <button>Penthhouse</button>
    <button>Off Plan</button>
</div>

<div className='card-container-2'>
  {cardData1.map((card, index) => (
    <div className='card-2' key={index}>
      <div className='card-image-2'>
        <img src={card.image} alt={`Card ${index + 1}`} />
        <div className='label-wrapper-2'>
          <span className='label label1-2'>{card.labels[0]}</span>
          <span className='label label2-2'>{card.labels[1]}</span>
        </div>
      </div>
      <div className='card-text-2'>
        <h4>{card.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: card.text }}></p> {/* Render HTML */}
      </div>
    </div>
  ))}
</div>

{/* testimonials */}
<div className='testimonial main'>
  <div className='left-side-card'>
    <h3>Our Experts Will Help You Buy</h3>
    <p>Best Units Curated For You</p>
    <p>
     <input type='text' placeholder='Name*' />
    </p>
    <p>
       <input type='tel' placeholder='Phone number*'/>
    </p>
    <p>
       <input type='email' placeholder='Email*'/>
    </p>
    <button className='request-btn'>Request a free Callback</button>
  </div>


  <div className='right-side-card'>
    <h3>" The customer journey </h3>
    <h3>has always been and will always</h3>
    <h3> our priority. "</h3>
    <div className='profile-section'>
      <img src={profileImage} alt='Profile' className='profile-pic'></img>
      <div className='name-area'>
        <h4>TOVINO THOMAS</h4>
        <p>CEO, Demo properties</p>
        <div className='test-icon'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	<g fill="currentColor">
		<path fill-rule="evenodd" d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606" clip-rule="evenodd" />
		<path d="M7.2 8.809H4V19.5h3.2z" />
	</g>
</svg>&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<path fill="currentColor" d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164" />
</svg></div>
<div className='test-phn'>+971 123456789<br/>
  <p>tovino@demoproperties.ae</p>
</div>

      </div>
    </div>
  </div>
</div>

<br/><br/>
{/* Third image card part */}
<div className='Top-insight'>Top Insight & News<br/>
<p>lorem ipsum dolor sit amet ,counseler adipising elit</p></div>

<div className='card-container-3'>
  {cardData3.map((card, index) => (
    <div className='card-3' key={index}>
      <div className='card-image-3'>
        <img src={card.image} alt={`Card ${index + 1}`} />
        <div className='label-wrapper-3'>
          <span className='label label1-3'>{card.labels[0]}</span>
        </div>
      </div>
      <div className='card-text-3'>
        <h4>{card.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: card.text }}></p> {/* Render HTML */}
      </div>
    </div>
  ))}
</div>

{/* footer section   */}
<footer className='footer'>
  <div className='footer-content'>
  <div className='demofoot-head'>DEMO</div>

  <div className='mainmain-footaligh'>
    <div className='main-section'>
     <div className='lets-talk'>Let's Talk
        <h1>9771234567</h1>
      </div>

      <div className='socials-foot'>Socials</div>
      <div className='socials-icons'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<path fill="currentColor" d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22 22 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202z" />
</svg><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<path fill="currentColor" d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164" />
</svg><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024">
	<path fill="currentColor" d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7M911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165M512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1m213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9" />
</svg><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<g fill="currentColor">
		<path fill-rule="evenodd" d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606" clip-rule="evenodd" />
		<path d="M7.2 8.809H4V19.5h3.2z" />
	</g>
</svg>
</div>
    </div>

    <div className='footer-links'>
      <div className='developer-foot'>Developers
      <div className='developer-list'>
      <h1>Emaar Group</h1>
      <h1>Damac</h1>
      <h1>Shobha City</h1>
      <h1>Meras</h1>
      <h1>Dubai Properties</h1>
      <h1>Omniyac</h1>
      </div>
      </div>

      <div className='popular-foot'>Popular Areas
      <div className='popular-list'>
      <h1>Downtown</h1>
      <h1>Dubai Hills Estate</h1>
      <h1>Dubai Creek Harbor</h1>
      <h1>DAMAC Hills</h1>
      <h1>MBR City</h1>
      <h1>JBR</h1>
      </div>
      </div>
      
      <div className='properties-foot'>Properties
      <div className='poperties-list'>
      <h1>Apartments</h1>
      <h1>Villas</h1>
      <h1>Penthouses</h1>
      <h1>Townhouses</h1>
      <h1>Villas</h1>
      <h1>Landplots</h1>
      </div>
      </div>
      
    </div>
    </div>
    <div className='footer-info'>
      <p>&copy; 2024 Demo Properties. All Rights Reserved.</p>
     
    </div>
  </div>
</footer>
   </>
 
  )
}

export default Navbar