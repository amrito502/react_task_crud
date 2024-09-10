import React from 'react';
import { useState } from 'react';

export default function State() {
    let counter = 0;

    const increaseCounter = () => {
        counter +=1;
    }
  return (
    <div>
      <div className="counter-app">
        <p>the value of the counter is 0</p>
        <button onClick={increaseCounter}>Increase the counter By 1</button>
      </div>
    </div>
  )
}
