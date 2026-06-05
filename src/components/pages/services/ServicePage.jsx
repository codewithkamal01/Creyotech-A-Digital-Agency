import AgencySelectionGuide from "../../services/AgencySelectionGuide";
import FAQSection from "../../services/FAQSection";
import ServiceHero from "../../services/ServiceHero";
import ServiceOfferings from "../../services/ServiceOfferings";
import ServicePackages from "../../services/ServicePackages";

function ServicePage({ data }) {
  const hero = data.hero || {};

  const normalizedHero = {
    badge: hero.badge,
    title: hero.title,
    description: hero.description,
    primaryCTA: hero.primaryCTA || {
      label: hero.ctaPrimary || hero.cta || "",
      href: hero.ctaPrimaryHref || "#",
    },
    secondaryCTA: hero.secondaryCTA || {
      label: hero.ctaSecondary || "",
      href: hero.ctaSecondaryHref || "#",
    },
    trustPoints: hero.trustPoints || data.whyCreyotech?.points || [],
    image: hero.image || "",
  };

  const rawOfferings = data.offerings || data.services || [];

  const offerings = rawOfferings.map((it, idx) => ({
    id: it.id || it.title?.toLowerCase().replace(/\s+/g, "-") || `offer-${idx}`,
    title: it.title || it.name || `Option ${idx + 1}`,
    badge: it.badge || it.subtitle || it.type || "",
    description: it.description || it.desc || "",
    idealFor: it.idealFor || it.ideal_for || [],
    features:
      it.features || it.integrations || it.conditions || it.eligibility || [],
  }));

  const agencyData = data.agencySelection || data.agencySelectionGuide || {};

  return (
    <>
      <ServiceHero hero={normalizedHero} />
      <ServiceOfferings offerings={offerings} />
      <ServicePackages data={data.packages} />
      <AgencySelectionGuide data={agencyData} />
      <FAQSection faqs={data.faqs || []} />
    </>
  );
}

export default ServicePage;
