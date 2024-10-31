import React from 'react';
import { Skeleton } from 'antd'; // You can use a package like Ant Design for skeletons or create your own custom skeletons

const SkeletonLoader: React.FC = () => {
  return (
    <div className="skeleton-wrapper my-[120px] wrapper">
      <div className="flex items-center gap-[10px] mb-5">
        <div className="ustun"></div>
        <Skeleton.Input active style={{ width: 150 }} />
      </div>
      <div className="swiper-container overflow-hidden mt-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="relative w-[270px] h-[350px]">
              <div className="bg-secondary h-[250px] rounded-md flex justify-center items-center">
                <Skeleton.Image active />
              </div>
              <div className="mt-4">
                <Skeleton.Input active style={{ width: 150 }} />
              </div>
              <div className="flex gap-3 mt-2">
                <Skeleton.Input active style={{ width: 80 }} />
                <Skeleton.Input active style={{ width: 80 }} />
              </div>
              <div className="mt-2">
                <Skeleton.Button active style={{ width: 100 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
