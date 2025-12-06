// src/components/StudentDetails.js
import React, { useState } from "react";
import ButtonComp from "./ButtonComp";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://localhost:8443/api/v1/student/students", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch student details");
      }

      const data = await response.json();
      setStudents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="student-details">
      <h1>Student Details</h1>
      <p>Click below to view the list of students.</p>
      <ButtonComp type="button" label="Fetch Student Details" onClick={fetchStudents} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {students.length > 0 && (
  <table className="student-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
      </tr>
    </thead>
    <tbody>
      {students.map((student, index) => (
        <tr key={index}>
          <td>{student.student_name}</td>
          <td>{student.student_email}</td>
          <td>{student.student_mobile}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}
    </div>
  );
};

export default StudentDetails;
