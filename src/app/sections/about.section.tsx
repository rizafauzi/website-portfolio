import { AboutCard } from "@/components";

import { getAbout } from "@/services/about";

const AboutSection = async () => {
  const data = await getAbout();

  if (!data) {
    return <div />;
  }

  return <AboutCard data={data} />;
};

export default AboutSection;
