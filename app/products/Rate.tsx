import React from 'react';
import { Rate } from 'antd';

type RaterProduct = {
    star: number;
};

const Rater: React.FC<RaterProduct> = ({ star }) => (
    <Rate disabled allowHalf defaultValue={star} />
);

export default Rater;
