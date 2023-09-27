import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import dynamic from 'next/dynamic';
import Following from '@/components/home/following';
import { getCookie } from 'cookies-next';
import { APP_SAVE_KEY } from '@/utils/constants';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { followingService } from 'src/shared/services/following.service';
import { useAppSelector } from '@/hooks/useRedux';

const ScrollRevealWrapper = dynamic(() => import('src/shared/components/common/ScrollRevealWrapper'), { ssr: false });

export function FollowingPage() {
  const [role, setRole] = useState<string>('');
  const { user } = useAppSelector(state => state.appSlice);
  const [userType, setUserType] = useState<string>();
  
  const { data: followingData, refetch } = useQuery(['listFollowing', userType], () =>
    userType !== 'Customer'
      ? followingService.getUserList(user?.profileId as unknown as number)
      : followingService.getCustomerList(user?.profileId as unknown as number),
  );
  
  useEffect(() => {
    const role = getCookie(APP_SAVE_KEY.ROLE);
    setRole(role as string);
  }, []);
  
  useEffect(() => {
    if (role === 'Customer') {
      setUserType('Customer');
    } else if (role === 'User') {
      setUserType('User');
    }
  }, [role]);

  return (
    <>
      <Head>
        <title>Yêu thích Coffee Shop</title>
        <meta name='description' content='Sự kiện Coffee Shop' />
        <meta name='keywords' content='Coffee Shop' />
      </Head>
      {followingData && (
        <ScrollRevealWrapper>
          <Following followingData={followingData.data} userType={userType as string}></Following>
        </ScrollRevealWrapper>
      )}
    </>
  );
}
FollowingPage.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default FollowingPage;
