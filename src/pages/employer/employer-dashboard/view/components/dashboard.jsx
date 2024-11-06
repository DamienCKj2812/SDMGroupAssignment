import React, {useState} from 'react';
import '../style.css';

import { useNavigate } from 'react-router-dom';
import {TextField, Flex, ScrollArea, SegmentedControl} from "@radix-ui/themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    const [selectedNav, setSelectedNav] = useState("dashboard")

    const navigate = useNavigate()
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Jobs</a>
          <a href="#">Products</a>
          <a href="#">Hiring Advice</a>
          <a href="#">Market Insights</a>
        </nav>
        
        <SegmentedControl.Root defaultValue="dashboard" onValueChange={setSelectedNav}>
            {["dasboard", "drafts"].map(n => {
                return (
                    <SegmentedControl.Item value={n} key={n}>{n}</SegmentedControl.Item>
                )
            })}
  
        </SegmentedControl.Root>

        {selectedNav == "dasboard" && (
            <Flex>dashboard page</Flex>
        )} 
         {selectedNav == "drafts" && (
            <Flex>drafts page</Flex>
        )} 
      </header>

            <div className="content">
                <div className="search-container">
                    <input type="search" placeholder="Search for jobs" className="search-input" />
                    <button className="search-button">Search</button>
                </div>

                <h1 className="title">Find the best person for your role</h1>


        <Flex className="panel1">
        <Flex className="cards" direction="column">
          <div className="card">
            <h2>Create a job ad</h2>
            
            <p>Create a job ad that will attract the best candidates.</p>
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <button className="card-button" onClick={() => navigate(`../employer/create-job-ad`)}>Create job ad</button>
          </div>

        <div className="card">
            <h2>Manage your candidates</h2>
            <p>Manage your candidates and track their progress.</p>
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
                ></path>
            </svg>
            <button className="card-button">Manage candidates</button>
            </div>
        </Flex>

            <Flex direction="column">
                <h2 className="title" style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
                    My recent job ads
                </h2>
                <TextField.Root placeholder="Search the docs…">
                    <TextField.Slot side='right'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </TextField.Slot>
                </TextField.Root>
                <table className="table"><thead>
                        <tr>
                            <th>Job title</th>
                            <th>Status</th>
                            <th>Candidates</th>
                            <th>Talent search</th>
                            <th>Performance</th>
                            <th>Job actions</th>
                        </tr>
                    </thead>
                    </table>
                
                <ScrollArea type="always" scrollbars="vertical" style={{ height: '50%', overflowY: 'auto' }}>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Software Engineer</td>
                            <td>Active</td>
                            <td>10</td>
                            <td>Enabled</td>
                            <td>High</td>
                            <td className="table-actions">
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Marketing Manager</td>
                            <td>Inactive</td>
                            <td>5</td>
                            <td>Disabled</td>
                            <td>Low</td>
                            <td className="table-actions">
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>UX Designer</td>
                            <td>Inactive</td>
                            <td>5</td>
                            <td>Disabled</td>
                            <td>Low</td>
                            <td className="table-actions">
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>DevOps Engineer</td>
                            <td>Inactive</td>
                            <td>5</td>
                            <td>Disabled</td>
                            <td>Low</td>
                            <td className="table-actions">
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Full Stack Developer</td>
                            <td>Inactive</td>
                            <td>5</td>
                            <td>Disabled</td>
                            <td>Low</td>
                            <td className="table-actions">
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Backend Developer</td>
                            <td>Inactive</td>
                            <td>5</td>
                            <td>Disabled</td>
                            <td>Low</td>
                            <td className="table-actions">
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Frontend Developer</td>
                            <td>Inactive</td>
                            <td>5</td>
                            <td>Disabled</td>
                            <td>Low</td>
                            <td className="table-actions">
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                </ScrollArea>
                </Flex>
                </Flex>
            </div>
        </div>
    );
};

export default Dashboard;
