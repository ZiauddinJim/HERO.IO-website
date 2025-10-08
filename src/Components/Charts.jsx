import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = ({ ratings }) => {
    // console.log(ratings);


    return (
        <div className='mt-10 mb-5 mx-3 lg:mx-auto'>
            <p className='text-2xl font-semibold'>Ratings</p>
            <div>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        data={ratings}
                        layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" reversed />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="orange" />
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
};

export default Charts;