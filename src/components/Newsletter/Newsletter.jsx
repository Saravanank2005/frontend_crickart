import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>We Value Your Feedback</h1>
      <p>Your suggestions help us improve our services</p>
      <form>
        <textarea placeholder='Write your feedback here...' rows="5" />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Newsletter;
