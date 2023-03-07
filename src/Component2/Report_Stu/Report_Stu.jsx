import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileSaver from 'file-saver';
import "./Report_Stu.css"
function Report_Stu () {
  const [studentName, setStudentName] = useState('');
  const [results, setResults] = useState([]);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const result = () =>{

    axios.get(`https://eduglobal.onrender.com/api/teacher/`)
    setResults(response.data.data.results);
  }

  useEffect(() => {
    result()
  }, []);

  const handleDownload = () => {
    const resultsString = JSON.stringify(results);
    const blob = new Blob([resultsString], { type: 'application/json' });
    FileSaver.saveAs(blob, `${studentName}_results.json`);
    setIsDownloaded(true);
  }

  return (
    <div className='Report_Student_Main'>
      <h2>{studentName} Suliton's Results</h2>
      {results.map((result, index) => (
        <div key={index}>
          <p>Subject: {result.subject}</p>
          <p>Score: {result.score}</p>
        </div>
      ))}
      {!isDownloaded && (
        <button onClick={handleDownload} className="DownloadAdminBtt" >Download Result</button>
      )}
    </div>
  );
}
export default Report_Stu;