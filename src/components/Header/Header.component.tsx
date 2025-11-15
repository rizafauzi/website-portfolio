'use client';

import { memo, useCallback } from 'react';

import Image from '@/components/Image';
import Text from '@/components/Text';

import styles from './Header.module.scss';
import { useRouter } from 'next/navigation';

type HeaderProps = {
  title: string
};

const Header = ({title}: HeaderProps) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back()
  }, []);

  return (
    <div className={styles.header}>
      <button onClick={handleBack} className={styles.back}>
        <Image
          width={50}
          height={50}
          alt="arrow"
          className="rotate-[225deg]"
          src="/assets/icons/arrow.icon.svg"
        />
      </button>
      <div className={styles.title}>
        <Text color="white" tag="h2" size="d-large">
          {title}
        </Text>
      </div>
    </div>
  )
}

export default memo(Header)