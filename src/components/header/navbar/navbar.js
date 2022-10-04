import React from "react";
import "./navbar.css";
function navbar() {
  const niz1 = ["Funds", "Docs", "Competition"];
  const niz2 = ["", "https://kluks-dao.gitbook.io/kluks/", ""];
  const links = [];
  for (var i = 0; i < niz1.length; i++) {
    links.push(
      <div className="link" key={niz1[i]}>
        <a href={niz2[i]}>{niz1[i]}</a>
      </div>
    );
  }
  niz2.forEach((l) => {
    niz1.map((link) => {
      return (
        <div className="link" key={link}>
          <a href={l}>{link}</a>
        </div>
      );
    });
  });
  return <div className="links">{links}</div>;
}

export default navbar;
