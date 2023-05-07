import React from "react";
import SidebarContainer from "../containers/loginContainers/sidebarContainer";
import MainBodyContainer from "../containers/loginContainers/mainBodyContainer";
import FooterContainer from "../containers/loginContainers/footerContainer";
import MainContainer from "../containers/common/mainContainer";
import SectionContainer from "../containers/loginContainers/sectionContainer";
import Footer from "../components/organisms/footer";
import Header from "../components/organisms/header";

const LoginLayout = ({ children }) => {
  return (
    <MainContainer>
      <SectionContainer>
        <SidebarContainer>
          <Header />
        </SidebarContainer>
        <MainBodyContainer>{children}</MainBodyContainer>
      </SectionContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </MainContainer>
  );
};

export default LoginLayout;
