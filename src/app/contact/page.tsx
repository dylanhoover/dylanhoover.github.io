"use client";

import ContactForm from "@/components/contact/ContactForm";
import styled from "styled-components";

const Section = styled.div`
  padding: 40px 0;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-text);
  margin-bottom: 3rem;
`;

export default function ContactPage() {
  return (
    <Section>
      <Heading>Contact Me</Heading>
      <ContactForm />
    </Section>
  );
}
