import React, { useState } from 'react';

const OrgChartdummy = () => {
  const orgData = {
    managingDirector: "Tony Stark",
    departments: [
      {
        name: "HR",
        teamLead: "Sachin Tendulkar",
        employees: [
          { name: "Rohit Sharma", title: "HR Recruiter" },
          { name: "Virat Kohli", title: "HR Recruiter" },
          { name: "Gautam Gambhir", title: "HR Recruiter" },
          { name: "Rahul Dravid", title: "HR Recruiter" },
          { name: "Yuvraj Singh", title: "HR Recruiter" },
          { name: "Virender Sehwag", title: "HR Recruiter" }
        ]
      },
      {
        name: "IT",
        teamLead: "",
        employees: []
      },
      {
        name: "Digital Marketing",
        teamLead: "",
        employees: []
      },
      {
        name: "Accounts",
        teamLead: "",
        employees: []
      },
      {
        name: "Sales",
        teamLead: "",
        employees: []
      },
      {
        name: "Networking",
        teamLead: "",
        employees: []
      }
    ]
  };

  
  const [data, setData] = useState(orgData);

  const updateData = () => {
    setData(prevData => ({
      ...prevData,
      departments: prevData.departments.map(department => {
        if (department.name === 'HR') {
          return {
            ...department,
            employees: [...department.employees, { name: 'New Recruit', title: 'HR Recruiter' }]
          };
        }
        return department;
      })
    }));
  };

  return (
    <div>
      <h1>{data.managingDirector} - Managing Director</h1>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
        {data.departments.map((department, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <h2>{department.name}</h2>
            <p><strong>{department.teamLead ? `Team Lead: ${department.teamLead}` : "No Team Lead"}</strong></p>
            <ul>
              {department.employees.map((employee, idx) => (
                <li key={idx}>
                  {employee.name} - {employee.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button onClick={updateData}>Add New Recruit</button>
    </div>
  );
};

export default OrgChartdummy;
