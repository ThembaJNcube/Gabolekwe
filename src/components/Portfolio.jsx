import React from "react";
import bounty from "./bounty";
import projects from "./projects";

export default function Portfolio() {
  return (
    <div className="portCont">
      <div className="portfolio-container">
        <h1 className="title">Portfolio</h1>
        <h2>
          Recent Bounties <span className="max-md:hidden">😄🥗</span>
        </h2>
        <div className="portfolio">
          {bounty.map((s) => {
            return (
              <div className="portfolio-layer">
                <img src={s.image} alt={s.name} />
                <div className="portMessage">
                  <p>A fruitful bounty of {s.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        <h2>
          Recent Projects <span className="max-md:hidden">🧤⛏</span>
        </h2>
        <div className="portfolio">
          {projects.map((s) => {
            return (
              <div className="portfolio-layer">
                <img src={s.image} alt={s.name} />
                <div className="portMessage">
                  <p>A fruitful bounty of {s.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
