import { Suspense } from "react";

import { Image, Layout, RunningText, Text } from "@/components";
import { education } from "@/constants/education";
import { experiences } from "@/constants/experience";
import { projects } from "@/constants/projects";
import { skills } from "@/constants/skills";
import { getExpertise } from "@/services/skills";

import { SkillCard } from "../components";

import styles from "../home.module.scss";

const SkillSection = async () => {
  const data = await getExpertise();
  // return (
  //   <Layout>
  //     <div className={styles.skillGrid}>
  //       {data?.map(item => (
  //         <div>
  //           {item.techUsed?.map(tech => (
  //             <SkillCard
  //               key={tech.label}
  //               data={{
  //                 img: tech.imageUrl,
  //                 label: tech.label,
  //                 slug: tech.url,
  //               }}
  //             />
  //           ))}
  //         </div>
  //       ))}
  //     </div>
  //   </Layout>
  // );
  return (
    <Layout>
      <div className={styles.skillGrid}>
        {data?.map(item => (
          <div key={item.title} className={styles.experience}>
            <div>
              <Text color="white">{item.title}</Text>
              <Text color="white">{item.description}</Text>
              {item.techUsed?.map(tech => (
                <SkillCard
                  key={tech.label}
                  data={{
                    img: tech.imageUrl,
                    label: tech.label,
                    slug: tech.url,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default SkillSection;
