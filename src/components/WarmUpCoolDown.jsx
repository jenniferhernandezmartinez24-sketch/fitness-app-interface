import React from 'react';

const WarmUpCoolDown = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Warm-Up and Cool Down Exercises</h1>
            <section>
                <h2>Warm-Up Exercises</h2>
                <ul>
                    <li>Jogging in place - 5 minutes</li>
                    <li>Arm circles - 1 minute</li>
                    <li>Leg swings - 1 minute each leg</li>
                    <li>Bodyweight squats - 15 repetitions</li>
                </ul>
            </section>
            <section>
                <h2>Cool Down Exercises</h2>
                <ul>
                    <li>Walking - 5 minutes</li>
                    <li>Hamstring stretch - 30 seconds each leg</li>
                    <li>Shoulder stretch - 30 seconds each arm</li>
                    <li>Deep breathing exercises - 1 minute</li>
                </ul>
            </section>
        </div>
    );
};

export default WarmUpCoolDown;