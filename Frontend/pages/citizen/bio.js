import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import SessionCheck from './components/sessionCheck';
import CustomNavbar from './components/customNavbar';

export default function Bio({data}) {
  const [address, setAddress] = useState(data.address);
  const [bloodGroup, setBloodGroup] = useState(data.bloodGroup);
  const [age, setAge] = useState(data.age);
  const [gender, setGender] = useState(data.gender);
  const [familyMembers, setFamilyMembers] = useState(data.familyMembers);
  const [maritalStatus, setMaritalStatus] = useState(data.maritalStatus);
  const [jobDes, setJobDes] = useState(data.jobDes);
  const [postOffice, setPostOffice] = useState(data.postOffice);
  const [isSuccess, setIsSuccess] = useState(false);

  
  const router = useRouter()
  function handleClick() {
    
    if ( router.back()) {
     
    } else {
      // Handle the case where there is no previous page
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log({
    //   address,
    //   bloodGroup,
    //   age,
    //   gender,
    //   familyMembers,
    //   maritalStatus,
    //   jobDes,
    //   postOffice
    // });
    // let inputValue={};
    // const test=[address,bloodGroup, age, gender, familyMembers,maritalStatus, jobDes,postOffice]
    // const title=['address','bloodGroup', 'age', 'gender', 'familyMembers','maritalStatus', 'jobDes','postOffice'];
    // let i=0;
    // for(i=0;i<test.length;i++) {
    //   if(test[i]==null)
    //   {
          
    //       console.log('if',test[i]);
    //   }
    //   else{
    //     console.log(test[i]);
    //   }
    // }
    // console.log(inputValue);
    const info={address:address,
      bloodGroup:bloodGroup,
      age:age,
      gender:gender,
      familyMembers:familyMembers,
      maritalStatus:maritalStatus,
      jobDes:jobDes,
      postOffice:postOffice}
      
      // const inputValue={address:address,
      //   bloodGroup:bloodGroup,
      //   age:age,
      //   gender:gender,
      //   familyMembers:familyMembers,
      //   maritalStatus:maritalStatus,
      //   jobDes:jobDes,
      //   postOffice:postOffice}
      const id=data.citizenId;
    try {
      const response = await axios.put('http://localhost:3000/citizen/updatebio/'+id, info)
      const data=await response.data;
      console.log(data);
      setIsSuccess(true);
    }
    catch (error) {
        console.log("error22: "+error.message)
      
      setIsSuccess(false);
    }
    
  }

  return (
    <>
      <SessionCheck />
      <CustomNavbar />
      <div className="bg-gradient-to-r from-gray-800 to-gray-600 px-90 md:px-80 pt-6 pb-8 mb-4  justify-center">
        <form onSubmit={handleSubmit} className="bg-gradient-to-r from-gray-900 to-gray-700 max-w-screen-mg shadow-md rounded px-10 md:px-10 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder={data.address?(data.address):("Enter your address")}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="bloodGroup">
              Blood Group
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bloodGroup"
              value={bloodGroup}
              placeholder={data.bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option value="">Select your blood group '{data.bloodGroup}</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="text"
              placeholder={data.age?(data.age):("Enter your age")}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select your gender-{data.gender}</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="familyMembers">
              Family Members
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="familyMembers"
              type="text"
              placeholder={data.familyMembers?(data.familyMembers):("Enter Number of familyMembers")}
              value={familyMembers}
              onChange={(e) => setFamilyMembers(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="maritalStatus">
              Marital Status
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="maritalStatus"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            >
              <option value="">Select your marital status-{data.maritalStatus}</option>
              <option value="true">Married</option>
              <option value="false">Unmarried</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="jobDes">
              Job Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="jobDes"
              placeholder={data.jobDes?(data.jobDes):("Enter your job Des")}
              value={jobDes}
              onChange={(e) => setJobDes(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="postOffice">
              Post Office
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="postOffice"
              type="text"
              placeholder={data.postoffice?(data.postoffice):("Enter the post Office")}
              value={postOffice}
              onChange={(e) => setPostOffice(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-white hover:bg-gray-100 text-green-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
            <button
              onClick={handleClick}
              className="bg-white hover:bg-gray-100 text-green-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Back
            </button>
            {isSuccess && (
              <p className="text-white font-bold">Data saved successfully!</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
            }


export async function getServerSideProps({query}){
    const inputValue = query.id;
    const res=await axios.get('http://localhost:3000/citizen/getBio')
    const data=res.data;
    console.log(data)
    return{props:{data}}
}