// src/DailyVerse.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DailyVerse = () => {
  const [verse, setVerse] = useState('');
  const [reference, setReference] = useState('');
  const [error, setError] = useState('');
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const response = await axios.get('https://beta.ourmanna.com/api/v1/get/?format=json');
        const verseData = response.data.verse.details;
        setVerse(verseData.text);
        setReference(verseData.reference);
      } catch (err) {
        setError('Failed to fetch the daily verse.');
      }
    };

    fetchVerse();

    const updateDateTime = () => {
      const now = new Date();
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      };
      setDateTime(now.toLocaleDateString('en-US', options));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="daily-verse">
      <h1>Daily Verse</h1>
      <p className="date-time">{dateTime}</p>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <p className="verse-text">{verse}</p>
          <p className="verse-reference"><strong>{reference}</strong></p>
        </>
      )}
    </div>
  );
};

export default DailyVerse;
