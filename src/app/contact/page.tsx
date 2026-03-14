import type { Metadata } from "next";
import { constructMetadata } from "@/lib";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = constructMetadata("contact");

export default function ContactPage() {
  return <ContactForm />;
}
