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

const Footer = () => {
  return (
    <div className="box">
      <Container>
        <Row>
          <Column>
            <Heading>Adresa</Heading>
            <p className="footer-text">Strada Chitarei 16-18</p>
            <p className="footer-text">Sector 3</p>
            <p className="footer-text">Bucuresti</p>
          </Column>
          <Column>
            <Heading>Servicii</Heading>
            <FooterLink href="/services">Manichiura fara oja</FooterLink>
            <FooterLink href="/services">Manichiura semipermanenta</FooterLink>
            <FooterLink href="/services">Constructie gel</FooterLink>
            <FooterLink href="/services">Pedichiura semipermanenta</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">0787400999</FooterLink>
            <FooterLink href="#">Programari online</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/nailsbyastrid_-101801234866514/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/nails.by.astrid_/?hl=en">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
