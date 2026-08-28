import { Image, Text } from "@/components";

import styles from "./ProfileCard.module.scss";

const ProfileCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperCard}>
        <div className={styles.backgroundCard}></div>
        <div className={styles.profileCard}>
          <Image
            className={styles.profileImage}
            width={300}
            height={80}
            alt="profile"
            src="/assets/images/profile.jpg"
          />
          <div className={styles.profileContent}>
            <Image
              alt="memoji"
              width={200}
              height={200}
              className={styles.emoji}
              src="/assets/images/memoji_mac.png"
            />
            <Text color="white" weight="bold" size="d-xsmall">
              First of all, Glad to meet you!
            </Text>
            <Text color="white" className="text-center mt-4">
              I`m experienced in designing and developing in Web and Mobile Apps with a passion for
              the Love of bringing delightful and human-centric experience to Life. I’m also
              Interested in front-end developing and everything related to visual, such as
              photography, web & graphic design.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
