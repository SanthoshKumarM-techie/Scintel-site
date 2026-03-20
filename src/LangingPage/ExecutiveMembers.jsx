import React from "react";

// Mock data: All members are now 'Rithish Barath N' 
// for consistency, with images and designations added.
const members = [
  { id: 1, name: "Rithish Barath N", designation: "Frontend Developer", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?&w=150&h=150&q=80" },
  { id: 2, name: "Rithish Barath N", designation: "UI/UX Designer", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=150&h=150&q=80" },
  { id: 3, name: "Rithish Barath N", designation: "Backend Engineer", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?&w=150&h=150&q=80" },
  { id: 4, name: "Rithish Barath N", designation: "Project Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?&w=150&h=150&q=80" },
  { id: 5, name: "Rithish Barath N", designation: "Data Scientist", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=150&h=150&q=80" },
  { id: 6, name: "Rithish Barath N", designation: "Content Strategist", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?&w=150&h=150&q=80" },
];

export default function ExecutiveMember() {
  return (
    <>
      <style>{`
        /* 1. Full Page Background */
        .page-wrapper {
          background-color: #f8fafc; /* Matches the clean white/light grey bg */
          min-height: 100vh;
          width: 100%;
          padding: 80px 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* 2. Alignment Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* 3. Title Style */
        .em-title {
          font-size: 42px;
          font-weight: 800;
          color: #023347;
          margin-bottom: 60px;
          text-align: left;
        }

        /* 4. Grid Layout (2 columns for size) */
        .em-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 60px 40px;
        }

        /* 5. Member Card */
        .em-card {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        /* 6. Perfect Image-Filling Circles */
        .em-image-wrapper {
          width: 130px; /* Base size */
          min-width: 130px;
          aspect-ratio: 1 / 1; /* Forces a perfect square */
          border-radius: 50%; /* Rounds the square into a circle */
          overflow: hidden; /* Important! Clips any image parts outside the circle */
          border: 3px solid #023347;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          background-color: #e2e8f0; /* Fallback/Loading background */
          flex-shrink: 0;
        }

        .em-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* This makes the image stretch/crop to perfectly fill the circle */
          display: block;
        }

        /* 7. Text Styling */
        .em-info-name {
          font-size: 24px;
          font-weight: 700;
          color: #023347;
          margin-bottom: 6px;
        }

        .em-info-designation {
          font-size: 18px;
          color: #64748b;
          font-weight: 400;
        }

        /* Responsive adjustments */
        @media (max-width: 900px) {
          .em-grid { grid-template-columns: 1fr; }
          .em-card { gap: 20px; }
          .em-image-wrapper { width: 100px; min-width: 100px; }
          .em-info-name { font-size: 20px; }
        }
      `}</style>

      <div className="page-wrapper">
        <div className="container">
          <h2 className="em-title">Executive Member</h2>
          
          <div className="em-grid">
            {members.map((member) => (
              <div key={member.id} className="em-card">
                <div className="em-image-wrapper">
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : null}
                </div>
                <div className="em-text-box">
                  <div className="em-info-name">{member.name}</div>
                  <div className="em-info-designation">{member.designation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}