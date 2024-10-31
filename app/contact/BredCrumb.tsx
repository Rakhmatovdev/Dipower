import { Breadcrumb } from 'antd';

const BredContact: React.FC = () => (
  <Breadcrumb
    items={[
     
      {
        href: '/',
        title: (
          <>
           
            <span>Home</span>
          </>
        ),
      },
      {
        title: 'Contact',
      },
    ]}
  />
);

export default BredContact;