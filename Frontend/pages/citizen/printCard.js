import axios from 'axios';
import NavbarCustom from './components/CustomNavbar';
import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import SessionCheck from './components/sessionCheck';
export default function printcard({data}){
    const tableRef = useRef(null);
  const { name, nid, phoneNumber, email, address, bloodGroup, age, gender, familyMembers, maritalStatus, jobDes, postoffice } = {
    name:data.name,
     nid:data.nid,
     phoneNumber:data.phoneNumber,
      email:data.email,
       address:data.address,
        bloodGroup:data.bloodGroup,
         age:data.age,
          gender:data.gender,
          familyMembers:data.familyMembers,
           maritalStatus:data.maritalStatus,
            jobDes:data.jobDes,
             postoffice:data.postoffice
  };

  const handleSavePDF = () => {
    const doc = new jsPDF();
    const table = tableRef.current;
    const tableData = [];
    const tableHeaders = ['Field', 'Value'];

    // Add data to table
    tableData.push(['Name', name]);
    tableData.push(['NID', nid]);
    tableData.push(['Phone Number', phoneNumber]);
    tableData.push(['Email', email]);
    tableData.push(['Address', address]);
    tableData.push(['Blood Group', bloodGroup]);
    tableData.push(['Age', age]);
    tableData.push(['Gender', gender]);
    tableData.push(['Family Members', familyMembers]);
    tableData.push(['Marital Status', maritalStatus ? 'Married' : 'Single']);
    tableData.push(['Job Description', jobDes]);
    tableData.push(['Post Office', postoffice]);

    // Generate table
    doc.autoTable({
      head: [tableHeaders],
      body: tableData,
      startY: 20
    });

    // Save PDF
    doc.save('report.pdf');
  };
    return(
        <>
        <SessionCheck/>
        <NavbarCustom/>
        <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Report Page</h1>
      <table className="table-auto mb-5" ref={tableRef}>
        <tbody>
          <tr>
            <td className="font-bold pr-5">Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td className="font-bold pr-5">NID</td>
            <td>{nid}</td>
          </tr>
          <tr>
            <td className="font-bold pr-5">Phone Number</td>
            <td>{phoneNumber}</td>
          </tr>
          <tr>
            <td className="font-bold pr-5">Email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td className="font-bold pr-5">Address</td>
            <td>{address}</td>
          </tr>
          <tr>
            <td className="font-bold pr-5">Blood Group</td>
            <td>{bloodGroup}</td>
          </tr>
          <tr>
            <td className="font-bold pr-5">Age</td>
            <td>{age}</td>
          </tr>
          <tr>
            <td className="font-bold pr-5">Gender</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <td className="font-bold pr-5">Family Members</td>
            <td>{familyMembers}</td>
          </tr>
          <tr>
            <td className="font-bold pr-5">Marital Status</td>
            <td>{maritalStatus ? 'Married' : 'Single'}</td>
          </tr>
          <tr>
            <td className="font-bold pr-5">Job Description</td>
            <td>{jobDes}</td>
          </tr>
          <tr>
            <td className="font-bold pr-5">Post Office</td>
            <td>{postoffice}</td>
          </tr>
        </tbody>
      </table>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSavePDF}>Save PDF</button>
    </div>
        </>
    )
}
export async function getServerSideProps({query}){
    const inputValue=query.id;
    const res =await axios.get('http://localhost:3000/citizen/printIDCard/'+inputValue)
    const data=res.data;
    console.log(data)
    return{props:{data}}
}