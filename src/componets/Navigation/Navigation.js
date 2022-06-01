import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./NavBar.styles";
import LogoImg from "./logoSample.jpg";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> All Movies</NavbarLink>
            <NavbarLink to="/favourites"> Watchlist</NavbarLink>
            {/* <input className="searchInput" type="text" placeholder="Search.." /> */}
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          {/* <NavInput/> */}
          {/* <Logo src={LogoImg}></Logo> */}
          {/* <label>Developed By: Biniam Abera</label> */}
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> All Movies</NavbarLinkExtended>
          <NavbarLinkExtended to="/favourites">Watchlist</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;