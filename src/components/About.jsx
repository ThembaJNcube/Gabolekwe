import React from "react";
import pepper from "../images/about/peppers.webp"

export default function About() {
  return (
    <div className="section-container">
      <div className="about-container">
        <div className="about-box abHome">
          <div className="abCont">
            <h1>🌾 Gabolekwe Farm 🌾</h1>
            <p>Where Every Seed Finds Its Story</p>
          </div>
        </div>
        <div className="about-box">
          <h1>Our Farm Ethos:</h1>
          <p>
            <span className="text-[1.5rem] text-[#b40909] max-md:text-[1rem]">
              🌻 Rooted in Tradition
            </span>{" "}
            :We honor the wisdom of generations past, tending to our crops with
            care and reverence. From heirloom tomatoes to golden corn, each seed
            carries a legacy.
          </p>
          <p>
            <span className="text-[1.5rem] text-[#b40909] max-md:text-[1rem]">
              🌿 Sustainable Stewardship
            </span>{" "}
            :Our commitment to sustainable practices runs deep. We nurture the
            soil, protect pollinators, and cultivate harmony between nature and
            nurture
          </p>
          <p>
            <span className="text-[1.5rem] text-[#b40909] max-md:text-[1rem]">
              🐓 Farm-to-Table Magic
            </span>
            : Taste the difference! Our farm-fresh produce graces local tables,
            connecting families to the earth’s abundance. Join us for seasonal
            harvest festivals and culinary adventures.
                  </p>
                  <br />
                  <img src={pepper} alt="peppers" />
        </div>
      </div>
    </div>
  );
}
