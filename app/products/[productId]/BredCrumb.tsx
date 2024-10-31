import { Breadcrumb } from 'antd';

const MyBredCrumb: React.FC = () => (
  <Breadcrumb
    items={[
      {
        href: '#',
        title:<span> Account</span>,
      },
      {
        href: '#',
        title: (
          <>
            
            <span>Gaming</span>
          </>
        ),
      },
      {
        title: 'Hovic HV G-92 Gamepad',
      },
    ]}
  />
);

export default MyBredCrumb;