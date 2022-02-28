import React from "react";
import "./footer.css";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
const FooterLinkWithIcon = ({ url,children,icon=null }) => {
  if (icon) return (
    <FooterLink href={url}>
        <i className={`bi bi-${icon}`}></i>
        <span style={{ marginLeft: "10px" }}>{children}</span>
    </FooterLink>
  )
  return (
    <FooterLink href={url}>{children}</FooterLink>
  )
}

const Footer = () => {
  return (
    <div className="box">
      <Container>
        <Row>
          <Column>
            <Heading>Adresa</Heading>
            <p className="footer-text">Strada Chitarei</p>
            <p className="footer-text">Sector 3</p>
            <p className="footer-text">Bucuresti</p>
          </Column>
          <Column>
            <Heading>Servicii</Heading>
            <FooterLink to={"/services"}>Manichiura fara oja</FooterLink>
            <FooterLink to={"/services"}>Manichiura semipermanenta</FooterLink>
            <FooterLink to={"/services"}>Constructie gel</FooterLink>
            <FooterLink to={"/services"}>Pedichiura semipermanenta</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            {/* <FooterLinkWithIcon href="tel:+040787400999" icon="telephone">
              0787400999
            </FooterLinkWithIcon>
            <FooterLinkWithIcon
              href="https://wa.me/+40735131140"
              icon="whatsapp"
            >
              WhatsApp
            </FooterLinkWithIcon> */}
            <FooterLink href="tel: +40787400999">
              <i class="bi bi-telephone"></i>
              <span style={{ marginLeft: "10px" }}>0787400999</span>
            </FooterLink>
            <FooterLink href="https://wa.me/+40787400999">
              <i class="bi bi-whatsapp"></i>
              <span style={{ marginLeft: "10px" }}>WhatsApp</span>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/nailsbyastrid_-101801234866514/">
              <i className="bi bi-facebook"></i>
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/nails.by.astrid_/?hl=en">
              <i className="bi bi-instagram"></i>
              <span style={{ marginLeft: "10px" }}>Instagram</span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
