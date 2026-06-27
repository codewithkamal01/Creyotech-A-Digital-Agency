import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  Layers,
  Sparkles,
  Search,
  Bot,
  PenTool,
  Users,
  Megaphone,
  Send,
  Package,
  BarChart3,
  TrendingUp,
  Zap,
  Target,
  ShieldCheck,
  CheckCircle2,
  Award,
  Settings,
  ArrowRight,
} from "lucide-react";

function ServicePackages({ data }) {
  const location = useLocation();

  const [active, setActive] = useState(data.plans[0]);

  // Dynamically determine which sections to show based on active plan
  const getSections = () => {
    const sectionMap = {
      "Ideal For": active.idealFor,
      "Core Services": active.coreServices,
      "SEO Services": active.seoServices,
      "GEO Services": active.geoServices,
      "Content Services": active.contentServices,
      "Management Services": active.managementServices,
      "Advertising Services": active.advertisingServices,
      Features: active.features,
      Eligibility: active.eligibility,
      Conditions: active.conditions,
      Integrations: active.integrations,
      Deliverables: active.deliverables,
      Reporting: active.reporting,
      "Outreach Services": active.outreachServices,
      "Expected Outcomes": active.outcome,
    };

    return Object.entries(sectionMap)
      .filter(([, items]) => items && items.length > 0)
      .map(([title, items]) => ({
        title,
        items: Array.isArray(items) ? items : [items],
      }));
  };

  const sections = getSections();

  const getIconForSection = (title) => {
    const iconMap = {
      "Core Services": <Zap className="w-5 h-5" />,
      "SEO Services": <TrendingUp className="w-5 h-5" />,
      Features: <Award className="w-5 h-5" />,
      Deliverables: <Target className="w-5 h-5" />,
      Reporting: <BarChart3 className="w-5 h-5" />,
      Support: <Settings className="w-5 h-5" />,
    };
    return iconMap[title] || <Check className="w-5 h-5" />;
  };

  const sectionVisuals = {
    "Core Services": <Layers className="h-24 w-24 lg:h-32 lg:w-32" />,
    Features: <Sparkles className="h-24 w-24 lg:h-32 lg:w-32" />,
    "SEO Services": <Search className="h-24 w-24 lg:h-32 lg:w-32" />,
    "GEO Services": <Bot className="h-24 w-24 lg:h-32 lg:w-32" />,
    "Content Services": <PenTool className="h-24 w-24 lg:h-32 lg:w-32" />,
    "Management Services": <Users className="h-24 w-24 lg:h-32 lg:w-32" />,
    "Advertising Services": <Megaphone className="h-24 w-24 lg:h-32 lg:w-32" />,
    "Outreach Services": <Send className="h-24 w-24 lg:h-32 lg:w-32" />,
    Deliverables: <Package className="h-24 w-24 lg:h-32 lg:w-32" />,
    Reporting: <BarChart3 className="h-24 w-24 lg:h-32 lg:w-32" />,
    "Expected Outcomes": <TrendingUp className="h-24 w-24 lg:h-32 lg:w-32" />,
    "Ideal For": <Target className="h-24 w-24 lg:h-32 lg:w-32" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const activePackage =
    data.plans.find((plan) => plan.id === location.hash.replace("#", "")) ||
    active;

  useEffect(() => {
    if (!location.hash) return;

    setTimeout(() => {
      document.getElementById("packages")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, [location.hash]);
  if (!data || !data.plans || data.plans.length === 0) {
    return null;
  }

  return (
    <section
      id="packages"
      className="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-15 max-w-4xl text-center"
        >
          <div
            className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-primary/20
      bg-primary/5
      px-4
      py-2
      text-sm
      font-medium
      text-primary
    "
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            Packages & Plans
          </div>

          <h2
            className="
      mt-3
      text-4xl
      font-bold
      leading-tight
      text-secondary
      dark:text-text-light
      md:text-5xl
      lg:text-6xl
    "
          >
            {data.title}
          </h2>

          <p
            className="
      mx-auto
      mt-3
      max-w-3xl
      text-lg
      leading-relaxed
      text-text-secondary
    "
          >
            {data.subtitle}
          </p>

          {/* Decorative line */}
          <div
            className="
      mx-auto
      mt-8
      h-1
      w-24
      rounded-full
      bg-primary
    "
          />
        </motion.div>

        {/* Plan Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-14 flex justify-center"
        >
          <div
            className="
      inline-flex
      flex-wrap
      gap-3
      rounded-3xl
      border
      border-border-light
      bg-bg-soft/50
      p-2
      dark:border-border-dark
      dark:bg-secondary/50
    "
          >
            {data.plans.map((plan) => {
              const isActive = active.id === plan.id;

              return (
                <motion.button
                  key={plan.id}
                  onClick={() => {
                    setActive(plan);
                    window.history.replaceState(null, "", `#${plan.id}`);
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`
            relative
            min-w-[180px]
            rounded-2xl
            px-5
            py-4
            text-left
            transition-all
            duration-300
            dark:text-text-light

            ${
              isActive
                ? `
                  bg-primary
                  text-white
                  shadow-lg
                  shadow-primary/20
                `
                : `
                  bg-transparent
                  hover:bg-white
                  dark:hover:bg-secondary
                `
            }
          `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePackage"
                      className="
                absolute
                inset-0
                -z-10
                rounded-2xl
                bg-primary
              "
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <div className="flex flex-col gap-2">
                    {plan.badge && (
                      <span
                        className={`
                  w-fit
                  rounded-full
                  px-2.5
                  py-1
                  text-[11px]
                  font-medium

                  ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "bg-primary/10 text-primary"
                  }
                `}
                      >
                        {plan.badge}
                      </span>
                    )}

                    <span
                      className={`
                text-sm
                font-semibold
                sm:text-base
              `}
                    >
                      {plan.name}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Plan Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Plan Header Info */}
            <div
              className="
    mb-12
    overflow-hidden
    rounded-[32px]
    border
    border-primary/10
    bg-gradient-to-br
    from-primary/10
    via-primary/5
    to-transparent
    p-6
    lg:p-10
  "
            >
              <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
                {/* Left Content */}
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-3">
                    {active.badge && (
                      <span
                        className="
              rounded-full
              bg-primary
              px-4
              py-2
              text-xs
              font-semibold
              tracking-wide
              text-white
            "
                      >
                        {activePackage.badge}
                      </span>
                    )}

                    {activePackage.support && (
                      <span
                        className="
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-primary/20
    bg-primary/10
    px-4
    py-2
    text-xs
    font-semibold
    text-primary
  "
                      >
                        <ShieldCheck size={14} />
                        {activePackage.support}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="
          mt-6
          text-3xl
          font-bold
          leading-tight
          text-foreground
          lg:text-4xl
          dark:text-text-light
        "
                  >
                    {activePackage.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="
          mt-1
          max-w-3xl
          text-base
          leading-relaxed
          text-text-secondary
          lg:text-lg
        "
                  >
                    {active.shortDescription}
                  </p>

                  {/* Quick Stats */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {active.coreServices?.length > 0 && (
                      <div
                        className="
              rounded-2xl
              border
              border-primary/10
              bg-white/60
              px-4
              py-3
              backdrop-blur-sm
              dark:bg-secondary/60
            "
                      >
                        <div className="text-xl font-bold text-primary">
                          {active.coreServices.length}+
                        </div>

                        <div className="text-xs text-text-secondary">
                          Core Services
                        </div>
                      </div>
                    )}

                    {active.deliverables?.length > 0 && (
                      <div
                        className="
              rounded-2xl
              border
              border-primary/10
              bg-white/60
              px-4
              py-3
              backdrop-blur-sm
              dark:bg-secondary/60
            "
                      >
                        <div className="text-xl font-bold text-primary">
                          {active.deliverables.length}+
                        </div>

                        <div className="text-xs text-text-secondary">
                          Deliverables
                        </div>
                      </div>
                    )}

                    {active.outcome?.length > 0 && (
                      <div
                        className="
              rounded-2xl
              border
              border-primary/10
              bg-white/60
              px-4
              py-3
              backdrop-blur-sm
              dark:bg-secondary/60
            "
                      >
                        <div className="text-xl font-bold text-primary">
                          {active.outcome.length}+
                        </div>

                        <div className="text-xs text-text-secondary">
                          Outcomes
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side */}
                <div
                  className="
        rounded-3xl
        border
        border-primary/15
        bg-white/60
        p-6
        backdrop-blur-sm
        dark:bg-secondary/60
      "
                >
                  <h4
                    className="
          text-sm
          font-semibold
          uppercase
          tracking-wider
          text-primary
        "
                  >
                    Key Benefits
                  </h4>

                  <div className="mt-6 space-y-4">
                    {(active.highlights || []).map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="
                mt-0.5
                shrink-0
                text-primary
      
              "
                        />

                        <span className="text-sm dark:text-text-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-6 lg:grid-cols-2"
            >
              {sections.map((section) => (
                <motion.div
                  key={section.title}
                  variants={itemVariants}
                  className="
                
    group
    relative
    overflow-hidden
    rounded-[32px]
    border
    border-primary/10
    bg-gradient-to-br
    from-white
    via-white
    to-primary/5
    p-6
    hover:border-primary/30
    hover:shadow-xl
    transition-all
    dark:from-secondary
    dark:via-secondary
    dark:to-primary/10
  "
                >
                  {/* Decorative Illustration */}
                  <div
                    className="
    absolute
    right-4
    top-4
    text-primary/10
    pointer-events-none
    transition-all
    duration-500
    group-hover:text-primary/20
  "
                  >
                    {sectionVisuals[section.title]}
                  </div>

                  {/* Header */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-primary/10
          text-primary
        "
                      >
                        {getIconForSection(section.title)}
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold dark:text-text-light">
                          {section.title}
                        </h4>

                        <p className="text-sm text-text-secondary">
                          {section.items.length} included
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-6">
                    <div className="flex flex-wrap gap-2">
                      {section.items.slice(0, 8).map((item) => (
                        <div
                          key={item}
                          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-primary/10
            bg-white/70
            px-3
            py-2
            text-sm
            dark:bg-secondary/70
            dark:text-text-light
          "
                        >
                          <Check size={14} className="text-primary" />

                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {section.items.length > 8 && (
                      <div className="mt-4 text-sm font-medium text-primary">
                        +{section.items.length - 8} more included
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 dark:border-primary/40 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 dark:text-text-light">
                  Ready to get started?
                </h3>
                <p className="text-text-secondary">
                  Let&apos;s discuss how {active.name} can drive your growth
                </p>
              </div>
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ServicePackages;
